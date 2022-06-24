import React from 'react';
import './object-tourism-card.css';

const ObjectTourismCard = (props) => {
  const {dest_name, address, image, id} = props;
  return (
    <div className='component-wrapper'>
        <div className='img-wrapper'>
            <a href={`/object-tourism/detail/${id}`}>
              <img src={image} alt={dest_name} title={`Gambar Suasana Objek Wisata ${dest_name}`}/>
            </a>
        </div>
        <a href={`/object-tourism/detail/${id}`}>
          <p className='object-name'>{dest_name}</p>
        </a>
        <p className='addres'>{address}</p>
    </div>
  )
}

export default ObjectTourismCard;
