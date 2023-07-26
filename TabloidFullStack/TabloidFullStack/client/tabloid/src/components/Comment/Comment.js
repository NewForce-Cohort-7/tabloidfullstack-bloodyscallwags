import { CardBody, Button } from "reactstrap"
import { useNavigate } from "react-router-dom";
import { deleteComment } from "../../Managers/CommentManager.js";
import { useParams } from "react-router-dom";

export const Comment = ({ commentProp, getComments }) => {

    const { id } = useParams();

    const commentDateTime = new Date(commentProp.createDateTime);
    const formattedDate = commentDateTime.toLocaleDateString();

    const localTabloidUser = localStorage.getItem("userProfile");
    const tabloidUserObject = JSON.parse(localTabloidUser);

    const navigate = useNavigate();

    const handleDeleteButton = (e) => {
        e.preventDefault();
        const results = (window.confirm('Are you sure you want to delete your comment?'))
        if (results) {
            deleteComment(commentProp.id)
                .then(() => {
                    getComments(id)
                })
                .then(navigate(`/comments/${id}`))
        };
    };

    return (
        <CardBody>
            <div>
                {/* bold text using inline style */}
                <div> <span style={{ fontWeight: "bold" }}>Subject:</span> {commentProp.subject} </div>

                {/* bold text using react strap class */}
                <div> <span className="fw-bold">Author:</span> {commentProp.userProfile.displayName}</div>

                {/* bold text using strong */}
                <div> <strong>Date:</strong> {formattedDate}</div>

                <div> {commentProp.content}</div>

                {(tabloidUserObject.id === commentProp.userProfileId) ?
                    <Button color="danger" onClick={handleDeleteButton}>Delete</Button>
                    : <></>}
            </div>
        </CardBody>
    )
}