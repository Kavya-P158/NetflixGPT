import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [IsSignin, setSignin] = useState(true);

  const toggleSignin = () => {
    setSignin(!IsSignin);
  }
  return (
    <div>

      <Header />
      <div className='absolute' >
        <img className='object-cover w-full h-full'
          src='https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg'
          alt='logo'
        />
      </div>

      <form className='bg-black bg-opacity-80 w-3/12 absolute  p-12 my-36 mx-auto right-0 left-0 text-white'>
        <h3 className='p-2 m-2 text-3xl'>{IsSignin ? "Sign In" : "Sign Up"}</h3>
        {
          !IsSignin && (
            <input
              className='my-2 p-2 w-full bg-gray-800 rounded-md'
              type='text' placeholder='Full Name'
            />
          )
        }
        <input
          className='my-2 p-2 w-full bg-gray-800 rounded-md'
          type='text' placeholder='Email address or Phone number'
        />
        <input
          className='p-2 my-2 w-full bg-gray-800 rounded-md'
          type='password' placeholder='Password'
        />
        <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>{IsSignin ? "Sign In" : "Sign Up"}</button>
        <p className='cursor-pointer' onClick={toggleSignin}> {IsSignin ? "New to Netflix? SignUp here" : "Already a user? Sign In here"}</p>
      </form>

    </div>
  )
}

export default Login