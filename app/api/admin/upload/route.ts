import { NextRequest, NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import { IMAGE_SLOTS, SlotKey } from '@/lib/image-slots'
import { getManifest, saveManifest } from '@/lib/manifest'

export async function POST(request: NextRequest) {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await request.formData()
  const key = formData.get('key') as SlotKey | null
  const file = formData.get('file') as File | null

  if (!key || !(key in IMAGE_SLOTS)) {
    return NextResponse.json({ error: 'Unknown image slot' }, { status: 400 })
  }
  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const ext = file.name.split('.').pop() || 'jpg'
  const blob = await put(`slots/${key}.${ext}`, file, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
  })

  const manifest = await getManifest()
  manifest[key] = blob.url
  await saveManifest(manifest)

  return NextResponse.json({ success: true, url: blob.url })
}