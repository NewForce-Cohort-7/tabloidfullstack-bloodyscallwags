import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { NavLink, Table } from "reactstrap";
import "./UserProfile.css"
import { UserProfileDeactivate } from "./UserProfileDeactivate";

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
                    <td>Actions</td>
                </tr>
                </thead>
                <tbody>
                    {profiles.map((profile) => (
                        <tr key={profile.id}>
                            <th scope="row">{profile.id}</th>
                            <td><NavLink href={`/userprofile/${profile.id}`} id="userDetailsLink"><u>{profile.fullName}</u></NavLink></td>
                            <td>{profile.displayName}</td>
                            <td>{profile.userType.name}</td>
                            <td><UserProfileDeactivate profile = {profile} /></td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );


};

//change isActive to int (might have to comment out every instance of it in Visual Community)
//make 1 = isActive (true) and 2 = isActive (false). Button click (confirm) will change what the value is. Hopefully will be easier.