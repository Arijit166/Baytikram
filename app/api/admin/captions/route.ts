import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import { setCaption, deleteCaption } from '@/lib/models/caption'

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { slotKey, caption } = (await request.json()) as { slotKey?: string; caption?: string }
  if (!slotKey || typeof caption !== 'string') {
    return NextResponse.json({ error: 'slotKey and caption are required' }, { status: 400 })
  }
  await setCaption(slotKey, caption)
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { slotKey } = (await request.json()) as { slotKey?: string }
  if (!slotKey) return NextResponse.json({ error: 'slotKey is required' }, { status: 400 })
  await deleteCaption(slotKey)
  return NextResponse.json({ success: true })
}