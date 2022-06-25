import React from 'react';
import './culinary-card.css';

const ObjectTourismCard = (props) => {
  const {culinary_name, address, image, _id} = props;
  return (
    <div className='component-wrapper'>
        <div className='img-wrapper'>
            <a href={`/culinary/${_id}`}>
              <img src={image} alt={culinary_name} title={`Gambar Suasana Objek Wisata ${culinary_name}`}/>
            </a>
        </div>
        <a href={`/culinary/${_id}`}>
          <p className='culinary-name'>{culinary_name}</p>
        </a>
        <p className='addres'>{address}</p>
    </div>
  )
}

export default ObjectTourismCard;
