import React from "react";
import {BrowserRouter as Router, Routes as Swicth, Route,} from "react-router-dom";
import { MainApp, Login, Register } from '../../pages';

const Routes = () => {
  return (
    <Router>
        <Swicth>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<MainApp />} />
        </Swicth>
    </Router>
  )
}

export default Routes;
