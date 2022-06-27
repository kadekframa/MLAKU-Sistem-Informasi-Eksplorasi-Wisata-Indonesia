import React, { useState, useEffect } from 'react';
import './object-tourism.css';
import { getAllObjectTourism } from '../../utils/ObjectTourismHandler';
import { createObjectTourismList, addObjectTourismButtonCreator } from '../../utils/templates/ObjectTourismListHelper';

const ObjectTourism = () => {
  const [dataObjectTourism, setDataObjectTourism] = useState([]);

  useEffect(() => {
    getAllObjectTourism()
      .then(response => {
        setDataObjectTourism(response.data);
      })
  })

  const objectTourismList = createObjectTourismList(dataObjectTourism);
  const addObjectTourismButton = addObjectTourismButtonCreator();

  
  return (
    <main className='container object-tourism-wrapper'>
      <div className='text-center mb-4'>
        <h1 className='fw-normal'>Object Tourism</h1>
      </div>

      <div className='d-flex justify-content-end mb-4'>
        { addObjectTourismButton }
      </div>

      <div className='row'>
        { objectTourismList }
      </div>
    </main>
  )
}

export default ObjectTourism;
