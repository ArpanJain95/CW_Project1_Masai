import React from 'react';
import '../HomeComponents/Comp2.css';
import { Accordion } from './SmallComp/Accordion';
import { AcoSlider } from './SmallComp/AcoSlider';


export const Comp2 = () => {
    return (
        <>
        <div id='comp2Container'>
            <div className='comp2Top'>
                <h4>PRODUCTIVITY SOFTWARE</h4>
                <h1>All-In-One Solution for Efficient Teams</h1>
                <p>Manage all your company's operations. Track time, monitor projects, comply with internal and external requirements, report anything, and more!</p>
            </div>
            <div className='comp2mid'>
                <div className='accordionComp' >
                    <Accordion />
                </div>
                <div className='acoSliderComp' >
                    <AcoSlider />
                </div>
            </div>
        </div>
    </>
    )
}