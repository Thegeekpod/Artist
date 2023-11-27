import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, useUser } from './UserContext';
import { apibaseUrl } from '../../Component/Apibaseurl';

const Register = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate('/profile');
    }
  }, [navigate]);

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
      if (response.status === 422) {
        setError(true);
      } else if (data.errors) {
        setErrors(data.errors);
      } else if (data.status === true) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 5000);
        console.log(data.data);
      }

      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
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
                {error && <p className='error'>An error occurred. Please try again.</p>}
                {success && <p className='success'>Registration Successful. Please login now.</p>}

                <div className="form-group validate-required validate-email" id="billing_username_field">
                  <label htmlFor="billing_username" className="control-label">
                    <span className="grey">Name </span>
                    <span className="required">*</span>
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="billing_name"
                    id="billing_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <p className='error'>{errors.name[0]}</p>}
                </div>

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
  );
};

export default Register;
