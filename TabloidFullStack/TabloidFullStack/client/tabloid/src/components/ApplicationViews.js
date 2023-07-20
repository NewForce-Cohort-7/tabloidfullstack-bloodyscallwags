import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfile/UserProfileList";
import { Posts } from "./Posts/PostList";
import  CategoryList  from "./CategoryList";

//original code - keeping for safety
// export default function ApplicationViews() {

//  return(
//       <Routes>
//         <Route path="/" element={<Hello />} />

//           <Route path="/userProfilesList" element={<UserProfileList />} />
//       </Routes>
//    );
 
// }

//modified code of ApplicationViews to have different views for routes; might need to separate this later depending on how messy it gets
const ApplicationViews = () => {
  const localUser = localStorage.getItem("userProfile")
  const userObject = JSON.parse(localUser)

  if (userObject?.admin) {
    return(
      <Routes>
        <Route path="/" element={<Hello />} />

          <Route path="/userProfilesList" element={<UserProfileList />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/categoriesList" element= {<CategoryList />} />
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
