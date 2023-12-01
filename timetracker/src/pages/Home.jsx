import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Comp1 } from '../components/HomeComponents/Comp1';
import { Comp2 } from '../components/HomeComponents/Comp2';
import { Comp3 } from '../components/HomeComponents/Comp3';
import { Comp4 } from '../components/HomeComponents/Comp4';
import { Comp5 } from '../components/HomeComponents/Comp5';
import { Comp6 } from '../components/HomeComponents/Comp6';
import '../pages/Home.css';

export const Home = () => {
    const value = useContext(AppContext)
    return (
        <div className='homeContainer'>
            <Comp1 />
            <Comp2 />
            <Comp3 />
            <Comp4 />
            <Comp5 />
            <Comp6 />
        </div>
    );
};