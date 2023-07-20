import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../Managers/PostManager";
import { Table } from "reactstrap";
import "./Posts.css"

export const Posts = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        getAllPosts().then(allPosts => setPosts(allPosts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    //returns a list of all user profiles
    return (
        <Table striped size="sm" className="table_index" id="postsTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Author</th>
                    <th>Publish Date</th>
                    <th>Category Id</th>
                </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td>{post.userProfile.fullName}</td>
                            <td>{post.publishDateTime}</td>
                        </tr>
                    ))}
            </tbody>
        </Table>
    );


};