import React, {useRef, useState} from 'react'
import {FaLocationDot} from 'react-icons/fa6'
import {MdOutlineMail} from 'react-icons/md'
import{BsFillTelephoneFill} from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Email = () => {
    const [name, setName] = useState('')
    const [errorsName, setErrorsName]= useState('')
    const [email, setEmail]= useState('')
    const [errorEmail, setErrorEmail]= useState('')
    const [errorSubmit, setErrorSubmit]= useState('')
    const form = useRef()
    function isValidName(name){
        return  /^[A-Za-z\-']+$/.test(name)
    }
    const nameChange = (e) => {
        e.preventDefault()
        if(!isValidName(event.target.value)){
            setErrorsName('Name must contain only letters and spaces')

        }
        else{
            setErrorsName(null)
        }
        setName(event.target.value)

    }
    function isValidEmail(email){
        return /\S+@\S+\.\S+/.test(email)
    }
  
    const changeEmail = (e) => {
        e.preventDefault()
        if(!isValidEmail(event.target.value)){
            setErrorEmail('Email is not valid')
  
        }
        else{
            setErrorEmail(null)
        }
        setEmail(event.target.value)
    }
    const sendEmail = (e) => {
        e.preventDefault()
        if(name.trim() === "" || email.trim() === ""){
          setErrorSubmit("Please fill all fields")
        }
        else{
          emailjs.sendForm('service_wny2cqf', 'template_o1e3ock', form.current, 'xRUHZJV0UCCW6ur-a')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        }
        

       
    };
    
  return (
    <div className='container'>
        <div className="contact-section row">
             <div className="left-side col-12 col-md-6 col-lg-6">
               <h5>Contact Us</h5>
               <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
               <div className=" pt-5 address-section" style={{cursor: "pointer", width: "500px"}}>
                <div className="info">
                <FaLocationDot className=' icon' />
               <span>Our Address:</span>
               <p style={{
                color: "555",
                fontSize: "16px",
                paddingLeft: "30px",
                paddingTop: "7px",
                maxWidth: "340px"
               }}>10100 Robert Watkins Way, Elk Grove, CA 95757‬</p>
                </div>
              
               </div>
               <div className=" pt-5 address-section" style={{cursor: "pointer", width: "500px"}}>
                <div className="info">
                <MdOutlineMail className=' icon' />
               <span>Our MailBox:</span>
               <p style={{
                color: "555",
                fontSize: "16px",
                paddingLeft: "30px",
                paddingTop: "7px",
                maxWidth: "340px"
               }}>sadiqcafarli2020@gmail.com</p>
                </div>
              
               </div>
               <div className=" pt-5 address-section" style={{cursor: "pointer", width: "500px"}}>
                <div className="info">
                <BsFillTelephoneFill className=' icon' />
               <span>Our Phone:</span>
               <p style={{
                color: "555",
                fontSize: "16px",
                paddingLeft: "30px",
                paddingTop: "7px",
                maxWidth: "340px"
               }}>+994 055-890-80-72</p>
                </div>
              
               </div>
             </div>   
             <div className="right-side col-12 col-md-6 col-lg-6">
               <div className="email-section">
               <form ref={form} onSubmit={sendEmail}>
                <div className="emails">
                <label className='mb-1' htmlFor='Name' style={{color: "#555",  fontWeight: "600"}}>Name</label>
      <input type="text" name="name" 
        className=' mb-3 form-control'
        onChange={nameChange}
        value={name}
       
       />
       {
errorsName && <h2 style={{color: "red", paddingTop: "5px", fontSize: "14px"}}>{errorsName}</h2>
       }
                </div>
                <div className="emails">
                <label className="mb-1" htmlFor='Email' style={{color: "#555",  fontWeight: "600"}}>Email</label>
      <input type="email" name="email"
        className=' mb-3 form-control'
        onChange={changeEmail}
        value={email}
      />
      {
        errorEmail && <h2 style={{color: "red", fontSize: "14px", paddingTop: "5px"}}>{errorEmail}</h2>
      }
                </div>
                <div className="emails">
                <label  className='mb-1' style={{color: "#555", fontWeight: "600"}}>Message</label>
      <textarea name="message" 
       className='p-4 form-control'
      
      />
                </div>
    
     
    
      <button type='submit' className=' mt-4 btn btn-primary'>Submit</button>
      {errorSubmit && <p style={{color: "red", paddingTop: "5px", display: "flex",
      justifyContent: "center"
    
    }}>{errorSubmit}</p>}
      
    </form>
               </div>

             </div>
        </div>

    </div>
  )
}

export default Email