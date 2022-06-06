import React from "react";
import {BrowserRouter as Router, Routes as Swicth, Route,} from "react-router-dom";
import { MainApp, Login, Register, ObjectTourism, About, Accommodation } from '../../pages';
import Culinary from "../../pages/Culinary";

const Routes = () => {
  return (
    <Router>
        <Swicth>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<MainApp />} />
                    <Route path='/object' element={<ObjectTourism />} />
                    <Route path='/culinary' element={<Culinary />} />
                    <Route path='/accommodation' element={<Accommodation />} />
                    <Route path='/about' element={<About/>} />
        </Swicth>
    </Router>
  )
}

export default Routes;
