import React from 'react';
import './culinary-card.css';

const CulinaryCard = (props) => {
  const { culinary_name, address, image, id } = props;
  return (
    <div className='component-wrapper-culinary'>
      <div className='img-wrapper-culinary'>
        <a href={`/detail-culinary/${id}`}>
          <img src={image} alt={culinary_name} title={`Gambar ${culinary_name}`} />
        </a>
      </div>
      <a href={`/detail-culinary/${id}`}>
        <p className='culinary-name'>{culinary_name}</p>
      </a>
      <p className='culinary-addres'>{address}</p>
    </div>
  )
}

export default CulinaryCard;