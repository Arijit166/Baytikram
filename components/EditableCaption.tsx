'use client'

import { useState } from 'react'
import { useManifest } from '@/components/SlotImage'

export function EditableCaption({ slotKey, defaultCaption }: { slotKey: string; defaultCaption: string }) {
  const { captions, isAdmin, refreshCaptions } = useManifest()
  const current = captions[slotKey] ?? defaultCaption
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState(current)
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    setSaving(true)
    await fetch('/api/admin/captions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slotKey, caption: draft }),
    })
    setSaving(false)
    setEditing(false)
    refreshCaptions()
  }

  if (editing) {
    return (
      <div className="flex flex-col gap-2" style={{ padding: '1rem' }}>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          className="dark-textarea w-full rounded-lg text-xs"
          style={{ padding: '0.5rem' }}
          rows={3}
        />
        <div className="flex justify-center gap-2">
          <button
            onClick={handleSave}
            disabled={saving}
            className="text-xs font-semibold rounded-md"
            style={{ padding: '0.4rem 0.8rem', background: '#D4AF37', color: '#6B0F1F' }}
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button
            onClick={() => { setDraft(current); setEditing(false) }}
            className="text-xs font-semibold rounded-md"
            style={{ padding: '0.4rem 0.8rem', background: '#333', color: '#fff' }}
          >
            Cancel
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="group relative">
      <p className="text-gray-300 text-xs leading-[1.8] text-center" style={{ padding: '1rem' }}>
        {current}
      </p>
      {isAdmin && (
        <button
          onClick={() => { setDraft(current); setEditing(true) }}
          className="absolute top-1 right-1 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ padding: '0.3rem 0.6rem', background: '#D4AF37', color: '#6B0F1F' }}
        >
          Edit
        </button>
      )}
    </div>
  )
}