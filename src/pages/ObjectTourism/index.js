import React, { useState, useEffect } from 'react';
import './object-tourism.css';
import { getAllObjectTourism } from '../../utils/ObjectTourismHandler';
import { createObjectTourismList, addObjectTourismButtonCreator } from '../../utils/templates/ObjectTourismListHelper';
import {Spinner} from 'reactstrap';
import { objecttourismIllustration } from '../../assets'
import Gap from '../../components/atoms/Gap';

const ObjectTourism = (props) => {
  const [dataObjectTourism, setDataObjectTourism] = useState([]);
  const [isBerhasil, setIsBerhasil] = useState('');

  useEffect(() => {
    getAllObjectTourism()
      .then(response => {
        setIsBerhasil(response.message);
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
      <Gap height={70} />

      <section id='objectTourismWrapper'>
        <div className='text-center mb-4'>
          <h1 className='fw-bold title'>Objects Tourism</h1>
        </div>

        
        {isBerhasil === 'Data Object Tourism Berhasil Dipanggil' ? (
          <div className='row'>
            <div className='d-flex justify-content-center my-4 mb-5'>
              {addObjectTourismButton}
            </div>
            {objectTourismList}
          </div>
        ) : (
          <div className='d-flex row justify-content-center mt-5'>
            <Spinner>
                Loading...
            </Spinner>
          </div>
        )}
      </section>
    </main>
  )
}

export default ObjectTourism;
