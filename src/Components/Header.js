import React, { useEffect } from 'react'
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from "../utils/userSlice"
import { language, logo } from '../utils/constant';
import { toggleGPTSearch } from "../utils/gptSlice"
import GPTSearch from "./GPTSearch"
import { changeLanguage } from '../utils/appconfigSlice';
import { useSelector } from 'react-redux';

const Header = ({ signin }) => {


  const auth = getAuth();
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const user = useSelector(store => store.user)
  const showGPT = useSelector((store) => store.gpt?.toggleGPT)


  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      }).catch((error) => {
        // An error happened.
        navigate("/error")
      });
  }

  const handleGPTSearchClick = () => {

    dispatch(toggleGPTSearch());

  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, username } = user;
        dispatch(addUser({ uid: uid, email: email, username: username }));

        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();

  }, [])

  const handleLanguage = (e) => {
    console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>

      <img
        className='w-44 mx-auto md:mx-0'
        src={logo}
        alt='logo'
      />
      {
        user && (

          <div className='flex p-2 justify-between '>

            {
              showGPT && (


                <select className='p-2 m-2 bg-gray-800 text-white' onChange={handleLanguage}>
                  {
                    language.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                  }
                </select>
              )}


            <button className='rounded-md bg-purple-800 text-black p-2 m-2  flex' onClick={handleGPTSearchClick}>{showGPT ? 'Home Page' : 'GPT Search'}</button>

            <button className='rounded-md bg-white text-black p-2 m-2 flex ' onClick={handleSignout}>Sign Out</button>

          </div>


        )}

    </div>
  )
}

export default Header