import React, {useRef, useEffect, useContext, useState} from 'react'
import logo from '../assets/home/logo.svg'
import Button from './Button'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import {AiFillCaretDown} from 'react-icons/ai'
import AOS from 'aos';
import { NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import nstureGif from '../assets/nature.gif'


const Navbar = () => {
  
    const [isOpen, setIsopen] = useState(false)
    const [menuList, setMenuList] =useState(false)
    const overlaymenu = useRef()
    const menu = useRef()
 
  const showMenu = () => {
    overlaymenu.current.classList.toggle('show-menu') 
    setIsopen(!isOpen)
  }
 
  const [selectedOption, setSelectedOption] = useState('')
  
   const handleChange = (event) => {
    setSelectedOption(event.target.value)
   }


 const [openMenu, setOpenMenu] = useState(false)
 
//  const menuFeature = useRef()

const acMenunu = () => {
  setOpenMenu(!openMenu)

}
const menuItem = useRef()
const  openMenuList = () => {
  setOpenMenu( !openMenu)
}

  return (
    <>
   
   <div className="overlay" ref={overlaymenu} >

 
<div className="overlay-menu">
  
        <Link to="/">Home</Link>
       <Link to='/' onClick={openMenuList}>Features</Link>
       <div className="menu-list" ref={menuItem} style={{
        // display: openMenu ? "block" : "none",
        height: openMenu ? "150px" : "0",
        padding: openMenu ? "10px" : "0",
        transition: openMenu ? "1s ease" : "1s ease"
       }}>
       <Link to='/plan'>Brand Monitoring</Link>
          <Link to='/plan'>Customer Profiling</Link>
          <Link to='/plan'>Deep Analytics</Link>
          <Link to='/plan'>Real-Time Messaging</Link>
       </div>
       
         <Link to="about us">About us</Link>
         <Link to="FAQs">FAQs</Link>
         <Link to="Pricing">Pricing</Link>
         <Link to="Blogs">Blogs</Link>
         <Link to="/contact">Contact us</Link>
         <Link to="/quiz">Quiz Game</Link>
</div>
   </div>
    <div className='header'>
       <button className='open' onClick={showMenu}>
       {isOpen ? <AiOutlineClose  style={{color: "red"}}/> : <FaBars  />}
        </button>

        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="links">
        
         <Link to="/" >Home</Link> 
         
        
         <Link to="about us">About us</Link>
         <Link to="FAQs">FAQs</Link>
         <Link to="Pricing">Pricing</Link>
         <Link to="/Blogs">Blogs</Link>
         <Link to="/contact">Contact us</Link>
         <Link to='/quiz'>Quiz</Link>
         
        </div>
        <div className="dropdown">
          <a href="" className='dropbtn'>Features</a>
          <AiFillCaretDown  className='down'  style={{
          

          }}/>
        
          <div className="menu-content">
          <Link to='/plan'>Brand Monitoring</Link>
          <Link to='/plan'>Customer Profiling</Link>
          <Link to='/plan'>Deep Analytics</Link>
          <Link to='/plan'>Real-Time Messaging</Link>
          <Link to='/plan'>SOCIAL PUBLISHING</Link>
          <Link to='/plan'>MOBILE APP</Link>
          </div>
         </div>
  
       
      
        <div className="btn-section">
 <Link to="signup"><Button writeIn="LOGIN/SIGN UP"/></Link>

        </div>

    </div>
  
    </>
  )
}

export default Navbar