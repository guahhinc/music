import React, { useState } from "react";
import Stories from "./Stories";
import ChatList from "./ChatList";
import Profile from "./Profile";
import SnapButton from "./SnapButton";
import "./styles.css";

export default function App() {
  const [tab, setTab] = useState("stories");

  return (
    <div className="snapchat-app">
      <header className="snap-header">
        <h1>SnapSocial</h1>
      </header>
      <main>
        {tab === "stories" && <Stories />}
        {tab === "chat" && <ChatList />}
        {tab === "profile" && <Profile />}
      </main>
      <SnapButton />
      <nav className="bottom-nav">
        <button
          className={tab === "stories" ? "active" : ""}
          onClick={() => setTab("stories")}
        >
          <span role="img" aria-label="Stories">📸</span>
        </button>
        <button
          className={tab === "chat" ? "active" : ""}
          onClick={() => setTab("chat")}
        >
          <span role="img" aria-label="Chat">💬</span>
        </button>
        <button
          className={tab === "profile" ? "active" : ""}
          onClick={() => setTab("profile")}
        >
          <span role="img" aria-label="Profile">👤</span>
        </button>
      </nav>
    </div>
  );
}