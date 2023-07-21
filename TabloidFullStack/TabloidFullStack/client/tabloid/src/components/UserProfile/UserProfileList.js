import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import UserProfile from "./UserProfile";
import { getAllUserProfiles } from "../../Managers/UserProfileManager";
import { Table } from "reactstrap";

export const UserProfileList = () => {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        getAllUserProfiles().then(all => setUsers(all))
    };

    useEffect (
    () => {
        getUsers();
    }, []);
    console.log(users)

    return (
    <>
      <h3>User Profiles</h3>
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
          {users.map((user) => (
            <UserProfile
              key={user.id}
              user={user}
            //   handleActive={handleActiveUser}
            //   handleNotActive={handleNotActiveUser}
            />
          ))}
        </tbody>
      </Table>
    </>











    // <div>
    //     <h3 style={{margin: '15px'}}>User Profiles</h3>
    //     <div style={{display: 'flex', flexDirection: 'column',margin: '15px'}}>
    //         {users.map((u) => (
    //             <div style={{margin: '20px'}}>
    //                 <UserProfile key={u.id} user={u} get={getUsers}/>
    //             </div>
    //         ))}
    //     </div>
    // </div>)
    )
}

// export default UserProfileList;