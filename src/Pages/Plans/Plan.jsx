import React from 'react'
import "../Plans/Plans.css"
import Monitoring from './Monitoring'
import BrandHealth from './BrandHealth'
import Sentiment from './Sentiment'
import Analysis from './Analysis'
import SocialListening from './SocialListening'
import Panel from './Panel'
import Offers from './Offers'
import Features from './Features'
import Trend from './Trend'

const Plan = () => {
  return (
    <div>
        <Monitoring />
        <BrandHealth />
        <Sentiment />
        <Analysis />
        <SocialListening />
        <Panel />
        <Offers />
        <Features />
        <Trend />
    </div>
  )
}

export default Plan