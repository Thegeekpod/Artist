import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { isAuthenticated, useUser } from './UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { apibaseUrl } from '../../Component/Apibaseurl';
import Swal from 'sweetalert2';
import imageCompression from 'browser-image-compression';
const Allcomment = () => {

  const [commentdata, setCommentdata] = useState([]);
  const [artwork, setsetArtwork] = useState([]);

  const { token, user } = useUser();



  const navigate = useNavigate();

  const apiUrl = `${apibaseUrl}/artist`;
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
      'Accept': 'application/json',
    },
  };

  useEffect(() => {


    // Check if the user is authenticated when the component mounts
    if (!isAuthenticated()) {
      navigate('/login');
      return;
    }


    // Make the API call using Axios
    axios.get(apiUrl, axiosConfig)
      .then(response => {

        setCommentdata(response.data.data.artworks);
        console.Console(response.data.data)

      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

  }, [token, isAuthenticated, navigate]);
  const delecomment = async (id) => {
    // Show a confirmation dialog before deletion
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this comment.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`${apibaseUrl}/delete-comment/${id}`, axiosConfig);

          if (response.status === 200) {
            // Assuming the comment was deleted successfully
            console.log('Delete comment successful');

            // Update the comment data state
            setCommentdata(prevCommentData => {
              const updatedData = prevCommentData.map(item => ({
                ...item,
                comments: item.comments.filter(comment => comment.id !== id)
              }));
              return updatedData;
            });

            // Show a success message
            Swal.fire('Deleted!', 'Your comment has been deleted.', 'success');
          } else {
            console.error('Failed to delete comment');
            // Show an error message
            Swal.fire('Error!', 'Failed to delete the comment.', 'error');
          }
        } catch (error) {
          console.error('Error deleting comment:', error);
          // Show an error message
          Swal.fire('Error!', 'An error occurred while deleting the comment.', 'error');
        }
      }
    });
  };


  return (<>
  
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
            <li className="active">All Comments</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4 text-center">
          <h3 className="breadcrumbs-title">All Comments</h3>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-4" />
      </div>
    </div>
  </div>
    <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
      <div className="container">
        <section className="bg-header breadcrumbs-custom" >

          {commentdata && commentdata.length > 0 ? (
            <>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className="comments-container">
                    <table style={{ width: '100%' }}>
                      <colgroup>
                        <col style={{ width: '20%' }} /> {/* Adjust the widths as needed */}
                        <col style={{ width: '40%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '20%' }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Comment</th>
                          <th>User Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>

                      {commentdata.map((item) => (



                        <tbody key={item.id} >
                          {item.comments && item.comments.length > 0 ? (
                            item.comments.map((comment) => (
                              <tr key={comment.id}>
                                <td>
                                  <p className='commp'>{item.title}</p>
                                  <img style={{ width: '80px' }} src={`https://sweetdevelopers.com/artist/storage/ArtworkImage/${item.image}`} alt={item.title} />

                                </td>
                                <td><p className='comcom'>{comment.comment}</p></td>
                                <td><p className='comcom'>{comment.user_id}</p></td>
                                <td>
                                  <button className='delete' onClick={() => delecomment(comment.id)}>Delete</button>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <></>
                          )}
                        </tbody>



                      ))}
                    </table>
                  </div>

                </div>
              </div>
            </>
          ) : (
            'No comments'
          )}




        </section>

      </div>
      <style jsx>

      </style>
    </div>
    </>
  )
}

export default Allcomment