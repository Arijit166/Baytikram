import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import {
  createGalleryItem,
  updateGalleryItemCaption,
  deleteGalleryItem,
  GalleryItemType,
} from '@/lib/models/gallery-item'

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { type, caption } = (await request.json()) as { type?: GalleryItemType; caption?: string }
  if (type !== 'gallery' && type !== 'paper-review') {
    return NextResponse.json({ error: 'type must be gallery or paper-review' }, { status: 400 })
  }
  const item = await createGalleryItem(type, caption || '')
  return NextResponse.json({ success: true, item })
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, caption } = (await request.json()) as { id?: string; caption?: string }
  if (!id || typeof caption !== 'string') {
    return NextResponse.json({ error: 'id and caption are required' }, { status: 400 })
  }
  await updateGalleryItemCaption(id, caption)
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = (await request.json()) as { id?: string }
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })
  await deleteGalleryItem(id)
  return NextResponse.json({ success: true })
}