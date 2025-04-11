import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: "url('assets/resume.jpg')", // Image should be in public/images/
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    overflow: 'hidden', // Prevent scroll
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '0 20px'
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Optional dark overlay
    padding: '50px 30px',
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%',
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}>
        <h1 className="mb-4" style={{ fontWeight: 'bold', fontSize: '3rem', color: '#00d4ff' }}>
          Welcome to ResumeBuilder
        </h1>
        <p className="lead mb-4">
          Build your professional resume effortlessly! Choose from modern, clean, and creative templates tailored for
          <strong> Freshers</strong>, <strong> Professionals</strong>, and <strong> Business</strong> roles.
          Just enter your details, select a template, and download your resume instantly.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <Link to="/register" className="btn btn-primary btn-lg">Register</Link>
          <Link to="/signin" className="btn btn-outline-light btn-lg">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
