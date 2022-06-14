import React from 'react';
import './styles/Culinary.css';
import Input from '../../components/atoms/search-bar';

const Culinary = () => {
  return (
    <div className='main'>
      <div className='hero_text'>
        <h1 className='hero_title'>Rasakan Wisata Kuliner Indonesia</h1>
        <p className='hero_tagline'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div className='barContainerCulinary'>
        <Input placeholder="Search.." type="text" />
      </div>

      <div className='containerCardCulinary'>

        <div className='box'>
          <div className='textCulinary'>
            <h1>Bakso</h1>
            <p>Solo</p>
          </div>
        </div>

        <div className='box two-Culinary'>
          <div className='textCulinary'>
            <h1>Kwetiau Goreng</h1>
            <p>Malang</p>
          </div>
        </div>

        <div className='box three-Culinary'>
          <div className=' textCulinary'>
            <h1>Nasi Goreng </h1>
            <p>Magelang</p>
          </div>
        </div>

      </div>
    </div >
  )
}

export default Culinary;
