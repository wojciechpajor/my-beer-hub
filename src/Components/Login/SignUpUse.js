import { useState, useEffect, useContext } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import { AuthContext } from '../../Contexts/AuthContext'
import { auth } from '../../firebase';

const SignUpUse = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const createAccount = async (email, password) =>
  {
    auth.signInWithEmailAndPassword(email, password)
    await email.sendEmailVerification()
  }



  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        createAccount(values.email, values.password)
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default SignUpUse;