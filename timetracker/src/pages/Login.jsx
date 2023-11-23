import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import Notification from '../components/Notification';
import Logo from '../components/Store/Logo.png';
import LoginUiBackground from '../components/Store/LoginUiBackground.svg'

export const Login = () => {
    const { setIsAuth, userDetails } = useContext(AppContext);
    const [state, setState] = useState({ email: "", password: ""});
    const [notification, setNotification] = useState("");
    const navigate = useNavigate();

    const handleNotification = (message) => {
        setNotification(message);
    };

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const userFound = userDetails.find(
            (user) => user.email === state.email && user.password === state.password
        );

        if (userFound) {
            console.log("Correct");
            setIsAuth(true);
            handleNotification("");
            navigate('/dashboard');
        } else {
            console.log("Incorrect");
            setIsAuth(false);
            handleNotification("We could not find your account. Make sure your email and password are correct")
        }
    }

    return (
        <div className='loginContainer signup-container'>
            <div className='signupImg'>
                <img src={LoginUiBackground} alt="" />
            </div>
            <div className='signupForm'>
                <div>
                    <Link to="/" >
                        <img src={Logo} className='signupLogo' alt="Time Tracker Logo" />
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} name='email' type="text" placeholder='Email' className='signInput'/>
                    <br />
                    <input onChange={handleChange} name='password' type="password" placeholder='Password'className='signInput'/>
                    <br />
                    <p>Forgot yor password <Link>Retrive</Link></p>
                    <input type="submit" value="LOGIN" className='signUpButton'/>
                </form>
                <div>
                    <p>Don’t have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
                <p>© 2023 TrackingTime, LLC. All rights reserved. <Link>Terms of service</Link> / <Link>Privacy Policy</Link></p>
            </div>
            <Notification message={notification} onHide={() => handleNotification('')} />
        </div>
    )
}