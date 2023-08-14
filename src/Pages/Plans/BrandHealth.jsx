import React, {useEffect} from 'react'
import brandHealthPng from './brand-health.png'
import AOS from 'aos'

const BrandHealth = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <div className='container'>
          <div className="health-section row">
            <div className="left-side col-12 col-md-6 col-lg-6" data-aos="fade-right">
             <h2>Monitoring Social Media Brand Health</h2>
             <div className="word">
                <span>When it comes to maintaining long-term social media brand performance, monitoring social health is considered essential. You can monitor brands online and examine current events by creating customized streams on trending topics linked to your social brand and social profile.</span>
             </div>
             <div className="word">
               <a>BrandEquity.ai </a>
               <span>has all the capabilities you’ll need to track and measure your brand’s social health. All operations, including Social media analysis of your brand, Intent analysis, Automated monitoring, Automated competition monitoring, and search enabled monitoring, can be easily managed and monitored by our brand monitoring services. Paned on a functional and user-friendly dashboard.</span>
             </div>
            </div>
            <div className="right-side col-12 col-md-6 col-lg-6" data-aos="fade-left">
            <div className="image">
                <img src={brandHealthPng} alt="" />
            </div>
            </div>
          </div>
    </div>
  )
}

export default BrandHealth