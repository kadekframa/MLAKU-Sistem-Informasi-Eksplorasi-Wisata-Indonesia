import React, { useState, useEffect } from 'react';
import './culinary.css';
import { getAllCulinary } from '../../utils/CulinaryHandler';
import { createCulinaryList, addCulinaryButtonCreator } from '../../utils/templates/CulinaryListHelper';

const Culinary = () => {
  const [dataCulinary, setDataCulinary] = useState([]);

  useEffect(() => {
    getAllCulinary()
      .then(response => {
        setDataCulinary(response.data);
      })
  })

  const culinaryList = createCulinaryList(dataCulinary);
  const addCulinaryButton = addCulinaryButtonCreator();

  
  return (
    <main className='container culinary-wrapper'>
      <div className='tex-center mb-4'>
        <h1 className='fw-normal'>Culinary</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>
        { addCulinaryButton }
      </div>

      <div className='row'>
        { culinaryList }
      </div>
    </main>
  )
}

export default Culinary;
