import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { NavLink, Table } from "reactstrap";
import "./UserProfile.css"
import { Link } from "react-router-dom";

export const UserProfileList = () => {
    const [profiles, setProfiles] = useState([]);
    const getProfiles = () => {
        getAllUserProfiles().then(allProfiles => setProfiles(allProfiles));
    };

    useEffect(() => {
        getProfiles();
    }, []);

    //returns a list of all user profiles
    return (
        <Table striped size="sm" className="table_index" id="userProfileTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Display Name</th>
                    <th>User Type</th>
                </tr>
                </thead>
                <tbody>
                    {profiles.map((profile) => (
                        <tr key={profile.id}>
                            <th scope="row">{profile.id}</th>
                            <NavLink href={`/userprofile/${profile.id}`} id="userDetailsLink"><td><u>{profile.fullName}</u></td></NavLink>
                            <td>{profile.displayName}</td>
                            <td>{profile.userType.name}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );


};