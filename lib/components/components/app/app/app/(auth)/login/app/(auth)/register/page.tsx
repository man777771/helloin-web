"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="mt-20 text-center">
      <h2 className="text-2xl font-bold">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 mt-4 w-64"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-green-600 text-white px-4 py-2 mt-4 rounded">
        Register
      </button>
    </div>
  );
}
