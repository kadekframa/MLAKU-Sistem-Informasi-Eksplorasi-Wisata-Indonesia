import React from 'react'
import './styles/objectTourism.css'
import Input from '../../components/atoms/search-bar';


const ObjectTourism = () => {
  return (
    <div className='main'>
      <div className='hero_text'>
        <h1 className='hero_title'>Objek Wisata Terbaik di Indonesia</h1>
        <p className='hero_tagline'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>

      <div className='barContaineroBbjectTourism'>

        <Input placeholder="Search.." type="text" />


        <div className='add-box-objectTourism'>
          <Input placeholder="Search.." type="text" />
        </div>
      </div>

      <div className='containerCardObjectTourism'>
        <div className='boxs'>
          <div className='text-objectTourism'>
            <h1>Pantai Kuta</h1>
            <p>Bali</p>
          </div>
        </div>

        <div className='boxs two-objectTourism'>
          <div className='text-objectTourism'>
            <h1>Candi Borobudur </h1>
            <p>Magelang</p>
          </div>
        </div>

        <div className='boxs three-objectTourism'>
          <div className='text-objectTourism'>
            <h1>Gunung Semeru</h1>
            <p>Malang</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ObjectTourism;
