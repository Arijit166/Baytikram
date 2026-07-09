'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Production } from '@/lib/models/production'

function buildCredits(p: Production) {
  const lines: string[] = []
  if (p.dramaturge) lines.push(`Dramaturge – ${p.dramaturge}`)
  if (p.writtenBy && p.directedBy && p.writtenBy === p.directedBy) {
    lines.push(`Written and Directed by ${p.writtenBy}`)
  } else {
    if (p.writtenBy) lines.push(`Written by ${p.writtenBy}`)
    if (p.directedBy) lines.push(`Directed by ${p.directedBy}`)
  }
  return lines
}

export function ProductionCard({
  production,
  index,
  isAdmin,
  onChanged,
}: {
  production: Production
  index: number
  isAdmin: boolean
  onChanged: () => void
}) {
  const [editing, setEditing] = useState(false)
  const [busy, setBusy] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [form, setForm] = useState({
    titleEn: production.titleEn,
    titleBn: production.titleBn || '',
    dramaturge: production.dramaturge || '',
    writtenBy: production.writtenBy || '',
    directedBy: production.directedBy || '',
    year: production.year || '',
    synopsis: production.synopsis || '',
    actors: production.actors || '',
  })
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function handleSave() {
    setBusy(true)
    await fetch('/api/admin/productions', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: production._id, ...form }),
    })
    setBusy(false)
    setEditing(false)
    onChanged()
  }

  async function handleDelete() {
    setShowDeleteModal(false)
    setBusy(true)
    await fetch('/api/admin/productions', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: production._id }),
    })
    setBusy(false)
    onChanged()
  }

  async function handleUpload(file: File) {
    setBusy(true)
    const formData = new FormData()
    formData.append('id', production._id)
    formData.append('file', file)
    await fetch('/api/admin/productions/upload', { method: 'POST', body: formData })
    setBusy(false)
    onChanged()
  }

  async function handleImageDelete() {
    setBusy(true)
    await fetch('/api/admin/productions/upload', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: production._id }),
    })
    setBusy(false)
    onChanged()
  }

  const credits = buildCredits(production)

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
              }}
            >
              ⚠️
            </div>

            <h3
              className="dramatic-heading golden-text-glow"
              style={{ fontSize: '1.1rem', letterSpacing: '2px', marginBottom: '0.6rem' }}
            >
              DELETE PRODUCTION
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed" style={{ marginBottom: '0.4rem' }}>
              You are about to permanently delete
            </p>
            <p
              className="text-[#D4AF37] font-semibold text-sm break-words w-full"
              style={{ marginBottom: '1.6rem' }}
            >
              &ldquo;{production.titleEn}&rdquo;
            </p>

            <div className="velvet-divider w-full" style={{ marginBottom: '1.5rem' }} />

            <p className="text-gray-400 text-xs" style={{ marginBottom: '1.8rem' }}>
              This action cannot be undone. All data and images associated with this production will be lost.
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
                onClick={handleDelete}
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
      className="dark-card rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex flex-col min-w-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch`}>
        {/* Image */}
        <div className="w-full md:w-2/5 flex items-stretch" style={{ padding: '1.25rem' }}>
          <div
            className="w-full rounded-xl overflow-hidden group relative flex items-center justify-center"
            style={{
              border: '1.5px solid rgba(212,175,55,0.35)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
              minHeight: '220px',
              background: 'rgba(0,0,0,0.35)',
            }}
          >
            {production.imageUrl ? (
              <img src={production.imageUrl} alt={production.titleEn} className="w-full h-full object-cover" />
            ) : (
              <span className="text-[#D4AF37] text-xs text-center" style={{ padding: '1rem' }}>
                No picture available
              </span>
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
                      onClick={() => fileInputRef.current?.click()}
                      className="text-xs font-semibold rounded-md"
                      style={{ padding: '0.5rem 0.9rem', background: '#D4AF37', color: '#6B0F1F' }}
                    >
                      {production.imageUrl ? 'Replace' : 'Upload'}
                    </button>
                    {production.imageUrl && (
                      <button
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
        </div>

        {/* Text content */}
        <div className="w-full md:w-3/5 flex flex-col min-w-0 overflow-hidden" style={{ padding: '2.5rem' }}>
          {editing ? (
            <div className="flex flex-col" style={{ gap: '0.6rem' }}>
              {([
                ['titleEn', 'Name of show (English)'],
                ['titleBn', 'Name of show (Bengali)'],
                ['dramaturge', 'Dramaturge'],
                ['writtenBy', 'Written by'],
                ['directedBy', 'Directed by'],
                ['year', 'Year'],
                ['actors', 'Pioneer actors'],
              ] as const).map(([field, label]) => (
                <div key={field} className="flex flex-col gap-1">
                  <label className="dark-label text-xs">{label}</label>
                  <input
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="dark-input w-full rounded-lg text-sm"
                    style={{ padding: '0.5rem 0.75rem' }}
                  />
                </div>
              ))}
              <div className="flex flex-col gap-1">
                <label className="dark-label text-xs">Synopsis</label>
                <textarea
                  value={form.synopsis}
                  onChange={(e) => setForm({ ...form, synopsis: e.target.value })}
                  className="dark-textarea w-full rounded-lg text-sm"
                  style={{ padding: '0.5rem 0.75rem' }}
                  rows={4}
                />
              </div>
              <div className="flex gap-2" style={{ marginTop: '0.5rem' }}>
                <button
                  onClick={handleSave}
                  disabled={busy}
                  className="text-xs font-semibold rounded-md"
                  style={{ padding: '0.5rem 1rem', background: '#D4AF37', color: '#6B0F1F' }}
                >
                  {busy ? 'Saving…' : 'Save'}
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="text-xs font-semibold rounded-md"
                  style={{ padding: '0.5rem 1rem', background: '#333', color: '#fff' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col" style={{ marginBottom: '1rem' }}>
                <span className="text-[#D4AF37] text-xs font-semibold tracking-widest">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-xl font-bold golden-text-glow dramatic-heading tracking-wide break-words" style={{ marginTop: '0.25rem' }}>
                  {production.titleEn}
                  {production.titleBn && (
                    <span className="text-gray-300 font-normal text-lg"> ({production.titleBn})</span>
                  )}
                </h2>
                {production.year && (
                  <span className="text-gray-400 text-sm italic" style={{ marginTop: '0.25rem' }}>
                    {production.year}
                  </span>
                )}
              </div>

              {credits.length > 0 && (
                <div className="flex flex-col" style={{ marginBottom: '1rem', gap: '0.15rem' }}>
                  {credits.map((line, i) => (
                    <span key={i} className="text-[#D4AF37]/80 text-sm break-words">{line}</span>
                  ))}
                </div>
              )}

              {production.synopsis && (
                <p className="text-gray-300 text-sm leading-[1.9] whitespace-pre-line break-words" style={{ marginBottom: '1rem' }}>
                  <span className="text-[#D4AF37] font-semibold">Synopsis- </span>
                  {production.synopsis}
                </p>
              )}

              {production.actors && (
                <p className="text-gray-400 text-xs leading-[1.8] break-words">
                  <span className="text-[#D4AF37]/80 font-semibold">Pioneer Actors: </span>
                  {production.actors}
                </p>
              )}

              {isAdmin && (
                <div className="flex gap-2" style={{ marginTop: '1rem' }}>
                  <button
                    onClick={() => setEditing(true)}
                    className="text-xs font-semibold rounded-md"
                    style={{ padding: '0.4rem 0.9rem', background: '#D4AF37', color: '#6B0F1F' }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    disabled={busy}
                    className="text-xs font-semibold rounded-md"
                    style={{ padding: '0.4rem 0.9rem', background: '#B91C1C', color: '#fff' }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
    </>
  )
}