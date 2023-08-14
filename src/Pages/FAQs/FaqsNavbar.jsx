import React, {useState, useEffect} from 'react'
import AOS from 'aos';

const FaqsNavbar = ({title, content}) => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    
    <div className='faqs-section' >
        <div className="faqs" data-aos="fade-right">
            <h5>FAQ's</h5>
            <h2>Frequently Asked Questions</h2>
            <p>Brand Monitoring and Community
Management System</p>
<button className='demo'>Request a Demo</button>
        </div>

    </div>
   
    </>
  )
}

export default FaqsNavbar