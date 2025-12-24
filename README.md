# 📝 Todo REST API

A **secure, production-ready Todo REST API** built with **Node.js**, **Prisma ORM**, and **JWT-based authentication**, and deployed on **Vercel**.  
The API supports **user authentication** and **full CRUD operations** on todos with proper access control.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register new users
  - Login using email & password
  - JWT-based authorization
- ✅ **Todo Management**
  - Create a new todo
  - Get all todos of a user
  - Get a specific todo by ID
  - Update a todo
  - Delete a todo
- 🧩 **Prisma ORM**
  - Type-safe database access
  - Clean schema and migrations
- 📦 **RESTful API Design**
  - Follows HTTP standards
  - Clear separation of concerns
- 📚 **Swagger / OpenAPI Documentation**
  - Interactive API testing
- ☁️ **Deployed on Vercel**

---

## 🛠️ Tech Stack

| Layer        | Technology |
|-------------|------------|
| Backend     | Node.js |
| API Style   | REST |
| ORM         | Prisma |
| Database    | PostgreSQL |
| Auth        | JWT |
| Docs        | Swagger (OpenAPI) |
| Deployment  | Vercel |

---

## 📌 API Endpoints

### 🔑 Authentication

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user and receive JWT |

---

### 🗒️ Todo

| Method | Endpoint | Description |
|------|---------|------------|
| POST | `/todo` | Add a new todo |
| GET | `/todo` | Get all todos of logged-in user |
| GET | `/todo/{id}` | Get a specific todo |
| PATCH | `/todo/{id}` | Update a todo |
| DELETE | `/todo/{id}` | Delete a todo |

> 🔒 **All Todo routes are protected and require JWT authentication**

---

## 🧾 API Schemas

- `CreateTodoDto`
- `UpdateTodoDto`
- `RegisterUserDto`
- `LoginDto`

These schemas ensure **validation**, **consistency**, and **clean API contracts**.

---

## 📖 API Documentation (Swagger)

The API is fully documented using **Swagger UI**, allowing you to:

- Explore endpoints
- Test requests directly from the browser
- View request/response schemas

---

## ⚙️ Environment Variables

Create a `.env` file with the following:

```env
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_jwt_secret
```

## 🧪 Local Development
1️⃣ Install dependencies
```
npm install
```
2️⃣ Generate Prisma client
```
npx prisma generate
```
3️⃣ Run database migrations
```
npx prisma migrate dev
```
4️⃣ Start the server
```
npm run dev
```

## ☁️ Deployment
- This project is deployed on Vercel, enabling:

- Serverless execution

- Automatic scaling

- Fast global edge delivery


## 🧠 Key Design Decisions
JWT auth for stateless security

Prisma for type safety and maintainability

REST API for simplicity and scalability

Swagger for developer experience

Vercel for fast deployment

## 📈 Resume Value
This project demonstrates:

Backend API design

Authentication & authorization

ORM usage in real-world apps

Cloud deployment

API documentation standards






