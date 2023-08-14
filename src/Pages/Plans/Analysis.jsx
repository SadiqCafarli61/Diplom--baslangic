import React, {useEffect} from 'react'
import intentPng from './intent.png'
import AOS from 'aos'

const Analysis = () => {
  useEffect(() => {
AOS.init({
  duration: 1000
})
  }, [])
  return (
    
        <div className="analysis-section row">
            <div className="left-side col-12 col-md-6 col-lg-5"  data-aos="fade-right">
              <h2>2. Intent Analysis based on Social Media Management</h2>
              <p>Intent Analysis is one of the amazing features to monitor your brand provided by BrandEquity.ai that determines the audience insights and customer requirements. It uses Artificial Intelligence to determine the sensitivity of comment, whether a text or comment is a desire, a wish, or a question. Brand Equity provides you with Customised Intent Analysis, using the intent-to-treat analysis method so that you can always keep track of the desired intent of the customers. This method involves calculating the social media statistics and social media usage statistics to analyze the prognostic results.</p>
            </div>
            <div className="right-side col-12 col-md-6 col-lg-5"  data-aos="fade-left">
             <div className="image">
                <img src={intentPng} alt="" />
             </div>
            </div>
        </div>

    
  )
}

export default Analysis