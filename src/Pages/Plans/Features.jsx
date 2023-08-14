import React from 'react'
import {BsCheck} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

const Features = () => {
  return (
    <>
    
    <div className='features-section'>
        <div className="feature">
            <h2>Why Brand Equity</h2>
        </div>
        
    </div>
    <div className="tables-section">
           

            
    <table>
        <tr>
            <th>Features</th>
            <th>Brand Equity</th>
            <th>Others</th>
        </tr>
        <tr>
            <td>Social Profiles – Facebook , Twitter , Instagram , Linkedin</td>
            <td><BsCheck className='check'/></td>
            <td><BsCheck  className='check'/></td>
        </tr>
        <tr>

        
        <td className='white'>Users</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><BsCheck  className='check'/></td>
        </tr>
        <tr>
            <td>Dashboards</td>
            <td><BsCheck className='check'/></td>
            <td><BsCheck  className='check'/></td> 
        </tr>
        <tr>
        <td className='white'>Owned page listening</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><BsCheck  className='check'/></td>
        </tr>
        <tr>
            
        <td>3rd party listening</td>
            <td><BsCheck className='check'/></td>
            <td><BsCheck  className='check'/></td>
        </tr>
        <tr>
        <td className='white'>Analytics driven news feed</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td>Customer profiling</td>
            <td><BsCheck className='check'/></td>
            <td><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td className='white'>Sentiment analysis</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td>Intent analysis</td>
            <td><BsCheck className='check'/></td>
            <td><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td className='white'>Custom Intents</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td>Custom Hashtags</td>
            <td><BsCheck className='check'/></td>
            <td><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td className='white'>Custom Keywords</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td>Summary Reports</td>
            <td><BsCheck className='check'/></td>
            <td><BsCheck  className='check'/></td>
        </tr>
        <tr>
        <td className='white'>Detailed Reports</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><BsCheck  className='check'/></td>
        </tr>
        <tr>
        <td>Realtime communication</td>
            <td><BsCheck className='check'/></td>
            <td><BsCheck  className='check'/></td>
        </tr>
        <tr>
        <td className='white'>Audit Log</td>
        <td className='white'><BsCheck className='check' /></td>
        <td  className='white'><IoMdClose  className='bagla'/></td>
        </tr>
        <tr>
        <td>Call center integration (Avay / Asterik/ Salesforce/ Zendesk)</td>
            <td><BsCheck className='check'/></td>
            <td><IoMdClose  className='bagla'/></td>
        </tr>
    </table>

</div>
</>
  )
}

export default Features