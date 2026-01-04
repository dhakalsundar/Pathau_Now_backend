# Create a backend for your project
```
npm init
```

create .gitignore
```.git
# Logs
logs
*.log
# Backend - User Authentication API

This backend implements user registration and login following the app-route-controller-service-repository pattern.

## Setup

1. Install dependencies

```powershell
cd backend
npm install
```

2. Create or update `.env` in `backend/` with:

```
JWT_SECRET='your_jwt_secret'
MONGODB_URI='mongodb://127.0.0.1:27017/my_db'
PORT=5050
```

3. Start dev server

```powershell
npm run dev
```

## Endpoints

Base URL: `http://localhost:5050`

- POST `/api/auth/register`
  - Body (JSON):
  ```json
  {
    "email": "test@test.com",
    "username": "test",
    "password": "passpass",
    "confirmPassword": "passpass",
    "firstName": "Mero Name",
    "lastName": "Mero last name"
  }
  ```
  - Responses: `400` validation errors, `403` duplicates, `201` created

- POST `/api/auth/login`
  - Body (JSON):
  ```json
  {
    "email": "test@test.com",
    "password": "passpass"
  }
  ```
  - Responses: `400` validation errors, `404` not found, `401` invalid credentials, `200` success with `token`

## Postman
Import `postman_auth_collection.json` and set `baseUrl` env var to `http://localhost:5050`.

## Notes
- Passwords are hashed using `bcryptjs`.
- JWTs are signed with `JWT_SECRET` and expire in 30 days.
- User model includes a `role` field (`user` | `admin`).

## Troubleshooting
If startup fails with `ECONNREFUSED 127.0.0.1:27017`, ensure MongoDB is running or update `MONGODB_URI` to a reachable database.

## Quick Test Commands

```powershell
.nuxt

dist
