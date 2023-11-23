import React, { useEffect } from 'react';
import "../components/Notification.css";

const Notification = ({ message, onHide }) => {
    useEffect(() => {
        let timer;
        if (message) {
            timer = setTimeout(() => {
                onHide();
            }, 3000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [message, onHide]);

    const handleNotificationClick = () => {
        onHide();
    };

    return message ? (
        <p className='notification' onClick={handleNotificationClick}>
            {message}
        </p>
    ) : null;
};

export default Notification;