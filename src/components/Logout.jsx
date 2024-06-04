import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Logout = () => { 
    const {logOut}= useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogout =()=>{
     logOut().then(() => {
        // Sign-out successful.
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, { replace: true });
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout