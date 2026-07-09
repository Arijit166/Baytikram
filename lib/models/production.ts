import { getDb } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export type Production = {
  _id: string
  titleEn: string
  titleBn?: string
  dramaturge?: string
  writtenBy?: string
  directedBy?: string
  year?: string
  synopsis?: string
  actors?: string
  imageUrl?: string | null
  createdAt: number
}

type ProductionInput = Omit<Production, '_id' | 'createdAt'>

export async function listProductions(): Promise<Production[]> {
  const db = await getDb()
  const docs = await db.collection('productions').find().sort({ createdAt: 1 }).toArray()
  return docs.map((d) => ({
    _id: d._id.toString(),
    titleEn: d.titleEn,
    titleBn: d.titleBn,
    dramaturge: d.dramaturge,
    writtenBy: d.writtenBy,
    directedBy: d.directedBy,
    year: d.year,
    synopsis: d.synopsis,
    actors: d.actors,
    imageUrl: d.imageUrl ?? null,
    createdAt: d.createdAt,
  }))
}

export async function createProduction(input: ProductionInput) {
  const db = await getDb()
  const doc = { ...input, createdAt: Date.now() }
  const res = await db.collection('productions').insertOne(doc)
  return { _id: res.insertedId.toString(), ...doc }
}

export async function updateProduction(id: string, input: Partial<ProductionInput>) {
  const db = await getDb()
  await db.collection('productions').updateOne({ _id: new ObjectId(id) }, { $set: input })
}

export async function deleteProduction(id: string) {
  const db = await getDb()
  await db.collection('productions').deleteOne({ _id: new ObjectId(id) })
}

export async function getProductionImage(id: string): Promise<string | null> {
  const db = await getDb()
  const doc = await db.collection('productions').findOne({ _id: new ObjectId(id) })
  return doc?.imageUrl ?? null
}