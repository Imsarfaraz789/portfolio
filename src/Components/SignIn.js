import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignIn = ({ toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async () => {
        // Add your authentication logic here
        try {
            await axios.post("https://p-backend-oti0.onrender.com/login", {
                email,
                password
            })

            navigate('/addproject');
            toast.success('Login successfully')
        } catch (error) {
            console.log(error)
        }
        console.log('Signing in with:', email, password);
    };

    return (
        <>
            <h2 className="text-2xl text-center mt-32 font-bold mb-4">Sign In</h2>
            <form className="grid mx-10  grid-cols-1 gap-4">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleSignIn}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Sign In
                </button>
                {/* <p className="text-center">
                    Don't have an account?{' '}
                    <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
                        Sign Up
                    </span>
                </p> */}
            </form>
        </>
    );
};

export default SignIn;
