# Multi-User-Registration-System

This project is a backend system built with Node.js, Express, and MongoDB, designed to manage multi-user registration and authentication with role-based access control (RBAC).
It supports two user roles: SCP (Service Center Partner) and Farmer.

## FEATURES

- Secure Authentication using tokens (JWT or simple tokens)

Role-Based Access Control:

  SCP and Farmer roles have different access permissions

Protected Routes:

- Only authenticated users can access protected endpoints

- MongoDB Integration using Mongoose

- Password Hashing using bcrypt for secure storage

- Token Handling with middleware for route protection

- Error Handling for unauthorized access and invalid tokens

## TECH STACK

- Node.js

- Express.js

- MongoDB + Mongoose  

- JWT or custom token-based authentication

- dotenv for environment variable management

## API Endpoints 
Authentication 
- /api/auth/register
- /api/auth/login

Farmer Managemnent
- /api/farmers
- /api/farmers

SCP dashboard
- /api/scp/dashboard





