import React from 'react';
import {BrowserRouter as Router, Routes as Swicth, Route} from 'react-router-dom';
import {Navigation, Footer} from '../../components';
import {About, Home, ObjectTourism} from '..';

const MainApp = () => {
  return (
    <div>
      <Navigation />
        <div>
            <Router>
                <Swicth>
                    <Route path='/' element={<Home />} exact />
                    <Route path='/object-tourism' element={<ObjectTourism />} />
                    <Route path='/culinary' element={<Home />} />
                    <Route path='/accommodation' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                </Swicth>
            </Router>
        </div>
      <Footer />
    </div>
  )
}

export default MainApp;