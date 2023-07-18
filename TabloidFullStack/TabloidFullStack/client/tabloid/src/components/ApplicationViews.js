import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfile/UserProfileList";

export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />

          <Route path="/userProfilesList" element={<UserProfileList />} />
      </Routes>
   );
 
}
