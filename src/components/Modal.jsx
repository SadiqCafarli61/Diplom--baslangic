import React, {useRef, useEffect} from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import moadlGif from '../assets/modal.gif'


const Modal = () => {
    const navigate = useNavigate()
    const modalMenu = useRef()
    const modalContent = useRef()

  useEffect(() => {
    window.addEventListener("load", () => {
        modalMenu.current.classList.add("aktivv")

        setTimeout(() => {
            modalContent.current.classList.add("aktivv")
  
        }, 1000)
    })
  },[])

  const closeMenu = () => {
   
        modalMenu.current.classList.remove("aktivv");
        useEffect(() => {
            setTimeout(() => {
                modalContent.current.classList.remove("aktivv")
            }, 1000)
        }, [])
  }
  const directFb = () => {
    window.open("https://www.facebook.com/sadiq.ceferli.58726")
  }

    return (
        <div className="menu" ref={modalMenu}>
          <div className="modal-menu" ref={modalContent}>
            <AiOutlineClose  className='cix' onClick={closeMenu}/>
           <div className="modal-header">
            <h2>Follow us in Social Media</h2>
           </div>
           <div className="modal-icons">
            <BsFacebook  className='ikon blueIcon' onClick={directFb}/>
            <BsInstagram className='ikon insta' />
            <BsGithub className='ikon github' />
           </div>
           <div className="modal-last">
            <div className="image">
                <img src={moadlGif} alt="" />
            </div>

           </div>
          </div>
        </div>
      )
    }
  

  
export default Modal