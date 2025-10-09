import React, { useState } from "react";
import ChatWindow from "./ChatWindow";

const chats = [
  {
    id: 1,
    user: "Alice",
    avatar: "https://i.pravatar.cc/56?img=1",
    messages: [
      { text: "Hey! 👋", fromMe: false },
      { text: "Hi Alice!", fromMe: true },
    ]
  },
  {
    id: 2,
    user: "Bob",
    avatar: "https://i.pravatar.cc/56?img=2",
    messages: [
      { text: "What's up?", fromMe: false },
      { text: "All good, Bob!", fromMe: true },
    ]
  }
];

export default function ChatList() {
  const [active, setActive] = useState(null);

  if (active !== null) {
    const chat = chats.find(c => c.id === active);
    return (
      <ChatWindow
        chat={chat}
        onBack={() => setActive(null)}
      />
    );
  }

  return (
    <div className="chat-list">
      {chats.map(chat => (
        <div
          key={chat.id}
          className="chat-item"
          onClick={() => setActive(chat.id)}
        >
          <img src={chat.avatar} alt={chat.user} />
          <div>
            <span className="chat-user">{chat.user}</span>
            <span className="chat-message-preview">
              {chat.messages[chat.messages.length - 1].text}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}