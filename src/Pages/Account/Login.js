import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, useUser } from "./UserContext";
import { apiProxybaseUrl } from "../../Component/Apibaseurl";

const Login = () => {
  const { setToken, setUser } = useUser();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is authenticated when the component mounts
    if (isAuthenticated()) {
      // Redirect to the login page if not authenticated
      navigate("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // const proxyUrl = `https://sweetdevelopers.com/proxy.php?url=https://sweetdevelopers.com/artist/api/login`;

      const response = await axios.post(`${apiProxybaseUrl}/login`, {
        email,
        password,
      });

      const data = response.data;
      console.log(data);

      if (data.status === false) {
        // Handle incorrect ID or password scenario
        console.error("Incorrect ID or password");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        // You might want to update state, show an error message, etc.
      } else if (data.status === true && data.data.type==='customer') {
        setError(true);
        // Handle successful login scenario
        setUser(data.data);
        setToken(data.token);
        navigate("/profile");
        // You can also redirect the user or perform other actions based on the successful login.
      } else {
        setError2(true);
        setTimeout(() => {
          setError2(false);
          window.location.href = 'https://sweetdevelopers.com/artist/';
          // window.open('https://sweetdevelopers.com/artist/', '_blank');
      }, 5000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors appropriately, update state, show error messages, etc.
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
                <li className="active">Login</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
              <h3 className="breadcrumbs-title">Login Now</h3>
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
                {error && <p className="error"> Incorrect email or password</p>}
                {error2 && <p className="sucess"> You are an a Artist Please login Here</p>}


                <div
                  className="form-group validate-required validate-email"
                  id="billing_email_field"
                >
                  <label htmlFor="billing_email" className="control-label">
                    <span className="grey">Email Address </span>
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="billing_email"
                    id="billing_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group" id="billing_password_field">
                  <label htmlFor="billing_password" className="control-label">
                    <span className="grey">Password</span>
                    <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="billing_password"
                    id="billing_password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <button type="submit" className="theme-button">
                  Login
                </button>
              </div>
              <div className="col-lg-6 text-right text-sm-center">
                <p>
                  if you no account please{" "}
                  <Link to="/register">Register Now</Link>{" "}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
