import React from 'react'

const Offer = ({image, title}) => {
  return (
  
      <div className="card mx-2" >
        <div className="image">

        
  <img src={image}className="card-img-top pt-4 px-5  " />
  </div>
  <div className="card-body">
    <h5 className="card-title ">{title}</h5>
  
    
  </div>

    </div>
  )
}

export default Offer