import React, {useEffect, useState} from 'react'
import Content from './Content'
import axios from 'axios'
import { info } from 'sass'
import {AiOutlineSearch} from 'react-icons/ai'
import { Button } from 'bootstrap'
import AOS from 'aos'
const Contents = () => {
  const [isContent, setIsContent] = useState(false)

  useEffect(() => {
    axios.get("src/Pages/Blogs/Contents.json")
    .then(info => setIsContent(info.data))
  }, [])
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])



  return (
    <div className="container">

   
    <div className='content-section'>
      <div className="row">
      <div className="left-side col-12 col-md-6 col-lg-6" data-aos="fade-up">
      { isContent && isContent.map(oneContent => (
  <Content contentImg={oneContent.contentImg} contentText={oneContent.contentHeading}
        contentTitle={oneContent.contentText} contentLink={oneContent.contentLink}
  />
 
))}

      </div>
      <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-up">
        <div className="right-side-content">
           <input type="search" 
              placeholder='Search'
             
              
           />
           <AiOutlineSearch  
            className='searchIcon'
           />
           <div className=" pt-3 categories">
            <h5 className='font-bold'>Categories</h5>
            <ul>
              <li>All Topics</li>
              <li>Social Media</li>
              <li>Marketing</li>
              <li>Brand Equity</li>
              <li>Industries</li>
              <li>Life Style</li>
              <li>Digital Marketing</li>
            </ul>
           </div>
           <div className=" pt-3 categories">
            <h5 className='font-bold'>Recent News</h5>
           
           </div>
          
        </div>
      </div>
      </div>
      

    </div>
    </div>
   
  )
}

export default Contents