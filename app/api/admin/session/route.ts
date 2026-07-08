import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'

export async function GET() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  if (!verifySessionToken(token)) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
  return NextResponse.json({ authenticated: true })
}