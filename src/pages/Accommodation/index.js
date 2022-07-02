import React, { useState, useEffect } from 'react';
import './Accommodation.css';
import { getAllAccomodation } from '../../utils/AccomodationHandler';
import { createAccomodationList, addAccomodationButtonCreator } from '../../utils/templates/AccomodationListHelper';
import { accomodationIllustration } from '../../assets'
import Gap from '../../components/atoms/Gap';

const Accomodation = () => {
  const [dataAccomodation, setDataAccomodation] = useState([]);

  useEffect(() => {
    getAllAccomodation()
      .then(response => {
        setDataAccomodation(response.data);
      })
  })

  const accomodationList = createAccomodationList(dataAccomodation);
  const addAccomodationButton = addAccomodationButtonCreator();


  return (
    <main className='container accomodation-wrapper'>
      <section id="accomodationHero">
        <div className="container">
          <div className="row accomodation-hero-wrapper mt-4 justify-content-between">
            <div className="col-md-5">
              <img className='img-fluid accomodation-hero-img' src={accomodationIllustration} alt="Accomodation Ilustrasi" />
            </div>
            <div className="col-md-7 pe-3 d-flex flex-column justify-content-center">
              <h1 className='fw-bold'>Temukan Accomodation Favoritmu Hanya Disini </h1>
              <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint harum laboriosam ipsa sit quia placeat molestiae autem doloremque incidunt reprehenderit optio neque at culpa, qui illum hic distinctio aliquid! Enim!</p>
            </div>
          </div>
        </div>
      </section>
      <Gap height={40} />

      <section id='accomodationWrapper'>
        <div className='text-center mb-4'>
          <h1 className='fw-bold'>Accomodation</h1>
        </div>

        <div className='d-flex justify-content-end mb-4'>
          {addAccomodationButton}
        </div>

        <div className='row'>
          {accomodationList}
        </div>
      </section>
    </main>
  )
}

export default Accomodation;