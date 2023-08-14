import React from 'react'
import "./Faqs.css"
import { Button } from 'react-bootstrap'
import FaqsNavbar from './FaqsNavbar'
import Akkordion from './Akkordion'
const MenuList = [
  {title: "Do we have Post Scheduling, Automated replies, or Automated comments?", content: "We will add this feature in the upcoming phase"},
  {title: "What is your competitive edge?", content: "We are following a data-driven strategy. We have cutting-edge analytics of Brand Monitoring for competitor’s pages and for your own pages as well."},
  {title: "How do you analyze Sentiments and Intents?", content: "We are using pre-trained machine learning models from the Stanford NLP core and Open NLP library to analyze sentiments and intents."},
  {title: "What is Turnaround Time?", content: "It is a metric that provides the response time of your user for any customer interaction."},
  {title: "How do you monitor user activity in the system?", content: "We provide the history of interactions for every user. It is visible to the admin user of the organization. It will allow the admin to know what users are doing and how they are dealing with customers. It will allow the admin to hold every user accountable for their actions within the system."},
  {title: "What are your criterias for fetching the data from social media?", content: "Hashtags play a major role in the domain of social media. The platform allows the admin to enter keywords and hashtags. Then, it fetches the data from social media platforms based on those keywords and hashtags."},
  {title: "What are the criterias of a comment or message to be categorized as missed opportunities?", content: "After the 24 hours threshold, the specific comment or message which is still unresponded is categorized as a missed opportunity."},
  {title: "How can we drill down on data in different parts such as Dashboard, Newsfeed, and Reporting?", content: "Each part has a set of filter options through which you can drill down to data according to your needs. Considering you want to check data from a specific duration, you can select date ranges to filter that data."},
  {title: "Where can we add, assign, and remove users?", content: "Users are categorized by department. You can edit and delete your active user. Assign them to respond to selective comments and conversations. "},
  {title: "What data can I get with analytics?", content: "It showcases the overall summary of the users in the system, which includes customer interactions as well as the performance of users using this system on social media platforms."},
  {title: "How do you maintain reports in Brand Equity?", content: "BrandEquity maintains detailed reports of all interactions within the system."},
  {title: "Do we get all the social media platforms Real Time Messaging?", content: "Omni channel"},
  {title: "With how many Platforms it is integrated?", content: "Currently, this platform covers Facebook and Twitter. We are soon adding other social media platforms in the next phase."},
  {title: "Do you have any tutorials?", content: "We provide a product walkthrough that provides an overview of all features and complete working of the platform."},
  {title: "Does this work for other groups, and pages?", content: "Yes, through BrandEquity you can monitor your competitor’s groups and pages for competitive analysis and benchmark of social media data. "},
  {title: "Tell details about assigning a post or msg to another user?", content: "You can assign a post or message to a selective user/agent of a selective department. If you feel the question is related to the admin department so any user can assign it to an admin department user."},
  {title: "How do I make changes to connected Brand Pages?", content: "You can turn on and off monitoring of Pages if you do not wish to have those pages data in the future. You can also delete specific pages as per your needs."},
  {title: "How to manage team Members?", content: "Users are categorized by department. You can edit and delete your active user. Check user activities utilizing Audit log."}
]

const Faqs = () => {
  return (
    <div>
 <FaqsNavbar />
{MenuList.map((menu, index) => (
  <Akkordion  
  key={index}
  title={menu.title}
  content={menu.content}
  />
))
}
 
    </div>
  )
}

export default Faqs