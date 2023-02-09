import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
        Do you want to step in to the future before others
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <Link to={'/about'}><p>Get Connected</p></Link>
      </div>
      <div className='gpt3__footer-links'>
         <div className='gpt3__footer-links_logo'>
          <p>9 W 53rd St, Krishnagiri ,TamilNadu,India <br /> All Rights Reserved</p>
         </div>
         <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
         </div>
         <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
         </div>
         <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>9 W 53rd St, Krishnagiri ,TamilNadu,India</p>
          <p>+91-6382930626</p>
          <p>nkprofile1997@gmail.com</p>
         </div>
      </div>
      
      <div className='gpt3__footer-copyright'>
        <p>@2023 NK. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
