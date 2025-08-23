// lib/api.ts

import { mockPosts } from "./mock";

// Toggle this flag to switch between Mock API and Real Backend later
const USE_MOCK = true;

export async function fetchPosts() {
  if (USE_MOCK) {
    return mockPosts;
  }

  // Placeholder for real API call
  const res = await fetch("/api/posts");
  return res.json();
}
