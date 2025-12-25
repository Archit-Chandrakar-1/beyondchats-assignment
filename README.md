# BeyondChats Technical Assignment

This project demonstrates a complete content automation pipeline consisting of:
- Web scraping
- Backend APIs
- Node.js automation
- A React-based frontend UI

The system fetches the oldest blog articles from BeyondChats, enriches them using external sources, and displays both original and updated versions through a clean UI.

---

## 🧱 Project Structure

Technical-PM/
│
├── beyondchats-backend/
│ ├── src/
│ │ ├── automation/
│ │ │ ├── fetchLatestArticle.js
│ │ │ ├── searchGoogle.js
│ │ │ ├── scrapeArticleContent.js
│ │ │ ├── rewriteWithLLM.js
│ │ │ └── saveUpdatedArticle.js
│ │ ├── routes/
│ │ ├── controllers/
│ │ ├── scraper/
│ │ ├── server.js
│ │ └── runPhase2.js
│ └── package.json
│
├── beyondchats-frontend/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ └── package.json
│
└── README.md

yaml
Copy code

---

## 🚀 Phase 1 — Scraping & Backend APIs

- Scraped the **5 oldest articles** from BeyondChats blog
- Stored articles in a database
- Exposed CRUD APIs using **Node.js + Express**

### API Endpoint
GET /api/articles

yaml
Copy code

Returns a list of original and updated articles.

---

## ⚙️ Phase 2 — Node.js Automation

A fully automated pipeline that:

1. Fetches the latest article from backend API
2. Searches the web for related articles
3. Scrapes content from top-ranking articles
4. Uses an LLM-based rewrite step (mocked due to time/API limits)
5. Saves the updated article back to the system

### Note on LLM
Due to time and API constraints, the LLM step is mocked while preserving the full automation flow. The system design allows easy replacement with real OpenAI / Gemini APIs.

---

## 🎨 Phase 3 — React Frontend

- Built using **React + Vite**
- Fetches data from backend APIs
- Displays:
  - Article title
  - Content preview
  - Updated badge
  - Source links
- Fully responsive and clean UI

---

## 🖥 Local Setup Instructions

### Backend
```bash
cd beyondchats-backend
npm install
node src/server.js
Run Automation
bash
Copy code
node src/runPhase2.js
Frontend
bash
Copy code
cd beyondchats-frontend
npm install
npm run dev
Open:
http://localhost:5173

🧠 Key Highlights
Clear separation of concerns

Automation-ready architecture

Mocked AI integration with real-world extensibility

Modern frontend with professional UI

📌 Assumptions & Limitations
Google scraping and LLM calls are mocked to ensure stability

Focus was on architecture, data flow, and automation

Designed to be easily extended into production-grade system

👤 Author
Archit Chandrakar

yaml
Copy code

---

# 2️⃣ ARCHITECTURE / DATA FLOW DIAGRAM (ASCII)

You can **include this directly in README** or convert it to an image later.

┌──────────────────────┐
│ BeyondChats Blog │
│ (Oldest Articles) │
└─────────┬────────────┘
│
▼
┌──────────────────────┐
│ Scraper (Phase 1) │
│ Node.js + Cheerio │
└─────────┬────────────┘
│
▼
┌──────────────────────┐
│ Backend API │
│ Express /api/articles│
└─────────┬────────────┘
│
▼
┌──────────────────────┐
│ Phase 2 Automation │
│ Node.js Script │
│ - Fetch article │
│ - Search web │
│ - Scrape content │
│ - Rewrite (LLM) │
└─────────┬────────────┘
│
▼
┌──────────────────────┐
│ Updated Article │
│ Stored via API │
└─────────┬────────────┘
│
▼
┌──────────────────────┐
│ React Frontend │
│ (Phase 3) │
│ Displays Articles │
└──────────────────────┘

yaml
Copy code

---

# 3️⃣ DEPLOYMENT NOTES (SHORT & SMART)

Add this section to README or submission message:

```md
## 🚀 Deployment Notes

- Backend can be deployed on:
  - Render
  - Railway
  - VPS (Node.js)

- Frontend can be deployed on:
  - Vercel
  - Netlify

- Environment variables can be added later for:
  - LLM API keys
  - Search APIs

The project is designed to be cloud-ready with minimal configuration.
