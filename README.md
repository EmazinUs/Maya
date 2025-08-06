 Maya - MERN Stack E-Commerce Platform

**Maya** is a full-featured e-commerce web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It includes secure user authentication, responsive design, product management, cart functionality, and order processing — all integrated into a sleek UI powered by **MUI (Material UI)** and state managed via **Redux Toolkit**.

---

## 🚀 Tech Stack

- **Frontend:** React.js, Redux Toolkit, MUI (Material UI)
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** dotenv, bcryptjs, JWT (jsonwebtoken)
- **Other Tools:** Axios, React Router, Mongoose, Redux Thunk

---

## 🔐 Features

### ✅ User Features
- Register/Login with JWT authentication
- Secure password hashing (bcryptjs)
- Add/remove products to/from cart
- Place orders and track order status
- Mobile-responsive interface with MUI

### 🛠️ Admin Features
- Admin login with protected routes
- Add, update, and delete products
- Manage users and orders

### 📦 Functional Highlights
- State management with Redux Toolkit
- Authentication with `jsonwebtoken` and protected routes
- RESTful API with error handling and token verification
- Custom MUI theme for consistent branding
- Modular and reusable component design

---
---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/maya.git
cd maya
````

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run backend server:

```bash
npm run dev
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm start
```

---

## 🔐 Authentication Flow

* JWT tokens are generated on login and stored in local storage.
* Protected routes are accessible only after successful token verification.
* Middleware handles authentication, user roles (admin vs user), and error responses.

---

## 🧪 Coming Soon / Future Features

* Payment Gateway Integration (Stripe/PayPal)
* Wishlist and Product Reviews
* Advanced filtering and search
* Order invoice PDF generation
* Email notifications

---

## 👨‍💻 Author

**Tushar Rathor**

* GitHub: [@EmazinUs](https://github.com/EmazinUs)
* Email: [emazinus@gmail.com](mailto:emazinus@gmail.com)

---

## 📜 License

This project is licensed under the MIT License.

