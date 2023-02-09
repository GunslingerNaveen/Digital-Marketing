import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import people from '../../assets/people.png'
import Digital from '../../assets/Digital.mp4'
import './header.css'

const Header = () => {
  const videoRef = React.useRef(null);
  
  React.useEffect(() => {
    videoRef.current.play();
  }, []);

  const [text, setText] = useState("");
  const fullText = "Let's Build the Future Together";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 70);
    return () => clearInterval(typing);
  }, []);
  
  return (
    <div  className='gpt3__header section__padding' id='home'>

      <div className='gpt3__header-content'>

        <h1 className='gradient__text'>
          {text}
        </h1>
        <p>
        Maximize your brand's potential with our expert digital marketing services. Drive growth and achieve results with our cutting-edge, data-driven solutions. Partner with us for success in the digital world.
        </p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Your Email Address'/>
          <Link to="/Contact">
             <button type="button">Get Started</button>
          </Link>
        </div>

        <div className='gpt3__heade-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>

      </div>

      <div className='gpt3__header-image'>
      <motion.video 
        initial={{ scale: 0.5, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 1 }}
        ref={videoRef}
        src={Digital} 
        alt='people' 
        muted 
        loop 
        controls={false}
      />
    </div>
      
    </div>
  )
}

export default Header
