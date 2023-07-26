import React from "react";

const baseUrl = '/api/Comment';

export const getCommentsByPostId = (id) => {
    return fetch(`${baseUrl}/${id}`)
        .then((res) => res.json())
};

export const addComment = (commentObject) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(commentObject),
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to create new Comment")
            }
            return res.json();
        });
};


export const deleteComment = (commentId) => {
    return fetch(`/api/Comment/${commentId}`, {
        method: "DELETE",
    });
};