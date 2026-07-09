import { getDb } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export type GalleryItemType = 'gallery' | 'paper-review'

export type GalleryItem = {
  _id: string
  type: GalleryItemType
  caption: string
  imageUrl?: string | null
  createdAt: number
}

export async function listGalleryItems(type: GalleryItemType): Promise<GalleryItem[]> {
  const db = await getDb()
  const docs = await db.collection('galleryItems').find({ type }).sort({ createdAt: 1 }).toArray()
  return docs.map((d) => ({
    _id: d._id.toString(),
    type: d.type,
    caption: d.caption,
    imageUrl: d.imageUrl ?? null,
    createdAt: d.createdAt,
  }))
}

export async function createGalleryItem(type: GalleryItemType, caption: string) {
  const db = await getDb()
  const doc = { type, caption, imageUrl: null, createdAt: Date.now() }
  const res = await db.collection('galleryItems').insertOne(doc)
  return { _id: res.insertedId.toString(), ...doc }
}

export async function updateGalleryItemCaption(id: string, caption: string) {
  const db = await getDb()
  await db.collection('galleryItems').updateOne({ _id: new ObjectId(id) }, { $set: { caption } })
}

export async function deleteGalleryItem(id: string) {
  const db = await getDb()
  await db.collection('galleryItems').deleteOne({ _id: new ObjectId(id) })
}

export async function updateGalleryItemImage(id: string, imageUrl: string | null) {
  const db = await getDb()
  await db.collection('galleryItems').updateOne({ _id: new ObjectId(id) }, { $set: { imageUrl } })
}

export async function getGalleryItemImage(id: string): Promise<string | null> {
  const db = await getDb()
  const doc = await db.collection('galleryItems').findOne({ _id: new ObjectId(id) })
  return doc?.imageUrl ?? null
}