import React from "react";

const stories = [
  { id: 1, user: "Alice", avatar: "https://i.pravatar.cc/56?img=1" },
  { id: 2, user: "Bob", avatar: "https://i.pravatar.cc/56?img=2" },
  { id: 3, user: "Charlie", avatar: "https://i.pravatar.cc/56?img=3" },
  { id: 4, user: "Dana", avatar: "https://i.pravatar.cc/56?img=4" },
];

export default function Stories() {
  return (
    <div className="stories-bar">
      {stories.map((story) => (
        <div key={story.id} className="story-avatar">
          <img src={story.avatar} alt={story.user} />
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
}