import React from 'react';
import './object-tourism-card.css';

const ObjectTourismCard = ({ name, image, address, id }) => {
  return (
    <div className='component-wrapper'>
        <div className='img-wrapper'>
            <a href={`/object-tourism/detail/${id}`}>
              <img src={image} alt="Gambar Object Wisata" title='Gambar Suasana Objek Wisata' />
            </a>
        </div>
        <a href={`/object-tourism/detail/${id}`}>
          <p className='object-name'>{name}</p>
        </a>
        <p className='addres'>{address}.</p>
    </div>
  )
}

export default ObjectTourismCard;
