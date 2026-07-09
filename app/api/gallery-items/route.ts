import { NextRequest, NextResponse } from 'next/server'
import { listGalleryItems, GalleryItemType } from '@/lib/models/gallery-item'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get('type') as GalleryItemType | null
  if (type !== 'gallery' && type !== 'paper-review') {
    return NextResponse.json({ error: 'type must be gallery or paper-review' }, { status: 400 })
  }
  const items = await listGalleryItems(type)
  return NextResponse.json(items)
}