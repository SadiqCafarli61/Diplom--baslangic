import React from 'react'
import group1png from '../Pricing/group1.png'
import group2png from '../Pricing/group2.png'
import group3png from '../Pricing/group3.png'
import group4png from '../Pricing/group4.png'
import group5png from '../Pricing/group5.png'
import group6png from '../Pricing/group6.png'

const Custom = () => {
  return (
    <div className='custom-section'>
        <div className="custom">
            <h2>Join our 30,000 happy customers</h2>
        </div>
        <div className="project-section row">
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group1png} alt="" />
                  </div>
            </div>
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group2png} alt="" />
                  </div>
            </div>
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group3png} alt="" />
                  </div>
            </div>
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group4png} alt="" />
                  </div>
            </div>
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group5png} alt="" />
                  </div>
            </div>
            <div className="project col-12 col-md-6 col-lg-2">
                  <div className="image">
                    <img src={group6png} alt="" />
                  </div>
            </div>
        </div>

    </div>
  )
}

export default Custom