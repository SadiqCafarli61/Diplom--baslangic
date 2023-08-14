import React from 'react'
import panelImg from './panel.png'

const Panel = () => {
  return (
    <div className='panel-section row'>
        <div className="left-side col-12 col-md-6 col-lg-5">
           <h2>4. Monitor Brand with Search Enabled Panel</h2>
           <p>Brand Equity Offers Search Enabled Panel that can discover the hidden data, keywords, <a>customer insights,</a>and deep customer analytics. It allows you to search through every feature with ease, such as social listening, <a > social media analytics</a>tool, customer sentiment analysis tools, etc. This system saves you a lot of inconvenience and time. With direct searching, you will receive an organized result as a consequence of your search, which will guide you in making informed judgments about social media metrics, brand analysis, sentiment analysis, social media data analysis, and much more.</p>
        </div>
        <div className="right-side col-12 col-md-6 col-lg-5">
          <div className="image">
            <img src={panelImg} alt="" />
          </div>
        </div>

    </div>
  )
}

export default Panel