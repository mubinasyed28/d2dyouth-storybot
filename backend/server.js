import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(bodyParser.json());
app.use(cors());

const MISTRAL_API_KEY = "JM0LMZ6WyihJRtidLjBQHaO8ELO96x1j";
const MISTRAL_URL = "https://api.mistral.ai/v1/chat/completions";

let chatHistory = [];

app.post("/chat", async (req, res) => {
  const { userMessage } = req.body;

  chatHistory.push({ role: "user", content: userMessage });

  const systemPrompt = `
You are StoryBot — a friendly, expressive conversation partner who helps founders tell their stories for D2DYouth.
Ask warm, casual questions like a human. Use emojis naturally.
If the user talks about their company or journey, ask follow-up questions.
If they give a full story, turn it into a founder-focused YouthStory article — emotional and inspiring.
After sending a story, keep the conversation going by asking: “Want me to tweak the tone or shorten it?”`;

  try {
    const response = await fetch(MISTRAL_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${MISTRAL_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral-small-latest",
        messages: [
          { role: "system", content: systemPrompt },
          ...chatHistory,
        ],
      }),
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || "Hmm, I didn’t catch that 😅";

    chatHistory.push({ role: "assistant", content: reply });
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ reply: "Oops 😅 something went wrong on my end." });
  }
});

app.listen(5000, () => console.log("🚀 StoryBot backend running on port 5000"));
