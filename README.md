# 🚀 Pure Node.js REST API — Natural Wonders

A lightweight REST API built with native **Node.js** and **ES Modules**. Built without frameworks like Express to demonstrate low-level HTTP server architecture, custom routing, manual path/query parameter parsing, and CORS header handling.

## 🔗 Links

- **Live API Demo:** [View Live API](https://natural-wonders-api.onrender.com/)
- **Repository:** [View Source Code](https://github.com/iviktorry/natural-wonders-node-rest-api)

---

## Tech Stack & Highlights

- **Core:** Node.js, ES Modules
- **Dev Tools:** Nodemon
- **Framework-Free Architecture:** Custom router utilizing native `URL` and `URLSearchParams` for search queries and path parsing.
- **CORS & Edge Cases:** Native `Access-Control-Allow-*` policy header injection and automated browser request handling.

---

## API Endpoints

| Method | Endpoint                    | Query Params / Path                         | Description                                                        |
| :----- | :-------------------------- | :------------------------------------------ | :----------------------------------------------------------------- |
| `GET`  | `/api`                      | `continent`, `country`, `is_open_to_public` | Retrieves all destination records or filters via search parameters |
| `GET`  | `/api/continent/:continent` | —                                           | Filters destinations by continent name                             |
| `GET`  | `/api/country/:country`     | —                                           | Filters destinations by country name                               |
| Any    | `*`                         | —                                           | Fallback route returning structured `404 Not Found` JSON           |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/iviktorry/natural-wonders-node-rest-api.git
cd natural-wonders-node-rest-api

# Install dev dependencies & start server
npm install
npm run dev
```

## 👩‍💻 Developer Contacts & Socials

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/iviktorry)
[![Frontend Mentor](https://img.shields.io/badge/Frontend_Mentor-3F54A3?style=for-the-badge&logo=frontendmentor&logoColor=white)](https://www.frontendmentor.io/profile/iviktorry)
[![Telegram](https://img.shields.io/badge/Telegram-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/wsxxdfv)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/victoria-pratkina-b23834388)
