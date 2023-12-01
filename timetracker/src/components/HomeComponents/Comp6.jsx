import React, { useContext } from 'react'
import '../HomeComponents/Comp6.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContextProvider';

export const Comp6 = () => {
    const { isAuth } = useContext(AppContext);
    return (
        <div className='comp6-wrapper'>
            <div className='comp6Top'>
                    <h3>Unleash Team Productivity<br/>with Automatic Time Tracking</h3>
                    <div className='linkDiv'>
                        <Link to={isAuth ? "/dashboard" : "/login"} className='leftContLink'>Get Started <span class="material-symbols-outlined">east</span></Link>
                    </div>
                </div>
        </div>
    )
}

export default Comp6