import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { Table, Button } from "reactstrap";
import "./UserProfile.css"
import { Link } from "react-router-dom";
import { ReactivateUserProfile } from "./ReactivateUserProfile";

export const DeactivatedUserList = () => {
    const [profiles, setProfiles] = useState([]);
    const getProfiles = () => {
        getAllUserProfiles().then(allProfiles => {
          // Filter the profiles to include only the ones with isActive === 0 (meaning they are deactivated)
          const deactivatedProfiles = allProfiles.filter(profile => profile.isActive === 0);
          setProfiles(deactivatedProfiles);
        });
      };
    

    useEffect(() => {
        getProfiles();
    }, []);

    //returns a list of all user profiles
    return (
        <>
        <Link to="/userProfilesList"><Button>Back to User List</Button></Link>
        <Table striped size="sm" className="table_index" id="userProfileTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Display Name</th>
                    <th>User Type</th>
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                    {profiles.map((profile) => (
                        <tr key={profile.id}>
                            <th scope="row">{profile.id}</th>
                            <td>{profile.fullName}</td>
                            <td>{profile.displayName}</td>
                            <td>{profile.userType.name}</td>
                            <td><ReactivateUserProfile profile = {profile} /></td>
                        </tr>
                    ))}
            </tbody>
        </Table>
        </>
    );


};