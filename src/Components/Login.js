import React, { useRef, useState } from 'react'
import Header from './Header'
import validateinput from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from 'react-redux';
import { bgimage } from '../utils/constant';
const Login = () => {

  const dispatch = useDispatch();
  const [IsSignin, setSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const username = useRef(null)
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate()

  const toggleSignin = () => {
    setSignin(!IsSignin);
  }
  const handleSubmit = () => {
    //Validate email and password
    const message = validateinput(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!IsSignin) {
      //Sign Up Logic

      createUserWithEmailAndPassword(auth, email.current.value, password.current.value, username.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            username: username.current.value
          }).then(() => {
            const { uid, username, email } = auth.currentUser;
            dispatch(
              addUser(
                {
                  uid: uid,
                  email: email,
                  username: username
                })
            )

          }).catch((error) => {
            setErrorMessage(error.message)
          });
          console.log(user)

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage)
          // ..
        });
    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...


        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
        });
    }


  }
  return (
    <div>

      <Header signin={IsSignin} />
      <div className='absolute' >
        <img className='bg-cover'
          src={bgimage}
          alt='logo'
        />
      </div>

      <form className='bg-black bg-opacity-80 w-full md:w-3/12 absolute  p-12 my-36 mx-auto right-0 left-0 text-white' onSubmit={(e) => e.preventDefault()}>
        <h3 className='p-2 m-2 text-3xl'>{IsSignin ? "Sign In" : "Sign Up"}</h3>
        {
          !IsSignin && (
            <input
              ref={username}
              className='my-2 p-2 w-full bg-gray-800 rounded-md'
              type='text' placeholder='Full Name'
            />
          )
        }
        <input
          ref={email}
          className='my-2 p-2 w-full bg-gray-800 rounded-md'
          type='text' placeholder='Email address or Phone number'
        />
        <input
          ref={password}
          className='p-2 my-2 w-full bg-gray-800 rounded-md'
          type='password' placeholder='Password'
        />
        <p className='text-red-600 p-2'>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleSubmit} >{IsSignin ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer' onClick={toggleSignin}> {IsSignin ? "New to Netflix? SignUp here" : "Already a user? Sign In here"}</p>
      </form>

    </div>
  )
}

export default Login