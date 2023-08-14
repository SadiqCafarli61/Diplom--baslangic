import React, {useRef, useEffect} from 'react'
import oceanImg from '../assets/water.png'
import boatImg from '../assets/boat.png'
import cloudImg from '../assets/cloud.png'

const Loader = () => {
  const loading = useRef()

useEffect(() => {
 setTimeout(() => {
loading.current.classList.add('stop')
 }, 3)
})

  return (
    <div className='loader' ref={loading}>
      <img src={cloudImg}  className='cloud'  />
<div className="ocean">
  <img src={oceanImg} alt="" className='water' />
 

 
  <div className="boat">
    <img src={boatImg} alt="" />
  </div>
</div>

    </div>
  )
}

export default Loader