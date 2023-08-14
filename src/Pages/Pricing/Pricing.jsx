import React from 'react'
import PricingHome from './PricingHome'
import './Pricing.css'
import UserCustom from './UserCustom'
import Plans from './Plans'
import Custom from './Custom'

const Pricing = () => {
  return (
    <div>
<PricingHome />
<UserCustom />
<Plans />
<Custom />
    </div>
  )
}

export default Pricing