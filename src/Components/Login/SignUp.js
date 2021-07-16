import React, { useState } from 'react';
import './SignUpForm.css';
import SignUpForm from './SignUpForm';
import SignUpFormSuccess from './SignUpFormSuccess';
import {Link} from "react-router-dom";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const imgLink = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/Beer-Enthusiast.png?alt=media&token=6a26b1d6-0a46-4024-b3c5-6c8323a9369e"

  return (
    <div className = "loginStyle">
      <div className='form-container'>
        <Link className='close-btn' to="/">x</Link>
        {!isSubmitted ? (
          <SignUpForm submitForm={submitForm} />
        ) : (
          <SignUpFormSuccess />


        )}
      </div>
    </div>
  );
};

export default SignUp;