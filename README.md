# YourStorage! 🚀

YourStorage! is a secure and user-friendly cloud file storage web application that allows users to store, manage, and access their files anytime, anywhere. It features one-time password (OTP) authentication to enhance security and is built using modern web technologies.

## Features

- **Secure Authentication**: One-time password (OTP) authentication powered by Appwrite.
- **Cloud File Storage**: Store and manage files securely in the cloud.
- **Intuitive UI**: Responsive and clean design built with Tailwind CSS.
- **Next.js & TypeScript**: Developed using Next.js for a fast and efficient user experience.
- **Database Integration**: Uses Appwrite for seamless data storage and retrieval.

## Live Demo

Try YourStorage! now: **[Live Demo](https://yourstorage-app.vercel.app/sign-in)**

## Screenshots

![main page](https://github.com/Lucascordovaa/yourstorage_app/blob/f6430cb1e17a90051fc89d564eca51260f50fc7d/mainpage.PNG)

![signup](https://github.com/Lucascordovaa/yourstorage_app/blob/e3222ed6edf42ec6131670933ab3dedadb482ee1/signup.PNG)

![otp](https://github.com/Lucascordovaa/yourstorage_app/blob/a9677fe6870a35fc4d0e82932f8683c03fb9650d/otp.PNG)

## Local Setup

YourStorage! relies on Appwrite for authentication, database, and file storage. Since the Appwrite instance is tied to a specific account, running the project locally requires setting up your own Appwrite backend.

If you want to modify and run YourStorage! locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- Your own Appwrite instance (self-hosted or cloud)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/Lucascordovaa/yourstorage_app.git
   cd yourstorage_app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your Appwrite instance:
   - Create a new Appwrite project.
   - Set up authentication, a database, and a file storage bucket.
   - Obtain your project credentials.
4. Create a `.env.local` file and add your Appwrite credentials:
   ```sh
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id
   NEXT_PUBLIC_APPWRITE_BUCKET_ID=your_bucket_id
   ```
5. Run the development server:
   ```sh
   npm run dev
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

**Note:** Without an Appwrite setup, the application will not function locally.
---
Enjoy using YourStorage! 🚀

