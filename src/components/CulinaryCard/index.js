import React from 'react';
import './culinary-card.css';

const ObjectTourismCard = (props) => {
  const { culinary_name, address, image, _id } = props;
  return (
    <div className='component-wrapper-culinary'>
      <div className='img-wrapper-culinary'>
        <a href={`/detail-culinary/${_id}`}>
          <img src={image} alt={culinary_name} title={`Gambar Suasana Objek Wisata ${culinary_name}`} />
        </a>
        <div className='text-wrapper-culinary'>
          <a href={`/detail-culinary/${_id}`}>
            <p className='culinary-name'>{culinary_name}</p>
          </a>
          <p className='culinary-addres'>{address}</p>
        </div>
      </div>
    </div>
  )
}

export default ObjectTourismCard;
