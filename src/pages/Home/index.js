import React from 'react';
import { Link } from 'react-router-dom';
import ImageBorobudur from '../../assets/images/borobudur.jpg';
import ImagePantai from '../../assets/images/pantaikuta.jpg';
import ImageSemeru from '../../assets/images/mount-semeru-indonesia-wallpaper-preview.jpg';

import ImageBakso from '../../assets/images/bakso.jpeg';
import ImageKwetiau from '../../assets/images/kwetiaw.jpg';

import ImageHotel from '../../assets/images/pacifichotel.jpg';
import ImageHotel2 from '../../assets/images/hoteltentram.jpg';
import ImageHotel3 from '../../assets/images/pacifichotel.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className='home-page-wrapper'>
      <h1 className='heading-home'>Destination Highlight</h1>
      <div className='highlight-wrapper'>
        <img className='image-destination-highlight' src={ImageBorobudur} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImagePantai} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImageSemeru} alt="Destination highlight" />
      </div>
      
      
      <h1 className='heading-home'>Culinary Highlight</h1>
      <div className='highlight-wrapper'>
        <img className='image-destination-highlight' src={ImageKwetiau} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImageBakso} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImageBakso} alt="Destination highlight" />
      </div>
      
      <h1 className='heading-home'>Accommodation Highlight</h1>
      <div className='highlight-wrapper'>
        <img className='image-destination-highlight' src={ImageHotel} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImageHotel2} alt="Destination highlight" />
        <img className='image-destination-highlight' src={ImageHotel} alt="Destination highlight" />
      </div>
    </div>
  )
}

export default Home;