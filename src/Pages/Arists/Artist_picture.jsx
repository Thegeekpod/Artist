import React from 'react'
import { useParams } from 'react-router-dom'

const Artist_picture = () => {
    let {artist} = useParams();
    let {seq} = useParams();
    const cdate = new Date();
    const formattedDate = `${cdate.getFullYear()}-${(cdate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${cdate.getDate().toString().padStart(2, '0')}`;


      const day = cdate.getDate().toString().padStart(2, '0');
const month = (cdate.getMonth() + 1).toString().padStart(2, '0');
const year = cdate.getFullYear().toString().substr(-2);

const formattedDateforfilr = `${day}${month}${year}`;

  return (
    <>
    {/* Breadcrumbs*/}
    <section className="bg-header breadcrumbs-custom">
      <div className="container">
        <h1 className="breadcrumbs-custom-title text-center">Picture Name</h1>
       
      </div>
    </section>
   

    <section className="text-center text-md-start section-lg bg-default">

    
    <div className="container imgbsk">
  <div className="row">
    <div className="col-sm-6">
     <img src='/images/black-and-grey-octopus-tattoo-7-400x400.jpg' style={{widows:"100%"}}/>
    </div>
    <div className="col-sm-6 align-middle" >
   <h3>Artist Name : {artist}</h3>
   <h3>Name : CaymusTattoo</h3>
   <h3>date : {formattedDate} </h3>
   <h3>Seq : {seq} </h3>
   <h3>Zip Code : 123456</h3>
   <h3>Counter : abc</h3>
   <h3>Subject : xyz</h3>
   <h3>Style : xyz</h3>
   <h3>Placement : xyz</h3>
   <h3>Country : United States of America</h3>
   <h3>File Name : {artist}_{formattedDateforfilr}_{seq}</h3>

<div className='row d-flex justify-content-between'>
    <div className='col-6'>
    <i class="fa-solid fa-thumbs-up" style={{fontSize:'30px'}}> <span>5</span></i>
    </div>
    <div className='col-6'>
    <i class="fa-solid fa-comment" style={{fontSize:'30px'}} > 10 </i>
    </div>

</div>

    </div>

  </div>
  
</div>


  </section>
  </>
  )
}

export default Artist_picture