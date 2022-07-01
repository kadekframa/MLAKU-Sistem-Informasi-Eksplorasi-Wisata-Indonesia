import React from "react";
import { Button } from "reactstrap";
import { deleteCulinary } from "../CulinaryHandler";

const actionCulinaryButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-culinary/${data._id}`}>
                <Button>Edit</Button>
            </a>
            <Button onClick={() => deleteCulinary(data._id)}>Delete</Button>
        </>
    )
}

export {actionCulinaryButtonCreator};