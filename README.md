
# Admin Dashboard Setup Guide

## 📦 Prerequisites

- Node.js and npm installed  

---

## 📖 Setup Instructions  

### 1️⃣ Install Dependencies  

In your project’s root directory, run:

```bash
npm install
```

This will download and install all required dependencies listed in `package.json`.

---

### 2️⃣ Configure Environment Variables  

#### 📄 Create `.env` File  

At the root level of the project, create a `.env` file by copying the existing `.env.example` file:

```bash
cp .env.example .env
```

#### ✏️ Add Your Backend Endpoint  

Open the `.env` file and set your backend base endpoint.  
By default, it should look like this:

```env
VITE_BACKEND_BASE_URL=http://localhost:8080
```

Replace `http://localhost:8080` if your backend is running on a different URL.

---

### 3️⃣ Start the Development Server  

Run the following command to start the frontend development server:

```bash
npm run dev
```

This will launch the frontend app, and it should connect to your backend using the endpoint you defined in your `.env` file.
