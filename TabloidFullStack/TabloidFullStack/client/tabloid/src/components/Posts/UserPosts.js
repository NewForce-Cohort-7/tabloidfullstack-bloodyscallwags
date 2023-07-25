import React, { useState, useEffect } from "react";
import { getUserPosts } from "../../Managers/PostManager";
import { Table } from "reactstrap";
import "./Posts.css"
import { EyeFill } from "react-bootstrap-icons";
import { PencilFill} from "react-bootstrap-icons"
import { TrashFill} from "react-bootstrap-icons"


export const UserPosts = () => {

    const localUser = localStorage.getItem("userProfile")
    const userObject = JSON.parse(localUser)

    const [userPosts, setUserPosts] = useState([]);

        console.log(userObject.id)
    useEffect(() => {
        getUserPosts(userObject.id)
            .then((data) => 
            {setUserPosts(data);
            })
            .catch((error) => {
                console.log("Error fetching user posts:", error);
            });
    }, [userObject.id]);

    //returns a list of all user profiles
    return (
    <>
    <div className="container pt-5">
        <Table striped className="table table-striped">
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Creation Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {userPosts.map((post) => (
                        <tr key={post.id}>
                            <td>{post.userProfile.fullName}</td>
                            <td>{post.title}</td>
                            <td>{post.category.name}</td>
                            <td>{post.createDateTime}</td>
                    <td>
                        <div className="function-container">
                        <a href="/" className="btn btn-outline-secondary mx-1" title="Details">
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
                    ))}
            </tbody>
        </Table>
        </div>
    </>
    );
};