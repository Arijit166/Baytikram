'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { GalleryItem } from '@/lib/models/gallery-item'

export function GalleryItemCard({
  item,
  isAdmin,
  onChanged,
  imageWrapperClassName,
  imageWrapperStyle,
  imageClassName,
}: {
  item: GalleryItem
  isAdmin: boolean
  onChanged: () => void
  imageWrapperClassName: string
  imageWrapperStyle: React.CSSProperties
  imageClassName: string
}) {
  const [busy, setBusy] = useState(false)
  const [editingCaption, setEditingCaption] = useState(false)
  const [captionDraft, setCaptionDraft] = useState(item.caption)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleUpload(file: File) {
    setBusy(true)
    const formData = new FormData()
    formData.append('id', item._id)
    formData.append('file', file)
    try {
      const res = await fetch('/api/admin/gallery-items/upload', { method: 'POST', body: formData })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        alert(`Upload failed: ${data.error || res.status}`)
      }
    } catch (err) {
      alert(`Upload error: ${err instanceof Error ? err.message : 'unknown'}`)
    }
    setBusy(false)
    onChanged()
  }

  async function handleImageDelete() {
    setBusy(true)
    await fetch('/api/admin/gallery-items/upload', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item._id }),
    })
    setBusy(false)
    onChanged()
  }

  async function handleCaptionSave() {
    setBusy(true)
    await fetch('/api/admin/gallery-items', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item._id, caption: captionDraft }),
    })
    setBusy(false)
    setEditingCaption(false)
    onChanged()
  }

  async function handleDeleteEntry() {
    setShowDeleteModal(false)
    setBusy(true)
    if (item.imageUrl) {
      await fetch('/api/admin/gallery-items/upload', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item._id }),
      })
    }
    await fetch('/api/admin/gallery-items', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: item._id }),
    })
    setBusy(false)
    onChanged()
  }

  return (
    <>
      {/* ── Custom Delete Confirmation Modal ── */}
      {showDeleteModal && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 9000, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
        >
          <motion.div
            className="dark-card rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center"
            style={{ maxWidth: '400px', width: '90%', boxShadow: '0 0 60px rgba(212,175,55,0.25)' }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22 }}
          >
            {/* Warning Icon */}
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(185,28,28,0.18)',
                border: '2px solid #B91C1C',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
                fontSize: '1.6rem',
                flexShrink: 0,
              }}
            >
              ⚠️
            </div>

            <h3
              className="dramatic-heading golden-text-glow"
              style={{ fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '0.6rem' }}
            >
              DELETE ENTRY
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed" style={{ marginBottom: '0.4rem' }}>
              You are about to permanently delete this entry
            </p>

            {/* Caption preview — break-words prevents overflow */}
            {item.caption && (
              <p
                className="text-[#D4AF37] font-semibold text-sm break-words w-full"
                style={{ marginBottom: '1.6rem' }}
              >
                &ldquo;{item.caption}&rdquo;
              </p>
            )}

            <div className="velvet-divider w-full" style={{ marginBottom: '1.5rem' }} />

            <p className="text-gray-400 text-xs" style={{ marginBottom: '1.8rem' }}>
              This action cannot be undone. The image and all associated data will be permanently removed.
            </p>

            <div className="flex gap-3 w-full">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 font-semibold rounded-xl text-sm transition-all"
                style={{
                  padding: '0.75rem 1rem',
                  background: 'rgba(255,255,255,0.07)',
                  color: '#D4AF37',
                  border: '1.5px solid rgba(212,175,55,0.35)',
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteEntry}
                disabled={busy}
                className="flex-1 font-semibold rounded-xl text-sm transition-all"
                style={{
                  padding: '0.75rem 1rem',
                  background: '#B91C1C',
                  color: '#fff',
                  border: '1.5px solid #B91C1C',
                  opacity: busy ? 0.6 : 1,
                }}
              >
                {busy ? 'Deleting…' : 'Delete'}
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        className="dark-card rounded-2xl overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className={`${imageWrapperClassName} group`} style={imageWrapperStyle}>
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.caption}
              className={imageClassName}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center text-center"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.35)',
                border: '2px dashed rgba(212,175,55,0.4)',
                color: '#D4AF37',
                fontSize: '0.8rem',
                padding: '1rem',
              }}
            >
              No image available
            </div>
          )}

          {isAdmin && (
            <div
              className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: 'rgba(0,0,0,0.55)' }}
            >
              {busy ? (
                <span className="text-xs text-[#D4AF37]">Working…</span>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-xs font-semibold rounded-md"
                    style={{ padding: '0.5rem 0.9rem', background: '#D4AF37', color: '#6B0F1F' }}
                  >
                    {item.imageUrl ? 'Replace' : 'Upload'}
                  </button>
                  {item.imageUrl && (
                    <button
                      type="button"
                      onClick={handleImageDelete}
                      className="text-xs font-semibold rounded-md"
                      style={{ padding: '0.5rem 0.9rem', background: '#B91C1C', color: '#fff' }}
                    >
                      Delete
                    </button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {editingCaption ? (
          <div className="flex flex-col gap-2" style={{ padding: '1rem' }}>
            <textarea
              value={captionDraft}
              onChange={(e) => setCaptionDraft(e.target.value)}
              className="dark-textarea w-full rounded-lg text-xs"
              style={{ padding: '0.5rem' }}
              rows={3}
            />
            <div className="flex justify-center gap-2">
              <button
                onClick={handleCaptionSave}
                disabled={busy}
                className="text-xs font-semibold rounded-md"
                style={{ padding: '0.4rem 0.8rem', background: '#D4AF37', color: '#6B0F1F' }}
              >
                {busy ? 'Saving…' : 'Save'}
              </button>
              <button
                onClick={() => { setCaptionDraft(item.caption); setEditingCaption(false) }}
                className="text-xs font-semibold rounded-md"
                style={{ padding: '0.4rem 0.8rem', background: '#333', color: '#fff' }}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="group relative">
            <p className="text-gray-300 text-xs leading-[1.8] text-center break-words" style={{ padding: '1rem' }}>
              {item.caption || <span className="italic text-gray-500">No caption</span>}
            </p>
            {isAdmin && (
              <div className="absolute top-1 right-1 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  onClick={() => { setCaptionDraft(item.caption); setEditingCaption(true) }}
                  className="text-xs font-semibold rounded-md"
                  style={{ padding: '0.3rem 0.6rem', background: '#D4AF37', color: '#6B0F1F' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="text-xs font-semibold rounded-md"
                  style={{ padding: '0.3rem 0.6rem', background: '#B91C1C', color: '#fff' }}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </>
  )
}