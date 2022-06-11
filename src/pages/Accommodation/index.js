import React from 'react';
import './Accommodation.css';

const Accommodation = () => {
  return (
    <div className='main'>
      <div class="hero_text">
        <h1 class="hero_title">Temukan Penginapan di seluruh Indonesia</h1>
        <p class="hero_tagline">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>

      <div class="barContainer">
        {/* <div class="search-box">
          <input class="input" type="text" placeholder="Search..." />
        </div>


        <div class="addBox">
          <a href="##" id="icon">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div> */}
      </div>

      <div class="containerCardAccommodation">
        <div class="boxAccommodation">
          <div class="textAccommodation">
            <h1>Hotel Century</h1>
            <p>Jakarta</p>
          </div>
        </div>
        <div class="boxAccommodation two">
          <div class="textAccommodation">
            <h1>Hotel Tentrem</h1>
            <p>Semarang</p>
          </div>
        </div>
        <div class="boxAccommodation three">
          <div class="textAccommodation">
            <h1>Pacific Palace Hotel</h1>
            <p>Batam</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Accommodation;
