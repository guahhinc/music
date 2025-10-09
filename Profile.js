import React from "react";

export default function Profile() {
  // Dummy profile
  return (
    <div className="profile-page">
      <img
        src="https://i.pravatar.cc/100?img=5"
        alt="Me"
        className="profile-avatar"
      />
      <h2>Your Name</h2>
      <p>Snap score: 1023</p>
      <button>Edit Profile</button>
    </div>
  );
}