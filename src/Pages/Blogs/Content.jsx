import React, {useEffect} from 'react'
import  {AiOutlineArrowRight } from 'react-icons/ai'

const Content = ({contentImg, contentText, contentTitle,contentLink}) => {
  return (
    <>
   
    <div className="card mt-5">
    <img src={contentImg} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{ contentText}</h5>
      <p className="card-text">{contentTitle}</p>
      <a href="#" className="">{ contentLink}</a>
    </div>
  </div>
  <button className='btn btn-primary'>Load More</button>

  </>
  )
}

export default Content