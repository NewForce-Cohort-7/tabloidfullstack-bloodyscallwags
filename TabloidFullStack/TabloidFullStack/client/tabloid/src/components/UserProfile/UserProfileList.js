import React, { useState, useEffect } from "react";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";

export const UserProfileList = () => {
    const [profiles, setProfiles] = useState([]);
    const getProfiles = () => {
        getAllUserProfiles().then(allProfiles => setProfiles(allProfiles));
    };

    useEffect(() => {
        getProfiles();
    }, []);

    return (
        <div className="table_index" id="userProfileTable">
            <table>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Display Name</th>
                    <th>User Type</th>
                </tr>
                    {profiles.map((profile) => (
                        <tr key={profile.id}>
                            <td>{profile.id}</td>
                            <td>{profile.fullName}</td>
                            <td>{profile.displayName}</td>
                            <td>{profile.userType.name}</td>
                        </tr>
                    ))}
            </table>
        </div>
    );


};