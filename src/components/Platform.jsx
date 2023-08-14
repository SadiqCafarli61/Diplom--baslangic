import React, { useRef, useEffect } from 'react'
import platform1 from '../assets/home/Platform/p1.png'
import platform2 from '../assets/home/Platform/p2.png'
import platform3 from '../assets/home/Platform/p3.png'
import platform4 from '../assets/home/Platform/p4.png'
import platform5 from '../assets/home/Platform/p5.png'
import platform6 from '../assets/home/Platform/p6.png'
import AOS from 'aos'
import './Platform.css'

const Platform = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, []);
const imageRef = useRef(null)
  const changeImg = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform2)
  }
  const setImageOne = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform1)
  }
  const changeImgTwo = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform3)
  }
  const changeImgFour = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform4)
  }
  const changeImgFive = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform5)
  }
  const changeImgSix = () => {
    event.preventDefault()
    imageRef.current.setAttribute('src', platform6)
  }


  return (
    <>
   
    <div className='platform-section row'>
        <div className="left-side col-12 col-md-6 col-lg-4 "  data-aos="fade-up-right">
 <h2>The Top Social Media Management Platform For Agencies</h2>
 <div className="monitoring">
    <a href=""  onClick={setImageOne}>Brand Monitoring</a>
    <a href=""  onClick={changeImg}>Customer Profiling</a>
    <a href="" onClick={changeImgTwo}>Deep Analytics</a>
    <a href="" onClick={changeImgFour} >Real-time Messaging</a>
    <a href="" onClick={changeImgFive} >Social Publishing</a>
    <a href=""  onClick={changeImgSix}>Mobile App</a>
 </div>
        </div>
        <div className="right-side col-12 col-md-6 col-lg-5"  data-aos="fade-up-right">
          <div className="image" >
            <img src={platform1} ref={imageRef} alt="" />
          </div>
        </div>

    </div>
    </>
  )
}

export default Platform