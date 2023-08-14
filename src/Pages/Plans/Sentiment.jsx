import React, {useEffect} from 'react'
import sentimentImg from './sentiment.png'
import AOS from 'aos'
import Aos from 'aos'

const Sentiment = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <div className='sentiment-section row'>
 <div className="left-side col-12 col-md-6 col-lg-5 " data-aos="fade-right">
<div className="image">
    <img src={sentimentImg} alt="" />
</div>
 </div>
 <div className="right-side col-12 col-md-6 col-lg-5" data-aos="fade-left">
 <h2>1. Sentiment Analysis of Your Brand using Artificial Intelligence</h2>
 <p>With BrandEquity.ai, you may know positive, negative, and neutral mentions and comments about your social brand. BrandEquity.ai provides you with a downright Sentiment Analysis feature that tells you how your customers perceive the quality of your brand monitoring services. Brand Sentiment analysis can also filter down the social sentiment individually and determine what problems your social customer is facing or what things they are appreciative of by analyzing the social media statistics provided. You may boost your reputation by using the Sentiment Analysis function to detect and address negative comments, staying updated with customer viewpoints regarding the product, and providing them with appropriate answers accordingly, all of which can enhance customer satisfaction.</p>
 </div>
         
    </div>
  )
}

export default Sentiment