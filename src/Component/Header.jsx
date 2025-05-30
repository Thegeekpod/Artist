import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { isAuthenticated, useUser } from "../Pages/Account/UserContext";
import { RequestType, geocode, setDefaults } from "react-geocode";
const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { setUser, setToken, user, token, logout } = useUser();
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  // define the function that finds the users geolocation
  const getUserLocation = () => {
    // if geolocation is supported by the users browser
    if (navigator.geolocation) {
      setDefaults({
        key: "AIzaSyD0mP_CP-hW2ZnJLo5s6CB5zH79Xs4RCXA", // Your API key here.
        language: "en", // Default language for responses.
        region: "es", // Default region for responses.
      });
      // get the current users location
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // save the geolocation coordinates in two variables
          const { latitude, longitude } = position.coords;

          geocode(RequestType.LATLNG, `${latitude},${longitude}`, {
            location_type: "ROOFTOP", // Override location type filter for this request.
            enable_address_descriptor: true, // Include address descriptor in response.
          })
            .then(({ results }) => {
              const address = results[0].formatted_address;
              const { city, state, country, postal_code } =
                results[0].address_components.reduce((acc, component) => {
                  if (component.types.includes("locality"))
                    acc.city = component.long_name;
                  else if (
                    component.types.includes("administrative_area_level_1")
                  )
                    acc.state = component.long_name;
                  else if (component.types.includes("country"))
                    acc.country = component.long_name;
                  else if (component.types.includes("postal_code"))
                    acc.postal_code = component.long_name;
                  return acc;
                }, {});
              localStorage.setItem(
                "postal_code",
                JSON.stringify({ postal_code })
              );
            })
            .catch(console.error);
          // update the value of userlocation variable

          localStorage.setItem(
            "userLocation",
            JSON.stringify({ latitude, longitude })
          );
          localStorage.setItem(
            "userLocation",
            JSON.stringify({ latitude, longitude })
          );
        },
        // if there was an error getting the users location
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
    // if geolocation is not supported by the users browser
    else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const proxyUrl =
        "https://artisttattoome.store/api/login";

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
                      <span style={{color:'white'}} >
                        {" "}
                        Welcome {user?.username}
                      </span>
                    </a>
                    <div
                      className="dropdown-menu logout"
                      aria-labelledby="login"
                     
                    >
                      <div className="d-p" onClick={() => navigate("/profile")}>
                        Profile
                      </div>
                      <div   className="d-p" onClick={handleLogout}>
                        Log Out

                      </div>
                    </div>
                  </li>
                ) : (
                  <>
  <li className="dropdown login-dropdown my-account ">
                      <Link
                        className="header-button"
                        id="login"
                        data-target="#"
                        to="/login"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Sign In / Sign Up</span>
                      </Link>
                     
                    </li>
                  </>
                )}

                <li>
                  <a
                    className="search_modal_button serach-button"
                    onClick={() => {
                      getUserLocation();
                      navigate("/search");
                    }}
                  >
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
                      <span style={{color:'white'}} >
                        {" "}
                        Welcome {user?.username}
                      </span>
                    </a>
                    <div
                      className="dropdown-menu logout"
                      aria-labelledby="login"
                     
                    >
                      <div className="d-p" onClick={() => navigate("/profile")}>
                        Profile
                      </div>
                      <div   className="d-p" onClick={handleLogout}>
                        Log Out

                      </div>
                    </div>
                  </li>
                ) : (
                  <>
  <li className="dropdown login-dropdown my-account ">
                      <Link
                        className="header-button"
                        id="login"
                        data-target="#"
                        to="/login"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span>Sign In / Sign Up</span>
                      </Link>
                     
                    </li>
                  </>
                )}

                      
                    </ul>
                  </div>
                  <div className="col-sm-6 coll-6 ">
                    <span
                      onClick={toggleMenu}
                      className={`toggle_menu ${isActive ? "mobile-active" : ""
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
