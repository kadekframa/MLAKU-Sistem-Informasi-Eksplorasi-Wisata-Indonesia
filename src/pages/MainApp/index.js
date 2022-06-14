import React from 'react';
import { Routes as Swicth, Route } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import { About, Home, ObjectTourism, Culinary, Accommodation, AddObjectTourism, AddCulinary, AddAccomodation } from '..';

const MainApp = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Swicth>
          <Route exact path='/' element={<Home />} />
          <Route path='/object-tourism' element={<ObjectTourism />} />
          <Route path='/add-object-tourism' element={<AddObjectTourism />} />
          <Route path='/culinary' element={<Culinary />} />
          <Route path='/add-culinary' element={<AddCulinary />} />
          <Route path='/accommodation' element={<Accommodation />} />
          <Route path='/add-accomodation' element={<AddAccomodation />} />
          <Route path='/about' element={<About />} />
        </Swicth>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp;