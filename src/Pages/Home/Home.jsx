import React, { useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set autoplay speed to 2 seconds
  };
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/main.js';   //(This is external js url)
    script.async = true;
    document.body.appendChild(script);
  }, [])
  return (
    <>
      {/* Search modal */}



      <div className="intro_section page_mainslider">
        <div className="flexslider">
          <Slider className="slides" {...settings}>
            <li>
              <figure className="flexslider__img">
                <img src="images/slider/img_slider-01.jpg" alt="" />
              </figure>
              <div className="flexslider__content">
                <div className="content-table">
                  <div className="content-table__row">
                    <div className="content-table__cell text-center">
                      <div className="content-table__wrapp">
                        <ul className="flexslider__list">
                          <li>Tattoo With</li>
                          <li>Experience</li>
                        </ul>
                        <a className="theme-button flexslider--button" href="#">
                          request an appointment
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <figure className="flexslider__img">
                <img src="images/slider/img_slider-02.jpg" alt="" />
              </figure>
              <div className="flexslider__content">
                <div className="content-table">
                  <div className="content-table__row">
                    <div className="content-table__cell text-center">
                      <div className="content-table__wrapp">
                        <ul className="flexslider__list">
                          <li>Tattoo With</li>
                          <li>Experience</li>
                        </ul>
                        <a className="theme-button flexslider--button" href="#">
                          Lorem ipsum dolor
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <figure className="flexslider__img">
                <img src="images/slider/img_slider-03.jpg" alt="" />
              </figure>
              <div className="flexslider__content">
                <div className="content-table">
                  <div className="content-table__row">
                    <div className="content-table__cell text-center">
                      <div className="content-table__wrapp">
                        <ul className="flexslider__list">
                          <li>Tattoo With</li>
                          <li>Experience</li>
                        </ul>
                        <a className="theme-button flexslider--button" href="#">
                          consectetur adipisicing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </Slider>
          <div className="contact-block-1">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <ul className="contact-block-1__list contact-block-1__list--adress">
                    <li>
                      Livingstone, Season Street
                      <span>45/2</span>
                    </li>
                    <li>
                      Los angeles,
                      <span>Inc - 4502</span>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <ul className="contact-block-1__list contact-block-1__list--phone">
                    <li>Call to make an appontment</li>
                    <li>
                      <a href="tel:8003002214">1 (800) 300 2214</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <ul className="contact-block-1__list contact-block-1__list--work-days">
                    <li>Monday- Sunday 9.00 am - 6.00 pm</li>
                    {/* <li>
                      Saturday &amp; Monday
                      <span>Closed</span>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_105 section_padding_bottom_0">
        <div className="container">
          <div className="row">
            <div className="col-mg-4 col-lg-4 block-position-1">
              <p className="subheader-type-1 subheader-type-1--dec">
                estd
                <span>1987</span>
              </p>
              <h3 className="title-dec2">WE’LL MAKE YOU A MASTERPIECE</h3>
              <p>
                But in certain circumstances and owing to the claims of duty or
                the obligations of business it will frequently occur that
                pleasures have to be repudiated and annoyances accepted. The
                wise man therefore always holds in these matters to this
                principle of selection.
              </p>
            </div>
            <div className="col-mg-4 col-lg-5">
              <figure className="img-wrapper">
                <img src="images/director/img_director-img.png" alt="" />
              </figure>
            </div>
            <div className="col-mg-4 col-lg-3 text-left text-lg-center block-position-2">
              <h6 className="subheader-type-2 subheader-type-2--dec">
                Director &amp; owner
              </h6>
              <h3 className="title-dec">
                LORI
                <br /> FOSTER
              </h3>
              <figure className="img-wrapper-2">
                <img src="images/director/img_director-img-2.png" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_105 section_padding_bottom_120 parallax-block-1 parallax">
        <div className="container">
          <h3 class="page-title-1 text-center ">Highlights From Caymus Tattoos</h3>
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
                  <svg aria-hidden="true" class="e-font-icon-svg e-far-eye" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Our Specialty</h3>
                <p>Geometric, Japanese, Realism.</p>
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-far-clock" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>

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
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-walking" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M208 96c26.5 0 48-21.5 48-48S234.5 0 208 0s-48 21.5-48 48 21.5 48 48 48zm94.5 149.1l-23.3-11.8-9.7-29.4c-14.7-44.6-55.7-75.8-102.2-75.9-36-.1-55.9 10.1-93.3 25.2-21.6 8.7-39.3 25.2-49.7 46.2L17.6 213c-7.8 15.8-1.5 35 14.2 42.9 15.6 7.9 34.6 1.5 42.5-14.3L81 228c3.5-7 9.3-12.5 16.5-15.4l26.8-10.8-15.2 60.7c-5.2 20.8.4 42.9 14.9 58.8l59.9 65.4c7.2 7.9 12.3 17.4 14.9 27.7l18.3 73.3c4.3 17.1 21.7 27.6 38.8 23.3 17.1-4.3 27.6-21.7 23.3-38.8l-22.2-89c-2.6-10.3-7.7-19.9-14.9-27.7l-45.5-49.7 17.2-68.7 5.5 16.5c5.3 16.1 16.7 29.4 31.7 37l23.3 11.8c15.6 7.9 34.6 1.5 42.5-14.3 7.7-15.7 1.4-35.1-14.3-43zM73.6 385.8c-3.2 8.1-8 15.4-14.2 21.5l-50 50.1c-12.5 12.5-12.5 32.8 0 45.3s32.7 12.5 45.2 0l59.4-59.4c6.1-6.1 10.9-13.4 14.2-21.5l13.5-33.8c-55.3-60.3-38.7-41.8-47.4-53.7l-20.7 51.5z"></path></svg>

                </div>
                <h3 className='content-block-5__title'>Walk-Ins Welcome</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-certificate" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z"></path></svg>      </div>
                <h3 className='content-block-5__title'>Certified Professionals</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-far-handshake" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path></svg>
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
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-language" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M152.1 236.2c-3.5-12.1-7.8-33.2-7.8-33.2h-.5s-4.3 21.1-7.8 33.2l-11.1 37.5H163zM616 96H336v320h280c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm-24 120c0 6.6-5.4 12-12 12h-11.4c-6.9 23.6-21.7 47.4-42.7 69.9 8.4 6.4 17.1 12.5 26.1 18 5.5 3.4 7.3 10.5 4.1 16.2l-7.9 13.9c-3.4 5.9-10.9 7.8-16.7 4.3-12.6-7.8-24.5-16.1-35.4-24.9-10.9 8.7-22.7 17.1-35.4 24.9-5.8 3.5-13.3 1.6-16.7-4.3l-7.9-13.9c-3.2-5.6-1.4-12.8 4.2-16.2 9.3-5.7 18-11.7 26.1-18-7.9-8.4-14.9-17-21-25.7-4-5.7-2.2-13.6 3.7-17.1l6.5-3.9 7.3-4.3c5.4-3.2 12.4-1.7 16 3.4 5 7 10.8 14 17.4 20.9 13.5-14.2 23.8-28.9 30-43.2H412c-6.6 0-12-5.4-12-12v-16c0-6.6 5.4-12 12-12h64v-16c0-6.6 5.4-12 12-12h16c6.6 0 12 5.4 12 12v16h64c6.6 0 12 5.4 12 12zM0 120v272c0 13.3 10.7 24 24 24h280V96H24c-13.3 0-24 10.7-24 24zm58.9 216.1L116.4 167c1.7-4.9 6.2-8.1 11.4-8.1h32.5c5.1 0 9.7 3.3 11.4 8.1l57.5 169.1c2.6 7.8-3.1 15.9-11.4 15.9h-22.9a12 12 0 0 1-11.5-8.6l-9.4-31.9h-60.2l-9.1 31.8c-1.5 5.1-6.2 8.7-11.5 8.7H70.3c-8.2 0-14-8.1-11.4-15.9z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>English/Spanish</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-car" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Parking</h3>
                <p>Free Parking Available</p>
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-far-money-bill-alt" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M320 144c-53.02 0-96 50.14-96 112 0 61.85 42.98 112 96 112 53 0 96-50.13 96-112 0-61.86-42.98-112-96-112zm40 168c0 4.42-3.58 8-8 8h-64c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h16v-55.44l-.47.31a7.992 7.992 0 0 1-11.09-2.22l-8.88-13.31a7.992 7.992 0 0 1 2.22-11.09l15.33-10.22a23.99 23.99 0 0 1 13.31-4.03H328c4.42 0 8 3.58 8 8v88h16c4.42 0 8 3.58 8 8v16zM608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zm-16 272c-35.35 0-64 28.65-64 64H112c0-35.35-28.65-64-64-64V176c35.35 0 64-28.65 64-64h416c0 35.35 28.65 64 64 64v160z"></path></svg>
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
                GOOD TATTOOS ARE NOT CHEAP &amp; CHEAP TATTOOS ARE NOT GOOD
              </h3>
              <h6 className="subheader-type-1">
                Creating Great Tattoos For Over 29 Years
              </h6>
            </div>
          </div>
          <div className="row vertical-tabs vertical-tabs-type-1 vertical-tabs--position">
            <div className="col-sm-12 col-md-3 col-lg-3">
              {/* Nav tabs */}
              <ul className="nav" role="tablist">
                <li className="active">
                  <a href="#vertical-tab1" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-01.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Tattoo design
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#vertical-tab2" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-02.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Tattoo removal
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#vertical-tab3" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-03.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Special Occasions
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              {/* Tab panes */}
              <div className="tab-content tab-content-type-1">
                <div className="tab-pane fade in active" id="vertical-tab1">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
                <div className="tab-pane fade" id="vertical-tab2">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
                <div className="tab-pane fade" id="vertical-tab3">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
                <div className="tab-pane fade" id="vertical-tab4">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
                <div className="tab-pane fade" id="vertical-tab5">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
                <div className="tab-pane fade" id="vertical-tab6">
                  <figure className="tab-content-type-1__img">
                    <img src="images/content_block/img_content-05.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3">
              {/* Nav tabs */}
              <ul className="nav" role="tablist">
                <li>
                  <a href="#vertical-tab4" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-04.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Henna design
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#vertical-tab5" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-05.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Body Piercing
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#vertical-tab6" role="tab" data-toggle="tab">
                    <figure className="vertical-tabs-type-1__img">
                      <img
                        src="images/services/navs_services/img_navs_services-06.jpg"
                        alt=""
                      />
                    </figure>
                    <span className="vertical-tabs-type-1__cont">
                      Body Modification
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-12">
              <div className='container'>
                <div className='row hourly'>
                  <div className="col-lg-6 col-sm-12 text-left mcenter">
                    <h4 style={{ margin: "8px 12px" }}>Hours Of Operation</h4>
                    <strong style={{ margin: "8px 12px" }} > Monday- Sunday 9.00 am - 6.00 pm</strong>
                  </div>
                  <div className="col-lg-6 col-sm-12 text-right mcenter" style={{ padding: '15px' }}>

                    <button class="theme-button content-block-5__button">Contact Us</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ds section_padding_top_60 section_padding_bottom_60 parallax-block-2 parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-3">
              <div className="content-block-6">
                <div className="content-block-6__wrapp">
                  <div className="content-block-6__wrapp-bg-1">
                    <div className="teaser-block teaser-block--dec teaser text-center">
                      <p
                        className="counter highlight"
                        data-from={0}
                        data-to={23}
                        data-speed={1400}
                      >
                        0
                      </p>
                      <p className="counter__content">years of experience</p>
                    </div>
                    <div className="teaser-block teaser text-center">
                      <p
                        className="counter highlight"
                        data-from={0}
                        data-to={12}
                        data-speed={2100}
                      >
                        0
                      </p>
                      <p className="counter__content">International awards</p>
                    </div>
                  </div>
                  <div className="content-block-6__wrapp-bg-2">
                    <div className="teaser-block teaser text-center">
                      <p
                        className="counter-wrap highlight"
                        data-from={0}
                        data-to={40}
                        data-speed={1800}
                      >
                        <span
                          className="counter"
                          data-from={0}
                          data-to={75}
                          data-speed={1500}
                        >
                          0
                        </span>
                        <span className="counter-add">k</span>
                      </p>
                      <p className="counter__content">professional tattoos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 col-lg-9">
              <div className="content-block-5 content-block-5--bg1">
                <figure className="content-block-5__img">
                  <img src="images/content_block/img_content-06.jpg" alt="" />
                </figure>
                <p className="content-block-5__meta">Consultation</p>
                <h3 className="content-block-5__title">
                  <a href="#">WE WILL ADVISE</a>
                </h3>
                <p className="content-block-5__text">
                  On the hand, we denounce with righteous indignation and
                  dislike men whoare
                </p>
                <a href="#" className="theme-button content-block-5__button">
                  view details
                </a>
              </div>
              <div className="content-block-5 content-block-5--bg2">
                <figure className="content-block-5__img">
                  <img src="images/content_block/img_content-07.jpg" alt="" />
                </figure>
                <p className="content-block-5__meta">Design</p>
                <h3 className="content-block-5__title">
                  <a href="#">DRAW A SKETCH</a>
                </h3>
                <p className="content-block-5__text">
                  He rejects pleasures to secure other greater pleasures or else
                  endures pains to avoid
                </p>
                <a href="#" className="theme-button content-block-5__button">
                  view details
                </a>
              </div>
              <div className="content-block-5 content-block-5--bg1">
                <figure className="content-block-5__img">
                  <img src="images/content_block/img_content-08.jpg" alt="" />
                </figure>
                <p className="content-block-5__meta">Modifications</p>
                <h3 className="content-block-5__title">
                  <a href="#">WE WILL ADVISE</a>
                </h3>
                <p className="content-block-5__text">
                  That they cannot foresee the pain and trouble that are bound
                  to ensue and belongs
                </p>
                <a href="#" className="theme-button content-block-5__button">
                  view details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ds ms section_padding_top_60 section_padding_bottom_10 tab-recent-work">
        <div className="container">
          <h3 class="page-title-1 text-center ">Amenities From The Business</h3>
          <div className="row rowflex">

            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-far-snowflake" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M440.1 355.2l-39.2-23 34.1-9.3c8.4-2.3 13.4-11.1 11.1-19.6l-4.1-15.5c-2.2-8.5-10.9-13.6-19.3-11.3L343 298.2 271.2 256l71.9-42.2 79.7 21.7c8.4 2.3 17-2.8 19.3-11.3l4.1-15.5c2.2-8.5-2.7-17.3-11.1-19.6l-34.1-9.3 39.2-23c7.5-4.4 10.1-14.2 5.8-21.9l-7.9-13.9c-4.3-7.7-14-10.3-21.5-5.9l-39.2 23 9.1-34.7c2.2-8.5-2.7-17.3-11.1-19.6l-15.2-4.1c-8.4-2.3-17 2.8-19.3 11.3l-21.3 81-71.9 42.2v-84.5L306 70.4c6.1-6.2 6.1-16.4 0-22.6l-11.1-11.3c-6.1-6.2-16.1-6.2-22.2 0l-24.9 25.4V16c0-8.8-7-16-15.7-16h-15.7c-8.7 0-15.7 7.2-15.7 16v46.1l-24.9-25.4c-6.1-6.2-16.1-6.2-22.2 0L142.1 48c-6.1 6.2-6.1 16.4 0 22.6l58.3 59.3v84.5l-71.9-42.2-21.3-81c-2.2-8.5-10.9-13.6-19.3-11.3L72.7 84c-8.4 2.3-13.4 11.1-11.1 19.6l9.1 34.7-39.2-23c-7.5-4.4-17.1-1.8-21.5 5.9l-7.9 13.9c-4.3 7.7-1.8 17.4 5.8 21.9l39.2 23-34.1 9.1c-8.4 2.3-13.4 11.1-11.1 19.6L6 224.2c2.2 8.5 10.9 13.6 19.3 11.3l79.7-21.7 71.9 42.2-71.9 42.2-79.7-21.7c-8.4-2.3-17 2.8-19.3 11.3l-4.1 15.5c-2.2 8.5 2.7 17.3 11.1 19.6l34.1 9.3-39.2 23c-7.5 4.4-10.1 14.2-5.8 21.9L10 391c4.3 7.7 14 10.3 21.5 5.9l39.2-23-9.1 34.7c-2.2 8.5 2.7 17.3 11.1 19.6l15.2 4.1c8.4 2.3 17-2.8 19.3-11.3l21.3-81 71.9-42.2v84.5l-58.3 59.3c-6.1 6.2-6.1 16.4 0 22.6l11.1 11.3c6.1 6.2 16.1 6.2 22.2 0l24.9-25.4V496c0 8.8 7 16 15.7 16h15.7c8.7 0 15.7-7.2 15.7-16v-46.1l24.9 25.4c6.1 6.2 16.1 6.2 22.2 0l11.1-11.3c6.1-6.2 6.1-16.4 0-22.6l-58.3-59.3v-84.5l71.9 42.2 21.3 81c2.2 8.5 10.9 13.6 19.3 11.3L375 428c8.4-2.3 13.4-11.1 11.1-19.6l-9.1-34.7 39.2 23c7.5 4.4 17.1 1.8 21.5-5.9l7.9-13.9c4.6-7.5 2.1-17.3-5.5-21.7z"></path></svg>

                </div>
                <h3 className='content-block-5__title'>Air Conditioned</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-glass-whiskey" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 32H32C12.5 32-2.4 49.2.3 68.5l56 356.5c4.5 31.5 31.5 54.9 63.4 54.9h273c31.8 0 58.9-23.4 63.4-54.9l55.6-356.5C514.4 49.2 499.5 32 480 32zm-37.4 64l-30 192h-313L69.4 96h373.2z"></path></svg> </div>
                <h3 className='content-block-5__title'>Water Available</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-coffee" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path></svg>
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
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-head-side-mask" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M.15,184.42C-2.17,244.21,23,298.06,64,334.88V512H224V316.51L3.67,156.25A182.28,182.28,0,0,0,.15,184.42ZM509.22,275c-21-47.12-48.5-151.75-73.12-186.75A208.11,208.11,0,0,0,266.11,0H200C117,0,42.48,50.57,13.25,123.65L239.21,288H511.76A31.35,31.35,0,0,0,509.22,275ZM320,224a32,32,0,1,1,32-32A32.07,32.07,0,0,1,320,224Zm16,144H496l16-48H256V512H401.88a64,64,0,0,0,60.71-43.76L464,464H336a16,16,0,0,1,0-32H474.67l10.67-32H336a16,16,0,0,1,0-32Z"></path></svg>
                </div>
                <h3 className='content-block-5__title'>Masks Worn</h3>
                {/* <p>Geometric, Japanese, Realism.</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-syringe" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M201.5 174.8l55.7 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0l-55.7-55.8-45.3 45.3 55.8 55.8c3.1 3.1 3.1 8.2 0 11.3l-11.3 11.3c-3.1 3.1-8.2 3.1-11.3 0L111 265.2l-26.4 26.4c-17.3 17.3-25.6 41.1-23 65.4l7.1 63.6L2.3 487c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l66.3-66.3 63.6 7.1c23.9 2.6 47.9-5.4 65.4-23l181.9-181.9-135.7-135.7-64.9 65zm308.2-93.3L430.5 2.3c-3.1-3.1-8.2-3.1-11.3 0l-11.3 11.3c-3.1 3.1-3.1 8.2 0 11.3l28.3 28.3-45.3 45.3-56.6-56.6-17-17c-3.1-3.1-8.2-3.1-11.3 0l-33.9 33.9c-3.1 3.1-3.1 8.2 0 11.3l17 17L424.8 223l17 17c3.1 3.1 8.2 3.1 11.3 0l33.9-34c3.1-3.1 3.1-8.2 0-11.3l-73.5-73.5 45.3-45.3 28.3 28.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.2 3.1-8.2 0-11.4z"></path></svg>                </div>
                <h3 className='content-block-5__title'>All Staff Fully Vaccinated</h3>
                {/* <p>Since 1998</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-wheelchair" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>  </div>
                <h3 className='content-block-5__title'>Wheel Chair Accessible</h3>
                {/* <p>Each piece of art is unique, and we will quote you the best price possible.</p> */}
              </div>
            </div>
          </div>
          <div className="row rowflex">
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">
                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-biking" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M400 96a48 48 0 1 0-48-48 48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57 58.25-49.92zm116 39a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64 64 64 0 0 1-64 64z"></path></svg>                </div>
                <h3 className='content-block-5__title'>Bike Parking</h3>
                {/* <p>Free Parking Available</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-wifi" viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"></path></svg>                </div>
                <h3 className='content-block-5__title'>WiFi Available</h3>
                {/* <p>Cash / CashApp / Zelle</p> */}
              </div>
            </div>
            <div className=" box col-sm-12 col-md-4 col-lg-4">
              <div className="text-center contitems">

                <div className='svgicon '>
                  <svg aria-hidden="true" class="e-font-icon-svg e-fas-award" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"></path></svg>     </div>
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
              <h3 className="page-title-1">EQUIPMENT &amp; ACCESSORIES</h3>
              <h6 className="subheader-type-1">No longer beyond your budget</h6>
            </div>
           
          </div>
          <div className='row text-center'>
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="data:image/jpeg;base64,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
" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="data:image/jpeg;base64,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" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRYZGBgaHBocHBwcHBkeHBoeHBoaGhoZHBocIS4lHB4rIRwcJjgnKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHzQsJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAEIQAAIAAwYDBQYEBAUDBQEAAAECAAMRBAUSITFBUWFxIjKBkaEGE1KxwdFCcuHwI2KCkhQVU6LxFkOyBzM0c8Ik/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQF/8QAJREAAgICAgICAgMBAAAAAAAAAAECERIhAzFBURMiYXEygcFC/9oADAMBAAIRAxEAPwDGD2TA/wC6f7f1if8A0yP9Q/2/rGkIiJEcmci2KMy/swD/ANw/2/rA7eyo/wBQ/wBv6xq2EUuIy5JBxRlX9mgP+4f7f1gd7gp+P/b+sapxA01YZckgYIzguH+f/b+se/5B/P8A7f1h8FiQWN8kjYISSblKnEHrTbD+sQWTVs8tjypGgCwBeEsBgRkSD46aw0ZtumBxoUTpepOtfrHAHKutBlpXLKsSmYgKjOhzPltzimawFadc8xStB+/tFhLC2tJVCBofn/yYpW0sVoOXjWvlEp5GAgE0IDjhsKVgROzXj9iKivnnAoNsseYc6aH7xUrjP0iDOBpmK5Vicuzs5AQb09N4JixJhp+/CLFmk031J6ZZRY1jKUxa8Nv3WLbQMNVB0GY8AT618oU1hf8Al7bEesQa7pmyqf6v0jRpIic1AqljoASfCIZux8UZWXdcxiQy4BTWoNeWUTb2eY/jHkfvBw9o5HB/7f1jv+pJPB/7f1h/uCogA9nG+MeR+8eN7PP8Y8jDJPaOSSAA+ZA0G/jD4SIDlJdhUUzG/wDT7/GPIxwuB/jXyMbE2eIGzQvyM2CMn/kr/EvrE1uhh+IesadrPEPcRs2bAzv+VtxHrHRovcR0bNmxGJEQIiyPCImEpYRU4i9hFbiMMCOIGmCDXECzBBMUARICPQImBGMeAQDeyZJ1b/xr9IZBYBvoUQEfFTzVhDw/kLLoDSzVAoNVrnU1GtM/lA066cfaUgcQKkeWtI8xsGpUqcvQD7QxlTg4p3X2OxI+p/fCOmiVlcn2ZdpYYOCAdVqaZ6U3G8W2b2Zxsf4gpSgprWnA6Qwu21u7LTsvUKTRSaVpVgc6iNEhTFheepNK1GEA8a5ZHxgNMZUZSf7MyUZSSzHUrt0qInaVSgWShBPePLiaawwvNUUkgig1Y1IHSoAJ5UOkZ6famphU65sdyTtXkDpGSA5HtpMsFVHb+I1OI8sjQQLeLqxxpkGFCN60z+UeCWaAjevpTP1iIl1RuNV8qGv0gtATs3Vnl1VTyHyiq+EpImH+Q/KD7vXFLQ8UU/7RAvtMKWaYf5fnHGv5FX0YqVdkr3CuyOWK1YhqAZnOnSF1qsYWtBTPQnPllDKx2jsBWoUoAQa5Eb1rziyZR1DE1ArqRi6Zbc46bJiWwyv4iL/OvzEfVhKjCWCyD31nYCgdzQflpH0f3cS5XseIF7qIvKyMHFIDvVikiYwyIRiDzplEkrGugYyY4yYTezKz5+J3muEU0AFO0etNI07S+sTmnF1ZSLUlYu93HQdh5GOhMmHRRSIkRKkcRFyJSwitxFzCK3EEYFcQPNEFOIGmiMYqAiYEeAR48wLz5RjFqiAb7aksfnX5NBcmbU0pQwtv+1KQqKakNU02oCKdc4eC+yFl0Azz/EY038zr5RAy8znkND9OsWrKxMCp1oM8s6ZivER6yNnUVpqctucdiIM8ss4q2JSQwzHXhDNWd2FVGNs9deo0EKXl4dcyeFPWkaSzW1Zaqr1xhczrmWBz8PmeMZugxViG2zHJo7Enma6ZRCTLDcMuJp4wxvCyoWxq9UatGGeE1/GNQMxnFVju52PZzK6gGhI4qdCCI1mx2BzDkeFKCm+4A8c4smhUlj4jT1oT4UAEMku8ocbrgX+bNjx/KOZpCq2TQ78Erw20r5CEexkqRt/Zi0K9nQA9pVwkdMor9s8rK/MqPURnfZy1lHoCRWp+viaVEOvaOY1pspEoYziByNK01GE5g8o5nGplErjowEm10UKQcq9DXiKQ2s0+zt35pXkEY5dRSFa2Jx3gQa0oQYZWGUgKl0QitDUE+YB0i2iY1u+fKe02VJTFhLD1JUrmc9DG+wRi7nkS/wDHS/doqD3JYhdMRjd0iPJ2PHoHwQo9qjhss0/y08zSHxWM77dthsb82Qf7hCxX2QZdE7jlKlmlg0HZDHxzJim+L1ZEpZ0aa53UEqnNiNekLrC7zrPLVgysoamnaKrkKcKbQXZp+FimKlKYWOlcKsVPI19Iy4bbk+76JS5qaS6DP4nE+Qj2O99O4S/Mx0b4pejfPE8iJhdZr/s7kBZgqTQAgrU+IhkRAaa7KpkDFLRc8DiYrd0g9DWMjFTwPMi9zHJZXfQZcTGGSbBRA1oriyFcodG7wozzMBWhQDlBWxsRXOltTM+AyhROldsqaDSldM/3TxjSoldYW3zYiO2M8gCPM6/vSLQEktAVmVicBqDUUGxI0B584OdiBhI0yIYHI8CQaGF9KiorQZ56rBcu1GhV9zmd6/F5RdEGWWU4XxsKhAXplmRQKOWdIIsBQlmmkmpGmpJNGPrWIWaylw6qRVu6DQYsJqQCd/tEku8pQzWVBWlAVL1/KDltrBMkwZmwE4GzzAy1HMb14Q9sFm7BcAhGRjkae7cahTrhNNNM4BFiQk0V2wsBTIYhnmRwyIyhhOnqqsKFQzBcOuFUFBlxOflCtjRVGftDu/eYlRUipJGXLwgF00hlbzgqjDtDTkDSn1MAykprnl5H7xhWFWCuNMNBRqg7dT5RtbpkJOQl00YkEeIBy5RmbtsbuQqqQCQpamdMyQDpXjG9uKyYEptXLLagFRyOsQ5C/HYvvG55DBQ9a6KTXF56065Rlb5uF0bJlZBoAQGA2qPtG9vmykpiGykHzrXpxj5nfd6vXBmCK11z/mrvCxTHnjWxn7C1e1OxBGFAM+v6R9Cwx8ouyZMlKzynInditTRQDmQwJoRTWvGNhdftehwpaKBz+JAzL4gCq/KNNWyai0jTERm/bgn3CAAGrrryqaxpJU1XGJGDA7ggjzEZT/1AmUSUvFz6CDwq5JE+Z1FgVlnkGyjdi5+QiEpP4s9DtMBH5TLKj6eUROVpsqDaWD/cx+0Fy0D2hGBFXEwONxgdihI5gmOh92cqWmv0e+95R0MP8M3EeUdGyJ4nyCyNR1PBlPkRH1wx8pu2QHYLRiSRTDTLiTXaPqcgM4GLYaDT9Y5+fwelxRcim1Sy6Mq6sCB1IhVd/sphAxzWrvgyJ/qOdKQzR/8A+pUOgRyOuUNpTHGykUAAIPEaEdQfmImsktHSuOJZY7tRQMq03JqfWL3UKKUhZZrzRHdCxbPEtAWqDquW4P8A5R5abwZ+6jdWoo+p9IGLCq8FVvmbCFZXcxbaZtBU5fvbjA6Si9C2S7L9W+0UigNHso4u6Mtjx6cosnSqoQYKRQItpyhhXGzEOrKSHBFagVyrTeI4yVJYfhp45UjaWmyq6kEA1G8Zy03M6LXJgNRv4DYRWMkzmnxtdDSxWRHlooI7pJO4Y0qOWnrEp92oUb3Yrrqc6rnTyMJLGHWmZA1zzAplWDZdrMp+yQ65nIgZtQHSo2hqYuS9B1ixoSe0FyC4tu6QPmIKtM5CGLID2Q9K97Ng1Byz8xCiZfBcn3q4l1VRkBr56+kCTJ7OMINFqSAB3Q2ueyxqNl6B5amY7UqWYnD4k68o0FlupVwgrjbie4OgHfMVXJZVxAJ3iKlqVIGmVchXjSNvdtiVMySx+I/IcInKXhDx432y27bEiJV8yfAU4ADIDlBc9yV7BwnjQEQIlulkYiaAE0ruBlWnCOF6g5y0L8zkPHb1iVNlVSF97XxMkoWZAw2Iy8SK+kfOb0tKTXVqFWxVPZoMOVAMzXOsbW+LwdzhLygNwCpPrUH0hBbLHKZMINXzJIKangAcstoZUjStrQpFZ0zAg7TN4dTy3h1ZrGqVC9xe8+7n7cBC2wWJ5TO5FBhIDVUZmg410rDSz20BEWmS50OVWpQEjlGlvoWLp2yJtryO2rsvBMs/z8+UAXveU61KjTUCIlTizAYGmx3y2h3d9iUAzrSQABVVPzI3J4QrvRHtLdlSEU9lfi5mn7EaLxdoM45qmFWWer22WyGqrKQA9MRMG3S6IMZA/iMrBv5XBr5HKMvbZ3umRJT4XWuJvhDU7JG53/5hlLtYeQiAHsChHFcwWHGpI8otF5UmcPNBwTa2bbCI6MX/AI9v9Y+Q+8dFPhZyfMV+zF2iWuJh2mzPLgsaGwWmrFeEAWZqAAQNOtXu7QpOjEV4UOXzpHC/sz341FBt7Ey3Sb8DCv5WyMN7SThDJmRRgPiB1XoRCe9bVLmYpRNHp3SKV6RVdd8osj+I1DL7Brqad2g3yp5Q1aNkkx3bUDBWXslSGU0zGWhHAjIiEluvXt4EGN+Wi9TtCl75mWhyqEolOHaPDpB112VEUvoGzBJzw7VJ3OvjBxrsKlfQRJs57znE1PBeS/eL6GB3tLt2ZaYh8bdleHUwtf8AxBUkOowtgoBvWlSTBSszkkPg0SQaZxmHn2pHC4g7Eadk/wDEMLFPtDN/ElkKPhy8Tnn4QcTRkn4HyIYkJESsjqRShHUGD1lcoBpIzV6XUrBmUUcAkEUGLkePWFl3WdXUEGhqQDTMMBUV5GhBHSNtMkcoEstzpLLMo75qRsOg2h4yaVEJcabsxd5IKK4GEOtSBkAwyakMUsmCWGpWi1pz1rzyoPOL78u7ChGoGOgOpd2oB0zMRF4LgKYcRow5BU7LE77EwXJsEYJO2HeydPdmYxzLMWOwpoOQpDG8b5p2EBLHQDX+r4Ry1O9N8nd7OaiWcCA1Z2OnEgaL8+cM7Ihwn3TBRvMcqCx4jHtzoYRx2FStBk18AxTFxPqFyVB+Y5VPrAT3jMfvMAOGWEdB3afvOGV3WFO880MegJPRmFSOkEAWctQOuIcWqR/dpAugqNmeeZMGVG12FKDlQQVZ7G71rNmqtMh3TzzqT8ofvOQ5Y1JOQGIV8BXOAbdaFQEnNqGgrrzPAc4VtsooJbMxOusmewxtgT8TMSdBoSdawwf3SEz5hDZBUSoYkgd5thx5RnbRen8Qv2mIGQBoCxJJbLbYRWs4J25gxOc1TPKuYLnWnLUw+LIylHwP2tGP+NaXwp+BOI5D6wHb/aPH2JUsjKg7Tg/2oc4FsV3TbUxdjReOgpwUcIaTrXZrGmFAHmb0zP8AUfw9I1IKtr0hdd9wkgvP7K6kE5niW4CCpsxDUo6gKCFNQCa5mnLKEl5+0E2aCoIVTsup6k/SBLBZge22Sg0FfxHh04mDi+2K5RrFKzT+5s38397/AHjoD9xzjo2T9i/HH0PZWqwr9rBkj88J6EV+YEN0UUEL7/lYpZXyicezoluLAJd+oVUmVjnUwA11OleOkBzZASrTKM50QHsr14mOsaiWqlM2dcTMRoN1XhFVpUM6gHvEZ9YskQt1sd2Cwqsqtc3FWfgDrTotf7oEt15tMISTkBkDufyjbxgu8pZKhK4UGQUfipueQppAVis6M2FEBPxaU512hV7K7WkObkWaopNcnXCuVeNSfPKA5Mxj71E0aZTFsKmmXP7RcyYEYq5ooIZq1BPwJX1P7Hns9ZXmUNCqAkk8SRSg8N435G6aQ4sNhRahM/iY6k8zDKRL2gmzSFAAApQRfLkdqELN0qISLL4QaiQRKlgCLESGRCUrBjLiDplB/uzAN5zBLSpGJiaKBqzHRRBoCkZi9XxzlloMRQM7cK0KoD4mvgIzc9xJDSlbHMbKY4zwjdV9Y0FpGEMgajsT71xTEz0qVGdQg0qKwtl+zMxyWQYUqcJfIkVyNNdIdRonKTfQJY7dLUqHTEoIHabIc6AZnrWH9+EKi4cCo22B8R03Q/MQnnXXKlGsydiZT3EBJrwxaCJWm+prmiEooyoWXzrT6xmt6FUqVMJup6o2YQEEYmZVHhWp9IAt1lRSBKmBydaFmp1NIss0w1LO6E0zxvUH+kaxEMiVZXGeqppTo5qfCBQbtIFtNpmIR2VqdCK0PLX0geWjz2Ku+EDMjc8sIzJg+Z/FZFRiy1qUYd08a8D1i/2gsIVUZV7VQFZWz40OQ5wA03vwZ202lJQKy1DvmMbUNPyqND1ii7pasS856IM89WbgOMNbwmgLhtMoFiOw4GfKtNeo8oSSrEJv/tt2h+Bjn/S2jDygivT/AMGFuv8AZxglVRKUNMmby0FIUOIZ3XddXwTqodl0r0MaWRc0lfwA/mqfnAyjEbCUtsw0qzs5ooJ6CtPKGwlGWAhFd8/Qn7RsFkqooqgDkKRm7xl4pmtBh19IClkBxxBv8S/8vlHRR7k/EI8g0ids1sogjOK7cnYJGZFD5Z0jyQ0TtB7BrwMS8nWjHFyrla5Bhr8LajzMVCb2gRsY60rSaK6EgHoaAwza4Xw1Qiorkd88iDtlFrS7OfGUroJwNNf3aGpObvsBwHIephkbNT+FLYqFFXbLwFeJ+UKbLbvcSigUiaTuPD0iVkmHKU5KFzictllsteJ+sBplotLvsKcO+DGmKQhp2BTHTgDt842F1zJbqPdkYRlQZYeVNoDsdrkkCVTBQABToRyYdlvOK7bc7K3vLMaMNVGhH1gd6HVra2adZQyi1VAMZ657+xnBMor6cAfseUaEE5QrVGyyVhSGCEgYRfLjJk2ibHLOEqWoF/ezMlFRLAxNXYvkNfp1hpaX7BzoT2ehNFEKrukl3YkdkdkbhaHJQN4rFasnJ7CrP7tqkLrVqMMzWgLUOgNBAV8zzhpLGMj8IDGp5lSKDrDU2FBqoPEsKk8yTHBANKActIDkMlo+cTrrtMxiTLc/mOQ6YjpFFouO0IpZkoFzNCCadAY+nHOAbVNRB2yFWm8bMHxI+XB66UbluPCLbLZjM7gqeHCB5owuWWoBJK6ggVy6QXZrcQr9lceTBqDt0IqGHMVz484Z2SjV7G7YJCgEYpuwXZsiMWeWo2jyTYnBxzCoZziCVopamuHj949lXjKwieBUgqsxWJZlByBWutDpBVqvyXRWpjlvlkKsjCpoya0I5bRNnTFr2ZL2gvIzEQMhQgk1/CdqAxnmWhqMjqP0MbS/JyzFWWEBrRkZKYcjQihzU01HMRn77uwymXOoYa8xqIaLXRLki28hhdl6+9ok0VYZqwyavEc/nzh4toIXMg03G/UbGMrJlvLRXaWJiGjKw1U1rqMxnxhpKvFJqkiquBmOI48/pE5x9FYy1T7Hcyf2Kxn7ZOoKnTb7QbbJ5VFAzJ0H1MILUTkWNa+kGMSU5bK8bc46PKR5FCVmvssEW6ScDEfCflA9k1hu0rEhHEEekQOzwfOLcKop30PzEaO4bzExcLZOB/cOIhYZGJWTcafP9ITKCpqDQgxWlJUSycJWfQpl3JNWjr9COh2gBLvmSMdFE5GpXF36DQcx0gO5/aUghJ1KfH8qj6xsEmqwGEgg7iE+0S6cOTa7MPZ7SqzAaEAHubgcMLfKN1dV4JkMaivdrVa9Kmh8IqewJMqroG8M/PWLbtuAI1Q5wE5o1GU+ehhsk0IoSi/wU+0FzB/4ksUcZ5fi6c4s9n79xkJMNHGm2Lpzhy12qe7Vfymnpp6Qrt/sriONHGKtc1p6jL0EFU1TFlcXaNKjAiLMVIQWGRPQYWIBG/eRumdVMEva3QdtD1XtD7+kI1Q1WMjRqqcxvBUkAAUGUIJV9Jjw9oClSSCAOTHY9YfSLQjL2WBGsMrFkiM1zuKQJMmQHet5KhAFWLGiqtKnfKp0pC20z8S4pp92gzPa7RJyAJU5Z8NTAaCqLbd7QKj4ApdtwKUBOxPGENqskyY4eZ+JshwGwHCkMLtdJrn3YwolcUw5lycyFr51MSl21AwZRVWfCv5V7zk8ST6CHiqFk0++hJfdkUuCgOGmHTRkNGEL2u91AdO1TUU+m4hw81yrUHZL49NCScq8x8ohejUkI6ArV1Ycsmh9ojptsHslzS5il5bChPdJ7p3Q8OXUREWaWrtLoEnqpKHZiBVSp+nWBp1qMllnIKypoo6DY6MBwYaiFt+YwyMzY0IrLcbitfBhCVsfJJaWxpdl8SZuUxFSZSlaABq89jyMZ2bbWKNIer4T2TqysDSnMawPNlMO0cw2deMG3FZWaYDQ4eO0ZpLZlKUqQd7PWqmKUxpuoPqKesU3lYMDe8l5U7yjQjenhtC+9WKz3INCGqD5EQ1m2vHLVviGfXeFa3aCnap+D2ZbqBQRUgDwFPnCy1PicAaD9mCbPKxDEdxFMyWFc04GH0iTtkMC/sx0DYzxjowDX2NjUVHiND9oey5gAjHC8iKYBTrofDaNBdVvxgqwAYfusTcX2dKmujPzGwuxpozAjelT/wAwvvWy07aioOv3hnfY93MxgVVu8N8sq+UVIQy5GqHfhyPARlrZnUlQgUQdd94zJRqjU5HMeUEWi6TWqnI7VgdrKR3hTnFLTIYyizUXf7X0P8SXXiVP0P3jT3f7R2d/x4TwbL9I+XykzyhpZk+kbCI/zSXZ9ZkW1GAIdT0IMTa0CsYSw2Suig19OI8oOnXeMOQpsMIUaagDakN8YPm/A8tt8JLNHDAfFhYqfEQtne1Fm/1R5H7Rl7Xdzk0xOfH7RTLuHPtgAaZ78hCuCGXLJ9I0ae2FmB1brhNIPsl8WWbkqB6jMhBl1rGUnWSzovaYV5Uhj7N3eJr45SlEGrnVj/KPrGUUjOUnrQxvW8JEsVlBS9MlUCpJ0rTQRmr7tbuERiS5ocC5ha7nix0A2EaD2ltEuzphRRjOnHmzHhCz2cu4KP8AEzzme0MX4R8R5004CBpbGdvR68ibKkpU0Z+wqD8AYZ0p+M7nPWJ3dZWJC0zrh5V1IrtB0u0GY5mkUXuSQRx70ynQV6QwsNoWqOB2VWYCf5mwgV5nM1hosnKKfR5bLIWAlrVsPePM5VpAftLIw2egGSFfqPrDm65xx1/1Kk+GgHnCa+7SrzfcYqBhRvz6gDnoIZgVVryZdKENLPcmCoPwsO6/TY8uke3TZS8qZJmA4VbMbpl316EZjgfOiXiR2RhmpP76feNLYJbIyVAKlM2HHs0B40zoeETk6K8cbMXec2aiizzApAzVhuOR3EFXTep9y6ZBlQlTxoPmIc33d6vRToa4D8J1K/lOtOUZKy0QzFcVARqfmBGEg+J84CqSBJODsot1p947PSmICvXCAfUGC7MpKKgyLHLx3hUmeXhGguwjFXZRQeOQ9PnBZOO22GS5DqKVU+MAXhLyrwhu7E8oCtK5EQtjOKoSYY6LPdmOhhKHk2wqktjmTlmesSYMry8BwsyLn4UPyi69Axl0UE5isCWlndkKI4wqBpw4Rou0PJU9FN7pMQgu4bPTLTyhe9kYduUxG9AflDpLsqMUypc7HaFrzPduF/CfnwgX6Cl7BrPeMxDrnuCPmIbS76Rlo8vPWq5jyOkDWizrNIw96mRH14wELvmA0C4uhH1g6fZqkutoby5tmY9/DyZTl5ZQ2s1jlk1Sah6MP2IxrKwyZSKcQYnKnjlBS/IuXtH0y77KdMQ61EM2koo7bgDepArHzGRaMv8AmG1ld2yVGboDTzMP/YjfpGhvC8ZKdwF25ZDbc/SMxeNteY1Wag2C5ADLzg202dlFXKpXatT4ARO6rgMxsczEqA5A5Fuvwj1gNxQUpPQsuS6XnuKICgPaY1w9MiCTyEfSEdZa4EABAyA0A6CFMy3ogwSQvZyLfgTl/M3LzhObyZnEuT2nNKsczU6seAEKtu2P/FUuy20XcZ04BqkVxOT+IfvLzim9JnvJvu8QEqX2nO1RseQh7aZws8knVzlzZj9PoIyV6SSkhE3muC/EioP6xnth2lv+xo9qBVXpSoKoPhSup5t9orssxiQiVYsaACuZhdfFqwuUByGQ4ACH3srKCr71h2mHZrsv6/aCnSFksnSDb+mmQstENCqk4hqSaA/KE133Ysxcb1OKpXMj+qozrvC6/b2M+acJGuBedDSvnGnsvZRR8IA8AKQJypDcMFKTfgQXhZCJiu1cSimOmTrQgBqd19ORhrZmIVQdlFfLOCJxrFRFIi5WdSio9A1pOLI6Rgb8f+I6jY67nf8AfSGV8X3MxsqsoVSQCBUnxMZ2YxZiSak5xSMaObm5FLSJSNegh7YrTRAFUVOZJhZIlAlVU1NKk9M/nB8lcNK6nb7wzJLQZ7411qfQRGY9ASdYplt3jAtpm1haC5Ud77lHQNHQaFyNskXCBpLRaXiJ20RnGgjPW+WGqD++cPZziEtvOR6QyJzFci0lDRq+HzBhtY7zRSK1hWssMq14D5RE3c/4SD1yh9PsmpSj0a6Ve8o7nyj177kqcl+UZJbDO2X/AHCLpVzzm1wjqfsDApex/km/Boh7QljREXy+poIJkS5885uiAbAhm8gaCM212y0FXcv0yHQfEfQQ5u+9gi0AA4KO6og16Apb+xoJVhlSRjc1PxPmx5AfQQBeV7kqR3E4VozdT+EctekK51veaeyCTy0XxOkAybF72ZgZi7bqh7Kjiz/QVgpVtiyneonPbpk4iTJXLgNOpOwjZ3FdSWZCSQWIq7nXLbkItui5kkJUADdmO/6Qsvq3Gb2ENE5at14CNuXXRtR2+wW02trTNyBCKaLzzzYx5eDh7UiDMS1J8QtfmRB0pFs0rEwq7d1dyTplCy71ZFmWiZ3mJAHjn6/KMGvD/bEs5S84JxbPpv6Vh9aLTMdWkyuzkAXJyUHYDc0+cB3FZi8xpjaLXxJ/Zgu754cO66F28aUA9IEmHija/YB/k4kmW2MswdQeFDUZCNMs+ElqtALqNkOI03NCAoG+teWUSa8NgVTOnaOI8NFNB5wjtlo4x0hs9pABLEADcxlb79ogVKSiSTkWGgG4HHrAN/ynZi2JmQUBJIpi0IUQsstgZ89F4/bjDRiltkZ8km8UjyzzFDVcEqNuMVMCxJAoPlDdrKiDQV55wIzVYLTLM+UNdk3GlsMuyTTOmZ+Wwiq2PhbrDGyU2NaHOPLdYwwIPXxgXTDjcdCwTstYqY5xabuNOy2fAxBZBU9owU0TcX5PPdx0XYo6DYKNHLeLDNgCY5EeCYYidlhM9xSFNvbst+U/KC3NY8kWP3rrLrTGcNeFcqwyJy6FthNUXp8oOkcRFluusWd/dB8eEA1pTXlAUvGjMFzGuE8DwPp5RnsEXpDSValzCjF5AeZii13i/dVSeQqF8WOvpAv+YDRpLV6fWKZdgee9cGBen7qYySXYZSbVIhMVmOJ3ReVQT0CrWkF2WUCVCo0xjkMXZU+ANSOpENbLYZYbHRQiCgJp2j+JiTsNPOKzeLO5Wzric5Y6dlF5beMNl6F+OtsL/wAEckY43OktOyic2A26xpbusEuzIWcjFqTueg4DQCF92SDKXs9p27ztkOvSLnWUTV3MxtTQ1AptQGkZfbQzWKvyC3je7TWKKCANh9ecdZ7GEAdwST3Uzq36Q8s9nUqMCKAdCc6+H6xY8tUGN+03Hc8lA06CC5eEBcf/AEwL/CkkM+c18lGolruRsKDfiRCu8rL751lS8kTvHb9TDV5pNcwGbvsdEXZQf3vErNI7OCXVUPef8Tfl5c4F0M1ejLXmSqPKlZImFWIridnNMII0jrABLlnIlcRCjcnTxqR6xbamCqMIGbzHHDsnAhPId7+mJWGTiIY6KKID6sRxPy6wJPQYJ3YtsEjExDCpBcvwrXIf+WXjBdpspanaIA/CKCp46QctnVSxX8RqetKR5OMTct6KqKSpimbIWgBAoNAc6ecAWi0EZKV8Mz9hDS1AEQpmpnhUUG549IKZOQHhLGpNY6wpinNwVT4aUgl0oIu9nLOS84spAK0FQc6nbyhr0yMkVWQUcUG5r+p8ocOARCyztSDEmxm7KQVIpwgQA6drPfSGUw7xSZYJrATNKNgPuTHQb7uOhrJ4DGbJzzioWTesHTFzitGFaQhYEMqkWXQD/iEpqGr5AmLprCLfZaT7y0MVzwKSepyH1jIWTpEPahKTxzRT6tCZ1oQw1HqNx++EO/a4EWmnwog9WP1hNNxEDDTx+0EWPQQkwCjEjCdzt1iFovxVGFFxHiD2fPeB7NdONquxblt+kPrNdSChUYTy/WM3FDrJ9aM+tknzQCwODZVoMuABPqYOa2zZS4ZVnwAbmp8f2Y00iygcPAUglZI4Qr5PwMoV09nzxLW7OS7Ek61Jp5aQ2sdrBIQd4/vwjST7glOakU6QwsNyypdCqgnjFVyqtEXxO9suss0SpILZBRCsW15r4htXDXuoP/059PmyttlR6BxUDOm3lEBK2ApEsi1E7NYQSGYlm5/MDQQydezQa0gSS9IJV4GRmzN2m4wWUs2SAADjTP5kxa8vCKCHU4VgB5VYWUmxlQsdIGmy4atKgaalBpATCJZ8uA5qAQ3n0hNa34QyEkBTFLMFHGnico2UmRgGGlKZRn/Z6z47TKX+bEf6Ri+kfVfdVGYBh3GyEpUz49TMjmYsCR7aAA7jg7jyYiJE0glU9HoTKJy0iMmeCRzr6QYg5QHoKpgvuucdBdDwjoFhotnQF/3B+U/MR0dBQGdadD0hr/6dd+d0l/N46OhiUyn2w/8Alv8AkT5Qklx0dCsMeg+w6w6s8dHROReIamkELtHR0AJcukX7R0dBQrKGj1I6OgGJPF6R5HQwGQaKnjo6FCgdoDn7x0dAGFFp0hJadY9jodCSG/sZ/wDLT8j/ACEfS5cdHRaJzT7Pj1v/APff/wC1/wDzaPZkdHQPJRdA9m//AEfkIb2TTxjo6BIMAqOjo6EKn//Z" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="data:image/jpeg;base64,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" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFRQXFxcZGhoZGRoaGRgaGxsaHBcZGRkZHBkaISwjGhwoHRoXJDUkKS0xMjIyGSI4PTgxPCwxMi8BCwsLDw4PHRERHTQpIygzMTExMzQxMTExMTMxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAECBwj/xABHEAACAQIEAwYCBgcGBAYDAAABAhEAAwQSITEFQVEGEyJhcYEykRRCUnKhsQcjM2LB0fA0U4KSsrMVQ3PxJIOiw+HiNWPC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDBAAF/8QALBEAAgICAgEDAwIHAQAAAAAAAAECEQMhEjEEE0FRIjJhFLEFYnGBkaHRFf/aAAwDAQACEQMRAD8AW9kQ9xrZvAlLTOlqATnmBJjkhUySIk76U77T3Ldu2zuwtBwtrOq+LKqvcfKOrHKgHWDU/CzctW7YVLYuXApIdhnHePmJyjkM+3OOVUPt3xQX8Qti2Zt2PBn3lhAe4fIRE8zNL0jkrkV3DYXvCXJIUNEbliW0UR0BEnzq/wDArH0dfGue44MwQDbmMkjYDfpEAa0l4ZgwzFhbC27S+GRrvox6tOpqzX7AGHuswkFR11B2J8zAmsmTK26RpUFWzMVxEC2XlSQSAiyZB2PqCJ86qHE8ZcthEtQzXvEykK4WWy2gCNmIDA0Zx3vLFm3fDIM+ZFAmSrggso+FYUQI6zzqx9meDW7mC717SKSjXLTwO8tshPdkORP1QelPij7sSbS0gS3glwOExQxNtbmRQLZIIzvdEMg/dFzMfTWq/i+3t27g3wxQB3kNcUmO7YyyhDsTtvEHlVdxnEsRijmv3rl3Lr4mJAkx4VOg9hR1nhqMBrlLKddAJA8K6czpr51eUoxEjByE+IwrJkBGrAMIMyDtt/WtXTsZwFWz3LjCUYKE6mR1OskqPnVfxuPDrhURMr2hq2hzNmGXQcgFFejYF0t3MoOiJbWNUN1jOZj9qCSPc9Kjmm1GiuOKt0B4vgY7y1btxBtu5Ybs+mum4jN86YWuz4Vi7qSCFkqwBkaSRoIgDQ8p8qsNpbRyhEL3YypBnLMZjM/CpPPzo1eAtDG5eJJAIKjJDaeIkaldNj0qMYuXQXKuwLD4e1bX4VWYEaAEzpI2Ez+PLaifodu5lyFcwzDbOBqMwbXTURvypLxHjmBwjz3r3bqtmc29e8OvhuNIQjbmTIFVXif6Rb9xu7wyJZzt8UZ3Okak6AwANByp4w+RJHopwgiboQKumbMCka75ogiBvPqaS8S7T4GwCBdS42xFuXYeZK7n1IryHi3EL1x2F+69xg2udi2o6AmB7UvZiauoCMuvEu2dtmAs2TyHjImAQSpVZzKY5nmdKrGL4qbjZyqTMkgHXXQGTsBoNNqs/wCjXgwutfuvZNxLdsqPgyhmRjqG30j00qtcJ7P4nEx3ds5T9dvCvzO/sDXKEYh5SfRy/GbxQWw8IDIVVVRPXQTR3CuHY3FsGV7gH947NHt9rQDbpV04J2AtW4a7+tfzHgH+Hn71dLGDA2H9dKlLJFfaikYN/cyq8F7LLbh7jvcuaSzEwNIgLO2p3mrPaw9Gph6lWxUXb7K2kCrZrsgKJJAGmp8zAo0Wq77mioC8gdLddqlEC3W8lOoiuRDkreSKlArRFGgWRxWV3FboUcebdreJ2cPZPcgd5cn9ZEsWylWuFzq+UOfLMyAbGKV2c4YXAukeFWUkdUEkJ6aAn2o3jF1uIYy40xbHiK7ZV1Kp94wWP/xT+8Vt4ZrYAhbTPmAiMwGUGPLX3FNlyVpds7HjGHCrYYBCF1BHLchTPn9Un0prirkW3uEKFAMD91V2aPQ69KrnYPFZ0ys3wzBJiF8RJOusbelS8Z7QWLjdzh2F7vIz93IISIygkEA+etSjFoMtsE7OYi3xVTavYdVSz3YUW2uADN3k7GR8I67CkvaXiuKs4m9g8PddcPay21QQQqhFBBYgncnWdSaPxPEX4S9tcLbUG+guXEuZ2iHdUghgRodj5VBhuD37tw3HIDXLneXJB0kFszj6o3hegrU5KK0SUbeyvWeG5VJBggEgaeJF0Y+ZB+VHrayQrSoIkAjmQNZ0A+f51Y8Tw0OpVJ7wZYfLoNwBB2YxLTIgPO1BXuzVxrnd5nZSvhZoAEnw+FYmQJjSAfKpN8uyq10KuzPBziMUy5QQiDNOwzaZpHQEn2r1jgfD7d1mvuqlQTbQnYW1iSZ6/hr5151wPjVq0MaxLZ7txUVFEA20zDVvqggxA10rni/aG9ctqp8FkzktqITTy3PLcneunFuQIuonoPGu2+Fw0raAusoygJpbXr4hvsPhBqlcc4vjMVhWxj3Mtlbgt90mg10BIB6kDWedVC67Nzir52SRb3Ccdh48Sq9weZUC4uvXMPwp+PyLyXseeXbpYTpFFdnrc4q0OrV3wvhVy9mW1bZ9thoPUnQVdOz3YS7buW7ty4q5CDlXxE77k6D8aMnFKgJSbsp3anCZcZdVQ0FgQCNdVHIec0Rwnsbir8HJ3Sn61zTTyXc/hXsScHtd4bvdr3hiWIBMAQPT2o4Yep+o6pDcFdsrXZfs99DtuiXHbvPjmADpGijanlnBgCAIFHrbrZ0pNy7HtLoHXD+VTpYohEqQJRUBXIhFqpFt1KFreWnURbIsgrMtTFa5y0aOsiy1oipIrQWuCR5a1FSla1lpaOI8tZUmWsrqOs8a7MYBbaF3WWefFmAzMZLGfs6QAN486lxGGvYhLnhXxBeUDLp8hoPZqc4PBZ7iKU0VSWYbfZC+UdRrvtVmwXDyFIA0O8899ABsN+dZE5SlZeVQVFY7L8JW3YuZHtfSLqsgBbUaRAXcyQTPvVebhbcGXvbqpduXQEthGMIVOZixK6yCNhypnwfgVzD8Tu4+6ht4a0153uN0ZXAKr8TankKD7W9oLXEnt27SXAtpnIYxNyVA2HwjTn15VtSSjszO3LQtPFr2KvJiHRRdVcqBB8KKdPimCSx1300ir1wfBqwyFQune3dSdjGUmZJZlZiT/dmd6XdleBhif1cImUkxEtr4QDvMDfr56XO7YtgtbUQPjukayBpkHMztHQNSVexpa0iKxw4OkkBQ6lojYN9o/dyqfRuteYdsu1Ga5ct2GzT4GcCc0bhY66AnoAOs3jtg2Nu2zh8JbM3BF26WCKqx+zUkzJ1kgdRSDgX6NXt3bV65cUFB4kUFpaCJzGOvTlTrj2L9R5tw6SkciSf4VeMBw04jARbUtctXJAG5BOUgexB/w1esN2Iwiuztb7xmOY59VkmdF2HyqxYfCKgAVQoGwAAHyFdKd9HKNdnlXDf0e4i4ZuMtpf8AO3yGg+dXns92Yt4RWFssxcQxYjURBEARFWRbdSC3QfJhVIAtYRVACqABsAAB8qkW0OlT4mwzCFbL1PP2qS3agATPmdzQUNjOWgcW63kogrXBFNwFsiCUFxjCd5adBoxBynmG+qR5gwaZAUPjSwQlRLASBtJ6UyiGL2Q8HxXeWbdzmyiR0bZh7GRRwBqvdkMSHt3cuwvOR6PF0acvjirGDRao6XZsVsGtEVwtwTE60otWTVqK2tbiiA4isiuyK1QGOCK5IruK1QCcQKyt1lA4r2FweQMI3I/A/wAq54lbxTkLZvJZtiJ/V57h18QDEws+lOlSg8Zi0tsqllDucqKxjMfLQzpU4Qrod/UznitkX7FzDlcq3EZCV3AbciefrSDhfYjDWYKh2I5s3p0jpVsVY3rm5cUbkaUzt9gSS6IrVgIuUaDePPrUiWx5VWcZ20w6HKua40xCjT1zHSPShU7bCdbLBeRzCfxAH41ygBuK9y7KgrtVFIMD2msXPr5fvDKP8x8J9jTpL4IBBBB5g6U6gdV9BIWu1FL7+LZTmAzKFMqB4y0iIMxETpRZxSiNdTOUcyQCY+QqnpsVxaJwtdhK4tvIB2026eVdzXUKby1qK6mtVxxGwrg1IxqMmuCjmq92q4z3FsBY719EHTYF2H2RI+Yp+7wJryTjWP7+9cunVSSq6zCIWXToW/WT6J5Vw10iyfo5YkXxJM3A+u/itqdfxq9AVR/0cuSLxI1lB8lI186vcVz2B6IDeGbLOvly9elLP+B/+L+ld42iwE+rMRPWPLrrUa8Mt4e/cxb3WGfQqxAUExMaSducxrT6zdV1DKQQdQRzFCgvXR0tbrKyiIaNZWzWqUKNVyRXRrk0rGOaytxWUDiMrUQUTPOinXSkt/gxVR3Dlbghe8cm4RbNzPcEHcnUD26U6QUyNHc4p1FtwgtrNwt4S0khUSN4Opqv8V4ndwz2rTt3uZy1xlSDkbPlRR1AWSeccqsGEwuIss2e6LtskkZhFxZM5ZGjKPakHaTEIb6rctt3TqA10ScpViVOmqFZJzfvHpVYwt0h9qNlYvcNt3Exq2Q4uIUe1mlWZTBuoAw0IJEfeFBYDhly46LZt3B45uFkKBbYX4XLnxvm106GrZat93NtznuFrqhsujq1qQTybxWko6473DPd2wQNbgLA5PrEKwhJE+KTtFU4KKpmT7p66ZXfovdhstxmhpiBqPhifYnT/vNhrrBQ1sxpuhI84gbmI361OxS2C5Qkl2IAYNJWEnUDcrMgfnUDYW53SFEAyiIU85bUzykiPKpfp5S3F0WzYZ4484b/AAd3OL4iCqsDoNGBDRO+YaTIOkVOvbEow7y06SNGO3nr/KkK4xgYcZgCwHPlHy+Ia9KJWLqlB4hosOQdCILDz9Z2plmyYtZI2jNDypNly4fx3vcoFxcxObwKWGURKGfI/FpTwcVsoMr3UWPtOJ/E15ThcPbt3GNu3KrKukydNiAYkbelH4bE+FMgYlQs5VRQwY6k6EeEE0uTNCX2o0LKpLo9CbtHa+qWedsqtB9CQB7zQvDeOtdd7dvIPrgu2bwnQjKvRgeekiqQLiMckfs2UIxnwysyS51MyIA6Ux7N4sfS7fhQq6uoOzBhBYkRpOT8KnGdsaNNF5Sxckm5czD7KqEHvqSfnUruFEkwBW8SpZGAOUkaEcjyNeVdoONX7zNaueFVJRrYOjlGh2Y/WQw/h+6dZpm6OvWxz2l7Wq9t7WHk5gVN3ZY1nJ9onKwB2mqzwrCzBP1duh0A+XhX5edB2MMxPiLdATpIzAjSdCY+cmn2GTYAHXTby/IfxqGTJSpCxuUkWTsMoi+wH/MA9YRZ/E1bMDeNxFcoUJElWiR5GKr/AGMSLLmPiu3PwOQfgtMjibqXmzm0tjLoSSHzaaGdI3/Cqx6KyVthvEcCl62UeY3BBgg9Qf63pdjcYuDt20VGZRpoRIVVksZ30pujhgCCCD0oXieBS7bKOs8xyIMbg0yq9k91QXauBlDDYgGuwapnCe0Btuli58Hd5kueSjxIw+0IOvOKN4V2oF3EthzadSEzhjBESAJj4SZ2NNKEl2BNPplnNaitZq3NIwGiK5NdE1yaVjI1NZWSKyhoJJFaYV3FcuKIEV/j2HxFxkW1cW3b1Nw65yZGVV6DeTSHima0hVrbXA2ZfDqSImTyHz6VZmwt3vblx7s2zAS2FACiBMndiTJ96qPa67ca4otXhkCnNbVQSWnm06CI9Na2YdtI1Y3qiscK7T3bDC27ym3jBlRtoTqAPf0NWzDYlb9wK95grIVCgrkZTpKkKNSMvmAfeqTxzBocr3WKlmCSBIUkbt0H86Z4bgP0a23esryhdLaXWW4FXXvFGzAGJU8iY6G+VKrRiy4eE9Fl49aS1bYLC6ZfEQWYAaKijloYGgG8VzhbaqltWYrdyJJHWJIb5nQ1PwWxh7gtObajMFKn96DCuDzkyD1gaaSVxLBp40WJAQeFGZwznKGYD4liNeUEnbSEJpo0fq5QaTWhTjcJMC4syMouIOu06abilV/hRnPaIIJmIGkRH/qE08Z3tCJzamRMxA+E9Nx8j1ofCYu3cAK/q3LFQD8LGTsdtSp/GrrIpLjJWh/S8bPuOmIcQ0kLdkKZBjTd4BLb8uXU1FejxGAnxSMoYkqdyF0k28oBMHXUbVa71pSCtxdNRJ57jT2E+4pRiODsBNuHUzK8joRB9gPlWXJ4kX9UH/Yy5vEyYtx2hW+IghXQqFyhkJAUH6rhmMCIEEUSuOyXO/XK3dugQQMzGTnyvm1kGNdKFx1lpynxSGPi1y7ExP1dQBzFAo9y0SbYVgR+st3FDozZteXhMH6vnWfhxlTJY89rZ7ZhrwdFZSCGAIPkRIpZxPs/YukuUyu27p4SeWsaN7zVI4N2xWyADh7oWPhS4LiDXkGMpzEfhRl79JAIi1hrhPLMygH/ACzRaNHOPdkfFeBth2k/rEfQPADAgfC0aQQNCIpRe4j3f7PxXXAVF1MMTAJ6Ca4x/HsTjIR2yqSYtWhuRMZn336Uf2H4c1y7nOVbVhtlghrp6tHiyAjXzHrSekm7F5OUqiWrDlMq4K07rctAMWg5TkKFgxBB1zj50HxQrhrNwYt2uNduZkW2ScuWPhNw6DSYOmsa70w7SY3ukQ2ntpduOqgss5h00B203oXiOBN+4ly8w7q0skfaPP0XStOOPz0VcW1onfiBw2FsnDWiUbm4fwAgtmYKJkn86mwPay2wQXEdHY5TKsFBkiZaPDIiu+z/AB+1fV4BQWzlloAPSDNQdrrIJw7AAzdyNtrbKMWHoIB9q7j9XFojJ0mxJ2rsW3vhrOUZVPekfCS/WNM2WfPxCj+zTJZuO1y6i98VKI0d5JBmTuQeQ5RSa7fL27uQLbtJnVMoANy6BM9Aog+pphwHgWGxaJeuFnYPnyhyApU+FHUHUjQmfy0q2WKjCr9yWOTlO69i/Keddio0I2FSCsTNBhrk1hrkmlbOMrK1NZSnBVcMK3WnE6VUCEXGcUjJcso57wqRCHxLOk6fD61WrfCBatizam5ciZMfMnkKtvD+C27AfuwZdi7lmLEsfM61mH4Tbt3LlwA57kZiSToogADkP51WGRR0jRDJGPXZUhwqzhrZv4sNcDBbTqFLIuZhJygTuB4uVb47hFTD2rllUu2lBYOTmZVjMgDRJtyZ9hymrs4G0aVUuM8TTEWLtrDW2YjwmFCqviEzziAdgaLySkiE6lPlIq+CxbrbW2mp+FRzmSE95A9K9HweIF62GByXBlFxTBZGEFrbDlIO/Qgiqjb7Km2FZrtszlM/DkMyWRidW13/ACoXiGLuWrudMSpugfEoGV1GwuLz269YImnxePyVxeyGbPupLRZcTw8gO0Pszj4d3mVyCCSMq7nmd6q1/h5RvJVCyIAknUhdz45H+KmvDu29u4uTE2zafqAzW25fEQIPkfnW8ZcLz3dsgmACTbkpM6BXnaY16VbHCTfGSoyylw+qBDh8SY7u6CRAhj8QMjXz+rPpRNvDsoBtsGXmPbUwP8Pt+IWIS4CT3Z8WgBKbkADUt0BBGm9DYbEt8RtXpEAd21tlgbn49SefoKq8DX2s3eP/ABWlWRGsZZDTnXK3wwdoI19jr8jQdzhbPs2hAJ1B2G2u4iPWm6Yy8Bqrlcw+O1JjnqpOo60O/E1VfFaAMAfs7g30iCvSs8vHblbOlPxcj5bQtPCWBJ2A2EgaQJB66iCf3jXFnhehWNNQxC8sxJGg9Bv+Rqa5xxF+Iqss0ypE6ab7iaAx3aANotw+JQIHwDTxGPnt+FU9H+UTjgr6bbCRhmebdk5XbwyB4gswXdtkXQwBqSIkcrHw7ErhgmHsWmuKhC3GGgUndmJGp+sfUdaqmF4sAqAYkhVYEqqRO0yZ1nXlRI4+qqyWy3iMs7EZidBpO2gA16VzxOT3pGjFGEI22N+KYsX7kwclo/FyLb5R8taDwl/E4s/R1aEk57kRC9I2ml97ijXF7tFZUGngRnPzApnhsZetohRnsIukGyTn6sxOgJ3idPOnlFRVLsE8sfkZcW7O2kNizoUy3c6k7woY3SZ3zBV/xUqftCMtsozXMqZEzrkFvULJic7HaRyXzNB47iNy5mVLZuZtHZ28TxspMaLP1RA+dBtwwNBuXVQxrCsSPIAbAeUV0MUquSME8sXKkwnHcRUWbeGUGPFmfq7fGwiZ3YQJ3qzdkCzh1twgZ8119M0wAFVR8OgGp18ukfZ7gWEuWxcJZ9csuDbJgwfCdSJq3cNwFqyMlq2qDeFAGvUxuayeRkhXFdmrFjknyYfZQKABUtcKK2TWSyhjGoya2xrkmkbCjqayotKylsNBpNaY1thUbtVmIjTPXDXgASxAjroKq/HO1dqyxtWwbt0bqNl6Z22X038qrWJt4nEkNiWJU6i0hKoByBG7dda04fFlPb0iObyYYtPssnEe2dpWKWFN5uqx3YPm/P2mq2+PxVwO+cWlmctpQupkyW3J0prw3s8qoNh5Dzo+5wcFQg0HM863Y4YceuzBk8nJPorHCOGi8wN1nbcySWPpJOlMLi2bbZFtliBBbTTyotUS2Tbtb7TWlwTzGXWtScbt6RinOTsWYnBi4NAQI+HlrSQ8GNt5txH2SoK+vl7VfEwSoJYzSTjONRYgRrpHP3pozU3SWhIZJxdIUYDiSC4Ld/DwpU+JLl2DEAeAtAG3PlTDAYrDFxbNsPJhQbSrl+IeG6WzEafOduS3EWzecNbAhebGNToR8tZonFcOuWUS4pm5MsBopBjQHqAJnn8q8/yMWXm1G69j1sOfDwXOuQVxJ1tPlS2xDEf810A9GU6HbcHetI6tpbuOpmGD4oiOsA6mkHEMRdbxAjWNJMn5cwR7R605TiTXLaLdS1c08QN1Bc8iVMRvtvU/G5vUmP5KUdwQLinxEkWsVauwfgZ7Tn56a1vC4i5b1xNqxbnaEL3G6kojGF21NHYTC4cgFrBhtFXu2ZTOg1Ig69PUwKOw2EtoJa2LSzJQrmZlywJA+Az66CtmSUX9Kf8AgyxzSitxf9xbxridhrGXDwt0mARaEe5dRlG/yqfh1q8oUrcYyATIQjXmIFPbYBti3aw7KoGkjKB7kzNK17T27VzurqhRsCBOpMct6SDqLVW/6hySlNprSAeI8Ja5dDtfu5tNFcrHkAIAqSxwq4zhXsu6jXvLjI59BJJ1oPjb3hcPdq0kypAn36VNwXiWNuI2fDNeytGYRZYembLmjqKbJLjFNUCGOc9SbGuKtpatmLFyACSVycvQ0s4ZhmxM3LeGgD++7y3PpGYMNKsNnFLMG5dtHmt1SRP3mGvsalfFYgg9z3N2PNk/LNWTJ5EkjXh8WN2yHhXZxGKXL9q2t22xKd27lByBgwCY8tKtSW4qDCzAzb0VXnSk5O2bmuOkbBrljWBq5ZqVsCMLVGzVp2od3ikbHSJpFZQ3e1lCw0x2xoLHAlSBpOkjcVMblcOZqzkTSopHE7GHsAF8qLm0n6zGfd2Mk1xw93xDyoyWlO+xbyE037Q8LN/IoKBQ3iJTMxXYhGkZCdddaYWMMqqFUAACAOQitcPK4x/P7GWXhRlK30RXCttCzMAAOZgbUmw2NulGuEwGiCRoAdo8zOlF2eCtchsTc7xpnKoyoPIDcj1pz3CEAFQQCCAQIBGxHmKaOeMF8sD8S3rSFPCuG3BcLXFkFcwMj4p1EbgxrU/GcULSzIk1vi/FLttgtuwbgIJL5lVEj7U6/IUl4dwe7eU3cS5LNJVTOkjSQNh+6PeqQy8nzm9fBPJ4qUeMVv5I14i9yVHz5ik+Psl2H7szHWrJguBC1Ya0twhySTdCjNJM7GeUAVuxgxbUKNQoiTuTzLeZ3q8PNhF6RlfgTTtCzhGDynMfWpeKvn0FN7drMIOnpU9jhyjofWh+tipcn2J/5+ST09FNw3BiZNy2xQ9Ik9DB6b0XbwKKMtjCEwd2Qj3JberqiKKkDCs8vNuTfE3rwW0lKTKVjON3cPbzXLLBR8hrQXB+0i3bveXAyWhu5Rgm2ktECr9dZSIIB9aiOWMsCOkaUj8yNNcdlYeClVvQXgr1t0V7bBlYAhhqCDsQedA8V4RZxAy3LamDoYAI96ntvGgrrNWPm07Rr9NdCvEdn7LKEGdANu7d09vCQKY4ZAihROmmpk6cyTuakz1CXoSm32wqKJsTYW4pVlDA8jtQPC+EWcPmFq2tvMczRsTtNEm7WmvCkc3VBUQl2rYv0E2I86HuYnWl5DKFjR7tQtfpY+NoW9jdd6DkcsY2uYmoGxA50pfHCh3xfnStjrGOvpIrKRfSvOsoWNwRcO/rrvqW97XXe0/IVwDC9cO9Cm+Kj7+u5HcQo3a5F80P3grReipHUaxtlLy5LglZBiSAYMiY3HlRQvQIFCzWgRR5gcUEm/XIujnQ5ArW1dyDxQSt0A119JoHPXJeu5HcUGnEVsXDQIbzqVH867kM4hfeVhcUG97zqJsTQ5A4jJb1dm/SVsUOutcXMd50OR3AdNiaGfG0jfiPnQj8R8xQ5DKCLE2NqBseOtVi7xQTE0Hc4uBzpW2FRRbH4iOtA3eJgmKqt7jA2BFQLjbjaJbdvIIx/IV1SY1JFqfiI60Ncx460oXhuOuarhrnvlX/AFEdRSfGXriO1toDKxVgGBgjQ7aHWmWNsR5IL3LOeIgc6gucTA2NI+GYY3XytcygbxqY/Ie9Q3SgdspLIDAJ3bz0jSmWPdCvLFIe/wDFPOsqu98vT+vlWU3oievEtb/pAsfvn/D/ADqC5+kS3yRz7KPzNUZMDa+viVB6Kjt+JgVi2sMN3usfJUQfixq3owM/rzLo36RV5Wn+a1Ef0inlYP8AnH8qqKPhvsXT6uv8F/jW+/tictlNvrszR+IrvTh8A9afyW6x+kJ2YKLG5j4//rXeJ/SA6OV7mdvrx/8AzVRwuLZmgJbUR9VFB+cTR2H41bde5xVvvLYJCOvhuWwTur8xzggjyrnjj8HerP5Ldwrt1buuEu/qp2YnMs8s0AEDzqXina65hmAu4YwdUdXVkcdVaNfTcc6pHEOzzBTdw7jEWhqSvxqP37Ykx+8JHWK3wftIbaNYvWxfw7bo5Mr5owPhbzrvSj2jvVn0z0XgHaVMWGCeC4AYRyAWjkrbTQTdtra3Dau27ttwcrB1AynzgzVWx/BGS2uLwNw3LS+Jsv7Wyf8A9ijcD7QEaa9a6GOTiCBbxC4tBFu6dBcGsI+nybcEjlNL6ce/Yf1ZdF5xnGES5bRzAuDNbuf8thEkB+o6b/MVLbxk4n6JOW6VzrmkK6lcwKPswifkehqgcExrnNw7FW7jIWMAAm5ZuASHQbiOfIiauPBODsRaF26t1rTFrTLmBtD4VAdWBZS5Bg6COdJOMY9jxySa0E/T2757At3O8tmG8JyzAIhz4dQQRJ50elq40wRIAJGs6zA28j+FawLs1y7cc6oFUjmpPxQ0bRA9t66uYo3LTqggtMk6HKZOYGRHhA32A86g5fBTlI5bC3CQM6a5o8R+qQD+f4UNh7bvIDgEROh2OoPpW8CzqrhiGjwAaQNDmOg1nwj1PlRmDHicFcs8uUQIIjWNPwpNsLm0B2+Gu+veRvPh2ImRv1EVPwzgC3bedrrDxFRlCwQDE7mi8Y4tW8oMGDtyEEkkf1qa6UHD2LYVZYZS45An4tPNpHyqsI72TlkdaIH7LWZg3bs680Hr9WhcRwDCqBK3GLEBZuRqSB5CBM+1OHxQOo2InX8QOu4pFjscGYfWKHMsEeK4cwyAkHTeTyy00q9hVOT7YRhOz+FkFrMmAYL3DoSw1GaJ0FEWeDYUIqmxbPxEnICxUMcgnfURt0oHD4+E/WMhuncITlHJVU9ACNTuQx0rWJ4iwt3WCsWVWCAAktCAiI1ksWA9KaNdCSk/kNt4u0Cbdq2iKujEKoRZkATH6xtNhMayaUcLx2d2ckkXHLr9zTKCfSB7VDxrEZkZraPOTJbVbbSM5AbSIBAG1C8JcoCrIVCqqgkESS2u/IT+FLPtWPF6bLPiuLrZw9y8fqIXG25MoI9WQV4m94kliZJJJ6kkyT85q5du+KjuEtKw/WPJj7KDT08WX/LVGwi5nHTc+grTBVGyD3Kh6142bMAy13puPX57+dQ4C0btxUWQOZEaDnH5e9LMdiu8eYgDRQOQprbxIsWSIHePznUDyHz/ABoVS/LGu3+EWj/g+G+wn+Z/51lUD6W3U1lDhL5Dzh8AVZVtwfYPFNBuFLQ6E5m/yrI+ZFWDAdgrKwX7y4eh8A9YUzHvVXkiiKi2eaopJganoN6dYDs1irkZbZUHXx+H89T8q9WwnBLdsRbtoh592oBI6Ft/xplbUKIVflt7tU3lb6Qyijy1eyr2rti2zhnvPlyqIyrmTMQxOp16DanfaD9FzKS2Fu5x9i54WHkHGjH1A9aaone8WsodVtWmeBOjGRuNeaV6GEBEB9Ohg/yP50vOV6DxR82XLeJwd0Bhcs3F1EyPccmHmNKafTcNih/4gdxe/vba+BvO5bB1PVhB5617nxHhNu6hS6lu4h+qy6T1B1g+YArzrj36MQPHhWKn+7Zsye1zRh6EH1qnNPvTAkU+39MwDC9bfwHQXEOe2/keh8mAOlEXhh8b4rS/R8UdSgH6q427ZY/Znn030G9dKl3BlVu2zbkFXG6XFk6Muqvpp/Pam3DBhw5vWF7k3BlEksFAJLnaFU9CdIG0wElkSVlFBt17ElgXLUKXD3CmUtmUsYBIWQfgGpEnl6VZ8DhzbVRv4ZMjRgIA1EbEzFVl7K201YZwSHMHMDBzGBMSDoejD3c4niWVCqFVhVWJOgkKBB1kkg7Vibt2zTXshhjStvCM7/WKiIALbKi9IgTWYNhbsNcZQpfw+UtMagbQYnyqLiTKwtWNzsD+8VhfzJ9qL4oP1bWhyEzPKJ+XL2ope4reqFmAvlliDC5RPkoIn1Jk07tXAMzkRoM3WFnQ+hMex60lwNzIcp+E6+43jy0/qaLa9Mexb5yB8pNdAEjMRca5cSSADcth53IJByAfdGWieI49nBTXKfCSoBaC2XNqYAnYAEmJpDf4gGvrE6MzAbarovtOYzUl+09tu7uOScqMpgJADuIPkBEHqDW3xIKSbfseb/EJ5IuMYOrvrv8AAa6uoKvcJI00kArqdgegPuIpSqopaXAhZ0C29c4UhmAb+O1MbvDjCKx1uWM1sFz8ZWbY12mCBrEkDnQeGRbZ7u89tHayGBuAtFzMoNtvCYeMx0BjNVZ4scZaSr9jPifkZMVybtUvi97ZvDNbDPndwPGFLt8LEgBQNNpbcdKjRrS53ZgveBCs8m1QyJIynwDyJmjwyqHKTBu28oCsStlfExkbtssHXLPOl/ELCNbvoiP4rqNbGXIHUPmcuZkMQQJE/D6V0XjSXV7FlgzNySbptVvquxDx5ka5ZS3AhQWg7aCB88/4U6tugtBxlDZAx8RnPnELlnbKelL+0tp7mJ721buFDbVSvhBVhMxrquuhput5EwoLi41xbDrkGHdmN0nwgXSsBFWee58hQThzfKq9iuXHl9HGo3advf8AorPaXiLW7llVdoZFNwSrAmYMBgQNB+Nd8TwKKMROQiyUk92ttnV4EA29BrImPPyonjWAttat3zdtM9uza/VxlY3e8TMGUqMwy5p9KM4/w1UsYrEOqmw7YfuGW5HeglS6KoJgr4pkTNUSxvqhX68Uu/z/AJ/4KsV2WsLeRLeIIdkDqjjcENoHXTN4TuKpzuzt5mr52sLWr1pEW419rSvahVdlzFsoECSIzcjt8qHnyiBudzRyxin9I/iPI8ac23/UK/4cP7xfw/nW6W5qyp0/k1Wj6Cs8Mtq5uFndzp4mkKOgX4V9YmiI8hHlsffc1M8DSMx6Rp/XrQ93FINTr6NC+7EhR86i6Q+2d5NNQfTb5/8AzQOOx9u2QrEknZEEt8hr/wB6jxF0tGZmC/FCnKpEGJcwWnooNKcbj2RGNpMoQMXyproJMuZIEA6kDlUpTvSKRh7sD7L8SP0rG4tbRdEi2RIDKBOwO+luT61fuF8Zt3lkCNJII+RDbEV5d2Fwj9010gOLjsrRccMNJllXecrESCNDVusYI2wpw7MBGpXKToNptmJ2kEA6VPLNwnopCEZQ32WoYi2T8S+ZDR8+lEuwiQ2nsR896RphmuIe8RUeSZAHQwZk8uRNT4K3cVBMGJ3kT5yJp4Tb7RKcEvc64pgbd5CjqjjmCNfkZ/hVO4h2fdLeW2uZAPCoMMBMkSu4IABBOvOri98H4hEdYI+Y2qJ3RNZjlO+/mdQKMkmdGTieU8Qw5YqviV0UAgsR3iiNyANQAI11ygcq6sXrZuCWZmDICSuxAYgH5e8V6abdq6CCEuAjZoO3SZqn9o+zbqHuWFdiFECPEMu2XL8QiRBn2rnBtFoZF0Q8Px+bFsWJAAm0I0PhAmeRBG/nTi9cLAvBBJM9fT2j8aqeGxqhwDK6ahlKlSQAxIOm4Gx69Kd4bF6MpbxqYYTrKjblG41qLVaGe9oMwWHKIJJIAOnOZ5dSdF9qlveFSCQGAJOv1m/PTSukcEBtZ+I9M2wj5flS7jGICASQQSJPTly8gaLVIVbZvhKIbjMVlgqiTAiVJOnqWHvT/G4kOqMb3c3VtmzdY22fNbnwumVGBfVtDBBO4GpreA4a9zu7wcIMxLKQZIzTAIPm496bXE2kDTU+em3zmr4m4olkSkxbxziIuXCQMiwtq2jQctpBENup0kn5TQeG/WE2ibiZGX9mQuZSSukQoXMVO2xmhXbLduXGOVcq5iTO4ICqoGpY5fketS8MuSblzx6gklhtBEjz2APmRFJNcth4pLQ+wNoXMQyG2zW0LKxlVYlSV8EQW8Ubbe4hVcsWLVjEs1pXu2SEk3XLZrjXEEAGFGZQdtamxj5muI5HjXMcoObKLoZssSYzATvpp1pXxDiFy4rKRbb6RczHKGGlpzlca/WYyZ86THGUW3J/H+hFGxrb4bhW7nJhlti5be82VmJi3336sz1yoJGog9aiv9nbTNnzOqBB4EbL+szsrEEyckISBvr7VCmNcG3lABtAqvOczOSGk6g52HLQ0qs8YvG8fECmUWwkuRAfMGktmLZp1LSZPKhOM5O4sPFjDF27lp2QXHYA6MCwJU6qSs7wRI9aUYwd4ClzuwDMObaysnUhkUEx/U08xF1jLPu2pPKTuPKKW3kneqwtJX2Ef8Wwi47H4O/hMTbKWrdq3cPed3dU23dnIt3MrGQYETvXl+KfPce4wyhmZ42+JiYApvjsN5b/APcb7Gkly02aNSfnWqM+SJShxMzp9n8ays+inqvzrKImz23EY13JUALE+BRmzKrQxlgM2hBHhjWZNZaZhplGcgBsoLchoATopg7su9RcVNqzbKXsTbRGhiIQHwjwhEUSdeeu3OdBF7cYIjJ9IyE7sthwCTuSSSf63rKoSZdySD8RhmAJd1DbkFc52mAJAHoQd/OkPa1WTCuzrClFCqc0gscokA5VMa7VZ7Ny24F1XF1GHxWxIkGYEE5dzzmaQdrLSumGw6hgl/E21Oacz/bYhtQBKAbbbbUsY/XsZz+nQ+7McNNmxaQ5FZLalp1GZvhnUScy3B71Jj+GhTcZiy945OZWaYCkgaHyXTbfrVhwOGVSwRFVA2VQNAABOgAjR83zNQ8XtkgCQJGU+5En/wBJ+flS5I2mwwlToo78Pum0VNxpUK4Nt3JWAWBK7qxGWSdDMTVj4VxFCurEnLmLSPOSRMxodfEIG9Z9DciQgLA5lbVSVkfCwOmXMfI8vLPoKv4vCHJB5hswidx4/XfXekg5WPKn2E44g285IKxOby6yvlPKvOsTxnEurPZXwCYFySxAJEeHmI5nrVg40t63buostmRl8JgwRBLLBBjXWD96lvZTG23sojpDcyoJ5n4hEgT0mOdU5asVRoqWF49fZ8ocW2DMwUSJJgFSZ0IA09+tep8GxFy5bBLKwPWQesHT1pDxngVt7bPCkw0NE6wdQw9Kadk7veYK0zW5aGWRAkozICSNfqjWqJ3taFkqQdxLALdQqyAzz0ke9VLHcAa0xe2jsMpAAWTBKlgcupPh35a6VZUx6h+7cXLRmCWOgPKSCDyoq7ZUa6N5zr8zNK6ltATcSk2+MKTkINttBDAj01/nFQcQmIYTqgHLVngjX93NRnFOIYcXWV7bsygZjoRDCQYUgk+XkaUcEW211SLpyLJCiYDQwBE7COW3iqfD3Kpl6t24RROw/wC9CYhhBE6xqNJAjePn8qJS6GC67xqNtBz/ABoLiSAB2XVyAF8ySFA9CSKretEa3sRXMQs5SjXLjHNatgRoBAdjsogTr5xuTReHwR7trbkF7i5PCTlT4iMpI8RnXl8PnJMPC7YUNAGdVLOGIdx4ZGUDVYideQ6US+FtsFNt/Cp+qSdY+0Jyjzg7bigk/YZtFdxd3Mlq9Pj7w23KyMpYlLij/GVMHkQeVD8OwzNcOaCFHdrG0ZmY/ixFF8cw4tC7liHyXREkZw5BM85B/CmfAcCRbDtudT/Gue3SGWo2AY5Fto7LuQdPbel3CeGnKbgEz8PKSpEmI5+Kp+02a4+UKZ+FRvz6feI9qe4TNbtqmUMFUD7JEabHQk+1do62kL8U5iAmu8HT8YoB7RbTLtpuPw0o6zeJuMGVgJOjQY2yx6ifnRHcJ5T5aUVsR6K3irR2An/EN/xNJsVYbpBP2WBMdI/rarRddbdyDI2kmTvz1nSoeLYVHSCwk6qY10212j+dNF0wtaKX9Dby/wAwrKe/8MP21/yrW6rzJ8ECdsv7diPv/wABSQVlZVETfZ6j+iX9jiPvj/RTvj//AOR4Z/1H/wBCVusqD+9jx6Ljgf2h+9d/3BQfFPj/AMC/6nrKys+T7GUj9x1Y/Y4T/pn/AGqFT439U/0GsrK73Q3yD9pNx99fzFUix/bm/wCrd/8AarKygvcpHoeYj9nj/Vv9uiuwv9iT/H/uvWVlUj0JPoDvftG+8f8AUab8M/Ze7VusqWPtnS6PNuLf2i99/wDgtC9mv7Xa/wDM/wBJrKyrLph9kX19rv3R+Rrht1/8r80rKykQrCeDfEfuJ/uXaY4n9on3H/1JWVlURN9lY7W7e6f6zTvhn7JfQVlZSR+5lH9iK3iv7WPvN/uCjOIbj76/6TWVlB9hI0/aGpBv7/wNZWU8RWLOL7/L8zUGM/YL6H86ysoe43shFWVlZTAP/9k=" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
              <div className="col-lg-4 ">
              <div class="imgbox">
                <img className='imgbo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGsRyd4aQoivoXyz3wdtIyMZSmzZKC1zR40g&usqp=CAU" />
                <div className='imgtitle'>
                <h4 class="page-title-1 " style={{color:'white'}}>
                  Supriyo 
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
            </div>
        </div>
      </div>


    </>


  )
}

export default Home