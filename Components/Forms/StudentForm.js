import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5050/student/register', {
                name,
                email,
                password,
            });
            if (response.status === 200) {
                navigate('/'); // Navigate to Login page on successful registration
            } else {
                console.error('Failed to register');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleLoginClick = () => {
        navigate('/');  // Navigate to the Login page
    };

    const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    };

    const registerContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        maxWidth: '400px',
        width: '100%',
    };

    const titleStyle = {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#000',
        marginBottom: '20px',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    };

    const formGroupStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = {
        fontSize: '1rem',
        color: '#000',
        marginBottom: '5px',
    };

    const inputStyle = {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1rem',
    };

    const buttonStyle = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const buttonHoverStyle = {
        backgroundColor: '#0056b3',
    };

    const linkStyle = {
        color: '#007bff',
        cursor: 'pointer',
        textDecoration: 'underline',
    };

    const linkHoverStyle = {
        color: '#0056b3',
    };

    return (
        <div style={appStyle}>
            <div style={registerContainerStyle}>
                <div className="inner-container">
                    <div className="register-left">
                        {/* Add any additional content or images here if needed */}
                    </div>
                    <div className="register-right">
                        <h2 style={titleStyle}>Register</h2>
                        <form onSubmit={handleSubmit} style={formStyle}>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Name</label>
                                <input 
                                    type="text" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                    style={inputStyle}
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Email</label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                    style={inputStyle}
                                />
                            </div>
                            <div style={formGroupStyle}>
                                <label style={labelStyle}>Password</label>
                                <input 
                                    type="password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                    style={inputStyle}
                                />
                            </div>
                            <button 
                                type="submit" 
                                style={buttonStyle}
                                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                            >
                                Register
                            </button>
                        </form>
                        <p>
                            Already have an account? 
                            <span 
                                style={linkStyle}
                                onClick={handleLoginClick}
                                onMouseOver={(e) => e.target.style.color = linkHoverStyle.color}
                                onMouseOut={(e) => e.target.style.color = linkStyle.color}
                            > 
                                Login
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentForm;