import React from "react";
import { Button } from "reactstrap";
import { deleteObjectTourism } from "../ObjectTourismHandler";

const actionButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-object-tourism/${data._id}`}>
                <button type="button" class="btn btn-warning me-md-4" >Edit</button>
            </a>
            <button type="button" class="btn btn-danger" onClick={() => deleteObjectTourism(data._id)}>Delete</button>
        </>
    )
}

export { actionButtonCreator };