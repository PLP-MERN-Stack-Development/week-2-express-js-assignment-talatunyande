#  Week 2: Express.js – RESTful Product API

This project is part of the **PLP MERN Stack Development Program**, demonstrating how to build a RESTful API using **Express.js**. It includes CRUD operations, middleware integration, custom error handling, filtering, search, pagination, and API key authentication.

---

##  Features

* Full **CRUD** (Create, Read, Update, Delete) functionality for `products`
* **Middleware** for:

  * Request logging
  * API key authentication
  * Request body validation
* **Filtering**, **search**, and **pagination**
* Centralized **error handling**
* Uses **UUID** for unique product IDs
* Environment variables with `.env`

---

## Technologies Used

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [UUID](https://www.npmjs.com/package/uuid)
* [body-parser](https://www.npmjs.com/package/body-parser)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [pnpm](https://pnpm.io/) - fast package manager

---

## Folder Structure

```
week-2-express-js-assignment/
├── middleware/
│   └── index.js           # Logger, Auth, JSON Parser, and Validator
├── routes/
│   ├── products.js        # All product-related routes
│   └── auth.js            # Dummy authentication route
├── .env.example           # Sample environment file
├── package.json
├── server.js              # Main entry file
└── README.md
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-2-express-js-assignment-talatunyande.git
cd week-2-express-js-assignment-talatunyande
```

### 2. Install Dependencies

```bash
pnpm install
```

Or if using `npm`:

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
API_KEY=your-secret-api-key
```

> You can copy from `.env.example` and update the value.

### 4. Start the Server

```bash
node server.js
```

Open your browser or Postman at: `http://localhost:3000`

---

##  Authentication

All protected routes require an API key to be passed in headers:

```http
x-api-key: your-secret-api-key
```

---

##  API Endpoints

### Auth Route

| Method | Route             | Description            |
| ------ | ----------------- | ---------------------- |
| GET    | `/api/auth/login` | Test dummy login route |

---

### Product Routes

| Method | Route                 | Description                           |
| ------ | --------------------- | ------------------------------------- |
| GET    | `/api/products`       | Get all products (supports filters)   |
| GET    | `/api/products/:id`   | Get a product by ID                   |
| POST   | `/api/products`       | Create a new product                  |
| PUT    | `/api/products/:id`   | Update an existing product            |
| DELETE | `/api/products/:id`   | Delete a product                      |
| GET    | `/api/products/stats` | Get product count grouped by category |

---

##  Advanced Features

###  Add a New Product

```http
POST /api/products
Headers:
  x-api-key: your-secret-api-key
Body:
{
  "name": "Monitor",
  "description": "24-inch LED monitor",
  "price": 180,
  "category": "electronics",
  "inStock": true
}
```

###  Filter, Search & Paginate

```http
GET /api/products?category=electronics&search=phone&page=1&limit=2
```

###  Product Statistics

```http
GET /api/products/stats
```

Sample response:

```json
{
  "electronics": 3,
  "kitchen": 2
}
```

---

##  Testing Tools

You can test this API using any of the following tools:

* [Postman](https://www.postman.com/)
* [Insomnia](https://insomnia.rest/)
* `curl` from the command line

---

## .env.example

```env
# Copy this into .env and update the API_KEY
API_KEY=your-secret-api-key
```

---

## 👤 Author

**Talatu Nyande**
PLP MERN Stack Developer
GitHub: [@talatunyande](https://github.com/talatunyande)

---

## 📓 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).


