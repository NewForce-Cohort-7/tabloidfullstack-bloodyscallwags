import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllApprovedPosts = () => {
  return fetch(`${apiUrl}/api/post`)
  .then((res) => res.json())
}

export const getUserPosts = (id) => {
  return fetch(`${apiUrl}/api/post/${id}`)
  .then((res) => res.json())
}