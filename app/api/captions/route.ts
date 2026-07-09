import { NextResponse } from 'next/server'
import { getCaptions } from '@/lib/models/caption'
export const dynamic = 'force-dynamic'
export async function GET() {
  const captions = await getCaptions()
  return NextResponse.json(captions)
}