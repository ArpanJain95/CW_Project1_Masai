import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Comp1 } from '../components/HomeComponents/Comp1';

export const Home = () => {
    const value = useContext(AppContext)
    console.log(value);
    return (
        <div className='homeContainer'>
            <h1>Home</h1>
            <Comp1 />
        </div>
    );
};