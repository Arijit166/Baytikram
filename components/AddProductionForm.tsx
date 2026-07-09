'use client'

import { useState } from 'react'

export function AddProductionForm({ onAdded }: { onAdded: () => void }) {
  const empty = { titleEn: '', titleBn: '', dramaturge: '', writtenBy: '', directedBy: '', year: '', synopsis: '', actors: '' }
  const [form, setForm] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.titleEn.trim()) {
      setError('Name of show is required.')
      return
    }
    setSaving(true)
    setError('')
    const res = await fetch('/api/admin/productions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    setSaving(false)
    if (!res.ok) {
      const data = await res.json()
      setError(data.error || 'Something went wrong.')
      return
    }
    setForm(empty)
    onAdded()
  }

  return (
    <form onSubmit={handleSubmit} className="dark-card rounded-2xl flex flex-col" style={{ padding: '2.5rem', gap: '0.75rem' }}>
      <h3 className="golden-text-glow dramatic-heading text-lg" style={{ marginBottom: '0.5rem' }}>
        Add New Production
      </h3>
      {([
        ['titleEn', 'Name of show (English) *'],
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
      {error && <p style={{ color: '#FF6B6B' }} className="text-sm">{error}</p>}
      <button
        type="submit"
        disabled={saving}
        className="rounded-lg text-sm font-bold"
        style={{ padding: '0.75rem', background: '#D4AF37', color: '#6B0F1F', marginTop: '0.5rem' }}
      >
        {saving ? 'Adding…' : 'Add Production'}
      </button>
      <p className="text-xs text-gray-400 italic">
        You can upload a poster after adding — it'll show as &quot;No picture available&quot; until then.
      </p>
    </form>
  )
}