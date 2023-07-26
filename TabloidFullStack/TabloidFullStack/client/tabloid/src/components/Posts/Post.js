import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  return (
    <p>{post.content}</p>
    // <Card className="m-4">
    //   {/* <p className="text-left px-2">Posted by: <Link to={`/users/${post.userProfile.id}`}>{post.userProfile.name}</Link>
    //   </p>
    //   <CardImg top src={post.imageUrl} alt={post.title} />
    //   <CardBody>
    //     <p>
    //     <Link to={`/posts/${post.id}`}>
    //         <strong>{post.title}</strong>
    //     </Link>
    //     </p> */}
    //     <p>{post.content}</p>
    //     {/* <div>
    //       <h5>Comments:</h5>
    //       {post.comments.map((comment) => (
    //         <div key={comment.id}>
    //           <p>{comment.message}</p>
    //           <p>Posted by: {comment.userProfileId}</p>
    //         </div>
    //       ))}
    //     </div> */}
    //   </CardBody>
    // </Card>
  );
};

