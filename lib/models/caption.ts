import { getDb } from '@/lib/mongodb'

export async function getCaptions(): Promise<Record<string, string>> {
  const db = await getDb()
  const docs = await db.collection('captions').find().toArray()
  const result: Record<string, string> = {}
  for (const d of docs) result[d.slotKey] = d.caption
  return result
}

export async function setCaption(slotKey: string, caption: string) {
  const db = await getDb()
  await db.collection('captions').updateOne(
    { slotKey },
    { $set: { slotKey, caption } },
    { upsert: true }
  )
}

export async function deleteCaption(slotKey: string) {
  const db = await getDb()
  await db.collection('captions').deleteOne({ slotKey })
}