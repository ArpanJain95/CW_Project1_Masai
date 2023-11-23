import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

export const GoogleOauth = () => {
    return (
        <div>
            <GoogleOAuthProvider clientId="26006674434-2jf95gonihimmn0d2o4sgfkposbe4g47.apps.googleusercontent.com">
                <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
                />
            </GoogleOAuthProvider>
        </div>
    )
}