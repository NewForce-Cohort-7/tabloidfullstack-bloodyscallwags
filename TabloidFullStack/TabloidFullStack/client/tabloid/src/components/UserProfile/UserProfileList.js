import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { Button, NavLink, Table } from "reactstrap";
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
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {profiles.map((profile) => (
                        <tr key={profile.id}>
                            <th scope="row">{profile.id}</th>
                            <td><NavLink href={`/userprofile/${profile.id}`} id="userDetailsLink"><u>{profile.fullName}</u></NavLink></td>
                            <td>{profile.displayName}</td>
                            <td>{profile.userType.name}</td>
                            <td><Button>Deactivate</Button></td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );


};