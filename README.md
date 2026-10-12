# 🚀 Pure Node.js REST API — Natural Wonders

A lightweight REST API built with **pure Node.js (HTTP module)** and **modern ES Modules (ES6+)**. This project was created to understand the low-level mechanics of backend servers, manual HTTP route handling, query/path parameter parsing, and JSON response formatting before abstracting concepts with frameworks like Express.js.

---

## 🛠 Tech Stack

- **Node.js (v22+)** — Native runtime environment
- **Pure HTTP Module (`node:http`)** — Zero external frameworks for core server logic
- **ES Modules (`"type": "module"`)** — Modern ES6+ `import`/`export` syntax
- **Nodemon** — Development tool for auto-restarting the server on file changes

---

## ✨ Key Technical Concepts Implemented

## ✨ Key Technical Concepts Implemented

- **CORS Policies Enabled:** Added native headers (`Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`) to make the API publicly accessible for cross-origin frontend requests (e.g., React client apps).
- **Framework-Free Routing:** Built custom route handlers using native URL parsing (`new URL()`) to route incoming GET requests dynamically.
- **Path Parameters Parsing:** Extracted dynamic path params (e.g., `/api/continent/:continent` and `/api/country/:country`) using string manipulation and custom utility functions.
- **Query Parameters Handling:** Parsed complex multi-filter URL search parameters (e.g., `?continent=Europe&is_open_to_public=true`) using `URLSearchParams` and `Object.fromEntries()`.
- **Custom Helper Utilities:** Separated concerns into modular utility files (`util.js`) for JSON response headers, HTTP status codes, and data filtering algorithms.
- **Browser Request Filtering:** Explicitly handled automated browser behavior (such as `204 No Content` for `/favicon.ico` requests) to prevent double execution and server crashes.
- **HTTP Status Codes & Error Handling:** Returned appropriate HTTP status codes (`200 OK`, `204 No Content`, `404 Not Found`) along with structured JSON error payloads.

---

## 🛣 API Routes & Usage

### 1. Get All Destinations / Filter via Query Parameters

Returns all destination records or filters them dynamically based on search query options.

- **Endpoint:** `GET /api`
- **Query Parameters (Optional):**
  - `continent` (string) — e.g. `Europe`
  - `country` (string) — e.g. `Italy`
  - `is_open_to_public` (boolean) — `true` or `false`
- **Example Requests:**

  ```http
  GET /api
  GET /api?continent=Europe
  GET /api?country=Japan&is_open_to_public=true
  ### 2. Filter by Path Parameters
  Retrieve destinations filtered specifically by continent or country via URL path endpoints.

  ```

- **Endpoints:**
  - `GET /api/continent/:continent` — Filter destinations by continent name (e.g., `/api/continent/Asia`)
  - `GET /api/country/:country` — Filter destinations by country name (e.g., `/api/country/France`)

---

### 3. Fallback Route (404)

Any unregistered path returns a formatted 404 response payload:

- **Response Example:**
  ```json
  {
    "error": "not found",
    "message": "The requested route does not exist"
  }
  ```

---

## 💻 Getting Started

### Prerequisites

Make sure you have Node.js installed (v18+ recommended):

```bash
node -v
```

### Installation & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/iviktorry/vanilla-node-rest-api.git
   cd node-destinations-rest-api
   ```

2. Install development dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser or Postman/Hoppscotch and test:
   `http://localhost:7000/api`

## 👩‍💻 Developer Contacts & Socials

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iviktorry)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/iviktorry)
[![Telegram](https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/wsxxdfv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/victoria-pratkina-b23834388)
