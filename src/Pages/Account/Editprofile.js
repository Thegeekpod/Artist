import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { isAuthenticated, useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Editprofile = () => {
  
      const [artdata, setArtData] = useState([]);
      const [bannerImagedata, setBannerimageData] = useState([]);
      // const [timedata,setTimedata]=useState([]);
      const {token,user} = useUser();
      const [sucess , setSucess]= useState(false);
      const navigate = useNavigate();
      const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        zipcode: '',
        profile_image: '',
        banner_image: '',
      });
      const [timeData, setTimeData] = useState({
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
    
      useEffect(() => {
        const apiUrl = 'https://sweetdevelopers.com/artist/api/artist';
    
        // Check if the user is authenticated when the component mounts
        if (!isAuthenticated()) {
          navigate('/login');
          return;
        }
    
        const axiosConfig = {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', // Adjust content type based on your API requirements
          },
        };
    
        // Make the API call using Axios
        axios.get(apiUrl, axiosConfig)
          .then(response => {
            // setData(response.data.data.artworks);
            setFormData(response.data.data);
            setArtData(response.data.data.artworks);
            setTimeData(response.data.data.time_data);
            setBannerimageData(response.data.data.banner_images);

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    setFormData({ ...formData });
      }, [token, isAuthenticated, navigate]);

     
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleTimeInputChange = (e) => {
        const { name, value } = e.target;
        setTimeData({
          ...timeData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`https://sweetdevelopers.com/artist/api/artist-update/${user?.id}`, {
            method: 'post', // Assuming the update method is a PUT request
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
              // Add any required headers here
            },
            body: JSON.stringify({ ...formData, ...timeData }),
          });
    
          const responseData = await response.json();
    
          if (response.ok) {
            // Handle successful response
            console.log('Update successful:', responseData);
          } else {
            // Handle error response
            console.error('Update failed:', responseData);
          }
        } catch (error) {
          // Handle fetch error
          console.error('Error:', error);
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
          const response = await axios.post('https://sweetdevelopers.com/artist/api/upload-artwork', formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          });
          console.log('File uploaded successfully:', response.data);
          // Handle success or reset form
          setSucess(true);
          setTimeout(() => {
            setSucess(false);
          }, 3000);
      
          // Reset other data if needed
          setArtworkData({
            placementName: '',
            styleName: '',
            subjectName: '',
            image: null,
            imagePreview: null,
            user_id: `${user.id}`,
          });
          setArtworkData({
            ...artworkData,
            image: null,
            imagePreview: null,
          });
        } catch (error) {
          console.error('Error uploading file:', error);
          // Handle error
        }
      };
 
  //upload banner
  const [bannerData, setBannerData] = useState({

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
    
    formData.append('image', artworkData.image);

    try {
      const response = await axios.post('YOUR_API_ENDPOINT_HERE', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('File uploaded successfully:', response.data);
      // Handle success or reset form
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };
  return (
    <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
    <div className="container">
    <section className="bg-header breadcrumbs-custom">
      <div className='frombg'>
      <div className='row text-center'>
    <h4 class="page-title-1 " style={{color:'white'}}> Edit Your Personal Information </h4>
    </div>
    
    <form onSubmit={handleSubmit}>
      {/* Artist Information */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        placeholder="Phone"
      />
      <input
        type="text"
        name="address"
        value={formData.address}
        onChange={handleInputChange}
        placeholder="Address"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Password"
        required
      />
      <input
        type="text"
        name="zipcode"
        value={formData.zipcode}
        onChange={handleInputChange}
        placeholder="Zipcode"
        required
      />
      <input
        type="text"
        name="profile_image"
        value={formData.profile_image}
        onChange={handleInputChange}
        placeholder="Profile Image URL"
      />
      <input
        type="text"
        name="banner_image"
        value={formData.banner_image}
        onChange={handleInputChange}
        placeholder="Banner Image URL"
      />

      {/* Time Information */}
      {/* Repeat this section for all time-related fields */}
      <input
        type="text"
        name="sunday_from"
        value={timeData.sunday_from}
        onChange={handleTimeInputChange}
        placeholder="Sunday From"
        required
      />
      <input
        type="text"
        name="sunday_to"
        value={timeData.sunday_to}
        onChange={handleTimeInputChange}
        placeholder="Sunday To"
        required
      />
      {/* End of Time Information */}

      <button type="submit">Update Artist</button>
    </form>

      </div>
    <div className='frombg'>
    <div className='row text-center'>
    <h4 class="page-title-1 " style={{color:'white'}}> Upload Your Arts </h4>
    </div>
    <form onSubmit={handleSubmitArt}>
      <div className="row">
        <div className="col-md-6">
          <label htmlFor="artistName">Artist Name:</label>
          <input
            type="text"
            id="artistName"
            name="artistName"
            className="form-control"
            value={formData.name}
            onChange={handleArtInputChange} disabled
          />

          <label htmlFor="placementName">Placement Name:</label>
          <label htmlFor="placementName">Placement Name:</label>
  <select
    id="placementName"
    name="placementName"
    className="form-control"
    value={artworkData.placementName}
    onChange={handleArtInputChange}
  >
    <option value="">Select Placement</option>
    <option value="1">Placement 1</option>
    <option value="2">Placement 2</option>
    {/* Add more options as needed */}
  </select>

  <label htmlFor="styleName">Style Name:</label>
  <select
    id="styleName"
    name="styleName"
    className="form-control"
    value={artworkData.styleName}
    onChange={handleArtInputChange}
  >
    <option value="">Select Style</option>
    <option value="1">Style 1</option>
    <option value="2">Style 2</option>
    {/* Add more options as needed */}
  </select>

  <label htmlFor="subjectName">Subject Name:</label>
  <select
    id="subjectName"
    name="subjectName"
    className="form-control"
    value={artworkData.subjectName}
    onChange={handleArtInputChange}
  >
    <option value="">Select Subject</option>
    <option value="1">Subject 1</option>
    <option value="2">Subject 2</option>
    {/* Add more options as needed */}
  </select>
  </div>
        <div className="col-md-6">
          <label htmlFor="image">Attach the artwork image here:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={handleImageChange}
          />
          {artworkData.imagePreview && (
            <>
               <img src={artworkData.imagePreview} alt="Preview" style={{ Width: '155px', height:'155px',marginTop:'20px' }} />
               <div style={{marginTop:'20px', width:"100%"}}>
           
               <button style={{ width:"100%"}} type="submit" className="btn btn-primary mt-3">Upload</button>
               
               </div>
            </>
         
          )}
          {/* Additional input fields or previews */}
          {/* Add labels and input fields as needed */}
          
        </div>
      </div>
      {sucess && <><div>
                  <p  className='sucess'>your image upload sucessfull</p>
                  </div></>}
    </form>
<hr/>

    <div className='row text-center'>
    <h4 class="page-title-1 " style={{color:'white'}}> All Artworks </h4>
    {artdata ? (
  <>
        {/* Map over the data array and render something for each item */}
        {artdata.map(item => (
              <div className="col-lg-4 "  key={item.id}>
              <div class="imgbox">
              <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`} alt={item.title}  />
 <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                {item.title} 
                </h4>
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
      
      <div className='frombg'>
    <div className='row text-center'>
    <h4 class="page-title-1 " style={{color:'white'}}> Upload Your Banner </h4>
    </div>
    <form onSubmit={handleSubmitBanner}>
      <div className="row">
     
        <div className="col-md-12">
          <label htmlFor="image">Attach the Banner image here:(1024x1024)</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            className="form-control"
            onChange={handleBannerImageChange}
          />
          {bannerData.imagePreview && (
            <>
               <img src={bannerData.imagePreview} alt="Preview" style={{maxWidth:'100%', height:'auto',marginTop:'20px' }} />
               <div style={{marginTop:'20px', width:"100%"}}>
               <button style={{ width:"100%"}} type="submit" className="btn btn-primary mt-3">Upload</button>

               </div>
            </>
         
          )}
          {/* Additional input fields or previews */}
          {/* Add labels and input fields as needed */}
        </div>
      </div>
     
    </form>
<hr/>

    <div className='row text-center'>
    <h4 class="page-title-1 " style={{color:'white'}}> All Banner Images </h4>
    {bannerImagedata ? (
  <>
        {/* Map over the data array and render something for each item */}
        {bannerImagedata.map(item => (
              <div className="col-lg-4 "  key={item.id}>
              <div class="imgbox">
              <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/BannerImage/${item.banner_image}`} alt={item.banner_image}  />
 
              
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