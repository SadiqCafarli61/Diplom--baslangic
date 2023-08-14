import React from 'react'
import aboutPng from "../assets/home/Management/about.png"
import Grupa1png from "../assets/home/Management/Group1.png"
import Grupa2png from "../assets/home/Management/Group2.png"
const Mnagement = () => {
  return (
    <div className='management-section row'>
      <div className="left-side col-12 col-md-6 col-lg-6">
        <div className="image">
          <img src={aboutPng} alt="" />
        </div>
      </div>
      <div className="right-side col-12 col-md-6 col-lg-6">
        <h5>About Brand Equity</h5>
        <h2>Social Media Reputation
          Management Tool</h2>
        <p className='brand'>BrandEquity.ai is the top social media management tool, which assists dedicated customers in making accurate business decisions, keeping the business model in mind because social media management strategy comes when you have correctly analyzed data. Our proprietary tool also aids you by integrating your offline customer care with an online management system so you can manage responses in real-time.</p>
        <div className="group-sections">
            <div className="group-section">
             
              <div className="text">
              <img src={Grupa1png} alt="" />
                <p>The core challenges include real-time customer interaction, process simplification via tools & technology, consolidated optics on all social media assets, optimization of multiple channels leading to an omnichannel approach.</p>
  </div>
            </div>
            <div className="group-section">
              
              <div className="text metin">
              <img src={Grupa2png} alt="" />
             
                <p>The core challenges include real-time customer interaction, process simplification via tools & technology, consolidated optics on all social media assets, optimization of multiple channels leading to an omnichannel approach.</p>
               
              </div>
            </div>
        </div>
      </div>

    </div>
  )
}

export default Mnagement