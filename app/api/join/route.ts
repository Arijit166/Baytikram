import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import { Document, Packer, Paragraph, TextRun, AlignmentType } from 'docx'
import { Readable } from 'stream'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

interface JoinFormData {
  name: string
  email: string
  age: string
  phone: string
  reason: string
}

function buildJoinLetter({ name, email, age, phone, reason }: JoinFormData) {
  const dateStr = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })

  return new Document({
    sections: [{
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 },
          children: [new TextRun({ text: 'JADAVPUR BAYTIKRAM', bold: true, size: 32 })],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 600 },
          children: [new TextRun({ text: 'Membership Application — Proof of Submission', italics: true, size: 22 })],
        }),
        new Paragraph({ spacing: { after: 200 }, children: [new TextRun(`Date: ${dateStr}`)] }),
        new Paragraph({
          spacing: { after: 400 },
          children: [new TextRun('This letter confirms that the following individual has submitted a request to join Jadavpur Baytikram:')],
        }),
        new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: 'Full Name: ', bold: true }), new TextRun(name)] }),
        new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: 'Email: ', bold: true }), new TextRun(email)] }),
        new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: 'Age: ', bold: true }), new TextRun(String(age))] }),
        new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: 'Phone Number: ', bold: true }), new TextRun(phone)] }),
        new Paragraph({ spacing: { after: 150 }, children: [new TextRun({ text: 'Reason for Joining:', bold: true })] }),
        new Paragraph({ spacing: { after: 400 }, children: [new TextRun(reason)] }),
        new Paragraph({
          spacing: { after: 600 },
          children: [new TextRun({ text: "This document is auto-generated and serves as an official record of the applicant's submission.", italics: true, size: 20 })],
        }),
      ],
    }],
  })
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<JoinFormData>
    const { name, email, age, phone, reason } = body

    if (!name || !email || !age || !phone || !reason) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    const doc = buildJoinLetter({ name, email, age, phone, reason })
    const buffer = await Packer.toBuffer(doc)

    const {
        GOOGLE_OAUTH_CLIENT_ID,
        GOOGLE_OAUTH_CLIENT_SECRET,
        GOOGLE_OAUTH_REFRESH_TOKEN,
        GOOGLE_DRIVE_FOLDER_ID,
        GOOGLE_TARGET_EMAIL
        } = process.env

        if (!GOOGLE_OAUTH_CLIENT_ID || !GOOGLE_OAUTH_CLIENT_SECRET || !GOOGLE_OAUTH_REFRESH_TOKEN) {
        console.error('Missing Google OAuth credentials in environment variables.')
        return NextResponse.json({ error: 'Server is not configured to store submissions yet.' }, { status: 500 })
        }

        const oauth2Client = new google.auth.OAuth2(
        GOOGLE_OAUTH_CLIENT_ID,
        GOOGLE_OAUTH_CLIENT_SECRET
        )
        oauth2Client.setCredentials({ refresh_token: GOOGLE_OAUTH_REFRESH_TOKEN })

        const drive = google.drive({ version: 'v3', auth: oauth2Client })

    const safeName = name.replace(/[^a-z0-9]/gi, '_')
    const fileMetadata: { name: string; parents?: string[] } = {
      name: `Join_Request_${safeName}_${Date.now()}.docx`,
    }
    if (GOOGLE_DRIVE_FOLDER_ID) fileMetadata.parents = [GOOGLE_DRIVE_FOLDER_ID]

    const uploaded = await drive.files.create({
      requestBody: fileMetadata,
      media: {
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        body: Readable.from(buffer),
      },
      fields: 'id, webViewLink',
    })

    // If you didn't pre-share a folder, this shares the file directly with your email instead.
    if (!GOOGLE_DRIVE_FOLDER_ID && GOOGLE_TARGET_EMAIL && uploaded.data.id) {
      await drive.permissions.create({
        fileId: uploaded.data.id,
        requestBody: { type: 'user', role: 'writer', emailAddress: GOOGLE_TARGET_EMAIL },
        sendNotificationEmail: true,
      })
    }

    return NextResponse.json({ success: true, fileId: uploaded.data.id })
  } catch (err) {
    console.error('Join form submission failed:', err)
    return NextResponse.json({ error: 'Something went wrong while processing your request.' }, { status: 500 })
  }
}