import { NextResponse } from 'next/server'
import { ADMIN_COOKIE_NAME, ADMIN_COOKIE_MAX_AGE, createSessionToken } from '@/lib/admin-auth'

export async function POST(request: Request) {
  try {
    const { passkey } = await request.json()
    const ADMIN_PASSKEY = process.env.ADMIN_PASSKEY

    if (!ADMIN_PASSKEY) {
      return NextResponse.json({ error: 'Admin passkey is not configured on the server.' }, { status: 500 })
    }

    if (typeof passkey === 'string' && passkey === ADMIN_PASSKEY) {
      const response = NextResponse.json({ success: true })
      response.cookies.set(ADMIN_COOKIE_NAME, createSessionToken(), {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: ADMIN_COOKIE_MAX_AGE,
        path: '/',
      })
      return response
    }

    return NextResponse.json({ error: 'Invalid passkey' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}