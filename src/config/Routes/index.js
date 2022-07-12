import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes as Swicth, Route,} from "react-router-dom";
import { MainApp, Login, Register } from '../../pages';
import Axios from 'axios';

const Routes = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState();

  useEffect(() => {
    const getUserAuth = async () => {
      const response = await Axios.get('https://mlaku-api.herokuapp.com/v1/auth/user', {
        withCredentials: true,
      })

      const user = response.data;
      setAuthenticatedUser(user);
    }

    getUserAuth();
  })



  return (
    <Router>
        <Swicth>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<MainApp user={authenticatedUser} />} />
        </Swicth>
    </Router>
  )
}

export default Routes;
