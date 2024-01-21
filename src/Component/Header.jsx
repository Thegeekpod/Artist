import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { isAuthenticated, useUser } from "../Pages/Account/UserContext";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { setUser, setToken, user, token, logout } = useUser();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  //login

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const proxyUrl =
        "https://sweetdevelopers.com/proxy.php?url=https://sweetdevelopers.com/artist/api/login";

      const response = await axios.post(proxyUrl, {
        email,
        password,
      });

      const data = response.data;

      if (data.status === false) {
        // Handle incorrect ID or password scenario
        console.error("Incorrect ID or password");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        // You might want to update state, show an error message, etc.
      } else if (data.status === true) {
        setError(true);
        // Handle successful login scenario
        setUser(data.data);
        setToken(data.token);
        console.log(data.data);
        navigate("/profile");
        // You can also redirect the user or perform other actions based on the successful login.
      } else {
        // Handle other scenarios if needed
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle errors appropriately, update state, show error messages, etc.
    }
  };

  //logout
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      <div
        className="modal"
        tabIndex={-1}
        aria-labelledby="search_modal"
        id="search_modal"
      >
        <div className="header-search">
          <form
            method="get"
            className="searchform form-inline"
            action="https://html.modernwebtemplates.com/"
          >
            <input
              type="text"
              defaultValue=""
              name="search"
              className="form-control header-search"
              placeholder="Search keyword"
              id="modal-search-input"
            />
            <button type="submit" className="s_theme-button">
              Search
            </button>
          </form>
        </div>
      </div>
      {/* Logo: contains logo in various header layouts */}
      <div className="ds page_toplogo">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4 text-left text-md-center">
              <p className="social-text">Follow with us:</p>
              <ul className="social-list text-center">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-google-plus" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-lg-4 text-center">
              <div className="logo">
                <a href="/">
                  <img src="images/img_logo.jpg" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 m-none">
              <ul className="controls-list text-right text-md-center">
                {isAuthenticated() ? (
                  <li className="dropdown login-dropdown my-account">
                    <a
                      className="header-button"
                      id="login"
                      data-target="#"
                      href="https://html.modernwebtemplates.com/"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span onClick={() => navigate("/profile")}>
                        {" "}
                        Welcome {user?.username}
                      </span>
                    </a>
                    <div
                      className="dropdown-menu logout"
                      aria-labelledby="login"
                      onClick={handleLogout}
                    >
                      Log Out
                    </div>
                  </li>
                ) : (
                  <>
                    <li className="dropdown login-dropdown my-account ">
                      <a
                        className="header-button"
                        id="login"
                        data-target="#"
                        href="https://html.modernwebtemplates.com/"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Sign In / Sign Up</span>
                      </a>
                      <div className="dropdown-menu" aria-labelledby="login">
                        <p>
                          <strong>
                            If you have an account, please log in:
                          </strong>
                        </p>
                        <form
                          className="shop-register"
                          onSubmit={handleFormSubmit}
                        >
                          <div>
                            {error && (
                              <p className="error">
                                {" "}
                                Incorrect email or password
                              </p>
                            )}

                            <div className="form-group ">
                              <label
                                htmlFor="login_email"
                                className="control-label"
                              >
                                <span className="grey">Email Address </span>
                                <span className="required">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="login_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>

                            <div className="form-group">
                              <label
                                htmlFor="login_password"
                                className="control-label"
                              >
                                <span className="grey">Password</span>
                                <span className="required">*</span>
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                name="login_password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                            </div>
                          </div>

                          <div>
                            <button type="submit" className="theme-button">
                              Login
                            </button>
                          </div>
                        </form>
                        <div className="password-info topmargin_20">
                          <a href="#">Forgot Your Password?</a>
                          <p>
                            if you no account please{" "}
                            <Link to="/register">Register Now</Link>{" "}
                          </p>
                        </div>
                      </div>
                    </li>
                  </>
                )}

                <li>
                  <a href="#" className="search_modal_button serach-button">
                    <i className="fa fa-search" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Header: contains site site Main Menu */}
      <header className="ds header-bg-1">
        <div className={`page_header  ${isActive ? "mobile-active" : ""}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-md-right">
                <div className="d-flex">
                  <div
                    className="col-sm-6 coll-6 d-md-none"
                    style={{ width: "110%" }}
                  >
                    <ul className="controls-list text-right text-md-center">
                      <li className="dropdown login-dropdown my-account">
                        <a
                          className="header-button"
                          id="login"
                          data-target="#"
                          href="#"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <span>Sign In / Sign Up</span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="login">
                          <p>
                            <strong>
                              If you have an account, please log in:
                            </strong>
                          </p>
                          <form
                            className="shop-register"
                            onSubmit={handleFormSubmit}
                          >
                            <div className="col-sm-12">
                              {error && (
                                <p className="error">
                                  {" "}
                                  Incorrect email or password
                                </p>
                              )}

                              <div className="form-group ">
                                <label
                                  htmlFor="login_email"
                                  className="control-label"
                                >
                                  <span className="grey">Email Address </span>
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  name="login_email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                              </div>

                              <div className="form-group">
                                <label
                                  htmlFor="login_password"
                                  className="control-label"
                                >
                                  <span className="grey">Password</span>
                                  <span className="required">*</span>
                                </label>
                                <input
                                  type="password"
                                  className="form-control"
                                  name="login_password"
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                              </div>
                            </div>

                            <div className="col-sm-12">
                              <button type="submit" className="theme-button">
                                Login
                              </button>
                            </div>
                          </form>
                          <div className="password-info topmargin_20">
                            <a href="#">Forgot Your Password?</a>
                          </div>
                        </div>
                      </li>

                      <li>
                        <a
                          href="#"
                          className="search_modal_button serach-button"
                        >
                          <i className="fa fa-search" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 coll-6 ">
                    <span
                      onClick={toggleMenu}
                      className={`toggle_menu ${
                        isActive ? "mobile-active" : ""
                      }`}
                    >
                      <span />
                    </span>
                  </div>
                </div>

                {/* Main navigation start */}
                <nav className="mainmenu_wrapper text-center">
                  <ul className="mainmenu nav sf-menu">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>
                    {/* Pages */}
                    <li>
                      <Link to="/artists">Artists</Link>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>

                    {/* contact */}
                    <li>
                      <a href="#" data-target="#contact">
                        Contacts
                      </a>
                    </li>
                  </ul>
                </nav>
                {/* eof main nav */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
