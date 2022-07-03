import React, { useState, useEffect } from 'react';
import './object-tourism.css';
import { getAllObjectTourism } from '../../utils/ObjectTourismHandler';
import { createObjectTourismList, addObjectTourismButtonCreator } from '../../utils/templates/ObjectTourismListHelper';
import { objecttourismIllustration } from '../../assets'
import Gap from '../../components/atoms/Gap';

const ObjectTourism = (props) => {
  const [dataObjectTourism, setDataObjectTourism] = useState([]);

  useEffect(() => {
    getAllObjectTourism()
      .then(response => {
        setDataObjectTourism(response.data);
      })
  })

  let addObjectTourismButton;
  if (props.user) {
    addObjectTourismButton = addObjectTourismButtonCreator();
  }

  const objectTourismList = createObjectTourismList(dataObjectTourism);


  return (
    <main className='container object-tourism-wrapper'>
      <section id="objectTourismHero">
        <div className="container">
          <div className="row objectTourism-hero-wrapper mt-4 justify-content-between">
            <div className="col-md-7 pe-3 d-flex flex-column justify-content-center">
              <h1 className='fw-bold title'>Temukan Wisata Favoritmu Hanya Disini </h1>
              <p className='text-secondary'>"Traveling itu seperti universitas tanpa akhir. Anda tidak pernah berhenti belajar." <strong> Harvey Lloyd </strong> </p>
            </div>
            <div className="col-md-5">
              <img className='img-fluid objectTourism-hero-img' src={objecttourismIllustration} alt="Object Tourism Ilustrasi" />
            </div>
          </div>
        </div>
      </section>
      <Gap height={40} />

      <section id='objectTourismWrapper'>
        <div className='text-center mb-4 '>
          <h1 className='fw-bold title'>Object Tourism</h1>
        </div>

        <div className='d-flex justify-content-end mb-4'>
          {addObjectTourismButton}
        </div>

        <div className='row'>
          {objectTourismList}
        </div>
      </section>
    </main>
  )
}

export default ObjectTourism;
