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
            </div>
        </div>
      </div>


    </>


  )
}

export default Home