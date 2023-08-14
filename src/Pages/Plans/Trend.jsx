import React from 'react'
import trendImg from '../Plans/trend.png'
import { useNavigate } from 'react-router-dom'
import { Button } from 'bootstrap'
import { ButtonGroup } from 'react-bootstrap'

const Trend = () => {
    const navigate = useNavigate()
    const directForm = () => {
        navigate("/form")
    }
    const directPricing  = () => {
navigate("/pricing")
    }
  return (
    <div className='trend-section'>
        <div className="trend">
            <h2>Stay Up-to-date about industry trends, Sentiment Analysis,
Audience Intent, and competitor's activities with Automated competition monitoring
and social media monitoring through Brand Equity social listening feature</h2>
<div className="image">
    <img src={trendImg} alt="" />
</div>
<div className="buttons-section">
   <button className='btn btn-color' onClick={directForm}>Request for demo</button>
<button className='btn btn-color bordering' onClick={directPricing}>plan and pricing</button>
</div>
        </div>

    </div>
  )
}

export default Trend