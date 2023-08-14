import React, {useEffect} from 'react'
import listeningPng from './listening.png'
import anime from 'animejs'
import AOS from 'aos'

const SocialListening = () => {
   useEffect(() => {
    AOS.init({
        duration: 1000,
    })
   })
  return (
    <div className='social-listening-section row'>
        <div className="left-side col-12 col-md-6 col-lg-5" data-aos="fade-right">
            <div className="image">
                <img src={listeningPng} alt="" />
            </div>
        </div>
        <div className="right-side col-12 col-md-6 col-lg-5" data-aos="fade-left">
           <h2>3. Brand Monitoring Automated Competition through Social Listening</h2>
           <p>With the automated monitoring feature of branding monitoring, you can keep track of your social brand. Brand Equity enables automated social media monitoring with social listening that helps you to access customer insights about your brand and automated competition monitoring through brand analysis. You may use Social Listening to safeguard your brand’s reputation, boost client satisfaction, and reach new customers. You can also use brand tracking tools to track consumer insights later on.</p>
        </div>

    </div>
  )
}

export default SocialListening