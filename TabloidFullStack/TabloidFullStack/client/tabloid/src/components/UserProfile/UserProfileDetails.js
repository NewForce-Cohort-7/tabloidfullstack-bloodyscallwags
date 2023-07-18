import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText, CardLink } from "reactstrap";
import { getUser } from "../../Managers/UserProfileManager";
import { useParams } from "react-router-dom";
// import Post from "./Post";

export const UserProfileDetails = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    getUser(id).then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="userImage" src={user.imageLocation} />
      <CardBody>
        <CardTitle tag="h5">{user.displayName}</CardTitle>
        <CardText><i>Since: {user.createDateTime}</i> </CardText>
      </CardBody>
      <ListGroup flush>
        <ListGroupItem><strong>Full Name:</strong> {user.fullName}</ListGroupItem>
        <ListGroupItem><strong>Email:</strong> {user.email}</ListGroupItem>
        <ListGroupItem><strong>UserType:</strong> {user?.userType?.name}</ListGroupItem>
      </ListGroup>
      <CardBody>
        <CardLink href="/UserProfilesList">Back to User Profile List</CardLink>
      </CardBody>
    </Card>
  );
};