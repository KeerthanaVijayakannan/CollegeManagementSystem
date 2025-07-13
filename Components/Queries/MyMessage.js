import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Define styles
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'url("https://i.pinimg.com/originals/64/e7/50/64e7505fd0dff83971cc6b2f03b479b5.jpg") no-repeat center',
  backgroundSize: 'cover',
  
};

const formStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.3)', // Adjusted transparency
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  width: '300px',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  margin: '10px 0',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#6200ea',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const headerStyle = {
  textAlign: 'center',
  fontSize: '24px',
  fontWeight: 'bold',
  color: 'darkblue',
  textDecoration: 'underline',
  marginBottom: '20px',
};

export const MyMessage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sua1v4f', 'template_23frhds', form.current, {
        publicKey: 'ZX3PMQxNhRr_5-ydi',
      })
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div style={containerStyle}>
      <form ref={form} onSubmit={sendEmail} style={formStyle}>
        <div style={headerStyle}>Send a Message</div>
        <label>Name</label>
        <input type="text" name="user_name" style={inputStyle} />
        <label>Email</label>
        <input type="email" name="user_email" style={inputStyle} />
        <label>Message</label>
        <textarea name="message" style={{ ...inputStyle, height: '100px' }} />
        <input type="submit" value="Send" style={buttonStyle} />
      </form>
    </div>
  );
};

export default MyMessage;
