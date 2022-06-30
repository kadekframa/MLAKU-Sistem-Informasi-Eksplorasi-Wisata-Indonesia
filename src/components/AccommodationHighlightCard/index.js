import React from 'react';
import { Link } from 'react-router-dom';
import './accommodation-highlight-card.css';

const AccommodationHighlightCard = (props) => {
    const {accommodationName, url, bg_image} = props;
    return (
        <div className='acommodation-card-wrapper'>
            <Link className='link-url' to={url}>
                <div className={bg_image}>
                    <div className='text-overlay'>
                        <h3 className='text'>{accommodationName}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default AccommodationHighlightCard;
