import React, {useEffect} from 'react'
import {BiCheckboxChecked} from 'react-icons/bi'
import Button from './Button'
import AOS from 'aos'


const UserCustom = () => {
    useEffect(() => {
        AOS.init({
          duration : 1000
        });
      }, [])
  return (
    <div className='users-section'>
        <div className="user row">
            <div className="cart " data-aos="fade-right">
                <div className="cart-header">
                    <h5>$99</h5>
                    <p>Per Month</p>
                </div>
                <div className="cart-center" >
                    <BiCheckboxChecked  className='ox'/>
                    <span>1 User</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>10 Social Profiles</span>
                    <br />
                    <BiCheckboxChecked   className='ox'/>
                    <span>10 Custom Intents</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>10 Custom Hashtags</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>10 Custom Keyword</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Dashboard</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Owned page Listening</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>3rd Party Listening</span>
                    <br />
                    <BiCheckboxChecked className='ox' />
                    <span>Analytics-driven News Feed</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Customer Profiling</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Sentiment Analysis</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Intent Analysis</span>
                </div>
                <div className="cart_bottom">
                    <Button  write="Start Your 30 Day Trial"/>
                </div>
            </div>
            <div className="cart "  data-aos="fade-right">
                <div className="cart-header">
                    <h5>$499</h5>
                    <p>Per Month</p>
                </div>
                <div className="cart-center middle" data-aos="fade-right">
                    <BiCheckboxChecked  className='ox'/>
                    <span>5 User</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>25 Social Profiles</span>
                    <br />
                    <BiCheckboxChecked   className='ox'/>
                    <span>25 Custom Intents</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>25 Custom Hashtags</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>25 Custom Keyword</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Dashboard</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Owned page Listening</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>3rd Party Listening</span>
                    <br />
                    <BiCheckboxChecked className='ox' />
                    <span>Analytics-driven News Feed</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Customer Profiling</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Sentiment Analysis</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Intent Analysis</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Summary Report</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Detailed Reports</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Real-Time Communication</span>
                </div>
                <div className="cart_bottom">
                    <Button  write="Start Your 30 Day Trial"/>
                </div>
            </div>
            <div className="cart "  data-aos="fade-right">
                <div className="cart-header">
                    <h5>Call Us</h5>
                    
                </div>
                <div className="cart-center third">
                    <BiCheckboxChecked  className='ox'/>
                    <span>Customize users</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Customize social profiles</span>
                    <br />
                    <BiCheckboxChecked   className='ox'/>
                    <span>100 Custom Intents</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>100 Custom Hashtags</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>100 Custom Keyword</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Dashboard</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Owned page Listening</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>3rd Party Listening</span>
                    <br />
                    <BiCheckboxChecked className='ox' />
                    <span>Analytics-driven News Feed</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Customer Profiling</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Sentiment Analysis</span>
                    <br />
                    <BiCheckboxChecked className='ox'/>
                    <span>Intent Analysis</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Summary Report</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Detailed Reports</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Real-Time Communication</span>
                    <br />
                    <BiCheckboxChecked  className='ox'/>
                    <span>Audit Log</span>
                    <br />
                  
                </div>
                <div className="cart_bottom">
                    <Button  write="Start Your 30 Day Trial"/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UserCustom