import React from 'react';
import Gap from '../../components/atoms/Gap';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import './Register.css'

const Register = () => {
  return (
    <div className='register-wrapper'>
        <div className='left'>
          <div className='overlay'></div>
          <div className='brand-name'>
            <h1>Mlaku</h1>
            <p>Sistem Informasi Ekplorasi Wisata Indonesia</p>
          </div>
          <img src="https://placeimg.com/640/480/nature" alt="background log-in" />
        </div>
        <div className='right'>
          <div className='form-register-wrapper'>
            <h1>Register</h1>
            <p className='register-desc'>Silahkan register terlebih dahulu!</p>
            <Gap height={20} />
            <Input placeholder="Full Name" type="text" />
            <Gap height={15} />
            <Input placeholder="Email" type="email" />
            <Gap height={15} />
            <Input placeholder="Username" type="text" />
            <Gap height={15} />
            <Input placeholder="Password" type="password" />
            <Gap height={36} />
            <Button children="Sign Up" />
            <Gap height={10} />
            <p className='login'>Sudah punya akun? <a href="/login">Login</a></p>
            <Gap height={100} />
          </div>
        </div>
      </div>
  )
}

export default Register;