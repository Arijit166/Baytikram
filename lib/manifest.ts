import { put, head } from '@vercel/blob'

const MANIFEST_PATH = 'admin/manifest.json'

export type Manifest = Record<string, string | null>

export async function getManifest(): Promise<Manifest> {
  try {
    const info = await head(MANIFEST_PATH)
    const res = await fetch(info.url, { cache: 'no-store' })
    if (!res.ok) return {}
    return (await res.json()) as Manifest
  } catch {
    return {} // manifest doesn't exist yet — first run
  }
}

export async function saveManifest(manifest: Manifest) {
  await put(MANIFEST_PATH, JSON.stringify(manifest), {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  })
}