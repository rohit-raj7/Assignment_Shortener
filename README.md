# MERN URL Shortener

A simple URL shortener web application built with the MERN stack (MongoDB, Express, React, Node.js).  
Users can submit long URLs and get shortened versions. Visiting a short URL redirects to the original.

---
## 🚀 Live Demo

- 🔗 **Frontend**: [https://shortener-blue.vercel.app](https://shortener-blue.vercel.app/)  

---


## Features

- Submit **long URLs** and receive a **short URL**.
- Redirect from **short URLs** to **original URLs**.
  
 ***Admin dashboard (optional)***
 - Lists all **shortened** URLs.
 - Tracks how many times each short URL was visited.

 - Delete the URL from Admin Dashboard.
 
---

## Technology Stack

| Frontend       | Backend               | Database          |
|----------------|-----------------------|-------------------|
| React          | Node.js + Express     | MongoDB + Mongoose|

---

## API Endpoints

| Method | Endpoint        | Description                          |
|--------|-----------------|------------------------------------|
| POST   | `/api/shorten`  | Accepts a long URL, returns short code |
| GET    | `/:shortcode`   | Redirects to the original URL       |
| GET    | `/api/admin/urls` | (Optional) Lists all URLs with visit counts |

---
- Node.js and npm
- MongoDB (local or Atlas)


 
