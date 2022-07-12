import React, { useState, useEffect } from 'react';
import './Accommodation.css';
import { getAllAccomodation } from '../../utils/AccomodationHandler';
import { createAccomodationList, addAccomodationButtonCreator } from '../../utils/templates/AccomodationListHelper';
import {Spinner} from 'reactstrap';
import { accomodationIllustration } from '../../assets'
import Gap from '../../components/atoms/Gap';

const Accomodation = (props) => {
  const [dataAccomodation, setDataAccomodation] = useState([]);
  const [isBerhasil, setIsBerhasil] = useState('');

  useEffect(() => {
    getAllAccomodation()
      .then(response => {
        setIsBerhasil(response.message);
        setDataAccomodation(response.data);
      })
  })

  let addAccomodationButton;
  if (props.user) {
    addAccomodationButton = addAccomodationButtonCreator();

  }
  const accomodationList = createAccomodationList(dataAccomodation);

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
              <p className='text-secondary'>"Berpergian dengan ditemani orang-orang yang kita cintai adalah sebuah rumah yang bergerak." <strong> Leigh Hunt </strong> </p>
            </div>
          </div>
        </div>
      </section>
      <Gap height={70} />

      <section id='accomodationWrapper'>
        <div className='text-center mb-4'>
          <h1 className='fw-bold'>Accomodations</h1>
        </div>

        
        {isBerhasil === 'Data Accomodation Dipanggil' ? (
          <div className='row'>
            <div className='d-flex justify-content-center my-4 mb-5'>
              {addAccomodationButton}
            </div>
            {accomodationList}
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

export default Accomodation;