import React, {useRef, useEffect, useState} from 'react'
import "../About/About.css"
import {AiOutlineClose} from 'react-icons/ai'
import AOS from 'aos'


const AboutNavbar = () => {
  useEffect(() => {
    AOS.init({
      duration : 1000
    });
  }, [])
  const [email, setEmail]= useState('')
  const [name, setName] = useState('')
  const [errors, setErrors] = useState('')
const [errorName, setErrorName]= useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError]= useState('')
  const demoMenu = useRef()
  const showDemo = () => {
    demoMenu.current.style.display = "flex"
  }
  const closeDemo = () => {
    demoMenu.current.style.display = "none"
  }
  const nameEl = useRef()
function isValidEmail(email){
  return /\S+@\S+\.\S+/.test(email)
}
const handleChange = event => {
  if(!isValidEmail(event.target.value)) {
    setErrors('Email is invalid')
  }
  else{
    setErrors(null)
  }
  setEmail(event.target.value)
}
function isValidName(name){
  return  /^[A-Za-z\-']+$/.test(name)
}
const nameChange = event => {
  if(!isValidName(event.target.value)){
    setErrorName('Name is invalid')
  }
  else{
    setErrorName(null)
  }
  setName(event.target.value)
}

 const submitDemo = () => {

 }
  return (
    <>
   
    
      <div className="input-section" ref={demoMenu}>
<form >
  <div className="forms">
<AiOutlineClose  className='closeDemo ' onClick={closeDemo}/>
 
 <div className="heading">Book a Demo</div>
  <div className="mb-3 ">
    <label htmlFor="exampleInputName1" className="htmlForm-label" > Name</label>
    <input type="text" value={name} onChange={nameChange} className="form-control" ref={nameEl}  required/>
  { errorName && <h2 style={{color: "red", fontSize: "14px", paddingTop: "10px"}}>{errorName}</h2>}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="htmlForm-label">Email</label>
    <input type="email" onChange={handleChange} className="form-control"  required/>
    {errors && <h2 style={{color: "red", fontSize: "14px", paddingTop: "10px"}}>{errors}</h2>}
  </div>
  <div className="mb-3 htmlForm-check">
    <label htmlFor="exampleInputPhone">Phone</label>
    <input type="phone"  className='form-control'   required/>

  </div>
 <button className='btn-color' onSubmit={submitDemo}>Submit</button>
 </div>
 </form>
 </div>


    <div className='about-section' >
      <div className="about-content"data-aos="fade-right">
        <h5>About Brand Equity</h5>
        <h2>The Smart Artificial Intelligence Marketing Tool</h2>
        <p>Brand Monitoring and Community
Management System</p>
           <button className='btn-color' onClick={showDemo}>Request a Demo</button>
      </div>
    </div>

    </>
  )
}

export default AboutNavbar