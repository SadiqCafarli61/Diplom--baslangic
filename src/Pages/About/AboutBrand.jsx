import React, {useEffect} from 'react'
import aboutBrandPng from "../About/aboutBrand.png"
import AOS from 'aos'

const AboutBrand = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <div className='container'>
        <div className="about-brand-section row">
            <div className="left-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
              <h2>About Brand Equity</h2>
              <p>BrandEquity realizes that modern-day marketing is evolving rapidly. With increased marketing exposure and the ability of consumers to voice their opinion on social media, there is too much noise that needs to be filtered on both ends.</p>
              <p className='blue'>This is where BrandEquity comes in – a bridge between marketers and consumers.</p>
            </div>
            <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
             <div className="image">
                <img src={aboutBrandPng} alt="" />
             </div>
            </div>
        </div>

    </div>
  )
}

export default AboutBrand