# User Details Form


# EtechnoLab - Full Stack MERN Project
Project Overview
This is a full-stack web application built using React.js (Frontend), Node.js with Express (Backend), and MongoDB (Database). The application includes a registration and login system with JWT authentication, and displays user details after successful login.

# Features
✅ Responsive & Attractive Frontend using React.js & Bootstrap
✅ Secure User Authentication using JWT
✅ MongoDB Integration for storing user details
✅ REST API Implementation with Express.js
✅ Login & Registration System
✅ Display User Details after Login

# Technologies Used
Frontend (React.js)
React.js (Functional Components & Hooks)
React Router for navigation
Axios for API requests
Bootstrap for responsive UI
Backend (Node.js & Express.js)
Express.js (Node.js framework)
JWT for authentication
bcrypt.js for password hashing
dotenv for managing environment variables
Database (MongoDB)
MongoDB (NoSQL database)
Mongoose (ODM for MongoDB)


# API Routes
Authentication Routes (/api/auth)
Method	Route	Description
POST	/register	Register a new user
POST	/login	Login and get JWT token
User Routes (/api/user)
Method	Route	Description
GET	/me	Get logged-in user data

# How the App Works?
# 1️⃣ User Registration
User enters details in the Register form
Data is sent to the backend (/api/auth/register)
Password is hashed before saving in MongoDB
If successful, user is redirected to the Login page

# 2️⃣ User Login
User enters email & password
Backend verifies credentials and sends a JWT token
Token is stored in localStorage
User details are displayed on the dashboard

# 3️⃣ Fetching User Data
After login, frontend sends a request to /api/user/me
Backend verifies JWT token and returns user details
Screenshots
✅ Home Page

✅ Register Page

✅ Login Page

✅ Dashboard (User Details)

# Future Enhancements
🚀 Add Delete Account feature
🚀 Implement Password Reset
🚀 Improve UI & Animations
🚀 Add Profile Picture Upload

# Contributing
If you would like to contribute, feel free to create a Pull Request or report issues in the repository.

License
📜 This project is Open Source and free to use.
