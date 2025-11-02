# 🌸 **StoryBot — The AI That Writes *Your* Story**  
**By D2DYouth | Inspiring the next generation of founders**  

> “Everyone has a story — some just need a little help telling it.” 💬✨  

---

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![MistralAI](https://img.shields.io/badge/AI-Mistral-orange)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend%20Hosted%20on-Render-purple?logo=render)

---

## 💡 **About StoryBot**
Meet **StoryBot** — your friendly storytelling companion built for **D2DYouth**.  
It chats with founders, asks fun and emotional questions, and then turns their journey into a personalized, inspiring *YouthStory*.  

Built using **React, Node.js, Express, and Mistral AI**.  

---

## 🚀 **What StoryBot Does**
StoryBot doesn’t just *generate text* — it *connects*.  
It listens to the founder’s story, feels their passion, and transforms it into something that sounds like *them*.  

🎙️ **Talk.** StoryBot greets you warmly and asks about your company.  
🪄 **Tell.** It listens — the what, the why, the spark.  
📖 **Transform.** Boom. It turns your words into a founder’s story that feels straight out of a magazine.  
💬 **Continue.** Want to tweak the tone or shorten it? StoryBot keeps chatting!  

---

## 🧠 **Tech Stack**

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js, TailwindCSS, Axios |
| **Backend** | Node.js, Express, Mistral AI |
| **Hosting** | Vercel (Frontend), Render (Backend) |
| **AI Model** | `mistral-small-latest` |

---

## 🧩 **Project Structure**
d2dyouth-storybot/

│

├── backend/

│ ├── server.js

│ ├── package.json

│

└── frontend/

├── src/

│ ├── components/

│ │ └── ChatBot.jsx

│ └── App.jsx

├── package.json


---

## ⚙️ Local Setup  

### 🪄 Step 1 — Clone the Repository  

```bash
git clone https://github.com/yourusername/d2dyouth-storybot.git
cd d2dyouth-storybot
```

### 🧠 Step 2 — Setup Backend
```bash
cd backend
npm install
npm start
```
➡️ Backend runs on http://localhost:5000

### 💻 Step 3 — Setup Frontend
```bash
cd ../frontend
npm install
npm start
```
➡️ Frontend runs on http://localhost:3000


## 🌍 Deployment Setup

### 🧠 Backend — Render

1. Go to Render
2. Click New Web Service
3. Connect your GitHub repo and select the backend folder
4. Set:
    - Start Command: ```bashnode server.js```
    - Root Directory: ```bash/backend```
    - Environment Variable:
        ```bash
        MISTRAL_API_KEY=your_mistral_api_key
        ```
5. Deploy 🚀

### 🎨 Frontend — Vercel

1. Go to Vercel
2. Import your GitHub repository
3. Set:
    - Root Directory: ```bashfrontend```
    - Build Command: ```bashnpm run build```
    - Output Directory: ```bashbuild```
4. Deploy 🚀

✅ Update your API URL in ChatBot.jsx:
```bash
const res = await axios.post("https://storybot-backend1.onrender.com/chat", {
  userMessage: input,
});
```

## Credits

- 🧠 Mistral AI
   — for powering the storytelling magic

- 🌐 Render
   — for backend hosting

- ⚡ Vercel
   — for frontend deployment

- 💬 D2DYouth
   — for inspiring youth through stories
