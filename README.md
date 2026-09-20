# 🎭 Baytikram

**Baytikram** is a modern theatre group website built with **Next.js and MongoDB**. It presents the organisation's productions, activities, gallery content, and public-facing information while also providing a secure admin portal for managing content updates.

## ✨ Features

* 🎭 Public-facing pages for theatre productions, activities, and organisational initiatives
* 🖼️ Gallery showcase for visual content and event highlights
* 🔐 Admin dashboard for authenticated content updates
* 🗄️ MongoDB-backed storage for productions, gallery items, and captions
* ☁️ Media upload support via Vercel Blob
* 📝 Membership form submission that generates a document and stores it in Google Drive
* 📱 Responsive design for desktop and mobile browsing
 
## 🛠️ Tech Stack

* **Next.js**
* **React**
* **TypeScript**
* **MongoDB**
* **Tailwind CSS**
* **Vercel Blob**
* **Google APIs**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
```

or

```bash
pnpm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the project root and add the required environment variables.

### 4. Start the Application

```bash
npm run dev
```

or

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

## 🔑 Environment Variables

Create a `.env.local` file with the following variables:

```env
MONGODB_CONNECTION=mongodb+srv://<username>:<password>@<cluster>/<database>

ADMIN_PASSKEY=your-admin-passkey

BLOB_STORE_ID=your-vercel-blob-store-id
BLOB_READ_WRITE_TOKEN=your-vercel-blob-read-write-token

GOOGLE_OAUTH_CLIENT_ID=your-google-client-id
GOOGLE_OAUTH_CLIENT_SECRET=your-google-client-secret
GOOGLE_OAUTH_REFRESH_TOKEN=your-google-refresh-token

GOOGLE_DRIVE_FOLDER_ID=your-google-drive-folder-id
GOOGLE_TARGET_EMAIL=your-email@example.com
```

### 📝 Environment Variable Notes

* `MONGODB_CONNECTION` is required for the MongoDB connection used by the application.
* `ADMIN_PASSKEY` protects access to the admin portal.
* `BLOB_STORE_ID` and `BLOB_READ_WRITE_TOKEN` are required for media uploads.
* `GOOGLE_DRIVE_FOLDER_ID` is optional and can be used to save uploaded membership documents directly into a specific Google Drive folder.
* `GOOGLE_TARGET_EMAIL` is used as a fallback sharing target when a specific Google Drive folder is not configured.

## 📄 License

This project is licensed under the **Apache License 2.0**.

See the [`LICENSE`](LICENSE) file for full details.

## 🤝 Contributing

Contributions are welcome.

If you would like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Commit and push your changes.
5. Submit a pull request with a clear explanation of your changes.

We appreciate thoughtful improvements, bug fixes, and documentation updates.
