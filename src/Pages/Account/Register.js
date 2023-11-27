import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticated, useUser } from './UserContext';
import { apibaseUrl } from '../../Component/Apibaseurl';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); // State to hold field-specific errors

  // ... (existing code)

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apibaseUrl}/register`, {
        name,
        username,
        email,
        password,
      });

      const data = response.data;
      if (data.errors) {
        // Update state with errors if present in the response
        setErrors(data.errors);
      } else if (data.status === true) {
        setSucess(true);
        setTimeout(() => {
          navigate('/login');
        }, 5000);
        console.log(data.data);
      }

      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors appropriately, update state, show error messages, etc.
    }
  };

  return (
    <>
      {/* ... (existing code) */}
      <form className="shop-register" onSubmit={handleFormSubmit}>
        {/* ... (existing code) */}
        <div className="form-group validate-required validate-email" id="billing_username_field">
          <label htmlFor="billing_username" className="control-label">
            <span className="grey">Username </span>
            <span className="required">*</span>
          </label>
          <input
            required
            type="text"
            className="form-control"
            name="billing_username"
            id="billing_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p className='error'>{errors.username[0]}</p>}
        </div>

        <div className="form-group validate-required validate-email" id="billing_email_field">
          <label htmlFor="billing_email" className="control-label">
            <span className="grey">Email Address </span>
            <span className="required">*</span>
          </label>
          <input
            required
            type="text"
            className="form-control"
            name="billing_email"
            id="billing_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className='error'>{errors.email[0]}</p>}
        </div>

        <div className="form-group" id="billing_password_field">
          <label htmlFor="billing_password" className="control-label">
            <span className="grey">Password</span>
            <span className="required">*</span>
          </label>
          <input
            required
            type="password"
            className="form-control"
            name="billing_password"
            id="billing_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className='error'>{errors.password[0]}</p>}
        </div>
        {/* ... (existing code) */}
      </form>
      {/* ... (existing code) */}
    </>
  );
};


export default Register