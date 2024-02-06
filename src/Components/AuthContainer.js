import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const AuthContainer = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                {isSignUp ? (
                    <SignUp toggleForm={toggleForm} />
                ) : (
                    <SignIn toggleForm={toggleForm} />
                )}
            </div>
        </div>
    );
};

export default AuthContainer;
