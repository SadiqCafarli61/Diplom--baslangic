import { useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loader from './components/Loader'
import Navbar from './components/Navbar-Home'
import Socialmedia from './components/SocialMedia'
import Management from './components/Management'
import Platform from './components/Platform'
import About from './Pages/About/About'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import SignUp from './components/SignUp'
import Produkts from './components/Produkts'
import Request from './components/Request'
import Footer from './components/Footer'
import Faqs from './Pages/FAQs/Faqs'
import Akkordion from './Pages/FAQs/Akkordion'
import Pricing from './Pages/Pricing/Pricing'
import Blog from './Pages/Blogs/Blog'
import Contact from './Pages/Contacts/Contact'
import { BiLogoSass } from 'react-icons/bi'
import Login from './components/Login'
import Plan from './Pages/Plans/Plan'
import Form from './Pages/Form/Form'
import Modal from './components/Modal'
import Quiz from './Pages/Quiz/Quiz'

function App() {
 
  const konteyner = useRef()
 
  return (
 
   <>

    
   <div>
   </div>
    <BrowserRouter>
    <div className="konteyner" ref={konteyner} >
      <Modal />
<Loader />

    <Navbar  />
  <Routes>
    
    <Route  path='/' element={<Home />}  />
<Route  path='/plan' element={<Plan />}/>
    <Route  path='/social-media' element={<Socialmedia />}/>
    <Route  path='/social media management' element={<Management />}/>
    <Route  path='*' element={<NotFound />}/>
    <Route  path='about us' element={<About />}/>
    <Route  path='signup' element={<SignUp />}/>
    <Route  path='FAQs' element= {<Faqs />}/>
    <Route  path='Pricing' element={<Pricing />}/>
    <Route  path='Blogs' element={<Blog />}/>
    <Route path='contact' element={<Contact />}/>
    <Route  path='login' element={<Login />}/>
    <Route path='form' element={<Form />}/>
    <Route  path='quiz' element={<Quiz />}/>
  
  </Routes>
  <Footer />
  </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
