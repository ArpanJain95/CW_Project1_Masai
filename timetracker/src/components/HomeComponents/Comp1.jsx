import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../contexts/AppContextProvider';
import Comp1Img2 from '../Store/Comp1Img2.svg';
import '../HomeComponents/Comp1.css';
// import { GoogleOauth } from '../GoogleOauth';

export const Comp1 = () => {
    const { isAuth } = useContext(AppContext);
    return (
        <>
            <div id='comp1Container'>
                <div className='comp1Front'>    
                    <div className='leftCont'>
                        <p className='leftContP1'>TRACKINGTIME TIME TRACKER SOFTWARE</p>
                        <h1 className='tagLine'>Automatic Time Tracking <br />for Productive Teams</h1>
                        <p className='leftContP2'>Keeping your business running smoothly is our goal.<br/>Focus on business growth while we handle the rest.</p>
                        <div className='linkDiv'>
                            <Link to={isAuth ? "/dashboard" : "/login"} className='leftContLink'>Get Started <span class="material-symbols-outlined">east</span></Link>
                        </div>
                        { /* <GoogleOauth/> */ }
                    </div>
                    <div className='rightCont'>
                        <img src={Comp1Img2} alt="BannerImage" />
                    </div>
                </div>
                <div className='bannerEleDiv'></div>
            </div>
        </>
    )
}