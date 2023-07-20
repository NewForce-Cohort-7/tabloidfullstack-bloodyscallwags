import React from "react";

const apiUrl = "https://localhost:5001";

export const getAllCategories = () => {
  return fetch(`${apiUrl}/api/Category`) 
    .then((res) => res.json())
};

//Create new category
export const addCategory = (singleCategory) => { 
    return fetch(`${apiUrl}/api/Category`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleCategory),
    });
  };