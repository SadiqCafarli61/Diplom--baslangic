import React, {useRef} from 'react'
import badgePng from "../assets/home/Footer/Badge.png"
import './Footer.css'
import { Link } from 'react-router-dom'
import brandLogo from "../assets/home/logo.svg"
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {AiOutlineArrowUp} from 'react-icons/ai'
import ScrollToTop from 'react-scroll-to-top'


const Footer = () => {
  const showFb = () => {
    window.location.href = ("https://www.facebook.com/sadiq.ceferli.58726")
  }
  const showYt = () => {
    window.location.href = ("https://www.youtube.com/channel/UCo_n3UT86OCAP0kCC5FUp_g")
  }
  

  return (
    <>
   
    <div className='footer-section'>
      <ScrollToTop  style={{color: "red"}}/>
   <div className="helping">
    <h5>Helping you move forward <span>digitally</span></h5>
    <div className="image">
        <img src={badgePng} alt="" />
    </div>
   </div>
   <div className="last-section row">
    <div className=" text-white last col-12 col-md-6 col-lg-3   ">
    <h5>Contact</h5>
 <div className="address">


<p>Email:<span> marketing@brandequity.ai</span></p>
       
</div>
<div className="address">


<p>Call:<span>+1 ‪(510) 5564147‬</span></p>
</div>

<div className="address">


<p>Location:<span>10100 Robert Watkins Way,<br />Elk Grove, CA 95757</span></p>
</div>

  
    </div>
    <div className=" text-white last col-12 col-md-6 col-lg-2   ">
    <h5>Support</h5>
    <div className="links">
    <a href="">FAQ's</a>
    <a href="">Privacy Policy</a>
    <a href="">Terms and Conditions</a>
    </div>
  
    </div>
    <div className=" text-white last col-12 col-md-6 col-lg-2   ">
    <h5>Features</h5>
    <div className="links">
    <a href="">Brand Monitoring</a>
    <a href="">Customer Profiling</a>
    <a href="">Deep Analytics</a>
    <a href="">Real-Time Messaging</a>
    </div>
  
    </div>
    <div className=" text-white last col-12 col-md-6 col-lg-2   ">
    <h5>Company</h5>
    <div className="links">
    <a href="">About Brand Equity</a>
    <a href="">Pricing</a>
    <a href="">Blogs</a>
    </div>
  
    </div>

    </div>
    <div className="brands-section row">
      <div className="brands col-12 col-md-9">
      <div className="logo">
        <img src={brandLogo} alt="" />
      </div>
      <div className="copyright">
        <span className='text-white'>©copyright 2023 Brand Equity. A Product of VinnCorp.</span>
      </div>
      <div className="icons">
 <BsFacebook className='icon' onClick={showFb}/>
 
 <AiOutlineTwitter className='icon' />
 <BiLogoLinkedinSquare className='icon' />
 <BsInstagram  className='icon'/>
 <BsYoutube  className='icon' onClick={showYt}/>

      </div>
      </div>
     
    </div>
  
   </div>
  
   </>
  )
}

export default Footer