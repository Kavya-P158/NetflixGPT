import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser, removeUser } from "../utils/userSlice"
import { useDispatch } from 'react-redux';

const Body = () => {


  const approuter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])


  return (
    <div>
      <div><RouterProvider router={approuter} /></div>

    </div>
  )
}

export default Body