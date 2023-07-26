import { useEffect, useState } from "react";
import { getCommentsByPostId } from "../../Managers/CommentManager.js";
import { Button, Card, Col, Container, Row } from "reactstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Comment } from "./Comment.js";
import { getUserPosts } from "../../Managers/PostManager.js";


export const CommentList = () => {

    const { id } = useParams();

    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser);

    const navigate = useNavigate();

    const [comments, setComments] = useState([]);
    const [post, setPost] = useState([]);

    const getComments = (id) => {
        getCommentsByPostId(id)
            .then(allComments => setComments(allComments));
    };

    useEffect(() => {
        getComments(id);
    }, [])

    const getPost = (id) => {
        getUserPosts(id)
            .then(post => setPost(post));
    };

    useEffect(() => {
        getPost(id);
    }, [])



    return (
        <>
            <Container>

                <Link to={`/posts/${id}`}>
                    <strong className="comment-title">{post.title}</strong>
                </Link>

                <Row className="comment-row">
                    {comments.map((comment) => (
                        <>
                            <Col md={6} lg={4} key={comment.id}>
                                <Card className="comment-card">
                                    <Comment commentProp={comment} getComments={getComments} />
                                </Card>
                            </Col>
                        </>
                    ))}
                </Row>
            </Container>
        </>
    )
}