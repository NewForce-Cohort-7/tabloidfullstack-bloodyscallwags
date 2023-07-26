import React from "react";




const apiUrl = "https://localhost:5001";

export const getAllUserProfiles = () => {
  return fetch(`${apiUrl}/api/userprofile`)
  .then((res) => res.json())
}

export const login = (userObject) => {
  return fetch(`${apiUrl}/api/userprofile/getbyemail?email=${userObject.email}`)
  .then((r) => r.json())
    .then((userProfile) => {
        //modified code by Kiersten - allows for .admin to be used in other .js files for if/else statements
        if(userProfile.id){
        const isAdmin = userProfile.userTypeId === 1;
        const updatedProfile = { ...userProfile, id: userProfile.id, admin: isAdmin };
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        return updatedProfile;
      } else{
        return undefined
      }
    });
};

export const logout = () => {
      localStorage.clear()
};

export const register = (userObject, password) => {
  return  fetch(`${apiUrl}/api/userprofile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userObject),
  })
  .then((response) => response.json())
    .then((savedUserProfile) => {
      localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
    });
};

//GET User by Id
export const getUser = (id) => { //http GET by id parameter 
  return fetch(`${apiUrl}/api/userprofile/${id}`)
  .then((res) => res.json());
}

//PUT for UserProfileDeactivate.js
export const deactivateUser = (user) => {
  return fetch(`${apiUrl}/api/userprofile/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
      .then((res) => res.json())

}

// return (
//   <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register,  }}>
//      {props.children}
//   </UserProfileContext.Provider>
// );
