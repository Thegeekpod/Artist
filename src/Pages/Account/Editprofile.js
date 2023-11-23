import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { isAuthenticated, useUser } from './UserContext';
import { useNavigate } from 'react-router-dom';

const Editprofile = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        phone: '',
        address: '',
        zipcode: '',
        email: '',
        profileImage: null,
        imagePreview: null, 
        sunday_from: "",
    sunday_to: "",
    monday_from: "",
    monday_to: "",
    tuesday_from: "",
    tuesday_to: "",
    wednesday_from: "",
    wednesday_to: "",
    thrusday_from: "",
    thrusday_to: "",
    friday_from: "",
    friday_to: "",
    saterday_from: "",
    saterday_to: ""
      });
      const [artdata, setArtData] = useState([]);
      const [bannerImagedata, setBannerimageData] = useState([]);
      // const [timedata,setTimedata]=useState([]);
      const {token,user} = useUser();
      const [sucess , setSucess]= useState(false);
      const navigate = useNavigate();

    
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
            setTimedata(response.data.data.time_data);
            setBannerimageData(response.data.data.banner_images);

          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
    setFormData({ ...formData });
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
    
    const handleInputChange = (e) => {
        if (e.target.type === 'file') {
          const selectedImage = e.target.files[0];
          setFormData({
            ...formData,
            profileImage: selectedImage,
            imagePreview: URL.createObjectURL(selectedImage),
          });
        } else {
          const { name, value } = e.target;
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleTimeInputChange = (day, field, value) => {
        setTimedata({
          ...timedata,
          [`${day}_${field}`]: value,
        });
      };

    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formDataToSend = new FormData();
    
          // Append individual fields to formDataToSend
          Object.keys(formData).forEach((key) => {
            if (key === 'profileImage' && formData[key]) {
              formDataToSend.append(key, formData[key]);
            } else {
              formDataToSend.append(key, formData[key]);
            }
          });
    
          // Append timedata fields to formDataToSend
          Object.keys(timedata).forEach((key) => {
            formDataToSend.append(key.replace('_', ''), timedata[key]);
          });
    
          const response = await axios.post(
            `https://sweetdevelopers.com/artist/api/artist-update/${user?.id}`,
            formDataToSend,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                // Don't specify 'Content-Type' manually for FormData
                Accept: 'application/json',
              },
            }
          );
    
          console.log('Success:', response.data);
          // Handle success
    
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
    
    <form onSubmit={handleSubmit} >
      <div className="row mb-3">
      <div className="col-md-12 mt-3 text-center ">
            <img
          src={formData.imagePreview || `https://sweetdevelopers.com/artist/storage/ProfileImage/${formData.profile_image}`}

              alt="Preview"
              style={{ maxWidth: '200px%', height: '200px' }}
            />
          </div>
  <div className="col-md-12">
          <label htmlFor="profileImage" className="form-label">
            Profile Image
          </label>
          <input
            type="file"
            className="form-control"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
     
         
     
      
     
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        </div>
     
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
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
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
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
            type="text"
            className="form-control"
            id="zipcode"
            name="zipcode"
            placeholder="Enter your zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Opening Time</th>
            <th>Closing Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sun</td>
            <td>
              <input
                type="text"
                value={timedata?.sunday_from}
                onChange={(e) => handleTimeInputChange('sunday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.sunday_to}
                onChange={(e) => handleTimeInputChange('sunday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Mon</td>
            <td>
              <input
                type="text"
                value={timedata?.monday_from}
                onChange={(e) => handleTimeInputChange('monday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.monday_to}
                onChange={(e) => handleTimeInputChange('monday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Tue</td>
            <td>
              <input
                type="text"
                value={timedata?.tuesday_from}
                onChange={(e) => handleTimeInputChange('tuesday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.tuesday_to}
                onChange={(e) => handleTimeInputChange('tuesday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Wed</td>
            <td>
              <input
                type="text"
                value={timedata?.wednesday_from}
                onChange={(e) => handleTimeInputChange('wednesday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.wednesday_to}
                onChange={(e) => handleTimeInputChange('wednesday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Thu</td>
            <td>
              <input
                type="text"
                value={timedata?.thrusday_from}
                onChange={(e) => handleTimeInputChange('thursday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.thrusday_to}
                onChange={(e) => handleTimeInputChange('thursday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Fri</td>
            <td>
              <input
                type="text"
                value={timedata?.friday_from}
                onChange={(e) => handleTimeInputChange('friday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.friday_to}
                onChange={(e) => handleTimeInputChange('friday', 'to', e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Sat</td>
            <td>
              <input
                type="text"
                value={timedata?.saterday_from}
                onChange={(e) => handleTimeInputChange('saturday', 'from', e.target.value)}
              />
            </td>
            <td>
              <input
                type="text"
                value={timedata?.saterday_to}
                onChange={(e) => handleTimeInputChange('saturday', 'to', e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="row">
        <div className="col-md-12 text-center" style={{marginTop:'20px'}}>
          <button type="submit" className="btn btn-primary" style={{width:'40%'}}>
            Submit
          </button>
        </div>
      </div>
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