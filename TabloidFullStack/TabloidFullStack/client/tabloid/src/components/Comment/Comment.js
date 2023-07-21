import React from "react";

export const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <div className="comment__content">
                <div className="comment__author">{comment.userProfile.fullName}</div>
                <div className="comment__subject">{comment.subject}</div>
                <div className="comment__content">{comment.content}</div>
                <div className="comment__createDate">{comment.createDateTime}</div>
            </div>
        </div>
   )
    }
;