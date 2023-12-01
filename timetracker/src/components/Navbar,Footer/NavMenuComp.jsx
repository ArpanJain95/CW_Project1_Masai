import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { FeaturesTab } from "./FeaturesTab";
import { AppContext } from "../../contexts/AppContextProvider";

export const NavMenuComp = () => {
    const [featurestab, setFeaturestab] = useState(false);
    const { isAuth } = useContext(AppContext);
    
    return (
        <div className='navMenu'>
            <div>
                <Link to="/integrations" className='menuButton1'>Integrations</Link>
            </div>
            <div>
                <Link to="/blog" className='menuButton1'>Blog</Link>
            </div>
            <div className='featuresStyle' onMouseEnter={()=>setFeaturestab(true)} onMouseLeave={()=>setFeaturestab(false)}>
                <Link to="/#" className='menuButton1'>Features</Link>
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
    )
}