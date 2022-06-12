import React from 'react'
import './styles/objectTourism.css'


const ObjectTourism = () => {
  return (
    <div className='main'>
      <div class="hero_text">
        <h1 class="hero_title">Objek Wisata Terbaik di Indonesia</h1>
        <p class="hero_tagline">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      </div>
      <div class="barContainer">
        {/* <div class="search-box">
          <input class="input" type="text" placeholder="Search..." />
          <a href="##" class="icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </div>

        <div class="addBox">
          <a href="##" id="icon">
            <i class="fa-solid fa-plus"></i>
          </a>
        </div> */}
      </div>

      <div class="containerCardObjectTourism">
        <div class="boxs">
          <div class="text-objectTourism">
            <h1>Pantai Kuta</h1>
            <p>Bali</p>
          </div>
        </div>
        <div class="boxs two-objectTourism">
          <div class="text-objectTourism">
            <h1>Candi Borobudur </h1>
            <p>Magelang</p>

          </div>
        </div>

        <div class="boxs three-objectTourism">
          <div class="text-objectTourism">
            <h1>Gunung Semeru</h1>
            <p>Malang</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ObjectTourism;
