import React, { useState, useEffect } from "react";
import { getAllApprovedPosts } from "../../Managers/PostManager";
import { Table } from "reactstrap";
import "./Posts.css";
import { EyeFill, PencilFill, TrashFill } from "react-icons/io5";


export const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        getAllApprovedPosts().then(allPosts => setPosts(allPosts));
    };

  useEffect(() => {
    getPosts();
   
  }, []);

    //returns a list of all user profiles
    return (
    <>
    <a href="/userposts/:id" className="btn btn-outline-secondary mx-1" title="Details">
                            My Posts
                        </a>
    <div className="container pt-5">
        <Table striped className="table table-striped">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Publish Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userProfile.fullName}</td>
                            <td>{post.title}</td>
                            <td>{post.category.name}</td>
                            <td>{post.publishDateTime}</td>
                    <td>
                        <div className="function-container">
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Details">
                            {/* <EyeFill /> */}
                        </a>
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Edit">
                            {/* <PencilFill /> */}
                        </a>
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Delete">
                            {/* <TrashFill/> */}
                        </a>
                        </div>
                    </td>
                        </tr>
                    ))}
            </tbody>
        </Table>
        </div>
    </>
    );
};
