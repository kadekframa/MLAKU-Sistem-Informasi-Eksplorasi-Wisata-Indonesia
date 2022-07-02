import React from 'react';
import { Link } from 'react-router-dom';
import './province-card.css';

const ProvinceCard = (props) => {
    const {province, url, bg_image} = props;
    return (
        <div className='card-wrapper m-auto'>
            <Link className='link-url' to={url}>
                <div className={bg_image}>
                    <div className='text-overlay'>
                        <h3 className='text'>{province}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProvinceCard;
