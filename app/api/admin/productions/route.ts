import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { ADMIN_COOKIE_NAME, verifySessionToken } from '@/lib/admin-auth'
import { createProduction, updateProduction, deleteProduction } from '@/lib/models/production'

async function requireAdmin() {
  const token = (await cookies()).get(ADMIN_COOKIE_NAME)?.value
  return verifySessionToken(token)
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (!body.titleEn) return NextResponse.json({ error: 'Name of show is required' }, { status: 400 })
  const production = await createProduction({
    titleEn: body.titleEn,
    titleBn: body.titleBn || undefined,
    dramaturge: body.dramaturge || undefined,
    writtenBy: body.writtenBy || undefined,
    directedBy: body.directedBy || undefined,
    year: body.year || undefined,
    synopsis: body.synopsis || undefined,
    actors: body.actors || undefined,
    imageUrl: null,
  })
  return NextResponse.json({ success: true, production })
}

export async function PUT(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id, ...fields } = await request.json()
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })
  await updateProduction(id, fields)
  return NextResponse.json({ success: true })
}

export async function DELETE(request: NextRequest) {
  if (!(await requireAdmin())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { id } = await request.json()
  if (!id) return NextResponse.json({ error: 'id is required' }, { status: 400 })
  await deleteProduction(id)
  return NextResponse.json({ success: true })
}