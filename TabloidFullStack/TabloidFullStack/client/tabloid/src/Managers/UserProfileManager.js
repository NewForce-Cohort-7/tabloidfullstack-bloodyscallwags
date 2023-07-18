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
      // if(userProfile.id){
        // localStorage.setItem("userProfile", JSON.stringify(userProfile));
        // return userProfile
       if(userProfile.id){
        const isAdmin = userProfile.userTypeId === 1;
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





// return (
//   <UserProfileContext.Provider value={{ isLoggedIn, login, logout, register,  }}>
//      {props.children}
//   </UserProfileContext.Provider>
// );
