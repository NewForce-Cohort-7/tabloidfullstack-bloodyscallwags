import React, { useEffect, useState } from "react";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { getAllTags } from "../../Managers/TagManager";

const TagList = () => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    getAllTags().then(tagsFromAPI => setTags(tagsFromAPI));
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <>
        <Button tag={Link} to="/tag-form" color="primary" className="mb-2">
            Add Tag
        </Button>
        <Table striped size="sm" className="table1_index" id="tagTable">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Tag Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tags.map(tag => (
                    <tr key={tag.id}>
                        <th scope="row">{tag.id}</th>
                        <td>{tag.name}</td>
                        <td>
                            <Link to={`/tags/edit/${tag.id}`}>
                                <Button color="primary" className="mr-2">Edit</Button>
                            </Link>
                            <Link to={`/tags/delete/${tag.id}`}>
                                <Button color="danger">Delete</Button>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </>
  );
}

export default TagList;
