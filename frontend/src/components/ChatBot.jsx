import React, { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hey there! 👋 I’m StoryBot from D2DYouth. What’s your company called?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { from: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("https://storybot-backend1.onrender.com/chat", {
  userMessage: input,
});
      setMessages(prev => [...prev, { from: "bot", text: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { from: "bot", text: "Oops 😅 something went wrong." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] h-[600px] flex flex-col">
      <div className="overflow-y-auto flex-1 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={`my-2 ${m.from === "bot" ? "text-left" : "text-right"}`}>
            <span
              className={`inline-block px-3 py-2 rounded-xl ${
                m.from === "bot"
                  ? "bg-pink-200 text-gray-800"
                  : "bg-purple-400 text-white"
              }`}
            >
              {m.text}
            </span>
          </div>
        ))}
        {loading && (
          <div className="text-left text-gray-500 italic animate-pulse">
            StoryBot is typing...
          </div>
        )}
      </div>

      <div className="flex">
        <input
          className="flex-1 border rounded-xl px-3 py-2 focus:outline-none"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-purple-500 text-white px-4 py-2 rounded-xl hover:bg-purple-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
