import { NextRequest, NextResponse } from 'next/server'
import { put, del } from '@vercel/blob'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import { updateGalleryItemImage, getGalleryItemImage } from '@/lib/models/gallery-item'

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const formData = await request.formData()
  const id = formData.get('id') as string | null
  const file = formData.get('file') as File | null
  if (!id || !file) return NextResponse.json({ error: 'id and file are required' }, { status: 400 })

  const oldUrl = await getGalleryItemImage(id)
  if (oldUrl) { try { await del(oldUrl) } catch {} }

  const ext = file.name.split('.').pop() || 'jpg'
  const blob = await put(`gallery-items/${id}.${ext}`, file, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
  })
  await updateGalleryItemImage(id, blob.url)
  return NextResponse.json({ success: true, url: blob.url })
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = (await request.json()) as { id?: string }
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })
  const oldUrl = await getGalleryItemImage(id)
  if (oldUrl) { try { await del(oldUrl) } catch {} }
  await updateGalleryItemImage(id, null)
  return NextResponse.json({ success: true })
}