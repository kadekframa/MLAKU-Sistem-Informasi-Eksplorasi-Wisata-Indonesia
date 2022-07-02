import React from "react";
import { Button } from "reactstrap";
import { deleteCulinary } from "../CulinaryHandler";

const actionButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-culinary/${data._id}`}>
                <button type="button" class="btn btn-warning me-4" >Edit</button>
            </a>
            <button type="button" class="btn btn-danger" onClick={() => deleteCulinary(data._id)}>Delete</button>
        </>
    )
}

export { actionButtonCreator };