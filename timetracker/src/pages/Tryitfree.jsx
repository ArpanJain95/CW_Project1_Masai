import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider'
import { Navigate } from 'react-router-dom';

export const Tryitfree = () => {
    const {isAuth} = useContext(AppContext)
    console.log(isAuth);
    if (isAuth === false) {
        return <Navigate to="/login"/>;
    } else{
        return <Navigate to="/dashboard"/>;
    }
}