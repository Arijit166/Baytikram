import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { passkey } = await request.json()
    const ADMIN_PASSKEY = process.env.ADMIN_PASSKEY

    if (!ADMIN_PASSKEY) {
      return NextResponse.json({ error: 'Admin passkey is not configured on the server.' }, { status: 500 })
    }

    if (typeof passkey === 'string' && passkey === ADMIN_PASSKEY) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid passkey' }, { status: 401 })
  } catch {
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}