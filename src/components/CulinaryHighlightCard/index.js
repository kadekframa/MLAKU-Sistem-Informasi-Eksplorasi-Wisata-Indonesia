import React from 'react';
import { Link } from 'react-router-dom';
import './culinary-highlight-card.css';

const CulinaryHighlightCard = (props) => {
    const {culinaryName, url, bg_image} = props;
    return (
        <div className='culinary-card-wrapper m-auto'>
            <Link className='link-url' to={url}>
                <div className={bg_image}>
                    <div className='text-overlay'>
                        <h3 className='text'>{culinaryName}</h3>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CulinaryHighlightCard;
