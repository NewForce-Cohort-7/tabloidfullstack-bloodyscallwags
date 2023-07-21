import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const UserProfile = ({user, get}) => {

    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(user.isActive);

    //Perform a patch to update isActive state when button is clicked
// console.log(user)
    const handleActive = () => {

        setIsActive(true);
        //object to be updated
        const updatedUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            email: user.email,
            createDateTime: user.createDateTime,
            imageLocation: user.imageLocation,
            isActive: true,
            userTypeId: user.userTypeId,
            userType: {
                id: user.userType.id,
                name: user.userType.name
            },
            fullName: user.fullName

        };


        return fetch(`https://localhost:5001/api/UserProfile/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((response) => response.json())
          .then((updatedUser) =>
           get(updatedUser)
          );
      };

    const handleNotActive = () => {

        setIsActive(false);

        //object to be updated
        const updatedUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            displayName: user.displayName,
            email: user.email,
            createDateTime: user.createDateTime,
            imageLocation: user.imageLocation,
            isActive: false,
            userTypeId: user.userTypeId,
            userType: {
                id: user.userType.id,
                name: user.userType.name
            },
            fullName: user.fullName

        }


        return fetch(`https://localhost:5001/api/UserProfile/${user.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser), })
        .then((response) => response.json())
        .then((updatedUser) => {
            get(updatedUser)
        })
      }

    return (
        <tr><th scope="row">{user.id}</th>
                                    <td><NavLink to={`/userprofile/${user.id}`} id="userDetailsLink"><u>{user.fullName}</u></NavLink></td>
                                     <td>{user.displayName}</td>
                                     <td>{user.userType.name}</td>
                                     <td><Button id= "deactiveUserButton">Deactivate</Button></td>
                                     </tr>
)};

export default UserProfile;
