import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Store/Logo.png';
import "./Navbar.css";
// import { FeaturesTab } from './FeaturesTab';
// import { AppContext } from '../../contexts/AppContextProvider';
import { HamNav } from './HamNav';
import { NavMenuComp } from './NavMenuComp';

export const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const [hamNavActive, setHamNavActive] = useState(false)
  const [scrolling, setScrolling] = useState(false);
  // const [featurestab, setFeaturestab] = useState(false);
  // const { isAuth } = useContext(AppContext);

  useEffect(() => {
      const handleScroll = () => {
          setScrolling(window.scrollY > 0);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <div className={`navbar ${scrolling ? 'scrolling' : '' }`}>
        <div>
          <Link to="/" >
            <img src={Logo} className='navLogo' alt="Navbar Logo" />
          </Link>
        </div>
        <div className='navMenu'>
          <NavMenuComp/>
        </div>
        <div className='hamburgerMenu'>
          <button
            className='navHamMenu'
            onClick={()=>{setHamburgerActive(!hamburgerActive);
            setHamNavActive(!hamNavActive);
            }}
            >
              <span class="material-symbols-outlined">
                menu
              </span>
          </button>
        </div>
      </div>
      <div className='navHamBox'>
        {hamNavActive && <HamNav/>}
      </div>
    </>
    );
}