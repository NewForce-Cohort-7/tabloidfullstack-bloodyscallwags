import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllCategories = () => {
  return fetch(`${apiUrl}/api/Category`) 
    .then((res) => res.json())
};