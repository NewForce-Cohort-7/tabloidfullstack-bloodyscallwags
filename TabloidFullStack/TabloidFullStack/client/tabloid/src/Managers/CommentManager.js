import React from "react";

const apiUrl = "http://localhost:5000/api";

export const getAllComments = () => {
    return fetch(`${apiUrl}/comment`)
        .then(res => res.json())
        .catch(err => console.log(err));
}