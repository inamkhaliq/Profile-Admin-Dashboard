import React from 'react'
import Home from './Home';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({Element}) => {
    const logedIn=useSelector(state=>state.UsersSlice.userStatus);
    // console.log(logedIn.LogedIn)
    return (
        <>
            {
                logedIn?.LogedIn?
                Element
                :
                <Navigate to={"/Login"} replace/>
            }
        </>
    )
}

export default ProtectedRoute