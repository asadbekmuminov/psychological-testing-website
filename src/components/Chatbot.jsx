import { Link } from "react-router-dom";
import { useState } from "react";

export default function ChatPage() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "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";

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Siz o‘quv sayt uchun soddalashtirilgan yordamchi sun’iy intellektsiyasiz.",
            },
            ...messages.map((msg) => ({
              role: msg.sender === "user" ? "user" : "assistant",
              content: msg.text,
            })),
            { role: "user", content: input },
          ],
        }),
      });

      const data = await response.json();
      console.log("AI javobi:", data);

      const botText = data.choices?.[0]?.message?.content || "Javob topilmadi.";
      const botMessage = { sender: "bot", text: botText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Xatolik:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Xatolik yuz berdi. Keyinroq urinib ko‘ring." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto min-h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold bg-white px-5 py-3 rounded mb-4 text-center">
        🤖 Sun'iy Intellekt Yordamchisi
      </h1>

      <div className="flex-1 overflow-y-auto space-y-2 bg-gray-100 p-4 rounded-lg">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-3 rounded-xl max-w-[80%] ${
              msg.sender === "user"
                ? "bg-blue-100 ml-auto text-right"
                : "bg-white mr-auto text-left"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && <p className="text-gray-400 text-sm">...Yuklanmoqda</p>}
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-grow border p-2 rounded-l-lg outline-none"
          placeholder="Savolingizni yozing..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
        >
          Yuborish
        </button>
      </div>
      <Link to="/" className="btn btn-accent btn-sm w-fit mt-4 self-end">
                    Asosiy sahifa
                  </Link>
    </div>
    
  );
}
