import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
import "./Signup.css";
import LoginUiBackground from '../components/Store/LoginUiBackground.svg'
import Logo from '../components/Store/Logo.png';


export const Signup = () => {
    const {setUserDetails, userDetails} = useContext(AppContext);
    const [state, setState] = useState({ email: "", password: ""});
    const [notification, setNotification] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    const handleNotification = (message) => {
        setNotification(message);
    };

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isChecked) {
            handleNotification('Please agree to the Terms of service and Privacy Policy.');
            return;
        }
        if (!state.password) {
            handleNotification('Please enter a password.');
            return;
        }
        const userIdTaken = userDetails.some((user) => user.email === state.email);
        if (userIdTaken) {
            handleNotification('This user ID is already taken. Please choose a different one.');
        } else {
            setUserDetails([...userDetails, state]);
            handleNotification('');
            navigate("/login");
        }
    }
    return (
        <div className='signup-container'>
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
                    <input type="checkbox" name="accept" checked={isChecked} onChange={handleCheckboxChange}/>
                    <p>I agree with the <Link>Terms of service</Link> & <Link>Privacy Policy</Link></p>
                    <input type="submit" value="SIGN UP" className='signUpButton'/>
                </form>
                <div>
                    <p><Link to='/login'>Back to Login</Link></p>
                </div>
                 <p>© 2023 TrackingTime, LLC. All rights reserved. <Link>Terms of service</Link> / <Link>Privacy Policy</Link></p>
            </div>
            <Notification message={notification} onHide={() => handleNotification('')} />
        </div>
    )
}