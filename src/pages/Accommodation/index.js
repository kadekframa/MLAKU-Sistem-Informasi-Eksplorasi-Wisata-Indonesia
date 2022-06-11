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

      <div class="containerCard">
        <div class="box">
          <div class="text">
            <h1>Bali</h1>
            <p>Pantai Kuta</p>
          </div>
        </div>
        <div class="box two">
          <div class="text">
            <h1>Gunung Semeru</h1>
            <p>Malang</p>
          </div>
        </div>
        <div class="box three">
          <div class="text">
            <h1>Candi Borobudur </h1>
            <p>Magelang</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Accommodation;
