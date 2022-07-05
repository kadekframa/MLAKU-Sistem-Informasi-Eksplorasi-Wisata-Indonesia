import React from 'react';
import './object-tourism-card.css';

const ObjectTourismCard = (props) => {
  const { dest_name, address, image, _id } = props;
  return (
    <div className='component-wrapper-object-tourism'>
      <div className='img-wrapper-object-tourism'>
        <a href={`detail-object-tourism/${_id}`}>
          <img src={image} alt={dest_name} title={`Gambar Suasana Objek Wisata ${dest_name}`} />
        </a>
      </div>
      <a href={`detail-object-tourism/${_id}`}>
        <p className='object-name'>{dest_name}</p>
      </a>
      <p className='object-addres'>{address}</p>
    </div>
  )
}

export default ObjectTourismCard;
