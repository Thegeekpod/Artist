import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { isAuthenticated, useUser } from './UserContext';
import { useLocation, useNavigate } from 'react-router-dom';
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
    

    try {
      const response = await axios.delete(`${apibaseUrl}/delete-comment/${id}`, axiosConfig);

      if (response.status === 200) {
        // Assuming the comment was added successfully
        console.log('delete comment sucess full:');

        const updatedData = commentdata.filter(comment => comment.id !== id);
      setCommentdata(updatedData);

      } else {
        console.error('Failed to upload comment');
      }
    } catch (error) {
      console.error('Error uploading comment:', error);
    }
  };
 
  return (
    <div className="ds section_padding_top_90 section_padding_bottom_50 dec-t-1">
      <div className="container">
        <section className="bg-header breadcrumbs-custom" >
        
        {commentdata && commentdata.length > 0 ? (
  <>
    {commentdata.map((item) => (
      <div key={item.id} className='comdiv'>
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
                <tbody>
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
                    <tr>
                      <td colSpan="4">No nested comments</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
) : (
  'No comments'
)}




        </section>

      </div>
      <style jsx>
       
      </style>
    </div>
  )
}

export default Allcomment