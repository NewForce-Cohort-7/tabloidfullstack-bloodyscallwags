import React from "react";
import { Card, CardImg, CardBody } from "reactstrap";
import { Link } from "react-router-dom";


export const Category = ({ category }) => {
  return (
    <Card className="m-4">
      <p className="text-left px-2">Category: {post.userProfile.name}</p>
      <CardImg top src={category.name} />
      <CardBody>
        <p>
          <Link to={`/categories/${category.id}`}>
          <strong>{category.name}</strong>
          </Link>
        </p>
      </CardBody>
    </Card>
  );
};