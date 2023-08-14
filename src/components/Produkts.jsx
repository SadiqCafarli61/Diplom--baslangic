import React, {useEffect, useState} from 'react'
import Produkt from './Produkt'
import axios from 'axios'
import AOS from 'aos'

const Produkts = () => {
    const [products, setProducts] = useState(false)
    useEffect(() => {
       axios.get('src/components/Produkts.json')
       .then(melumat => setProducts(melumat.data))
    }, [])
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <>
    
    <div className='product-section'>
        <div className="content">
            <h5>Why Choose BrandEquity as Your Social Media Management and Analytics Tool?</h5>
            <p>BrandEquity is a social media and reputation management tool that performs analytics over customers’ social media platforms to develop analyzed data with sentiment analysis with an accuracy rate of up to 90%, which is a benchmark in itself. It’s a top-notch brand monitoring tool for social media platforms, keeping the target audience’s comments and activities analyzed adequately within the dashboard.</p>

        </div>
        <div className="feature">
            <h2>Product Features</h2>
            <p>Let’s look at the enterprise social media management tool’s core features in a holistic view.</p>
        </div>
        <div className="row">

      
{
    products && products.map(oneProduct => (
        <Produkt produktAdi={oneProduct.produktName} produktLinki={oneProduct.produktLink}/>
    ))
}
</div>
    </div>
    </>
  )
  
}

export default Produkts