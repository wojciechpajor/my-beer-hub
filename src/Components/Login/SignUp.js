import React, { useState } from 'react';
import './SignUpForm.css';
import SignUpForm from './SignUpForm';
import SignUpFormSuccess from './SignUpFormSuccess';
import { useAuth } from '../../Contexts/AuthContext';

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
    console.log(SignUpForm.email)
  }

  const imgLink = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/Beer-Enthusiast.png?alt=media&token=6a26b1d6-0a46-4024-b3c5-6c8323a9369e"

  return (
    <>
      <div className='form-container'>
        <a className='close-btn' href = '../' >x</a>
        <div className='form-content-left'>
          <img className='form-img' src={imgLink} alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <SignUpForm submitForm={submitForm} />
        ) : (
          <SignUpFormSuccess />


        )}
      </div>
    </>
  );
};

export default SignUp;