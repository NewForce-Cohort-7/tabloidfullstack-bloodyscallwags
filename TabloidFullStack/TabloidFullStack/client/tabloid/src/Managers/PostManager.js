import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllPosts = () => {
  return fetch(`${apiUrl}/api/post`)
  .then((res) => res.json())
}