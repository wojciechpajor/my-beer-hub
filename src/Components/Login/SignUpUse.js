import { useState, useEffect, useContext } from 'react';
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



  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    async () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        await auth.createUserWithEmailAndPassword(values.email, values.password)
        var user = auth.currentUser
        user.sendEmailVerification()
      
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default SignUpUse;