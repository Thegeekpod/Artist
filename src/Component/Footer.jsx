import React from 'react'

const Footer = () => {
  return (
<>
   {/* Copyright */}
   <footer className="page_copyright copyright-type-1">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-lg-4 text-sm-center text-left">
                <p className="copyright-text">
                  <a href="#"> © 2023 All right reserved </a>
                </p>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 text-sm-center text-center">
                <figure className="footer-logo">
                  <a href="/">
                    <img src="images/img_footer-logo.jpg" alt="" />
                  </a>
                </figure>
              </div>
              <div className="col-sm-4 col-md-4 col-lg-4 text-sm-center text-right">
                <p className="template-author">
                  created With
                  <i className="rt-icon2-heart2" /> By
                  <a href="#"> Akash</a>
                </p>
              </div>
            </div>
          </div>
        </footer>
</>
  )
}

export default Footer