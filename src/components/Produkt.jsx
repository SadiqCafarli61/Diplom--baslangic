import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Produkt = ({produktAdi, produktLinki}) => {
  return (
   

    <div className="card text-white mt-5 col-12 col-md-6 col-lg-2"  data-aos="fade-up">
  
    <div className="card-body">
      <h5 className="card-title">{produktAdi}</h5>
      
      <AiOutlineArrowRight  className='rightArrow'/> <Link to="/Plan" className="more">{produktLinki} </Link> 
    </div>
  </div>

  )
}

export default Produkt