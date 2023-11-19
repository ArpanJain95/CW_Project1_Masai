import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';
import "./Signup.css";


export const Signup = () => {
    const {setUserDetails, userDetails} = useContext(AppContext);
    const [state, setState] = useState({ email: "", password: ""});
    const [notification, setNotification] = useState('');
    const navigate = useNavigate();

    const handleNotification = (message) => {
        setNotification(message);
    };

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();
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
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input onChange={handleChange} name='email' type="text" />
                <br />
                <label>Password:</label>
                <input onChange={handleChange} name='password' type="password" />
                <br />
                <input type="submit" />
            </form>
            <Notification message={notification} onHide={() => handleNotification('')} />
            <div>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}