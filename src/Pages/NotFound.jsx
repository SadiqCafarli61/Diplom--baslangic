import React from 'react'
import "../Pages/NotFound.css"
import notfoundImg from "../assets/home/404-error.png"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  const takeHome = () => {
    navigate('/')
  }
  return (
<div className='error-section'>
 <div className="error">
  <img src={notfoundImg} alt="" />
  <h2>Sorry! Page Not Found!</h2>
  <p>Oops! The page which you are looking for does not exist. Please return to the homepage.</p>
  <button className='btn btn-color ' onClick={takeHome} >Take me home</button>
 </div>
</div>
  )
}

export default NotFound