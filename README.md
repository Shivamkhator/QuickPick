Here's your complete `README.md` file, ready to be copy-pasted into your project root:

---

````markdown
# 🛍️ Mini E-Commerce Platform

A full-stack mini e-commerce web application that allows users to **submit products** with images and **view their product listings**. Built using **Next.js (frontend)** and **Node.js with Express & PostgreSQL (backend)**. Cloudinary is used for image uploads.

---

## 🚀 Setup Instructions

### 📦 Prerequisites
- Node.js (v18+ recommended)
- PostgreSQL
- Cloudinary account
- npm or yarn

---

### 🔧 Backend Setup (`/Backend` folder)

1. Navigate to the backend directory:
   ```bash
   cd Backend
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file and configure the following environment variables:

   ```
   PORT=5000
   DB_HOST=your_postgres_host
   DB_USER=your_postgres_user
   DB_PASSWORD=your_postgres_password
   DB_NAME=your_postgres_db_name
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_secret
   ```

4. Ensure your PostgreSQL database is running and accessible.

5. Start the server:

   ```bash
   node index.js
   ```

> The backend will run at `http://localhost:5000`.

---

### 🌐 Frontend Setup (`/Frontend` folder)

1. Navigate to the frontend directory:

   ```bash
   cd Frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file with the backend URL:

   ```
   NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
   ```

4. Run the frontend development server:

   ```bash
   npm run dev
   ```

> The frontend will run at `http://localhost:3000`.

---

## ✅ What's Working

### 💡 Features Implemented

* **Product Submission**

  * Users can add a product with name, price, description, and image
  * Image is uploaded to Cloudinary and URL is stored in the database

* **My Products Tab**

  * Displays list of products submitted by the user
  * Fetched from backend using REST API

* **Cloudinary Integration**

  * Seamless image upload and delivery

* **Responsive Design**

  * Clean, modern UI using Tailwind CSS
  * Fully responsive for mobile and desktop

---

## 🗂️ Folder Structure

```
project-root/
├── Backend/        # Node.js Express server + PostgreSQL
│   ├── index.js
│   ├── db.js
│   └── routes/
│
├── Frontend/       # Next.js application
│   ├── app/
│   ├── components/
│   └── public/
│
└── README.md       # Project instructions
```

---

## 🛠️ Technologies Used

* **Frontend:** Next.js, React, Tailwind CSS
* **Backend:** Node.js, Express.js, PostgreSQL
* **Image Hosting:** Cloudinary
* **Deployment:** Render / Vercel (optional)

---

## 🔗 Deployment Notes

* **Frontend:** Can be deployed on [Vercel](https://vercel.com) or [Render](https://render.com)
* **Backend:** Deploy on [Render](https://render.com) as a web service

Make sure to:

* Use environment variables in the hosting dashboard
* For Render, set `start command` as:

  ```bash
  node index.js
  ```
* For Vercel + Next.js with `useSearchParams`, wrap affected components in `<Suspense>`

---
