import React from 'react';
import './add-button.css';

const AddButton = (props) => {
    return (
        <div>
            <button className='addbutton-component'>{props.children}</button>
        </div>
    )
}

export default AddButton;
