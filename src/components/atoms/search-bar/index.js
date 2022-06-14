import React from 'react';
import './search-bar.css'

const SearchBar = (props) => {
    return (
        <div className='search-component'>
            <input placeholder={props.placeholder} type={props.type} />
        </div>
    )
}

export default SearchBar;
;