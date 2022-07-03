import React, { useState, useEffect } from 'react';
import './culinary.css';
import { getAllCulinary } from '../../utils/CulinaryHandler';
import { createCulinaryList, addCulinaryButtonCreator } from '../../utils/templates/CulinaryListHelper';
import { culinaryIllustration } from '../../assets'
import Gap from '../../components/atoms/Gap';

const Culinary = (props) => {
  const [dataCulinary, setDataCulinary] = useState([]);

  useEffect(() => {
    getAllCulinary()
      .then(response => {
        setDataCulinary(response.data);
      })
  })

  let addCulinaryButton;
  if (props.user) {
    addCulinaryButton = addCulinaryButtonCreator();
  }
  const culinaryList = createCulinaryList(dataCulinary);


  return (
    <main className='container culinary-wrapper'>
      <section id="culnaryHero">
        <div className="container">
          <div className="row culinary-hero-wrapper mt-4 justify-content-between">
            <div className="col-md-5">
              <img className='img-fluid culinary-hero-img' src={culinaryIllustration} alt="Kuliner Ilustrasi" />
            </div>
            <div className="col-md-7 pe-3 d-flex flex-column justify-content-center">
              <h1 className='fw-bold'>Temukan Kuliner Favoritmu Hanya Disini </h1>
              <p className='text-secondary'>"Makanan adalah segalanya bagi kita. Ini merupakan perpanjangan dari perasaan nasionalis, perasaan etnis, sejarah pribadimu, provinsimu, daerahmu, sukumu, nenekmu. Itu tidak dapat dipisahkan sejak awal." <strong> Anthony Bourdain </strong> </p>
            </div>

          </div>
        </div>
      </section>
      <Gap height={40} />
      <section id='culinaryWrapper'>
        <div className='text-center mb-4'>
          <h1 className='fw-bold'>Culinary</h1>
        </div>

        <div className='d-flex justify-content-end mb-4'>
          {addCulinaryButton}
        </div>

        <div className='row'>
          {culinaryList}
        </div>
      </section>
    </main>
  )
}

export default Culinary;
