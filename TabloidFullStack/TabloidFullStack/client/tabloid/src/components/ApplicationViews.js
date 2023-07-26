import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfile/UserProfileList";
import { AllPosts } from "./Posts/PostList";
import { UserPosts } from "./Posts/UserPosts";
import { PostDetails } from "./Posts/PostDetails";
import { UserProfileDetails } from "./UserProfile/UserProfileDetails";
import  TagList  from "./tags/TagList";
import  TagForm  from "./tags/TagForm";
import  CategoryList  from "./Category/CategoryList";
import { CategoryForm } from "./Category/CategoryForm";
import { DeactivatedUserList } from "./UserProfile/DeactivatedUserList";

//modified code of ApplicationViews to have different views for routes
const ApplicationViews = () => {
  const localUser = localStorage.getItem("userProfile")
  const userObject = JSON.parse(localUser)

  if (userObject?.admin) {
    return(
      <Routes>
        <Route path="/" element={<Hello />} />
          <Route path="/userprofile/:id" element={<UserProfileDetails />} />
          <Route path="/userProfilesList" element={<UserProfileList />} />
          <Route path="/posts" element={<AllPosts />} />
          <Route path="/posts/user/:id" element={<UserPosts />} />
          <Route path="/posts/post/:id" element={<PostDetails />} />
          <Route path="/categoriesList" element= {<CategoryList />} />
          <Route path="/tag" element= {<TagList />} />
          <Route path="/tag-form" element= {<TagForm />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
          <Route path="/deactivatedusers" element={<DeactivatedUserList /> } />
          
          <Route path="category/create" element={ <CategoryForm />} />
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
