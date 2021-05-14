import React from 'react';
import ValidateInfo from './ValidateSignUpInfo';
import LoginUse from './LoginUse';
import './SignUpForm.css';

const LoginForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = LoginUse(
    submitForm,
    ValidateInfo
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Login to your account !
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
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
          Already have an account? Login <a href='signup'>here</a>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;