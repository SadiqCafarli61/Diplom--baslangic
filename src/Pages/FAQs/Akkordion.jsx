import React,{useState} from 'react'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Akkordion = ({title, content}) => {
    const [isOpen, setIsOpen]= useState(false)
    const toggleAccordion = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='accordion'>
        <div className="questions">
            <div className="accordion-header" onClick={toggleAccordion} style={{
                transition: isOpen ? "0.4s ease" : "0.4s ease"
            }}>
                <p>{title}</p>
                <AiOutlineArrowUp  className='arrow' style={{
                    transform: isOpen ? "rotate(180deg)" : "",
                    transition: isOpen ? '0.3s ' : "0.3s ",
                    color: isOpen ? "#11c0da" : ""
                }}/>
            </div>
            {
                isOpen && (
                    <div className="accordion-content">
                        <span>{content}</span>
                    </div>
                )

            }
        </div>

    </div>
  )
}

export default Akkordion