import React from 'react';
import { Routes as Swicth, Route } from 'react-router-dom';
import { Navigation, Footer } from '../../components';
import {
  Home,
  ObjectTourism,
  AddObjectTourism,
  DetailObjectTourism,
  Culinary,
  AddCulinary,
  Accommodation,
  AddAccomodation,
  About
} from '../';

const MainApp = (props) => {
  return (
    <div>
      <Navigation user={props.user} />
      <div>
        <Swicth>
          <Route exact path='/' element={<Home />} />

          <Route path='/object-tourism' element={<ObjectTourism />} />
          <Route path='/add-object-tourism/:id?' element={<AddObjectTourism />} />
          <Route path='/detail-object-tourism/:id' element={<DetailObjectTourism />} />

          <Route path='/culinary' element={<Culinary />} />
          <Route path='/culinary/add' element={<AddCulinary />} />
          <Route path='/culinary/:id' element={<AddObjectTourism />} />

          <Route path='/accommodation' element={<Accommodation />} />
          <Route path='/accomodation/add' element={<AddAccomodation />} />

          <Route path='/about' element={<About />} />
        </Swicth>
      </div>
      <Footer />
    </div>
  )
}

export default MainApp;