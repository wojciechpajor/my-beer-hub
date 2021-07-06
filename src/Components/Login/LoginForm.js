import React from 'react';
import ValidateLogin from './ValidateLoginInfo';
import LoginUse from './LoginUse';
import './SignUpForm.css';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = LoginUse(
    submitForm,
    ValidateLogin
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Login to your account !
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>E-mail</label>
          <input
            className='form-input'
            type='text'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
        Login
        </button>
        <span className='form-input-login'>
          Don't have account ? Create one <a href='signup'>here</a>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;