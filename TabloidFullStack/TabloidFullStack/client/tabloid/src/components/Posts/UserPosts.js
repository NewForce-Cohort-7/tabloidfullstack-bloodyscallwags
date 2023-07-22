import React, { useState, useEffect } from "react";
import { getUserPosts } from "../../Managers/PostManager";
import { Table } from "reactstrap";
import { useParams } from "react-router-dom";
import "./Posts.css"
import { EyeFill } from "react-bootstrap-icons";
import { PencilFill} from "react-bootstrap-icons"
import { TrashFill} from "react-bootstrap-icons"


export const UserPosts = () => {
    const [userPosts, setUserPosts] = useState([]);
    const { id } = useParams();

        console.log(id)
    useEffect(() => {
        getUserPosts(id)
            .then((data) => 
            {setUserPosts(data);
            })
            .catch((error) => {
                console.log("Error fetching user posts:", error);
            });
    }, [id]);

    //returns a list of all user profiles
    return (
    <>
    <div class="container pt-5">
        <Table striped class="table table-striped">
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
                    {userPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userProfile.fullName}</td>
                            <td>{post.title}</td>
                            <td>{post.category.name}</td>
                            <td>{post.publishDateTime}</td>
                    <td>
                        <div class="function-container">
                        <a href="/" class="btn btn-outline-secondary mx-1" title="Details">
                            <EyeFill />
                        </a>
                        <a href="/" class="btn btn-outline-secondary mx-1" title="Edit">
                            <PencilFill />
                        </a>
                        <a href="/" class="btn btn-outline-secondary mx-1" title="Delete">
                            <TrashFill/>
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