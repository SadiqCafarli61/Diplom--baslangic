import React from 'react'
import ObjectPng from "../About/object.png"

const Object = () => {
  return (
    <div className='object-section row'>
        <div className="left-side col-12 col-md-6 col-lg-5">
          <div className="image">
            <img src={ObjectPng} alt="" />
          </div>
        </div>
        <div className="right-side col-12 col-md-6 col-lg-5">
            <h2>Our Objective</h2>
            <p>is to help companies to channel through the right kind of audience conversation and help them build meaningful connections with them on social media platforms. </p>
        </div>

    </div>
  )
}

export default Object