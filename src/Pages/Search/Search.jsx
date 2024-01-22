import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apibaseUrl, apiimageurl } from "../../Component/Apibaseurl";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apibaseUrl}/all-artists`); // Replace with your API endpoint
        setData(response.data.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="page_breadcrumbs breadcrumbs-type-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 text-left text-sm-center">
              <ul className="breadcrumbs-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Search</li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 text-center">
              <h3 className="breadcrumbs-title">Search</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4" />
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_90 section_padding_bottom_85">
        <div className="container-fluid">
          <div className="row">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                console.log(formData);
              }}
            >
              <div className="col-lg-3">
                <input
                  type="text"
                  id="search"
                  className="form-control"
                  placeholder="Find a Tattoo Artist"
                  name="search"
                />
                <h5>Location</h5>
                <div className="form-group">
                  <div className="d-block p-2">
                    <label className="label">Radius</label>
                    <select className="form-control" id="radius" name="radius">
                      <option>20 Miles</option>
                      <option>25 Miles</option>
                      <option>30 Miles</option>
                      <option>35 Miles</option>
                      <option>40 Miles</option>
                    </select>
                  </div>
                  <div className="d-block p-2">
                    <label htmlFor="zip" className="label">
                      Zip Code
                    </label>
                    <input
                      type="number"
                      name="zip-code"
                      id="zip"
                      className="form-control"
                      placeholder="Please Enter ZipCode"
                    />
                  </div>
                </div>{" "}
                <h5>Date</h5>
                <div className="form-group">
                  <div className="d-block p-2">
                    <label className="label" htmlFor="date-from">
                      Date From
                    </label>
                    <input
                      type="date"
                      name="date-from"
                      id="date-from"
                      className="form-control"
                    />
                  </div>
                  <div className="d-block p-2">
                    <label htmlFor="date-to" className="label">
                      Date To
                    </label>
                    <input
                      type="date"
                      name="date-to"
                      id="date-to"
                      className="form-control"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
            <div className="col-lg-9 col-md-8">
              {data && data.length ? (
                data.map((item, index) => (
                  <div key={index}>
                    <div
                      className="col-sm-4 col-md-4 col-lg-4 text-sm-center"
                      onClick={() => {
                        navigate(`/artists/${item.username}`);
                      }}
                    >
                      <div className="team-item text-center">
                        <figure className="team-item__img ">
                          <img
                            style={{ width: "298px", height: "295px" }}
                            src={`${apiimageurl}/ProfileImage/${
                              item.profile_image || "noimg.jpg"
                            }`}
                            alt=""
                          />
                        </figure>
                        <div className="team-item__content text-center pb-2">
                          <h5 className="team-item__title">
                            <Link to={`/artists/${item.username}`}>
                              {item.name}
                            </Link>
                          </h5>
                          <p className="team-item__prof">{item.username}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No data available.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
