# BeMazady 🧠🛒

**BeMazady** is an AI-enhanced online auction and e-commerce backend system. It enables buyers and sellers to interact in real-time auctions or traditional purchases, supported by intelligent recommendations and automated content verification.

---

## 🚀 Features

- 🛍️ Full e-commerce & auction support
- 🤖 Hybrid AI system with:
  - **Recommendation engine**
  - **Auto-enlisting validator** using **NLP** + **CNN**
- 📦 Modular REST API structure with well-separated routes
- 🔐 JWT-based authentication with role support (Admin, Seller, Buyer)
- 📬 Email integration and real-time notifications
- 💳 Payment gateway via Paymob
- ☁️ Image handling via Cloudinary
- 📊 Analytics routes for users, sellers, and admins

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **AI:** Hybrid Recommendation System, CNN/NLP for item validation
- **Auth:** JWT
- **Payment:** Paymob
- **Storage:** Cloudinary
- **Containerization:** Docker (local, optional)

---

## 📁 API Endpoints Overview

All APIs are prefixed with `/api`. Key routes include:

- `/categories` — Item categories
- `/subcategories` — Nested subcategories
- `/items` — CRUD for store items
- `/auctions` — Auction creation & participation
- `/reverseauctions` — Reverse auction logic
- `/recommendations` — AI-powered suggestions
- `/auth` — Register/login/logout
- `/users` — User profiles and roles
- `/cart` — Shopping cart operations
- `/orders` — Order placement & history
- `/payments` — Paymob integration
- `/notifications` — User alerts & updates
- `/messages` — Messaging between users
- `/analytics` — Metrics dashboard for admins & sellers

Root Route:  
```bash
GET /
Response: "Api is running ya tohamy"
```

---

## 📦 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas (or local instance)
- A `.env` file (see `.env.example`)
- Cloudinary & Paymob accounts

---

### 🧪 Installation

```bash
git clone https://github.com/yourusername/BeMazady2.git
cd BeMazady2
npm install
```

### 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in your secrets.

### 🚀 Run the App

```bash
npm start
```

---

## 📂 Folder Structure

Each module (e.g., `Auction`, `User`, `Recommend`, etc.) is organized in its own route/controller/model structure, ensuring clean separation of concerns.

---

## 🛡️ Authentication & Roles

- JWT Auth with token expiry
- Roles:
  - **Admin** – full access
  - **Seller** – manage auctions/items
  - **Buyer** – place bids & orders

---

## 📧 Contact

Have questions or want to collaborate?  
📬 [coolgoot123@gmail.com](mailto:coolgoot123@gmail.com)

---

## 📄 License

This project is licensed for academic/demo use. For commercial use, please contact the author.
