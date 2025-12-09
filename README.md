# Assignment URL Shortener

---
## 🚀 Live Demo

- 🔗 **Frontend**: [https://shortener-blue.vercel.app](https://shortener-blue.vercel.app/)  


- 🔗 **video** : https://github.com/user-attachments/assets/d129927f-f3dd-4495-8702-5671795c0439


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

| Method | Endpoint              | Description                        |
|--------|-----------------------|----------------------------------|
| POST   | `/api/shorten`        | Submit a long URL and get short URL |
| GET    | `/:shortcode`         | Redirect to original long URL      |
| GET    | `/api/admin/urls`     | List all shortened URLs with visit counts |
| DELETE | `/api/admin/delete/:id` | Delete a shortened URL by ID       |

## Running Locally

---
- Node.js and npm
- MongoDB (local or Atlas)


 
