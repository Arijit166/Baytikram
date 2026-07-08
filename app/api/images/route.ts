import { NextResponse } from 'next/server'
import { getManifest } from '@/lib/manifest'
import { IMAGE_SLOTS } from '@/lib/image-slots'

export const dynamic = 'force-dynamic'

export async function GET() {
  const manifest = await getManifest()
  const result: Record<string, string | null> = {}

  for (const key of Object.keys(IMAGE_SLOTS) as (keyof typeof IMAGE_SLOTS)[]) {
    result[key] = key in manifest ? manifest[key] : IMAGE_SLOTS[key].fallback
  }

  return NextResponse.json(result)
}