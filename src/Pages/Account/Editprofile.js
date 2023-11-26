import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { isAuthenticated, useUser } from './UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { apibaseUrl } from '../../Component/Apibaseurl';
import Swal from 'sweetalert2';

const Editprofile = () => {
  const [formData, setFormData] = useState([]);
  const [artdata, setArtData] = useState([]);
  const [bannerImagedata, setBannerimageData] = useState([]);
  const [timedatavalue, setTimedatavalue] = useState([]);
  const { token, user } = useUser();
  const [sucess, setSucess] = useState(false);
  const [sucessprofileinfo, setSucessprofileinfo] = useState(false);
  const [sucessbanner, setbannerSucess] = useState(false);
  const [subjects, setSubjects] = useState([]);
  const [styledata, setStyledata] = useState([]);
  const [placement, setPlacement] = useState([]);



  const navigate = useNavigate();

  const apiUrl = `${apibaseUrl}/artist`;
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    },
  };

  const fetchSubjectsData = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/subjects`);
      setSubjects(response.data.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const fetchStyleData = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/styles`);
      setStyledata(response.data.data);
    } catch (error) {
      console.error('Error fetching subjects:', error);
    }
  };

  const fatchPlacement = async () => {
    try {
      const response = await axios.get(`${apibaseUrl}/placements`);
      setPlacement(response.data.data);

    } catch (error) {
      console.error('Eroor fetching subjects:', error)
    }
  }
  useEffect(() => {


    // Check if the user is authenticated when the component mounts
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }


    // Make the API call using Axios
    axios.get(apiUrl, axiosConfig)
      .then(response => {
        setFormData(response.data.data);
        setArtData(response.data.data.artworks);
        setTimedatavalue(response.data.data.time_data);
        setBannerimageData(response.data.data.banner_images);

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    setFormData({ ...formData });
    fetchSubjectsData();
    fetchStyleData();
    fatchPlacement();
  }, [token, isAuthenticated, navigate]);

  //Edit Your Personal Information
  const [timedata, setTimedata] = useState({
    sunday_from: '',
    sunday_to: '',
    monday_from: '',
    monday_to: '',
    tuesday_from: '',
    tuesday_to: '',
    wednesday_from: '',
    wednesday_to: '',
    thrusday_from: '',
    thrusday_to: '',
    friday_from: '',
    friday_to: '',
    saterday_from: '',
    saterday_to: '',
  });
  const [originalTimedata, setOriginalUsertimeinfo] = useState({ ...timedata });



  const [userinfo, setUserinfo] = useState({
    name: '',
    username: '',
    phone: '',
    address: '',
    zipcode: '',
    email: '',
    profile_image: null,
    imagePreview: null,

  });
  const [originalUserinfo, setOriginalUserinfo] = useState({ ...userinfo });
  const handleInputChange = (e) => {
    if (e.target.type === 'file') {
      const selectedImage = e.target.files[0];
      setUserinfo((prevInfo) => ({
        ...prevInfo,
        profile_image: selectedImage,
        imagePreview: URL.createObjectURL(selectedImage),
      }));
    } else {
      const { name, value } = e.target;
      setUserinfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handleTimeInputChange = (day, field, value) => {
    if (field === 'from_to') {
      const [fromValue, toValue] = value.split('-');
      setTimedata({
        ...timedata,
        [`${day}_from`]: fromValue,
        [`${day}_to`]: toValue,
      });
    } else {
      setTimedata({
        ...timedata,
        [`${day}_${field}`]: value,
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append updated userinfo fields to formDataToSend
      for (const key in userinfo) {
        if (
          userinfo.hasOwnProperty(key) &&
          userinfo[key] !== originalUserinfo[key] &&
          userinfo[key] !== null
        ) {
          formDataToSend.append(key, userinfo[key]);
        }
      }

      // Append updated timedata fields to formDataToSend
      for (const key in timedata) {
        if (
          timedata?.hasOwnProperty(key) &&
          timedata[key] !== originalTimedata[key] &&
          timedata[key] !== null
        ) {
          formDataToSend.append(key, timedata[key]);
        }
      }

      const response = await axios.post(
        `${apibaseUrl}/artist-update/${user?.id}`,
        formDataToSend, axiosConfig

      );

      console.log('Success:', response.data);
      setSucessprofileinfo(true);
      setTimeout(() => {
        setSucessprofileinfo(false);
      }, 4000);
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };





  //Upload Your Arts

  const [artworkData, setArtworkData] = useState({
    artistName: '',
    placementName: '',
    styleName: '',
    subjectName: '',
    image: null,
    imagePreview: null,
    user_id: `${user?.id}`,
  });
  const handleArtInputChange = (event) => {
    const { name, value } = event.target;
    setArtworkData({
      ...artworkData,
      [name]: value,
    });
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setArtworkData({
      ...artworkData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };
  const handleSubmitArt = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', artworkData.user_id);
    formData.append('placement_id', artworkData.placementName);
    formData.append('style_id', artworkData.styleName);
    formData.append('subject_id', artworkData.subjectName);
    formData.append('image', artworkData.image);
    try {
      const response = await axios.post(`https://sweetdevelopers.com/artist/api/upload-artwork`, formData, axiosConfig);
      console.log('File uploaded successfully:', response.data);
      // Update ArtData after successful upload
      // setArtData(response.data.data.artworks);
      // Handle success or reset form
      setSucess(true);
      setTimeout(() => {
        setSucess(false);
      }, 3000);


      setArtworkData({
        ...artworkData,
        image: null,
        imagePreview: null,
      });

      axios.get(apiUrl, axiosConfig)
        .then(response => {
          setArtData(response.data.data.artworks);

        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });


    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };

  const deleteArtItem = async (idToDelete) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await axios.delete(`https://sweetdevelopers.com/artist/api/delete-artwork/${idToDelete}`,axiosConfig);

        if (response.status === 200) {
          console.log(`Item with ID ${idToDelete} deleted`);


          axios.get(apiUrl, axiosConfig)
          .then(response => {
            setArtData(response.data.data.artworks);
  
          })
        } else {
          console.error('Failed to delete item');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  

  //upload banner
  const [bannerData, setBannerData] = useState({
    user_id: `${user?.id}`,
    image: null,
    imagePreview: null,
  });

  const handleBannerImageChange = (event) => {
    const file = event.target.files[0];
    setBannerData({
      ...bannerData,
      image: file,
      imagePreview: URL.createObjectURL(file),
    });
  };

  const handleSubmitBanner = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('user_id', bannerData.user_id);
    formData.append('banner_image', bannerData.image,);

    try {
      const response = await axios.post(`${apibaseUrl}/upload-banner`, formData, axiosConfig);
      console.log('File uploaded successfully:', response.data);
      // Handle success or reset form
      setbannerSucess(true);
      setTimeout(() => {
        setbannerSucess(false);
      }, 3000);


      setBannerData({
        ...artworkData,
        image: null,
        imagePreview: null,
      });
      axios.get(apiUrl, axiosConfig)
        .then(response => {
          setBannerimageData(response.data.data.banner_images);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };

  const deleteBannerItem = async (idToDelete) => {
    const confirmed = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (confirmed.isConfirmed) {
      try {
        const response = await axios.delete(`https://sweetdevelopers.com/artist/api/delete-banner/${idToDelete}`,axiosConfig);

        if (response.status === 200) {
          console.log(`Item with ID ${idToDelete} deleted`);


          axios.get(apiUrl, axiosConfig)
          .then(response => {
            setBannerimageData(response.data.data.banner_images);
  
          })
        } else {
          console.error('Failed to delete item');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  // location setup
  const artsupload = useRef(null);
  const profileupdate = useRef(null);
  const bannerimage = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#artsupload' && artsupload.current) {
      artsupload.current.scrollIntoView({ behavior: 'smooth' });
    };

    if (location.hash === '#profileupdate' && profileupdate.current) {
      profileupdate.current.scrollIntoView({ behavior: 'smooth' })
    };
    if (location.hash === '#bannerimage' && bannerimage.current) {
      bannerimage.current.scrollIntoView({ behavior: 'smooth' })
    }

  }, [location]);
  return (
    <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
      <div className="container">
        <section className="bg-header breadcrumbs-custom" >
          <div className='frombg' ref={profileupdate} id='#profileupdate'>
            <div className='row text-center'>
              <h4 class="page-title-1 " style={{ color: 'white' }}> Edit Your Personal Information </h4>
            </div>

            <form onSubmit={handleSubmit} >
              <div className="row mb-3">
                <div className="col-md-12 mt-3 text-center ">
                  <img
                    src={userinfo.imagePreview || `https://sweetdevelopers.com/artist/storage/ProfileImage/${formData.profile_image || 'noimg.jpg'}  `}

                    alt="Preview"
                    style={{ maxWidth: '200px%', height: '200px' }}
                  />
                </div>
                <div className="col-md-12" style={{ marginBottom: '20px' }}>
                  <label htmlFor="profile_image" className="form-label">
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    name="profile_image"
                    accept="image/*"
                    onChange={handleInputChange}
                  />
                </div>





                <div className="col-md-6" >
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={userinfo.name || formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    Username (This field is not changable)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Enter your username"
                    value={userinfo.username || formData.username}
                    onChange={handleInputChange} disabled
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={userinfo.phone || formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    placeholder="Enter your address"
                    value={userinfo.address || formData.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="zipcode" className="form-label">
                    Zipcode
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="zipcode"
                    placeholder="Enter your zipcode"
                    value={userinfo.zipcode || formData.zipcode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    Email (This field is not changable)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Enter your email"
                    value={userinfo.email || formData.email}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
              <table className="table" style={{ marginTop: '25px' }}>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Opening Time</th>
                    <th>Closing Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='spacebetween-arround'>
                      <div>Sun</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.sunday_from}-${timedata?.sunday_to}`}
                      defaultValue={`${timedata?.sunday_from}-${timedata?.sunday_to}`}

                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('sunday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {!timedata?.sunday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        {/* // If 'monday_from' is not null, render this option */}
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}


                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>

                    <td>
                      <input
                        type="time"
                        value={timedata?.sunday_from || timedatavalue?.sunday_from}
                        onChange={(e) => handleTimeInputChange('sunday', 'from', e.target.value)}
                      />

                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.sunday_to || timedatavalue?.sunday_to}
                        onChange={(e) => handleTimeInputChange('sunday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Mon</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.monday_from}-${timedata?.monday_to}`}
                      defaultValue={`${timedata?.monday_from}-${timedata?.monday_to}`}

                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('monday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {!timedata?.monday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        {/* // If 'monday_from' is not null, render this option */}
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}


                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.monday_from || timedatavalue?.monday_from}
                        onChange={(e) => handleTimeInputChange('monday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.monday_to || timedatavalue?.monday_to}
                        onChange={(e) => handleTimeInputChange('monday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Tue</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.tuesday_from}-${timedata?.tuesday_to}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('tuesday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {timedatavalue?.tuesday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        // If 'monday_from' is not null, render this option
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}



                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.tuesday_from || timedatavalue?.tuesday_from}
                        onChange={(e) => handleTimeInputChange('tuesday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.tuesday_to || timedatavalue?.tuesday_to}
                        onChange={(e) => handleTimeInputChange('tuesday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Wed</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.wednesday_from}-${timedata?.wednesday_to}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('wednesday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {timedatavalue?.wednesday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        // If 'monday_from' is not null, render this option
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}


                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.wednesday_from || timedatavalue?.wednesday_from}
                        onChange={(e) => handleTimeInputChange('wednesday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.wednesday_to || timedatavalue?.wednesday_to}
                        onChange={(e) => handleTimeInputChange('wednesday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Thu</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.thrusday_from}-${timedata?.thrusday_to}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('thrusday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {timedatavalue?.thrusday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        // If 'monday_from' is not null, render this option
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}
                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.thrusday_from || timedatavalue?.thrusday_from}
                        onChange={(e) => handleTimeInputChange('thrusday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.thrusday_to || timedatavalue?.thrusday_to}
                        onChange={(e) => handleTimeInputChange('thrusday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Fri</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.friday_from}-${timedata?.friday_to}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('friday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {timedatavalue?.friday_from === null ? (
                        // If 'monday_from' is null, render this option
<>
                        
                              <option value="null-null">Close</option>
                        <option value="10:00-18:00">open</option>
                        </>
                      ) : (
                        <>
                        // If 'monday_from' is not null, render this option
                        <option value="10:00-18:00">open</option>
                        
                              <option value="null-null">Close</option>
</>
                      )}

                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.friday_from || timedatavalue?.friday_from}
                        onChange={(e) => handleTimeInputChange('friday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.friday_to || timedatavalue?.friday_to}
                        onChange={(e) => handleTimeInputChange('friday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                  <td className='spacebetween-arround'>
                      <div>Sat</div> 
                      <div>
                      <select
                      type="time"
                      value={`${timedata?.saterday_from}-${timedata?.saterday_to}`}
                      onChange={(e) => {
                        const value = e.target.value;
                        handleTimeInputChange('saterday', 'from_to', value);
                      }}
                    >
                      {/* Options for start time */}
                    {timedatavalue?.saterday_from  === null ? (
                            <>
                              {/* Options for start time */}
                              
                              <option value="null-null">Close</option>
                              <option value="10:00-18:00">Open</option>

                            </>
                          ) : (
                            // If no data is available for Sunday
                            <>
                              <option value="10:00-18:00">Open</option>

                              
                              <option value="null-null">Close</option>
                            </>)}



                      {/* Add more options as needed */}
                    </select>
                      </div>
                     
                     </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.saterday_from || timedatavalue?.saterday_from}
                        onChange={(e) => handleTimeInputChange('saterday', 'from', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="time"
                        value={timedata?.saterday_to || timedatavalue?.saterday_to}
                        onChange={(e) => handleTimeInputChange('saterday', 'to', e.target.value)}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              {sucessprofileinfo && <><div>
                <p className='sucess'>Profile Update Sucessfull</p>
              </div></>}
              <div className="row">
                <div className="col-md-12 text-center" style={{ marginTop: '20px' }} >
                  <button type="submit" className="btn btn-primary" style={{ width: '40%' }} >
                    Submit
                  </button>
                </div>
              </div>

            </form>

          </div>
          <div className='frombg' ref={artsupload} id="artsupload"  >
            <div className='row text-center'>
              <h4 class="page-title-1 " style={{ color: 'white' }}> Upload Your Arts </h4>
            </div>
            <form onSubmit={handleSubmitArt}>
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="artistName">Artist Name:</label>
                  <input
                    type="text"
                    name="artistName"
                    className="form-control"
                    value={formData.name}
                    disabled
                  />

                  <label htmlFor="placementName">Placement Name:</label>
                  {/* <label htmlFor="placementName">Placement Name:</label> */}
                  <select required
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


                    {/* Add more options as needed */}
                  </select>

                  <label htmlFor="styleName">Style Name:</label>
                  <select required
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
                          {console.log(style)};
                        </>
                      ))}
                    </>) : (<>
                      <option value="">Select Style</option>

                    </>)}
                  </select>

                  <label htmlFor="subjectName">Subject Name:</label>
                  <select required
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


                    {/* Add more options as needed */}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="image">Attach the artwork image here:</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control"
                    onChange={handleImageChange}
                  />
                  {artworkData.imagePreview && (
                    <>
                      <img src={artworkData.imagePreview} alt="Preview" style={{ Width: '155px', height: '155px', marginTop: '20px' }} />
                      <div style={{ marginTop: '20px', width: "100%" }}>

                        <button style={{ width: "100%" }} type="submit" className="btn btn-primary mt-3">Upload</button>

                      </div>
                    </>

                  )}
                  {/* Additional input fields or previews */}
                  {/* Add labels and input fields as needed */}

                </div>
              </div>
              {sucess && <><div>
                <p className='sucess'>your image upload sucessfull</p>
              </div></>}
            </form>
            <hr />

            <div className='row text-center'>
              <h4 class="page-title-1 " style={{ color: 'white' }}> All Artworks </h4>
              {artdata ? (
                <>
                  {/* Map over the data array and render something for each item */}
                  {artdata.map(item => (
                    <div className="col-lg-4 " key={item.id}>
                      <div class="imgbox">
                        <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`} alt={item.title} />
                        <div className='imgtitle'>
                        
                          <h4 class="page-title-1 " style={{ color: 'white' }}>
                            {item.title}
                          </h4>
                          <i className="fa fa-trash deletebutton" aria-hidden="true"  onClick={()=>{deleteArtItem(item.id)}}> Delete</i>
                          <div className="row d-flex">
                         
                            <div className="coll-6 text-left">

                              <i class="fa fa-thumbs-up like" aria-hidden="true"> 100</i>



                            </div>
                            <div className="coll-6 text-right">
                              <i class="fa fa-eye like" aria-hidden="true"> 200</i>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Loading...</p>
              )}

            </div>
          </div>

          <div className='frombg' ref={bannerimage} id='#bannerimage'>
            <div className='row text-center'>
              <h4 class="page-title-1 " style={{ color: 'white' }}> Upload Your Banner </h4>
            </div>
            <form onSubmit={handleSubmitBanner}>
              <div className="row">

                <div className="col-md-12">
                  <label htmlFor="image">Attach the Banner image here:(1024x1024)</label>
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    className="form-control"
                    onChange={handleBannerImageChange}
                  />
                  {bannerData.imagePreview && (
                    <>
                      <img src={bannerData.imagePreview} alt="Preview" style={{ maxWidth: '100%', height: 'auto', marginTop: '20px' }} />
                      <div style={{ marginTop: '20px', width: "100%" }}>
                        <button style={{ width: "100%" }} type="submit" className="btn btn-primary mt-3">Upload</button>

                      </div>
                      {sucessbanner && <><div>
                        <p className='sucess'>Profile Update Sucessfull</p>
                      </div></>}
                    </>

                  )}
                  {/* Additional input fields or previews */}
                  {/* Add labels and input fields as needed */}
                </div>
              </div>

            </form>
            <hr />

            <div className='row text-center'>
              <h4 class="page-title-1 " style={{ color: 'white' }}> All Banner Images </h4>
              {bannerImagedata ? (
                <>
                  {/* Map over the data array and render something for each item */}
                  {bannerImagedata.map(item => (
                    <div className="col-lg-4 " key={item.id}>
                      <div class="imgbox">
                        <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/BannerImage/${item.banner_image}`} alt={item.banner_image} />
                        <div className='imgtitle'>
                        
                        
                        <i className="fa fa-trash deletebutton" aria-hidden="true"  onClick={()=>{deleteBannerItem(item.id)}}> Delete</i>
                       
                      </div>

                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <p>Loading...</p>
              )}

            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

export default Editprofile