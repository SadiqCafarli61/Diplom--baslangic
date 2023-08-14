import React, {useEffect} from 'react'
import teamPng from "../About/team.png"
import AOS from 'aos'
const Team = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <div className='container'>
<div className="team-section row">
    <div className="left-side col-12 col-md-6 col-lg-6" data-aos="fade-left"> 
       <div className="organizations">
        <h2>BrandEquity as an
organization</h2>
<p>of young and entrepreneurial people focus to stay relevant for our client-base by providing them the most up-to-date solutions for their Social Media Monitoring needs. Equipped with an in-house team of software developers, our solution is an end-to-end internal value chain production which gives us the ability to evolve as per our customer requirements.</p>
       </div>
       <div className="organizations">
        <h2>Our team
               </h2>
<p>packs veterans from companies like Microsoft HQ, Salesforce HQ, VMware and Oracle along with eager apprentices from top I.T. and Business Schools; all coming together to work towards the mission of adding value to the marriage of marketing and software development.</p>
       </div>
    </div>
    
    <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
        <div className="image">
            <img src={teamPng} alt="" />
        </div>
    </div>
</div>
    </div>
  )
}

export default Team