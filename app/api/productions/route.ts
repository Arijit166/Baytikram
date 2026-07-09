import { NextResponse } from 'next/server'
import { listProductions } from '@/lib/models/production'
export const dynamic = 'force-dynamic'
export async function GET() {
  const productions = await listProductions()
  return NextResponse.json(productions)
}