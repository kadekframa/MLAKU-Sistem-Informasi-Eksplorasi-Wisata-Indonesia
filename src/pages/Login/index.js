import React, { useState } from 'react'
import Gap from '../../components/atoms/Gap';
import Logo from '../../assets/images/mlaku-logo.png';
import { loginUser } from '../../utils/AuthHandler';
import { Button, Form, Input } from 'reactstrap'
import './login.css';


const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const user = {
      username,
      password,
    };

    loginUser(user);
  }

  if (props.user) {
    return window.location.href = '/';
  }

  return (
    <div className='login-wrapper'>
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
        <div className='form-login-wrapper'>
          <h1>Login</h1>
          <p className='login-desc'>Silahkan login terlebih dahulu!</p>
          <Form>
            <Gap height={20} />
            <Input id="username" placeholder='Username' name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <Gap height={20} />
            <Input id="password" placeholder='Password' name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Gap height={20} />
            <div className="d-grid mt-2 mb-4">
              <Button color="primary" onClick={onSubmit}>Masuk</Button>
            </div>
            <p className='m-0'>Belum punya akun? &nbsp;
              <a href="/register">Register</a> &nbsp;&nbsp;
              <a href="/">Back to Home</a>
            </p>

          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;