import React from 'react'
import { Link } from 'react-router-dom'

const ArtistNotfound = () => {
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
              <li className="active">Artist Not Found</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 text-center">
            <h3 className="breadcrumbs-title">Artist Not Found</h3>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4" />
        </div>
      </div>
    </div>
    {/* Artist Not Found */}
    <div className="ds section_padding_top_130 section_padding_bottom_140">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-Artist Not Found text-center">
              <p className="page-404__title">Artist Not Found</p>
              <p className="page-404__text text-center">Oops, artist not found!</p>
              {/* <p className="page-404__info">You can search what interested:</p>
              <div className="page-404__search">
                <form
                  method="get"
                  className="searchform form-inline text-center"
                  action="https://html.modernwebtemplates.com/"
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="page_search"
                      defaultValue=""
                      name="search"
                      className="form-control"
                      placeholder="E-mail address"
                    />
                    <button type="submit" className="page-404__search-button">
                      Search
                    </button>
                  </div>
                </form>
              </div> */}
              {/* <p className="page-404__text-2">or</p> */}
              <button className="theme-button theme-button--Artist Not Found" type="button" onClick={()=>window.open('/')}>
                Go home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default ArtistNotfound