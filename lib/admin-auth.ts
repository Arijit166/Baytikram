import crypto from 'crypto'

export const ADMIN_COOKIE_NAME = 'admin_session'
export const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 8 // 8 hours

function getSecret() {
  const secret = process.env.ADMIN_PASSKEY
  if (!secret) throw new Error('ADMIN_PASSKEY is not configured')
  return secret
}

export function createSessionToken() {
  const expires = Date.now() + ADMIN_COOKIE_MAX_AGE * 1000
  const signature = crypto.createHmac('sha256', getSecret()).update(String(expires)).digest('hex')
  return `${expires}.${signature}`
}

export function verifySessionToken(token: string | undefined | null) {
  if (!token) return false
  const [expires, signature] = token.split('.')
  if (!expires || !signature) return false
  if (Date.now() > Number(expires)) return false
  const expected = crypto.createHmac('sha256', getSecret()).update(expires).digest('hex')
  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))
  } catch {
    return false
  }
}