import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Store/Logo.png';
import "./Navbar.css";
import { FeaturesTab } from './FeaturesTab';
import { AppContext } from '../../contexts/AppContextProvider';

export const Navbar = () => {
  const [featurestab, setFeaturestab] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const { isAuth } = useContext(AppContext);

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
      <div className={`navbar ${scrolling ? 'scrolling' : ''}`}>
        <div>
          <Link to="/" >
            <img src={Logo} className='navLogo' alt="Navbar Logo" />
          </Link>
        </div>
        <div className='navMenu'>
          <div>
            <Link to="/integrations" className='menuButton1'>Integrations</Link>
          </div>
          <div>
            <Link to="/blog" className='menuButton1'>Blog</Link>
          </div>
          <div className='featuresStyle' onMouseEnter={()=>setFeaturestab(true)} onMouseLeave={()=>setFeaturestab(false)}>
            <Link to="/features" className='menuButton1'>Features</Link>
            {featurestab && <FeaturesTab/>}
          </div>
          <div>
            <Link to="/tryitfree" className='menuButton2'>Try it free</Link>
          </div>
          <div>
            <Link to={isAuth ? "/dashboard" : "/login"} className='loginButton' >
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
    </>
    );
}