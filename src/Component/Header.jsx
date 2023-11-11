import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/main.js';   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  }, [])
  return (
   <>
      {/* <div
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
    </div> */}
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
                  <a href="index-2.html">
                    <img src="images/img_logo.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <ul className="controls-list text-right text-md-center">
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
                      <span>Log in</span>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="login">
                      <p>
                        <strong>If you have an account, please log in:</strong>
                      </p>
                      <form action="https://html.modernwebtemplates.com/">
                        <div className="form-group">
                          <label htmlFor="login_email">Email address</label>
                          <input
                            type="email"
                            className="form-control"
                            id="login_email"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="login_password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="login_password"
                            placeholder="Password"
                          />
                        </div>
                        <button type="button" className="theme-button color1">
                          Log in
                        </button>
                        <a
                          href="shop-register.html"
                          className="theme-button color2"
                        >
                          Register
                        </a>
                      </form>
                      <div className="password-info topmargin_20">
                        <a href="shop-register.html">Forgot Your Password?</a>
                      </div>
                    </div>
                  </li>
                 
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
          <div className="page_header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-md-center">
                  <span className="toggle_menu">
                    <span />
                  </span>
                  {/* Main navigation start */}
                  <nav className="mainmenu_wrapper text-center">
                    <ul className="mainmenu nav sf-menu">
                      <li className="">
                        <a href="/">Home</a>
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
        </header></>
  )
}
 
export default Header