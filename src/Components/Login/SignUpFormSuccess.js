
import React from 'react';
import './SignUpForm.css';

const SignUpFormSuccess = () => {

  const imageLink = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/save_water_beer.png?alt=media&token=c58a6909-0120-4c13-940b-db47b7c9b963"

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request! Please check your e-mail in order to verify your account</h1>
      <img className='form-img-2' src={imageLink} alt='success-image' />
    </div>
  );
};

export default SignUpFormSuccess;