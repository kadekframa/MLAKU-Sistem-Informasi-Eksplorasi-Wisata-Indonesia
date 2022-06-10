import React from 'react';
import Input from '../../components/atoms/Input';
import Gap from '../../components/atoms/Gap';
import Button from '../../components/atoms/Button';
import Logo from '../../assets/images/mlaku-logo.png';
import './Login.css'

const Login = () => {
  return (
    <div className='login-wrapper'>
        <div className='left'>
          <div className='overlay'></div>
          <div className='brand-name'>
            <img className='logo' src={Logo} alt="Logo Mlaku" title='Mlaku Logo'/>
            <h1>Mlaku</h1>
            <p>Sistem Informasi Ekplorasi Wisata Indonesia</p>
          </div>
          <img src="https://placeimg.com/640/480/nature" alt="background log-in" />
        </div>
        <div className='right'>
          <div className='form-login-wrapper'>
            <h1>Login</h1>
            <p className='login-desc'>Silahkan login terlebih dahulu!</p>
            <Gap height={20} />
            <Input placeholder="Username" type="text" />
            <Gap height={15} />
            <Input placeholder="Password" type="password" />
            <Gap height={36} />
            <Button children="Login" />
            <Gap height={10} />
            <p className='sign-up'>Belum punya akun? <a href="/register">Sign Up</a></p>
            <Gap height={100} />
          </div>
        </div>
      </div>
  );
}

export default Login;