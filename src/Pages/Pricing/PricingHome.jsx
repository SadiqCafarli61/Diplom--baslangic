import React, {useEffect} from 'react'
import AOS from 'aos';
const PricingHome = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  return (
    <div className='pricing-section'>
        <div className="pricing"  data-aos="fade-right">
            <h5>Pricing</h5>
            <h2>Try Brand Equity because you deserves the Best</h2>
            <p>BrandEquity.ai is your solution to engage with the audience and get the best value. With real time monitoring of your brand we integrate social media with customer care to provide real time response to the customer.</p>
        </div>

    </div>
  )
}

export default PricingHome