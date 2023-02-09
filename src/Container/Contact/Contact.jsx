import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { useEffect } from 'react';
import { FooterOverlay, Newsletter } from '../../Components'
import './Contact.css';

const Footer = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

return(
  <motion.div className="app__footer section__padding" 
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 1 }}
  >

    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
  <div className="app__footer-links_contact">
    <h1 className="app__footer-headtext">Contact Us</h1>
    <p className="p__opensans">9 W 53rd St, Krishnagiri district,TamilNadu,India</p>
    <p className="p__opensans">+91 6382930626</p>
    <p className="p__opensans">+91 9047198678</p>
  </div>

  <div className="app__footer-links_logo">
    <p className="p__opensans">
      "The best way to find yourself is to lose yourself in the service of others."
    </p>
    <div className="app__footer-links_icons">
      <FiFacebook />
      <FiTwitter />
      <FiInstagram />
    </div>
  </div>

  <div className="app__footer-links_work">
    <h1 className="app__footer-headtext">Working Hours</h1>
    <p className="p__opensans">Monday-Friday:</p>
    <p className="p__opensans">08:00 am - 06:00 pm</p>
    <p className="p__opensans">Saturday-Sunday:</p>
    <p className="p__opensans">07:00 am - 11:00 pm</p>
  </div>
</div>

<div className="footer__copyright">
  <p className="p__opensans">2023 NK. All Rights reserved.</p>
</div>


  </motion.div>
)
};

export default Footer;