'use client'

import { useState } from 'react'
import type { GalleryItemType } from '@/lib/models/gallery-item'

export function AddGalleryItemForm({ type, onAdded }: { type: GalleryItemType; onAdded: () => void }) {
  const [caption, setCaption] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/gallery-items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, caption }),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      setError(data.error || 'Something went wrong.')
      return
    }
    setCaption('')
    onAdded()
  }

  return (
    <form onSubmit={handleSubmit} className="dark-card rounded-2xl flex flex-col" style={{ padding: '2rem', gap: '0.75rem' }}>
      <h3 className="golden-text-glow dramatic-heading text-base" style={{ marginBottom: '0.25rem' }}>
        Add New Photo
      </h3>
      <div className="flex flex-col gap-1">
        <label className="dark-label text-xs">Caption</label>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="dark-textarea w-full rounded-lg text-sm"
          style={{ padding: '0.5rem 0.75rem' }}
          rows={2}
        />
      </div>
      {error && <p style={{ color: '#FF6B6B' }} className="text-sm">{error}</p>}
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg text-sm font-bold"
        style={{ padding: '0.65rem', background: '#D4AF37', color: '#6B0F1F' }}
      >
        {saving ? 'Adding…' : 'Add Photo'}
      </button>
      <p className="text-xs text-gray-400 italic">
        You can upload the image after adding — it&apos;ll show as &quot;No image available&quot; until then.
      </p>
    </form>
  )
}