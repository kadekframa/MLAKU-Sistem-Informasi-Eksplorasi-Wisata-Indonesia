import React from "react";
import { Button } from "reactstrap";
import { deleteAccomodation } from "../AccomodationHandler";

const actionAccomodationButtonCreator = (data) => {
    return (
        <>
            <a href={`/add-accomodation/${data._id}`}>
                <Button>Edit</Button>
            </a>
            <Button onClick={() => deleteAccomodation(data._id)}>Delete</Button>
        </>
    )
}

export { actionAccomodationButtonCreator };