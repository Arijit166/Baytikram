'use client'

import { createContext, useContext, useEffect, useState, ReactNode, useRef } from 'react'
import { SlotKey } from '@/lib/image-slots'

type Manifest = Record<string, string | null>

type ManifestState = {
  manifest: Manifest
  captions: Record<string, string>
  isAdmin: boolean
  loading: boolean
  refresh: () => void
  refreshCaptions: () => void
}

const ManifestContext = createContext<ManifestState>({
  manifest: {},
  captions: {},
  isAdmin: false,
  loading: true,
  refresh: () => {},
  refreshCaptions: () => {},
})

export function ImageManifestProvider({ children }: { children: ReactNode }) {
  const [manifest, setManifest] = useState<Manifest>({})
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const [captions, setCaptions] = useState<Record<string, string>>({})

  const refreshCaptions = () => {
    fetch('/api/captions', { cache: 'no-store' })
      .then((res) => res.json())
      .then(setCaptions)
      .catch(() => setCaptions({}))
  }

  const refresh = () => {
    fetch('/api/images', { cache: 'no-store' })
      .then((res) => res.json())
      .then(setManifest)
      .catch(() => setManifest({}))
  }

  useEffect(() => {
    refresh()
    fetch('/api/admin/session')
      .then((res) => setIsAdmin(res.ok))
      .catch(() => setIsAdmin(false))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ManifestContext.Provider value={{ manifest, captions, isAdmin, loading, refresh, refreshCaptions }}>
      {children}
    </ManifestContext.Provider>
  )
}

export function SlotImage({
  slotKey,
  alt,
  className,
  style,
}: {
  slotKey: SlotKey
  alt: string
  className?: string
  style?: React.CSSProperties
}) {
  const { manifest, isAdmin, loading, refresh } = useContext(ManifestContext)
  const url = manifest[slotKey]
  const [busy, setBusy] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const wrapperStyle: React.CSSProperties = { ...style, position: style?.position ?? 'relative' }

  async function handleUpload(file: File) {
    setBusy(true)
    const formData = new FormData()
    formData.append('key', slotKey)
    formData.append('file', file)
    await fetch('/api/admin/upload', { method: 'POST', body: formData })
    setBusy(false)
    refresh()
  }

  async function handleDelete() {
    setBusy(true)
    await fetch('/api/admin/delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: slotKey }),
    })
    setBusy(false)
    refresh()
  }

  if (loading) {
    return <div className={className} style={{ ...wrapperStyle, background: 'rgba(0,0,0,0.2)' }} />
  }

  return (
    <div className={`${className ?? ''} group`} style={wrapperStyle}>
      {url ? (
        <img src={url} alt={alt} className="w-full h-full object-cover" style={{ objectFit: 'inherit' }} />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center text-center"
          style={{
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
                {url ? 'Replace' : 'Upload'}
              </button>
              {url && (
                <button
                  type="button"
                  onClick={handleDelete}
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
  )
}

export function useManifest() {
  return useContext(ManifestContext)
}