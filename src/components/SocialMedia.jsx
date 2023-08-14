import React, {useEffect, useState, useReducer, useRef} from 'react'
import groupPng from '../assets/home/group.png'
import Button from './Button'
import AOS from 'aos'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'


const Socialmedia = () => {
  const navigate = useNavigate()
  const directHome = () => {
    navigate('/form')
  }
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, []);
    
   
    
  return (
    <>
    <div className='social-media-section row'  >
    <div className="left-side col-12 col-md-6 col-lg-4" data-aos="fade-left">
     <h2>The best Social Media Management Tool in the US</h2>
     <p>It’s a top-notch social media marketing management
for small businesses, with extensive brand monitoring
and management system.</p>
<button className='btn-color' onClick={directHome}>Request a demo</button>
    </div>
    <div className="right-side col-12 col-md-6 col-lg-4 " data-aos="fade-left">
      <div className="image">
        <img src={groupPng} alt="" />
      </div>
    </div>

</div>
</>
  )
}

export default Socialmedia