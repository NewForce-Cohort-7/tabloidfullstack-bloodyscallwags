import React from "react";
import { Card, CardBody } from "reactstrap";

export const Tag = ({ tag }) => {


    return (
        <Card>
            <CardBody>
                <p>{tag.name}</p>
            </CardBody>
        </Card>
    )
}

export default Tag;