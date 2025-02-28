# MERN E-Commerce Application

## Project Overview

This project aims to build a full-stack e-commerce platform using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform will allow users to create an account, browse products, add them to their cart, make purchases, and manage orders.

## Key Features

- 🔒 User Authentication with JWT
- 📦 Product Management
- 🛒 Shopping Cart & Orders
- 🔍 Search functionality
- 🖥 Responsive Design
- 🔐 Secure Transactions

## Project Setup

### Folder Structure
- server/ → For server-side (Node.js, Express, MongoDB)
- client/ → For client-side (React.js)

```
mern4/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   └── package.json
│
└── server/
    ├── controllers/
    ├── models/
    ├── routes/
    ├── middleware/
    ├── config/
    ├── index.js
    └── package.json
```

### Technologies used
- **Frontend:**
  - React.js
  - React Router DOM
  - Axios
  - CSS Modules
  - Font Awesome Icons

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT Authentication

- **API Testing**
   - Postman API

### API Endpoints

#### Authentication
- `POST /api/users/login` - Auth user & get token
- `POST /api/users` - Register a new user
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user

#### Category
- `POST /api/categories` - Create a category
- `GET /api/categories/:id`- Fetch single category
- `GET /api/categories` - Fetch all categories
- `PUT /api/categories/:id` - Update a category
- `DELETE /api/categories/:id` - Delete a category

#### Product
- `POST /api/products` - Create a product
- `GET /api/products` - Fetch all products
- `GET /api/products/:id` - Fetch single product
- `PUT /api/products/:id` - Update a product
- `POST /api/products/:id/reviews` - Create new review for product
- `GET /api/products/top`- Get top rated products
- `DELETE /api/products/:id` - Delete a product

#### Order
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order by ID
- `GET /api/orders` - Get all orders
- `PUT /api/orders/:id/pay` - Update order to paid
- `PUT /api/orders/:id/deliver` - Update order to delivered

## Running the project locally

### Setting up
1. Clone the repository:
```bash
git clone https://github.com/jeff559-omullo/mern4.git
cd mern4
```

2. Install backend dependencies:
```bash
cd server
npm install
```

3. Install frontend dependencies:
```bash
cd client
npm install
```

4. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

5. Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

### Running the Application
1. Start the backend server:
```bash
cd server
node index.js
```

2. Start the frontend development server:
```bash
cd client
npm run dev
```

## Contributing to the project

1. You can clone the repository using `git clone https://github.com/jeff559-omullo/mern4.git `

2. Make your changes and add comments in the code.

3. Create a feature branch, submit your pull request.
```
git checkout -b feature-branch
git commit -m "Added new feature"
git push origin feature-branch
```

4. Wait for your pull request to be merged.

## NOTE
### The frontend part is not yet complete.
