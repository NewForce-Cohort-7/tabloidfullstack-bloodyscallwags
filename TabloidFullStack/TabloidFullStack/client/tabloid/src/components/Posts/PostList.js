import React, { useState, useEffect } from "react";
import { getAllApprovedPosts } from "../../Managers/PostManager";
import { Table } from "reactstrap";
import "./Posts.css";
import { EyeFill } from "react-bootstrap-icons";
import { PencilFill} from "react-bootstrap-icons"
import { TrashFill} from "react-bootstrap-icons"


export const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = () => {
        getAllApprovedPosts().then(allPosts => setPosts(allPosts));
    };

    const localUser = localStorage.getItem("userProfile")
    const userObject = JSON.parse(localUser)

    useEffect(() => {
        getPosts();
    }, []);

    //returns a list of all user profiles
    return (
    <>
    
    <a href={`/posts/user/${userObject.id}`} className="btn btn-outline-secondary mx-1" title="Details">
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
                        <>
                        <tr key={post.id}>
                            <td>{post.userProfile.fullName}</td>
                            <td>{post.title}</td>
                            <td>{post.category.name}</td>
                            <td>{post.publishDateTime}</td>
                    <td>
                        <div className="function-container">
                        <a href={`/posts/post/${post.id}`} className="btn btn-outline-secondary mx-1" title="Details">
                            <EyeFill />
                        </a>
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Edit">
                            <PencilFill />
                        </a>
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Delete">
                            <TrashFill/>
                        </a>
                        </div>
                    </td>
                        </tr>
                        </>
                    ))}
            </tbody>
        </Table>
        </div>
    </>
    );
};
