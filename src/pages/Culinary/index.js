import React from 'react';
import './styles/Culinary.css';

const Culinary = () => {
  return (
    <div className='main'>
      <div className='hero_text'>
        <h1 className="hero_title">Rasakan Wisata Kuliner Indonesia</h1>
        <p className="hero_tagline">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
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

      <div class="containerCardCulinary">
        <div class="box">
          <div class="textCulinary">
            <h1>Bakso</h1>
            <p>Solo</p>
          </div>
        </div>
        <div class="box two-Culinary">
          <div class="textCulinary">
            <h1>Kwetiau Goreng</h1>
            <p>Malang</p>
          </div>
        </div>
        <div class="box three-Culinary">
          <div class="textCulinary">
            <h1>Nasi Goreng </h1>
            <p>Magelang</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Culinary;
