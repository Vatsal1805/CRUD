# Full Stack Authentication & CRUD Application

A complete authentication and CRUD application built with React.js (frontend) and Node.js (backend) featuring JWT authentication, MongoDB database, and beautiful Tailwind CSS UI.

## 🚀 Features

### Frontend (React.js)
- ✅ User Registration with validation
- ✅ User Login with JWT authentication
- ✅ Protected routes using React Router
- ✅ View user profile
- ✅ Update user profile (name & email)
- ✅ Delete user account with confirmation
- ✅ Logout functionality
- ✅ Beautiful UI with Tailwind CSS
- ✅ Responsive design
- ✅ Error handling with user feedback

### Backend (Node.js)
- ✅ RESTful API with Express.js
- ✅ MongoDB database integration
- ✅ JWT token generation & verification
- ✅ Password hashing with bcrypt
- ✅ Protected routes with middleware
- ✅ CRUD operations (Create, Read, Update, Delete)
- ✅ Environment variables for security
- ✅ CORS enabled for frontend communication
- ✅ Comprehensive error handling

## 📁 Project Structure

```
Task/
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── pages/        # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Profile.jsx
│   │   ├── components/   # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── Prep/                 # Node.js backend application
    ├── controllers/      # Request handlers
    │   └── user.controller.js
    ├── Routes/           # API routes
    │   └── user.route.js
    ├── schema/           # Mongoose models
    │   └── user.js
    ├── middlewares/      # Custom middleware
    │   └── auth.js
    ├── db/              # Database configuration
    │   └── db.js
    ├── server.js        # Entry point
    ├── .env             # Environment variables
    └── package.json
```

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Axios
- Tailwind CSS v4
- Vite

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend folder:
```bash
cd Task/Prep
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/prep
JWT_SECRET=your_jwt_secret_key
```

4. Start the server:
```bash
npm run dev
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend folder:
```bash
cd Task/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## 🔑 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/v1/users/register` | Register new user | ❌ |
| POST | `/api/v1/users/login` | Login user | ❌ |
| GET | `/api/v1/users/profile` | Get user profile | ✅ |
| PUT | `/api/v1/users/profile` | Update user profile | ✅ |
| DELETE | `/api/v1/users/profile` | Delete user account | ✅ |

## 📝 Usage

1. **Register**: Create a new account with name, email, and password
2. **Login**: Access your account with email and password
3. **View Profile**: See your user information
4. **Update Profile**: Edit your name and email
5. **Delete Account**: Permanently delete your account (with confirmation)
6. **Logout**: Clear session and return to home

## 🔒 Security Features

- Password hashing with bcrypt (salt rounds: 10)
- JWT authentication with 30-day expiration
- Protected API routes with middleware
- Environment variables for sensitive data
- CORS configuration
- Input validation

## 🎨 UI Features

- Gradient backgrounds
- Hover effects and animations
- Form validation
- Loading states
- Error messages
- Success notifications
- Responsive design for all devices

## 📱 Screenshots

The application features:
- Clean home page with welcome message and action buttons
- Registration form with green theme
- Login form with blue theme
- Profile page with purple theme showing user data
- Edit mode for updating profile information
- Confirmation dialogs for destructive actions

## 🤝 Contributing

This is a task submission project. For any questions or improvements, please contact the developer.

## 👨‍💻 Developer

**Vatsal Bhavsar**
- Email: vatsalbhavsar2011@gmail.com

## 📄 License

This project is created as a task submission.

## 🙏 Acknowledgments

- React.js for the frontend framework
- Express.js for the backend framework
- MongoDB for the database
- Tailwind CSS for styling
