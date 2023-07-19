import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Card, CardBody, CardTitle, CardText, CardLink } from "reactstrap";
import { getUser } from "../../Managers/UserProfileManager";
import { useParams } from "react-router-dom";
import "./UserProfile.css"

export const UserProfileDetails = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  const handleBrokenImage = (image) => {
    const defaultImage = "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";
    image.target.src = defaultImage;
}

  useEffect(() => {
    getUser(id).then(setUser);
  }, []);

  if (!user) {
    return null;
  }

  // Format createDateTime as MM/DD/YYYY
  const formattedCreateDate = new Date(user.createDateTime).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  // Check if user.imageLocation is null or not
  const imageSrc = user.imageLocation || "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2017/11/how-to-write-a-blog-post.jpeg";


  return (
    <Card
      style={{
        width: "18rem",
        margin: "3rem",
      }}
    >
       <img alt="userImage" src={imageSrc} onError={handleBrokenImage} />
      <CardBody>
        <CardTitle tag="h5">{user.displayName}</CardTitle>
        <CardText><i>Since: {formattedCreateDate}</i> </CardText>
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