import React from 'react'
import Navbar from '../components/Navbar-Home'
import Socialmedia from '../components/SocialMedia'
import Mnagement from '../components/Management'
import Platform from '../components/Platform'
import Produkts from '../components/Produkts'
import Request from '../components/Request'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div>
<Navbar />
<Socialmedia />
<Mnagement />
<Platform />
<Produkts />
<Request />
{/* <Footer /> */}
    </div>
  )
}

export default Home