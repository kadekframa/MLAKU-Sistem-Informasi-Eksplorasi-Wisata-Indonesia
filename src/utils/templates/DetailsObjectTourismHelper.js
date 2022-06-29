import React from "react";
import { Button } from "reactstrap";
import { deleteObjectTourism } from "../ObjectTourismHandler";

const actionButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-object-tourism/${data._id}`}>
                <Button>Edit</Button>
            </a>
            <Button onClick={() => deleteObjectTourism(data._id)}>Delete</Button>
        </>
    )
}

export {actionButtonCreator};