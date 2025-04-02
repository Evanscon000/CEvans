import React, { useState } from 'react';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPasswordToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <form className="form">
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
            />
            <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
            />

            <label htmlFor="showPassword" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
                <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={handleShowPasswordToggle}
                />
                Show Password
                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
            </label>

            <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
        </form>
    );
};

export default LoginForm;
