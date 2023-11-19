import React from 'react'
import Logo from '../Store/Logo.png';
import { Link } from 'react-router-dom'

export const NavDashboard = () => {
    return (
        <>
            <div>
            <Link to="/" >
                <img src={Logo} className='navLogo' alt="Navbar Logo" />
            </Link>
            </div>
        </>
    )
}