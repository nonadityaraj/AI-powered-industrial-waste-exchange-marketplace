# EcoMatch AI — Backend

Express + MongoDB + JWT backend for authentication and the business-profile flow.

## Signup flow

```
Signup  ──►  Complete Profile  ──►  Dashboard
(POST           (POST                (GET /api/dashboard
 /auth/signup)   /profile/complete)   — gated by middleware)
```

A user is created with `profileCompleted: false`. Protected feature routes
(e.g. the dashboard) run through `requireProfileComplete`, which returns
`403 { profileCompleted: false }` until the profile is completed — the frontend
uses this to redirect the user to `/preferences` (Complete Your Business Profile).

## Setup

```bash
cd backend
npm install
cp .env.example .env   # then edit values (MONGO_URI, JWT_SECRET)
npm run dev            # nodemon, or `npm start`
```

Requires a running MongoDB (local `mongodb://127.0.0.1:27017/ecomatch` or Atlas URI).

## Environment variables

| Var             | Description                                  |
| --------------- | -------------------------------------------- |
| `PORT`          | Server port (default 5000)                   |
| `MONGO_URI`     | MongoDB connection string                    |
| `JWT_SECRET`    | Secret used to sign JWTs (required)          |
| `JWT_EXPIRES_IN`| Token lifetime (default `7d`)                |
| `CLIENT_URL`    | Frontend origin for CORS (Vite: `5173`)      |

## API

All protected routes expect: `Authorization: Bearer <token>`.

### Auth

| Method | Path              | Auth | Body / Notes                                   |
| ------ | ----------------- | ---- | ---------------------------------------------- |
| POST   | `/api/auth/signup`| —    | `{ name, email, password, confirmPassword? }`  |
| POST   | `/api/auth/login` | —    | `{ email, password }`                          |
| GET    | `/api/auth/me`    | ✓    | Returns the current user                       |

Successful signup/login returns `{ token, user }` where
`user.profileCompleted` tells the frontend whether to route to the dashboard
or the complete-profile step.

### Profile

| Method | Path                    | Auth                | Body                                  |
| ------ | ----------------------- | ------------------- | ------------------------------------- |
| GET    | `/api/profile`          | ✓                   | —                                     |
| POST   | `/api/profile/complete` | ✓                   | Business profile (see below)          |
| PATCH  | `/api/profile`          | ✓ + profile complete| Partial profile update                |

`POST /api/profile/complete` body (mirrors `PreferencesPage.jsx`):

```json
{
  "businessTypes": { "generator": true, "upcycler": true },
  "businessDetails": {
    "industry": "cafe",
    "companySize": "small",
    "address": "123 Main St",
    "city": "Pune",
    "serviceRadius": "25km",
    "gstNumber": "27ABCDE1234F1Z5",
    "docName": ""
  },
  "generatorInfo": { "byproducts": "Spent coffee grounds", "volume": "120 kg", "frequency": "Weekly" },
  "upcyclerInfo":  { "feedstock": "Cotton scraps", "purity": "90%+", "minVolume": "50 kg", "maxVolume": "500 kg", "maxDistance": "50km" },
  "materials": [
    { "id": "coffee", "name": "Coffee", "selection": "primary" },
    { "id": "wood", "name": "Wood", "selection": "secondary" }
  ],
  "personalDetails": { "fullName": "Rahul Sharma", "designation": "Operations Manager", "phone": "+91 98765 43210", "location": "Pune, India", "company": "GreenBrew Co." }
}
```

`industry` and `city` are required, and at least one of
`businessTypes.generator` / `businessTypes.upcycler` must be true. On success
`profileCompleted` becomes `true`.

### Dashboard (example gated route)

| Method | Path             | Auth                 |
| ------ | ---------------- | -------------------- |
| GET    | `/api/dashboard` | ✓ + profile complete |

Returns `403 { profileCompleted: false }` if the profile is incomplete.

## Project structure

```
backend/
├── server.js                 # app entry — middleware, routes, DB connect
└── src/
    ├── config/db.js          # Mongoose connection
    ├── models/User.js        # User + embedded business profile schema
    ├── middleware/
    │   ├── auth.js                  # protect (JWT verify)
    │   └── requireProfileComplete.js# profile-completion gate
    ├── controllers/
    │   ├── authController.js        # signup, login, getMe
    │   └── profileController.js     # getProfile, completeProfile, updateProfile
    ├── routes/
    │   ├── authRoutes.js
    │   ├── profileRoutes.js
    │   └── dashboardRoutes.js
    └── utils/generateToken.js
```
