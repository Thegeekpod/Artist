import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apibaseUrl, apiimageurl } from '../../Component/Apibaseurl';
import axios from 'axios';

const Artis = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apibaseUrl}/all-artists`); // Replace with your API endpoint
        setData(response.data.data);
        console.log(data)
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [navigate]); // Empty dependency array to run this effect only once (on mount)

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // if (!data) {
  //   return <div>Loading...</div>;
  // }

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
              <li className="active">Artists</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 text-center">
            <h3 className="breadcrumbs-title">Artists</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4" />
        </div>
      </div>
    </div>
    <div className="ds section_padding_top_90 section_padding_bottom_85">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-title-1 text-center">EXPERTS &amp; ARTISTS</h3>
            <h6 className="subheader-type-1 subheader-type-1--team  text-center">
              Professionals Artists
            </h6>
          </div>
        </div>
        <div className="row">
        {data && data.length ? (
        data.map((item, index) => (
          <div key={index}>
          <div className="col-sm-4 col-md-4 col-lg-4 text-sm-center" onClick={()=>{navigate(`/artists/${item.username}`)}}>
            <div className="team-item text-center">
              <figure className="team-item__img ">
                  <img style={{width:'298px', height:'295px'}} src={`${apiimageurl}/ProfileImage/${item.profile_image || 'noimg.jpg'}`} alt="" />
              </figure>
              <div className="team-item__content text-center pb-2">
                <h5 className="team-item__title">
                  <Link to={`/artists/${item.username}`}>{item.name}</Link>
                </h5>
                <p className="team-item__prof">{item.username}</p>
              </div>
              {/* <ul className="social-list text-center social-list--team">
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
              </ul> */}
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
 



</>

  )
}

export default Artis