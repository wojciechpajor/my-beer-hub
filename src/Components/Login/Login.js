import React, { useState } from 'react';
import './SignUpForm.css';
import LoginForm from './LoginForm';
import LoginFormSuccess from './LoginFormSuccess';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const imgLink = "https://firebasestorage.googleapis.com/v0/b/my-beer-hub-355e2.appspot.com/o/Beer-Enthusiast.png?alt=media&token=6a26b1d6-0a46-4024-b3c5-6c8323a9369e"

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <div className="loginStyle">
      <div className='form-container'>
        <Link className='close-btn' to="/">x</Link>
        {!isSubmitted ? (
          <LoginForm submitForm={submitForm}/>
        ) : (
          <LoginFormSuccess />
        )}
      </div>
    </div>
  );
};

export default Login;