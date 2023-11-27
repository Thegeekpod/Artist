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
    const [error, setError] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});
   const navigate=  useNavigate();
   useEffect(() => {
    // Check if the user is authenticated when the component mounts
    if (isAuthenticated()) {
      // Redirect to the login page if not authenticated
      navigate('/profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const proxyUrl = 'https://sweetdevelopers.com/proxy.php?url=https://sweetdevelopers.com/artist/api/register';
  
      const response = await axios.post(`${apibaseUrl}/register`, {
        name,
        username,
        email,
        password,
      });
  
      const data = response.data;
      if (data.status === false) {
        // Handle incorrect ID or password scenario
        console.error('Incorrect ID or password');
        setError(true);
        setTimeout(() => {
          setError(true);
        }, 5000);
        // You might want to update state, show an error message, etc.
      } else if (data.status === true) {
        setSucess(true);
        setTimeout(() => {
            navigate('/login');
          }, 5000);
        console.log(data.data);
       
        
      } else {
        // Handle other scenarios if needed
      }
  
  console.log(data)

     
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const errorData = error.response.data;

        if (errorData && errorData.message) {
          // If a general message is provided
          setErrorMessages(errorData.errors);
        
        } else {
          setErrorMessages({ general: 'Unknown 422 error occurred.' });
        }
      } else {
        setErrorMessages({ general: error.message || 'Unknown error occurred.' });
      }
    }
  };
  
      
  return (
    <>
    <div className="page_breadcrumbs breadcrumbs-type-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 text-left text-sm-center">
            <ul className="breadcrumbs-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">Register</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 text-center">
            <h3 className="breadcrumbs-title">Register Now</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4" />
        </div>
      </div>
    </div>
    <div className="ds section_padding_top_100 section_padding_bottom_100">
      <div className="container">
        <div className="row">
        <form className="shop-register" onSubmit={handleFormSubmit}>
      <div className="col-sm-12">
       {/* {errorMessages.general && <p>Error: {errorMessages.general}</p>} */}
     
      
        {error && <p className='error'>Criteria does not match</p>}
        {sucess && <p className='sucess'>Registration Sucessfull Please login Now</p>}
        <div className="form-group validate-required validate-email" id="billing_username_field">
          <label htmlFor="billing_username" className="control-label">
            <span className="grey">Name </span>
            <span className="required">*</span>
          </label>
          <input required
            type="text"
            className="form-control"
            name="billing_name"
            id="billing_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group validate-required validate-email" id="billing_username_field">
          <label htmlFor="billing_username" className="control-label">
            <span className="grey">Username </span>
            <span className="required">*</span>
          </label>
          <input required
            type="text"
            className="form-control"
            name="billing_username"
            id="billing_username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
           {errorMessages.username && <p className='error'>{errorMessages.username[0]}</p>}

        </div>

        <div className="form-group validate-required validate-email" id="billing_email_field">
          <label htmlFor="billing_email" className="control-label">
            <span className="grey">Email Address </span>
            <span className="required">*</span>
          </label>
          <input required
            type="text"
            className="form-control"
            name="billing_email"
            id="billing_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
                {errorMessages.email && <p className='error'> {errorMessages.email[0]}</p>}
        </div>

        <div className="form-group" id="billing_password_field">
          <label htmlFor="billing_password" className="control-label">
            <span className="grey">Password</span>
            <span className="required">*</span>
          </label>
          <input required
            type="password"
            className="form-control"
            name="billing_password"
            id="billing_password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
      {errorMessages.password &&<p className='error'>{errorMessages.password[0]}</p>}

        </div>
      </div>

      <div className="col-sm-12">
        <button type="submit" className="theme-button">
          Register
        </button>
      </div>
    </form>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Register