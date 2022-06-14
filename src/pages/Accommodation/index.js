import React from 'react';
import './Accommodation.css';
import Input from '../../components/atoms/search-bar';
import Button from '../../components/atoms/Add-Button';

const Accommodation = () => {
  return (
    <div className='main'>

      <div className='hero_text'>
        <h1 className='hero_title'>Temukan Penginapan di seluruh Indonesia</h1>
        <p className='hero_tagline'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>

      <div className='barContainerAccomodation'>

        <Input placeholder="Search.." type="text" />
        <Button children="Tambah" />

      </div>

      <div className='containerCardAccommodation'>

        <div className='boxAccommodation'>
          <div className='textAccommodation'>
            <h1>Hotel Century</h1>
            <p>Jakarta</p>
          </div>
        </div>

        <div className='boxAccommodation two'>
          <div className='textAccommodation'>
            <h1>Hotel Tentrem</h1>
            <p>Semarang</p>
          </div>
        </div>

        <div className='boxAccommodation three'>
          <div className='textAccommodation'>
            <h1>Pacific Palace Hotel</h1>
            <p>Batam</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Accommodation;
