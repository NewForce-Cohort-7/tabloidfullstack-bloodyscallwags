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
      //Original Code - Keeping for safety
      // if(userProfile.id){
        // localStorage.setItem("userProfile", JSON.stringify(userProfile));
        // return userProfile
       
        //modified code by Kiersten - allows for .admin to be used in other .js files for if/else statements
        if(userProfile.id){
        const isAdmin = userProfile.userTypeId === 1;
        const isActive = userProfile.isActive === 1;
        const updatedProfile = { id: userProfile.id, admin: isAdmin };
        localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
        return updatedProfile;
      }
      else{
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

export const getUser = (id) => { //http GET by id parameter 
  return fetch(`${apiUrl}/api/userprofile/${id}`)
  .then((res) => res.json());
}



// return (
//   <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register,  }}>
//      {props.children}
//   </UserProfileContext.Provider>
// );
