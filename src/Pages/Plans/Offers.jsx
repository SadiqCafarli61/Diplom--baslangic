import React, {useEffect, useState} from 'react'
import Offer from './Offer'
import axios from 'axios'
import AOS from 'aos'

const Offers = () => {
    const [isOffer, setIsOffer] = useState(false)

    useEffect(() => {
      axios.get("src/Pages/Plans/Offers.json")
      .then(data => setIsOffer(data.data))
      .catch((error)=> console.log('Error', error));
    })
    useEffect(() => {
      AOS.init({
        duration: 1000
      })
    }, [])
      

    return (
      <div className='offer-section'>
            <div className="offer">
              <h2>More to offer from Brand Equity</h2>
            </div>
            <div className="carts-images   row " data-aos="zoom-in-up">
              <div className="carts ">
                  
              {isOffer && isOffer.map(oneOffer => (
                  <Offer 
                    image = {oneOffer.cartImage} title={oneOffer.cartTitle}
                  />
                  
              )) }
              
          
               </div>
            </div>
      </div>
    )
    }
    
 
            

export default Offers