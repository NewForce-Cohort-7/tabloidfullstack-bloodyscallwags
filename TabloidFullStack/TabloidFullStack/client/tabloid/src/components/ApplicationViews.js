import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfile/UserProfileList";

// export default function ApplicationViews() {

//  return(
//       <Routes>
//         <Route path="/" element={<Hello />} />

//           <Route path="/userProfilesList" element={<UserProfileList />} />
//       </Routes>
//    );
 
// }

const ApplicationViews = () => {
  const localUser = localStorage.getItem("userProfile")
  const userObject = JSON.parse(localUser)

  if (userObject.admin) {
    return(
      <Routes>
        <Route path="/" element={<Hello />} />

          <Route path="/userProfilesList" element={<UserProfileList />} />
      </Routes>
    );
  }
  else {
    return(
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
   );
  }
}

export default ApplicationViews;
