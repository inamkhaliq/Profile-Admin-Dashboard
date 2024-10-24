import React from 'react'
import SignIn from '../Components/SignIn/SignIn'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const logedIn=useSelector(state=>state.UsersSlice.userStatus);
  return (
    <>
      {
        !logedIn?.LogedIn?
          <SignIn/>
        :
        <Navigate to={"/"} replace/>
      }
    </>
  )
}

export default Login