import userEvent from '@testing-library/user-event';
import React from 'react';
import './SignUpForm.css';

const LoginFormSuccess = () => {

  const imageLink = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/Succes.jpg?alt=media&token=c757e4f2-c5e9-48f8-bc4d-8433555ca201"

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>You have successfully logged in !</h1>
      <img className='form-img-2' src={imageLink} alt='success-image' />
    </div>
  );
};

export default LoginFormSuccess;