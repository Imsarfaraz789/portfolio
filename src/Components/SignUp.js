import React, { useState } from 'react';
import axios from "axios"

const SignUp = ({ toggleForm }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await axios.post("http://localhost:8000/register", {
                email,
                password
            })

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <h2 className="text-2xl mt-32 text-center font-bold mb-4">Sign Up</h2>
            <form className="grid mx-48 grid-cols-1 gap-4">
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
                    onClick={handleSignUp}
                    className="bg-blue-500 text-white p-2 rounded"
                >
                    Sign Up
                </button>
                <p className="text-center">
                    Already have an account?{' '}
                    <span className="text-blue-500 cursor-pointer" onClick={toggleForm}>
                        Sign In
                    </span>
                </p>
            </form>
        </>
    );
};

export default SignUp;
