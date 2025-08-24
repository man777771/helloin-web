"use client";

import { useState } from "react";

export default function NewPost() {
  const [text, setText] = useState("");

  return (
    <div className="bg-white p-4 rounded-2xl shadow mb-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border rounded p-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 mt-2 rounded">
        Post
      </button>
    </div>
  );
}
