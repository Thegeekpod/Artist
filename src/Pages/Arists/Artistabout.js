import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isAuthenticated, useUser } from '../Account/UserContext';
import axios from 'axios';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/mousewheel';
import 'swiper/css/bundle';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { apibaseUrl } from '../../Component/Apibaseurl';
import MGallery from '../Home/Gallery';
import Swal from 'sweetalert2';
const Artistabout = () => {

  const { token } = useUser();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [user, setUserData] = useState([]);
  const [timedata, setTimedata] = useState([null]);
  const [bannerImagedata, setBannerimageData] = useState([]);
  const { slug } = useParams()

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  };

  useEffect(() => {
    const apiUrl = `${apibaseUrl}/artist/${slug}`;
   

    axios.get(apiUrl, axiosConfig)
      .then(response => {
        if (response.data.status === false) {
          navigate('/artistnotfound'); // Redirect to your 404 page
        } else {
          setData(response.data.data.artworks);
          setUserData(response.data.data);
          setTimedata(response.data.data.time_data);
          setBannerimageData(response.data.data.banner_images);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [token, navigate, slug]);

  const [tatto, setTatto] = useState({
    size: 'Credit Card',
    description: '',
    color: 'Color',
    artist_id: user.id,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTatto({ ...tatto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tatto )
    try {
      // Send form data using Axios POST request to your API endpoint
      const response = await axios.post(`${apibaseUrl}/quote`, axiosConfig , tatto);

      // Display success message if the request was successful
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Tattoo details submitted!',
          text: 'Your tattoo information has been submitted successfully.',
        });
        // Optionally, you can reset the form after submission
        setTatto({
          size: 'Credit Card',
          description: '',
          color: 'Color'
        });
      }
    } catch (error) {
      // Handle error scenarios here
      console.error('Error occurred:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };
// console.log('kk',user.id);
  return (
    <>
      <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
        <div className="container">

          <section className="bg-header breadcrumbs-custom">
            <div className="container">
              <div className="text-center">

              </div>
            </div>
          </section>
          <section className="text-center text-md-start section-lg bg-default">
            <div className="container">
              <div className="row row-55">
                <div className="col-md-4 m-padding-0 text-center">
                  <div className="inset-xl-right-15">
                    <div className="img-wrap-1">

                      {user.profile_image && user.profile_image.length ?
                        <img
                          src={`https://sweetdevelopers.com/artist/storage/ProfileImage/${user?.profile_image}`}
                          alt=""
                          style={{ width: '100%', height: "295px", marginBottom: '10px' }}
                        /> : <div className="imgbox">
                          <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/noimg.jpg`} alt={''} />
                          <div className='imgtitle'>
                            <h4 className="page-title-1 " style={{ color: 'white' }}>
                              No Imgae
                            </h4>
                            <div className="row text-center">
                              {/* <button type="button" className="btn btn-info" onClick={() => { navigate('/editprofile#profileupdate') }}>Upload Now</button> */}
                            </div>
                          </div>

                        </div>
                      }

                      {/* <button type="button" className="btn btn-success" style={{ width: '100%' }} onClick={() => { navigate('/editprofile') }}>Edit Profile</button> */}
{isAuthenticated() ? (
                      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#staticBackdrop">Get A Free Quote</button>

) :'' }

                      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="staticBackdropLabel">Quote Now</h5>
                              <button type="button" className="close closee" data-dismiss="modal" aria-label="Close">
                               X
                              </button>
                            </div>
                            <div className="modal-body">
                            <form onSubmit={handleSubmit}>
      <h5 className='text-left'>How big would you like the tattoo?</h5>
      <ul>
        <div className='sizze'>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="size"
                type="radio"
                className="radio"
                value="Credit Card"
                checked={tatto.size === "Credit Card"}
                onChange={handleChange}
              />
              Size of a Credit Card
            </label>
          </li>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="size"
                type="radio"
                className="radio"
                value="Palm Sized"
                checked={tatto.size === "Palm Sized"}
                onChange={handleChange}
              />
              Palm Sized
            </label>
          </li>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="size"
                type="radio"
                className="radio"
                value="Hand Sized"
                checked={tatto.size === "Hand Sized"}
                onChange={handleChange}
              />
              Hand Sized
            </label>
          </li>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="size"
                type="radio"
                className="radio"
                value="Larger Sized"
                checked={tatto.size === "Larger Sized"}
                onChange={handleChange}
              />
              Half-Sleeve or Larger
            </label>
          </li>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="size"
                type="radio"
                className="radio"
                value="Not Decided"
                checked={tatto.size === "Not Decided"}
                onChange={handleChange}
              />
              Haven't Decided
            </label>
          </li>
        </div>
      </ul>

   

      <h5 className='text-left'>Would you like your tattoo to have color or only black & grey ink?</h5>
      <ul>
        <div className='d-flex'>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="color"
                type="radio"
                value="Color"
                onChange={handleChange}
                className="radio"
                checked={tatto.color === "Color"}
              />
              Color
            </label>
          </li>
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="color"
                type="radio"
                value="Black & Grey"
                onChange={handleChange}
                className="radio"
                checked={tatto.color === "Black & Grey"}
              />
              Black & Grey
            </label>
          </li>
        
          <li className='styling'>
            <label className='d-flex gapping'>
              <input
                name="color"
                type="radio"
                value="Not Decided"
                onChange={handleChange}
                className="radio"
                checked={tatto.color === "Not Decided"}
              />
              Haven't Decided
            </label>
          </li>
        </div>
      </ul>
      <h5 className='text-left'>Describe your tattoo idea and where you’d like the tattoo to be on your body.</h5>
      <textarea
        className='form-control form-controls'
        type='text'
        name='description'
        value={tatto.description}
        onChange={handleChange}
        maxLength="100"
        minLength="10"
        placeholder='Describe your text here...'
      />
      <div className="modal-footer">
                              <button type="submit" className="btn btn-primary" >Get Quote</button>
                            </div>

      {/* <button type="submit">Submit</button> */}
    </form>
                            </div>
                            
                          </div>
                        </div>
                      </div>

                    </div>



                  </div>
                </div>
                <div className="col-md-8 m-padding-0 offset-sm-top--10">
                  <h3 className="page-title-1 text-center ">{user?.name}</h3>
                  <p className="fst-italic h3 font-size-22 font-secondary offset-top-17 text-regular" style={{ margin: "0px" }}>
                    {user?.username}
                  </p>
                  <dl className="dl-horizontal-mod-3 offset-top-34">
                    <dt>
                      <span className="icon icon-sm-1 text-dark mdi mdi-cellphone-android text-middle" />
                    </dt>

                  </dl>
                  <dl className="dl-horizontal-mod-3 offset-top-22">
                    <dt>
                      <span className="icon icon-sm-1 text-dark mdi mdi-email-open text-middle" />
                    </dt>
                    <dd>

                      {/* <ul className="list-inline offset-top-34 pt-2" >
                        <li><a
                          className="h4 text-regular text-middle text-lightener"
                          href="mailto:#"
                        >
                          <i className="fa fa-envelope white" aria-hidden="true"> {user?.email}</i>
                        </a> {'\u00A0'} </li>{'\u00A0'}
                        <li> <a
                          className="h4 text-regular text-middle text-lightener"
                          href="tel:#"
                        >
                          <i className="fa fa-phone white" aria-hidden="true"> {user?.phone}</i>
                        </a></li>{'\u00A0'}
                        <li>
                          <i className="fa fa-facebook" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-twitter" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-youtube-play" aria-hidden="true"></i>
                        </li>
                        <li>
                          <i className="fa fa-google-plus" aria-hidden="true"></i>
                        </li>
                      </ul> */}
                    </dd>
                  </dl>
                  <img src='/images/Screenshot-2023-09-03-160739.png' style={{ width: '80%' }} />

                  {/* PhotoSwipe*/}

                </div>
              </div>
            </div>
          </section>
          {/* <section className="text-center text-md-start section-lg bg-default">
<div className="container">
<h1 className='text-center'>Art's Gallery</h1>
<div className="container">
<div className="row">
<div className="col-sm-3">
<Link to={`/${artist}/a`}> <img src='/images/black-and-grey-octopus-tattoo-7-400x400.jpg'/></Link>
</div>
<div className="col-sm-3" >
<Link to={`/${artist}/b`}>  <img src='/images/20230401_3Gj9Ld7xTphqUkk.webp'/></Link> 

</div>
<div className="col-sm-3" >
<Link to={`/${artist}/c`}> <img src='/images/goat-neck-tattoo-400x400.jpg'/></Link> 

</div>
<div className="col-sm-3" >
<Link to={`/${artist}/d`}> <img src='/images/black-and-grey-sun-tattoo-2-400x400.jpg'/></Link> 

</div>
</div>
<div className="row">
<div className="col-sm-3">
<Link to={`/${artist}/a`}> <img src='/images/black-and-grey-octopus-tattoo-7-400x400.jpg'/></Link>
</div>
<div className="col-sm-3" >
<Link to={`/${artist}/b`}>  <img src='/images/20230401_3Gj9Ld7xTphqUkk.webp'/></Link> 

</div>
<div className="col-sm-3" >
<Link to={`/${artist}/c`}> <img src='/images/goat-neck-tattoo-400x400.jpg'/></Link> 

</div>
<div className="col-sm-3" >
<Link to={`/${artist}/d`}> <img src='/images/black-and-grey-sun-tattoo-2-400x400.jpg'/></Link> 

</div>
</div>
</div>


</div>
</section> */}
        </div>
      </div>
      {/* Breadcrumbs*/}
      <div className="ds ms section_padding_top_60 section_padding_bottom_10 tab-recent-work">
        <div className="container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 80,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={true}
            mousewheel={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Mousewheel, Navigation]}
            className="mySwiper"
          >
            {bannerImagedata && bannerImagedata.length ? (
              <>
                {bannerImagedata.map(item => (
                  <SwiperSlide key={item.id}>
                    <img src={`https://sweetdevelopers.com/artist/storage/BannerImage/${item.banner_image}`} alt={item.banner_image} />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
                {[...Array(8)].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="imgbox">
                      <img className="" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/noimg.jpg`} alt={''} />
                      <div className='imgtitle'>
                        <h4 className="page-title-1 " style={{ color: 'white' }}>
                          No Imgae in Banner
                        </h4>
                        <div className="row text-center">

                          {/* <button type="button" className="btn btn-info" onClick={() => { navigate('/editprofile#bannerimage') }}>Upload Now</button> */}
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </>
            )}

          </Swiper>
        </div>
      </div>

      <div className="ds section_padding_top_105 section_padding_bottom_120 parallax-block-1 parallax">
        <div className="container">
          <h3 className="page-title-1 text-center ">Highlights From {user?.username}</h3>
          <div className="row rowflex">

            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg
                    aria-hidden="true"
                    className="e-font-icon-svg e-fas-dollar-sign"
                    viewBox="0 0 288 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z" />
                  </svg>

                </div>
                <h3 className='content-block-5__title'>Hourly Rate $100</h3>
                <p>Each piece of art is unique, and we will quote you the best price possible.</p>
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-far-eye" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Our Specialty</h3>
                <p>Geometric, Japanese, Realism.</p>
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-far-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>

                </div>
                <h3 className='content-block-5__title'>Years in Trade</h3>
                <p>Since 1998</p>
              </div>
            </div>

          </div>
          <div className="row rowflex">
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-walking" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"></path></svg>

                </div>
                <h3 className='content-block-5__title'>Walk-Ins Welcome</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-certificate" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path></svg>      </div>
                <h3 className='content-block-5__title'>Certified Professionals</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-far-handshake" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Consultations Available</h3>
                {/* <p>Since 1998</p> */}
              </div>
            </div>
          </div>
          <div className="row rowflex">
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-language" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>English/Spanish</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-car" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Parking</h3>
                <p>Free Parking Available</p>
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-far-money-bill-alt" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Payment Options</h3>
                <p>Cash / CashApp / Zelle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
        <div className="container">
          <div className="row bottommargin_40">
            <div className="col-lg-12 text-center">
              <h3 className="page-title-1">
                Hours Of Operation
              </h3>
              {/* <h6 className="subheader-type-1">
          Creating Great Tattoos For Over 29 Years
        </h6> */}
            </div>
          </div>
          <div className="row vertical-tabs vertical-tabs-type-1 vertical-tabs--position">
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className="col-sm-12 col-md-6 col-lg-6">
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
                      <td>Mon</td>{timedata?.monday_from === null || timedata?.monday_from === 'null' ?
                        (
                          <>
                            <td>Close</td>
                            <td>Close</td>
                          </>
                        ) : (
                          <>
                            <td>{timedata?.monday_from}</td>
                            <td>{timedata?.monday_to}</td>
                          </>
                        )
                      }

                    </tr>
                    <tr>
                      <td>Tue</td>{
                        timedata?.tuesday_from === null || timedata?.tuesday_from === 'null' ? (
                          <>
                            <td>Close</td>
                            <td>Close</td>
                          </>
                        ) : (
                          <>
                            <td>{timedata?.tuesday_from}</td>
                            <td>{timedata?.tuesday_to}</td>
                          </>
                        )
                      }

                    </tr>
                    <tr>
                      <td>Wed</td>{
                        timedata?.wednesday_from === null || timedata?.wednesday_to === 'null' ? (
                          <>
                            <td>Close</td>
                            <td>Close</td>
                          </>
                        ) : (
                          <>
                            <td>{timedata?.wednesday_from}</td>
                            <td>{timedata?.wednesday_from}</td>
                          </>
                        )
                      }

                    </tr>
                    <tr>
                      <td>Thu</td>
                      {timedata?.thrusday_from === null || timedata?.thrusday_from === 'null' ?
                        (
                          <>
                            <td>Close</td>
                            <td>Close</td>
                          </>
                        ) : (
                          <>
                            <td>{timedata?.thrusday_from}</td>
                            <td>{timedata?.thrusday_to}</td>
                          </>
                        )}
                    </tr>
                    <tr>
                      <td>Fri</td>{timedata?.friday_from === null || timedata?.friday_from === 'null' ?
                        (
                          <>
                            <td>Close</td>
                            <td>Close</td>
                          </>
                        ) : (
                          <>
                            <td>{timedata?.friday_from}</td>
                            <td>{timedata?.friday_to}</td>
                          </>
                        )}

                    </tr>
                    <tr>
                      <td>Sat</td>{timedata?.saterday_from === null || timedata?.saterday_from === 'null' ? (
                        <>
                          <td>Close</td>
                          <td>Close</td>
                        </>
                      ) : (
                        <>
                          <td>{timedata?.saterday_from}</td>
                          <td>{timedata?.saterday_to}</td>
                        </>
                      )}

                    </tr>
                    <tr>
                      <td>Sun</td>
                      {(timedata?.sunday_from === null || timedata?.sunday_from === 'null') ? (
                        <>
                          <td>Close</td>
                          <td>Close</td>
                        </>
                      ) : (
                        <>
                          <td>{timedata?.sunday_from}</td>
                          <td>{timedata?.sunday_to}</td>
                        </>
                      )}


                    </tr>
                  </tbody>
                </table>

              </div>
              <div className="col-sm-12 col-md-6 col-lg-6">
                <p className='map'>How to Upload your location <i className="fa fa-question-circle" aria-hidden="true"></i></p>
                <div className="instruction">
                  <p><strong>Instructions:</strong></p>
                  <p>Follow these steps to embed a Google Map on your Page:</p>
                  <ol>
                    <li>Access Google Maps.</li>
                    <li>Search for your desired location.</li>
                    <li>Click the menu icon and select "Share or embed map."</li>
                    <li>Switch to the "Embed map" tab.</li>
                    <li>Customize the map size and settings if needed.</li>
                    <li>Copy the generated iframe code.</li>
                    <li>Paste the code into your profile address.</li>
                  </ol>
                </div>
                <div dangerouslySetInnerHTML={{
                  __html: user.address
                }} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="ds ms section_padding_top_60 section_padding_bottom_10 tab-recent-work">
        <div className="container">
          <h3 className="page-title-1 text-center ">Amenities From The Business</h3>
          <div className="row rowflex">

            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-far-snowflake" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"></path></svg>

                </div>
                <h3 className='content-block-5__title'>Air Conditioned</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-glass-whiskey" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-37.4 64l-30 192h-313L69.4 96h373.2z"></path></svg> </div>
                <h3 className='content-block-5__title'>Water Available</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-coffee" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Coffee Available</h3>
                {/* <p>Since 1998</p> */}
              </div>
            </div>

          </div>
          <div className="row rowflex">

            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-head-side-mask" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M.15,184.42C-2.17,244.21,23,298.06,64,334.88V512H224V316.51L3.67,156.25A182.28,182.28,0,0,0,.15,184.42ZM509.22,275c-21-47.12-48.5-151.75-73.12-186.75A208.11,208.11,0,0,0,266.11,0H200C117,0,42.48,50.57,13.25,123.65L239.21,288H511.76A31.35,31.35,0,0,0,509.22,275ZM320,224a32,32,0,1,1,32-32A32.07,32.07,0,0,1,320,224Zm16,144H496l16-48H256V512H401.88a64,64,0,0,0,60.71-43.76L464,464H336a16,16,0,0,1,0-32H474.67l10.67-32H336a16,16,0,0,1,0-32Z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Masks Worn</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-syringe" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"></path></svg>                </div>
                <h3 className='content-block-5__title'>All Staff Fully Vaccinated</h3>
                {/* <p>Since 1998</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-wheelchair" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>  </div>
                <h3 className='content-block-5__title'>Wheel Chair Accessible</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
          </div>
          <div className="row rowflex">
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-biking" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"></path></svg>                </div>
                <h3 className='content-block-5__title'>Bike Parking</h3>
                {/* <p>Free Parking Available</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>                </div>
                <h3 className='content-block-5__title'>WiFi Available</h3>
                {/* <p>Cash / CashApp / Zelle</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" className="e-font-icon-svg e-fas-award" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>     </div>
                <h3 className='content-block-5__title'>Artist of the Year</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_90 section_padding_bottom_160">
        <div className="container">
          <div className="row bottommargin_40">
            <div className="col-lg-12 text-center">
              <h3 className="page-title-1">FINE ART &amp; TATTOO</h3>
              <h6 className="subheader-type-1">Artists that use incredible techniques to design unique creations like glow-in-the-dark tattoos</h6>
            </div>

          </div>
          <div className='row text-center'>
            {data && data.length ? (
              <>
                <MGallery image={data} ussername={user?.username} />

              </>
            ) : (
              <>
                <div className="col-lg-4 ">
                  <div className="imgbox">
                    <img className="imgbo" src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/noimg.jpg`} alt={''} />
                    <div className='imgtitle'>
                      <h4 className="page-title-1 " style={{ color: 'white' }}>
                        No Imgae
                      </h4>
                      <div className="row text-center">

                        {/* <button type="button" className="btn btn-info" onClick={() => { navigate('/editprofile#artsupload') }}>Upload Now</button> */}
                      </div>
                    </div>

                  </div>
                </div></>
            )}

          </div>
        </div>
      </div>
      <style jsx>
        {`th, td {
    padding: 21px !important;
    text-align: center;
}`}
      </style>
    </>

  )
}

export default Artistabout