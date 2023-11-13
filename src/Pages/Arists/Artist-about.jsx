import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Artist_about = () => {
  let { artist } = useParams();
  let { seq } = useParams();
  return (
    <>
  {/* Breadcrumbs*/}
  <section className="bg-header breadcrumbs-custom">
    <div className="container">
      <div className="text-center">
      
      </div>
    </div>
  </section>
  <section className="text-center text-md-start section-lg bg-default">
    <div className="container">
      <div className="row row-55">
        <div className="col-md-4 text-center">
          <div className="inset-xl-right-15">
            <div className="img-wrap-1">
              <img
                src="images/artist_about-1-344x344.jpg"
                alt=""
                width={344}
                height={344}
              />
            </div>
            <a
              className="btn btn-primary btn-sm btn-fullwidth offset-top-34"
              href="#"
            >
              Get in touch
            </a>
            <ul className="list-inline offset-top-34 pt-2" >
              <li>
                <a
                  className="icon icon-circle icon-xs icon-darkener fa-facebook"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-circle icon-xs icon-darkener fa-twitter"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-circle icon-xs icon-darkener fa-google-plus"
                  href="#"
                />
              </li>
              <li>
                <a
                  className="icon icon-circle icon-xs icon-darkener fa-instagram"
                  href="#"
                />
              </li>
            </ul>
            <dl className="dl-horizontal-mod-3 offset-top-34">
              <dt>
                <span className="icon icon-sm-1 text-dark mdi mdi-cellphone-android text-middle" />
              </dt>
              <dd>
                <a
                  className="h4 text-regular text-middle text-lightener"
                  href="tel:#"
                >
                  1-800-1234-567
                </a>
              </dd>
            </dl>
            <dl className="dl-horizontal-mod-3 offset-top-22">
              <dt>
                <span className="icon icon-sm-1 text-dark mdi mdi-email-open text-middle" />
              </dt>
              <dd>
                <a
                  className="h4 text-regular text-middle text-lightener"
                  href="mailto:#"
                >
                  saramorgan@demolink.org
                </a>
              </dd>
            </dl>
          </div>
        </div>
        <div className="col-md-8 offset-sm-top--10">
          <h1>{artist}</h1>
          <p className="fst-italic h3 font-size-22 font-secondary offset-top-17 text-regular">
            Tattoo Master
          </p>
          <p className="offset-top-25 letter-spacing--30">
            With a passion for all the arts Sara is a 25 year old tattoo artist.
            She began a career as a chef, attending college and acquiring a 4
            year culinary degree. She has traveled the country to further her
            knowledge of both culinary and tattooing. Sara is also a skilled
            musician who enjoys guitar most. She loves and excels in any style
            of tattooing.
          </p>
          <blockquote className="quote-1 offset-top-20 text-start">
            <p>
              <q>
                I have taken a lot of inspiration from my love of sacred
                geometry and its importance to form and reality. Thus my biggest
                influence artistically is Da Vinci and his studies on the
                science of art and the art of science. He is really one of the
                best artists.
              </q>
            </p>
            <p>
              <cite />
            </p>
          </blockquote>
          {/* PhotoSwipe*/}
          <div
            className="row row-30 gallery-wrap offset-top-66"
            data-lightgallery="group"
          >
            <div className="col-sm-6 col-md-3">
              <a
                className="img-wrap-mod-2 img-wrap-mod-2-custom"
                data-lightgallery="item"
                href="images/certifikate-1.jpg"
                data-author="Michael Hull"
              >
                <span className="icon icon-xs fa-search-plus icon-white" />
                <img
                  className="img-responsive"
                  width={105}
                  height={150}
                  src="images/sertificate-210x289.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-3">
              <a
                className="img-wrap-mod-2 img-wrap-mod-2-custom"
                data-lightgallery="item"
                href="images/certifikate-1.jpg"
              >
                <span className="icon icon-xs fa-search-plus icon-white" />
                <img
                  className="img-responsive"
                  width={105}
                  height={150}
                  src="images/sertificate-210x289.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-3">
              <a
                className="img-wrap-mod-2 img-wrap-mod-2-custom"
                data-lightgallery="item"
                href="images/certifikate-1.jpg"
              >
                <span className="icon icon-xs fa-search-plus icon-white" />
                <img
                  className="img-responsive"
                  width={105}
                  height={150}
                  src="images/sertificate-210x289.jpg"
                  alt=""
                />
              </a>
            </div>
            <div className="col-sm-6 col-md-3">
              <a
                className="img-wrap-mod-2 img-wrap-mod-2-custom"
                data-lightgallery="item"
                href="images/certifikate-1.jpg"
              >
                <span className="icon icon-xs fa-search-plus icon-white" />
                <img
                  className="img-responsive"
                  width={105}
                  height={150}
                  src="images/sertificate-210x289.jpg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="text-center text-md-start section-lg bg-default">
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
  </section>
</>

  )
}

export default Artist_about