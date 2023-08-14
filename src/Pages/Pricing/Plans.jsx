import React from 'react'
import earPhoneImg from '../Pricing/earphone.jpg'
import {MdPhoneIphone} from 'react-icons/md'
import {SlEnvolopeLetter} from 'react-icons/sl'

const Plans = () => {
  return (
    <div className='plan-section'>
<div className="plan">
    <h2  className='text-white' 
       
   >Anything You  need to know about any of our plans?</h2>
    <div className="plans">
    <div className="plan-bottom">
        <h6>Discuss With Our Experts And</h6>
        <h6>Choose The Best Solution For Your Business</h6>
    </div>
    <div className="plan-bottom-center">
        <MdPhoneIphone  className='icon'/>
        <span>
1 ‪(510) 556-4147‬</span>
    </div>
    <div className="plan-bottom-center">
        <SlEnvolopeLetter  className='icon'/>
        <span>
1 ‪(510) 556-4147‬</span>
    </div>
    </div>
   
</div>
    </div>
  )
}

export default Plans