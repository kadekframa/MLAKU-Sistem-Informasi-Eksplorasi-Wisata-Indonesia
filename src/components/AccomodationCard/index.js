import React from 'react';
import './accomodation-card.css';

const AccomodationCard = (props) => {
    const { accomodation_name, address, image, _id } = props;
    return (
        <div className='component-wrapper-accomodation'>
            <div className='img-wrapper-accomodation'>
                <a href={`/detail-accomodation/${_id}`}>
                    <img src={image} alt={accomodation_name} title={`Gambar Suasana Objek Wisata ${accomodation_name}`} />
                </a>
                <div className='text-wrapper-accomodation'>
                    <a href={`/detail-accomodation/${_id}`}>
                        <p className='accomodation-name'>{accomodation_name}</p>
                    </a>
                    <p className='culinary-addres'>{address}</p>
                </div>
            </div>
        </div>
    )
}

export default AccomodationCard;
