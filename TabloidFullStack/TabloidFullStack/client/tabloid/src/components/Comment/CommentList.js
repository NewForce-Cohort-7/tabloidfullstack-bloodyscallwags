import React from "react";
import { Comment } from "./Comment";
import { useEffect, useState } from "react";
import { getAllComments } from "../../Managers/CommentManager";
import { useParams } from "react-router-dom";

export const CommentList = (post) => {
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    useEffect((postId) => {
        getAllComments()
        .then(setComments)
    }, [postId]);
    
    return (
        <>
        <h2>Comments</h2>
        {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
        ))}
        </>
    );
}
