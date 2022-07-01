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
  DetailCulinary,
  Accommodation,
  AddAccomodation,
  About
} from '../';
import './mainApp.css';

const MainApp = (props) => {
  return (
    <div className='main-app-wrapper'>
      <Navigation user={props.user} />
      <div className='content-route-wrapper'>
        <Swicth>
          <Route exact path='/' element={<Home />} />

          <Route path='/object-tourism' element={<ObjectTourism />} />
          <Route path='/add-object-tourism/:id' element={<AddObjectTourism user={props.user} />} />
          <Route path='/add-object-tourism/' element={<AddObjectTourism user={props.user} />} />
          <Route path='/detail-object-tourism/:id' element={<DetailObjectTourism user={props.user} />} />

          <Route path='/culinary' element={<Culinary />} />
          <Route path='/add-culinary/:id' element={<AddCulinary user={props.user} />} />
          <Route path='/add-culinary/' element={<AddCulinary  user={props.user}/>} />
          <Route path='/detail-culinary/:id' element={<DetailCulinary user={props.user} />} />

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