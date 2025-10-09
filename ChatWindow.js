import React, { useState } from "react";

export default function ChatWindow({ chat, onBack }) {
  const [messages, setMessages] = useState(chat.messages);
  const [input, setInput] = useState("");

  const send = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, fromMe: true }]);
      setInput("");
    }
  };

  return (
    <div className="chat-window">
      <button className="back-btn" onClick={onBack}>← Back</button>
      <div className="chat-with">
        <img src={chat.avatar} alt={chat.user} />
        <span>{chat.user}</span>
      </div>
      <div className="messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`bubble ${msg.fromMe ? "me" : "them"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-bar">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}