import React from "react";
import { Button } from "reactstrap";
import { deleteAccomodation } from "../AccomodationHandler";

const actionButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-accomodation/${data._id}`}>
                <button type="button" class="btn btn-warning me-4" >Edit</button>
            </a>
            <button type="button" class="btn btn-danger " onClick={() => deleteAccomodation(data._id)}>Delete</button>
        </>
    )
}

export { actionButtonCreator };