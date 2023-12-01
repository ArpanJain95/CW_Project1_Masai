import React, { useState } from 'react';
import Logo from '../Store/Logo.png';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../contexts/AppContextProvider';
import './Navbar.css';
import AddEventPop from '../DashboardComponents/AddEventPop'

export const NavDashboard = () => {
    const [addEventPop, setAddEventPop] = useState(false);
    const {userDetails} = useAppContext();
    const userEmail = userDetails.length > 0 ? userDetails[0].email: '';
    const buttonChar = userEmail.charAt(0).toUpperCase();

    return (
        <>
            <div className='navDashboard-container'>
                <div className='navDashboard-left'>
                    <div>
                        <Link to="/" >
                            <img src={Logo} className='navLogo' alt="Navbar Logo" />
                        </Link>
                    </div>
                    <div className='navDashboard-menu'>
                        <div>
                            <Link to='/dashboard' className='menuButton1'>Hours</Link>
                        </div>
                        <div>
                            <Link to='/projects' className='menuButton1'>Projects</Link>
                        </div>
                        <div>
                            <Link to='/#' className='menuButton1'>Reports</Link>
                        </div>
                        <div>
                            <Link to='/#' className='menuButton1'>Manage</Link>
                        </div>
                        <div>
                            <Link to='#' className='menuButton1'><span class="material-symbols-outlined">search</span></Link>
                        </div>
                    </div>
                </div>
                <div className='navDashboard-right'>
                        {addEventPop && <AddEventPop style={{position: "absolute", zIndex: 10}}/>}
                    <div>
                        <button className='navButton1'
                            onClick={()=>setAddEventPop(!addEventPop)}>
                            <span class="material-symbols-outlined">
                                add 
                            </span>
                        </button>
                    </div>
                    <div>
                        <button className='upgradeButton'>Upgrade</button>
                    </div>
                    <div>
                        <button className='button5 icon'><span class="material-symbols-outlined">download</span></button>
                    </div>
                    <div>
                        <button className='button5 char'>{buttonChar}</button>
                    </div>
                </div>
            </div>
        </>
    )
}