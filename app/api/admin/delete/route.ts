import { NextRequest, NextResponse } from 'next/server'
import { del } from '@vercel/blob'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import { IMAGE_SLOTS, SlotKey } from '@/lib/image-slots'
import { getManifest, saveManifest } from '@/lib/manifest'

export async function POST(request: NextRequest) {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  if (!verifySessionToken(token)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { key } = (await request.json()) as { key?: SlotKey }
  if (!key || !(key in IMAGE_SLOTS)) {
    return NextResponse.json({ error: 'Unknown image slot' }, { status: 400 })
  }

  const manifest = await getManifest()
  const currentUrl = manifest[key]
  if (currentUrl) {
    try {
      await del(currentUrl)
    } catch {
      // already gone from the store — ignore
    }
  }

  manifest[key] = null // explicit "no image" — SlotImage will show the placeholder
  await saveManifest(manifest)

  return NextResponse.json({ success: true })
}