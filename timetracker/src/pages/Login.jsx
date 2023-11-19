import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import Notification from '../components/Notification';

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
        <div className='loginContainer'>
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
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    )
}