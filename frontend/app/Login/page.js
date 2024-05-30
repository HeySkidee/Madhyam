import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import './Login.css';

const LoginForm = () => {
  return (
    <div className="login-container">
      <h1 className="login-heading">Madhyam</h1>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" name="password" className="form-input" placeholder="Enter your password" />
        </div>
        {/* Replace the button with Link component */}
        <Link href="/Home" className='LoginButton'>
          Login
        </Link>
      </form>
      <p className="create-account">Don't have an account? <a href="/Login" className="create-account-link">Create one</a></p>
    </div>
  );
}

export default LoginForm;
