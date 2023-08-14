import React, {useState, useRef} from 'react'
import Button from '../Pricing/Button'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const FormMessage = () => {
  const [users, setUsers]= useState({})
    const [isName, setIsName] = useState('')
    const [isEmail, setIsEmail]= useState('')
    const [isPhone, setIsPhone]= useState('')
    const [isError, setIsError]= useState('')
    const [isSubmitError, setIsSubmitError]= useState('')
    const[isErrorEmail, setIsErrorEmail]= useState('')
    const [isErrorPhone, setIsErrorPhone]= useState('')

    const navigate = useNavigate()
   
function isValidName(name){
  return /^[A-Za-z\-']+$/.test(name)

}
isValidName('')

  const handleNameChange = () => {
if(!isValidName(event.target.value)){
  event.preventDefault();
 setIsError("Please enter valid Name")
}

else{
  setIsError(null)
}
  }

  function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email)
  }
  const handleEmailChange = () => {
    if(!isValidEmail(event.target.value)){
      event.preventDefault()
      setIsErrorEmail("Invalid Email")
    }
    else{
      setIsErrorEmail(null)
    }
  }
  function isValidPhone(phone){
    return /^[0-9\-\+]{9,15}$/.test(phone)
  }
  const handlePhoneChange = () => {
    if(!isValidPhone(event.target.value)){
      event.preventDefault()
      setIsErrorPhone("Invalid Phone Number")
    }
    else{
      setIsErrorPhone(null)
    }

  }
  const formEl = useRef()
const handleSubmit = (e) => {
  e.preventDefault()
  if(isName.trim() === '' || isEmail.trim() === ''){
    setIsSubmitError("Please fill all fields")
  }
  else{
    setIsSubmitError(null)
};
}
  
  return (
    <div className='form-section'>
        <form onSubmit={handleSubmit} ref={formEl}>

    <div className="forms mb-3">
      
        <label htmlFor="name">Name</label>
        
        <input type="text"
         placeholder='Enter your Name'
         className='form-control'
         onChange={handleNameChange }
         name='name'
        />
          {  isError && <p style={{color: "red", paddingTop: "5px"}}>{isError}</p>}
       
        <label htmlFor="email">Email</label>
        <input type="email" 
          placeholder='Enter your email'  
          className='form-control' 
          onChange={handleEmailChange}
          name='email'
                
        />
        {isErrorEmail && <p style={{color: "red", paddingTop: "5px"}}>{isErrorEmail}</p>}
        <label htmlFor="phone">Phone</label>
        <input type="phone"
        className='form-control'
        placeholder='Enter your Phone' 
        onChange={handlePhoneChange}
        name='phone'
       
        />
        { isErrorPhone && <p style={{color: "red", paddingTop: "5px"}}>{isErrorPhone}</p> }
        <label htmlFor="message">Message</label>
        <input type="text" 
         placeholder='Enter message'
         className='form-control'   
         name='message'
         />
         <button className='btn btn-color'>Submit</button>
         {isSubmitError && <p style={{color: "red", paddingTop: "5px"}}>{isSubmitError}</p>}
     </div>
</form>
      
    </div >
 
  )
  }

export default FormMessage