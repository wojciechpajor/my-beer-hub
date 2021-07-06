import { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import {useDispatch, useSelector} from 'react-redux'
import { selectUserEmail, setActiveUser } from '../../Features/userSlice'

const LoginUse = (callback, validate) => {

  const dispatch = useDispatch()

  const [values, setValues] = useState({
    email: '',
    password: '',
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
    console.log(values.email);
    console.log(values.password);
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        auth.signInWithEmailAndPassword(values.email,values.password)
        .then((userCredential) => {
          console.log(userCredential.user.email)
          dispatch(setActiveUser({
            userName: null,
            userEmail: userCredential.user.email
          }))

        callback();
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return window.alert({errorMessage})
        })
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default LoginUse;