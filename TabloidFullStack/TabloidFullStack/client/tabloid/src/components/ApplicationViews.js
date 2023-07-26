import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import { UserProfileList } from "./UserProfile/UserProfileList";
import { AllPosts } from "./Posts/PostList";
import { UserPosts } from "./Posts/UserPosts";
import { UserProfileDetails } from "./UserProfile/UserProfileDetails";
import  TagList  from "./tags/TagList";
import  TagForm  from "./tags/TagForm";
import  CategoryList  from "./Category/CategoryList";
import { CategoryForm } from "./Category/CategoryForm";
import { CommentList } from "./Comment/CommentList";

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
          <Route path="/userposts/:id" element={<UserPosts />} />
          <Route path="/categoriesList" element= {<CategoryList />} />
          <Route path="/tag" element= {<TagList />} />
          <Route path="/tag-form" element= {<TagForm />} />
          <Route path="*" element={<p>Whoops, nothing here...</p>} />
          <Route path="/comment/:id" element={<CommentList />} />
          <Route path="comment/create/:postId" element={<CommentForm />} />
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
