import React, { useState } from 'react'
import { Button, Form, Input } from 'reactstrap'
import Gap from '../../components/atoms/Gap';
import Logo from '../../assets/images/mlaku-logo.png';

import { registerUser } from '../../utils/AuthHandler'
import "./register.css"


const Register = (props) => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = {
      fullname,
      username,
      email,
      password,
    };

    registerUser(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <div className='register-wrapper'>
      <div className='left'>
        <div className='overlay'></div>
        <div className='brand-name'>
          <img className='logo' src={Logo} alt="Logo Mlaku" title='Mlaku Logo' />
          <h1>Mlaku</h1>
          <p>Indonesia Tourism Exploration Information System</p>
        </div>
        <img src="https://placeimg.com/640/480/nature" alt="background log-in" />
      </div>
      <div className='right'>
        <div className='form-register-wrapper'>
          <h1>Register</h1>
          <p className='register-desc'>Silahkan register terlebih dahulu!</p>
          <Form>
            <Gap height={20} />
            <Input id="name" placeholder='Fullname' name="name" type="text" onChange={(e) => setFullname(e.target.value)} />
            <Gap height={20} />
            <Input id="username" placeholder='Username' name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Gap height={20} />
            <Input id="email" placeholder='Email' name="email" type="text" onChange={(e) => setEmail(e.target.value)} />
            <Gap height={20} />
            <Input id="password" placeholder='Password' name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Gap height={20} />
            <div className="d-grid mt-2 mb-4">
              <Button color="primary" onClick={onSubmit}>Daftar</Button>
            </div>
            <p className='m-0'>Sudah punya akun? &nbsp;
              <a href="/register">Login</a> &nbsp;&nbsp;
              <a href="/">Back to Home</a>
            </p>

          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register
