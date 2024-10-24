import React from 'react'
import SignUp from '../Components/SignUp/SignUp'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const logedIn=useSelector(state=>state.UsersSlice.userStatus);
  return (
    <>
      {
        !logedIn?.LogedIn?
          <SignUp/>
        :
          <Navigate to={"/"} replace/>
      }
    </>
  )
}

export default Register