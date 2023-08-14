import React, {useEffect} from 'react'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'

const Monitoring = () => {
    const navigate = useNavigate()
    const directPricing = () => {
navigate("/pricing")
    }
    const directForm = () => {
       navigate("/form")
    }
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <div className='monitoring-section'>
<div className="monitoring"  data-aos="fade-up">
    <h5>Brand Monitoring</h5>
    <h2>Social Media
Brand Monitoring</h2>
<p>Keep up with current trends and track performance based on sentiment analysis,
and other key factors of monitoring brand analysis on a single dashboard, with our brand monitoring software.</p>
<div className="btn-section" onClick={directForm}>
    <Button writeIn= "Request a demo"/>
    <button className='pricing' onClick={directPricing}>plan & pricing</button>
</div>
</div>

        </div>
  )
}

export default Monitoring