import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apibaseUrl } from "../../Component/Apibaseurl";
import axios from "axios";
import MGallery from "../Home/Gallery";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [styledata, setStyledata] = useState([]);
  const [placement, setPlacement] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [artworkData, setArtworkData] = useState({
    username:"",
    subjectName: "",
    styleName: "",
    placementName: "",
    date: "",
    dateTo: "",
    zipCode: "",
    radius: "",
    country: "United States of America",
  });

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://sweetdevelopers.com/artist/api/all-artworks"
      );
      setData(response.data.data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchSubjectsData = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/subjects`);
      setSubjects(response.data.data);
    } catch (error) {
      console.error("Error fetching subjects:", error);
    }
  };

  const fetchStyleData = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/styles`);
      setStyledata(response.data.data);
    } catch (error) {
      console.error("Error fetching styles:", error);
    }
  };

  const fetchPlacement = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/placements`);
      setPlacement(response.data.data);
    } catch (error) {
      console.error("Error fetching placements:", error);
    }
  };

  const handleArtInputChange = (e) => {
    setArtworkData({
      ...artworkData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch data only if it's not already available
      if (!data) {
        await fetchData();
      }

      // Simulate data filtering based on form values
      const filteredData = simulateFilteringData(artworkData);

      // Update the searchResults state with the filtered data
      setSearchResults(filteredData);
      setLoading(false);
      console.log('Search results 1:', searchResults);
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const simulateFilteringData = (filters) => {
    // Apply filters
    const filteredData = data.filter((artwork) => {
      return (
        (filters.subjectName
          ? artwork.subject_id === parseInt(filters.subjectName)
          : true) &&
        (filters.styleName
          ? artwork.style_id === parseInt(filters.styleName)
          : true) &&
        (filters.placementName
          ? artwork.placement_id === parseInt(filters.placementName)
          : true) &&
        (filters.zipCode ? artwork.zipcode === filters.zipCode : true) &&
        (filters.username ? artwork.user.username === filters.username : true) &&
        (filters.radius ? true : true) && // Placeholder for radius filter
        (filters.country ? artwork.country === filters.country : true)
      );
    });

    return filteredData;
  };

  useEffect(() => {
    fetchData();
    fetchSubjectsData();
    fetchStyleData();
    fetchPlacement();
  
   }, [searchResults]);

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
        <div className="container">
          <div className="row">
             <form onSubmit={handleSubmit}>
        <div className="col-lg-3">
        <div className="d-block p-2">
            <label htmlFor="username" className="label">
              Search by Artist
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="form-control"
              placeholder="Finde by username"
              onChange={handleArtInputChange}
            />
          </div>
        <div className="d-block p-2">
            <label htmlFor="zipCode" className="label">
              Zip Code
            </label>
            <input
              type="number"
              name="zipCode"
              id="zipCode"
              className="form-control"
              placeholder="Please Enter Zip Code"
              onChange={handleArtInputChange}
            />
          </div>

          <div className="d-block p-2">
            <label htmlFor="radius" className="label">
              Radius
            </label>
            <select
              className="form-control"
              id="radius"
              name="radius"
              value={artworkData.radius}
              onChange={handleArtInputChange}
            >
              <option>20 Miles</option>
              <option>25 Miles</option>
              <option>30 Miles</option>
              <option>35 Miles</option>
              <option>40 Miles</option>
            </select>
          </div>

          <div className="d-block p-2">
            
            <label htmlFor="state" className="label">
              State
            </label>
            <input
              type="text"
              name="country"
              id="country"
              className="form-control"
              onChange={handleArtInputChange}
            />
          </div>
          <label htmlFor="subjectName" className="label">Subject Name:</label>
          <select
            
            name="subjectName"
            className="form-control"
            value={artworkData.subjectName}
            onChange={handleArtInputChange}
          >
            <option value="">Select Subject</option>
            {subjects && subjects.length ? (
                      <>
                        {subjects.map((subject) => (
                          <option value={subject.id}>{subject.title}</option>
                        ))}
                      </>
                    ) : (
                      <option value="">Select Style</option>

                    )}
          </select>

          <label htmlFor="styleName" className="label">Style Name:</label>
          <select
            
            name="styleName"
            className="form-control"
            value={artworkData.styleName}
            onChange={handleArtInputChange}
          >
      
            <option value="">Select Style</option>
                    {styledata && styledata.length ? (<>
                      {styledata.map((style) => (
                        <>
                          <option value={style.id}>{style.title}</option>
                          {/* {console.log(style)}; */}
                        </>
                      ))}
                    </>) : (<>
                      <option value="">Select Style</option>

                    </>)}
          </select>

          <label htmlFor="placementName" className="label">Placement Name:</label>
          <select
            
            name="placementName"
            className="form-control"
            value={artworkData.placementName}
            onChange={handleArtInputChange}
          >
            
            <option value="">Select Placement</option>
                    {placement && placement.length ? (
                      placement.map((placement) => (
                        <option value={placement.id}>{placement.title}</option>)
                      )
                    ) : <option value="">Select Placement</option>
                    }
          </select>

          <div className="form-group">
            <div className="d-block p-2">
              <label className="label" htmlFor="date">
              Availability Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                className="form-control"
                onChange={handleArtInputChange}
              />
            </div>
          </div>



          <button type="submit" className="btn btn-primary" style={{ marginTop: '15px' }}>
          Search
        </button>

        </div>
        
        </form>
          
            <div className="col-lg-9 col-md-8">
              
            {loading ? (
        <p>Loading...</p>
      ) : (
       <>
          <MGallery image={searchResults}/>
      </>
      )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
