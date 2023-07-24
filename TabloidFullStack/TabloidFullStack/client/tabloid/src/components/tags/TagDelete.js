import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteTag, getAllTags } from "../../Managers/TagManager";

export const DeleteTag = () => {

  const { tagId } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteTag(tagId).then(() => {
      // Refresh tags after delete
      getAllTags();
      navigate("/tags"); 
    });
  }
  
  return (
    <div>
      <p>Are you sure you want to delete this tag?</p> 
      <button onClick={handleDelete}>Delete</button>
    </div>
  )

}