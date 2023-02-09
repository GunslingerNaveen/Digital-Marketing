import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState,useEffect } from 'react'
import { Feature } from '../../Components'
import './About.css'
const About = () => {

  const [text, setText] = useState("");
  const fullText = "The possibilities are beyond your imagination";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 70);
    return () => clearInterval(typing);
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='gpt3__whatgpt3 section__margin'
    >
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is NK Technologies"
                 text="NK Technologies is a digital marketing company that helps businesses grow online through various strategies and tactics, such as search engine optimization, social media marketing, email marketing, and more. With a focus on delivering results and providing exceptional customer service, NK Technologies is a trusted partner for businesses looking to take their online presence to the next level."
                 />
      </div>
  
      <div className='gpt3__whatgpt3-heading'>
        <h1 >
          {text}
        </h1>        
        <Link to='/portfolio'><p>Explore The Library</p></Link>
      </div>
  
      <div  className='gpt3__whatgpt3-container'>
        <Feature title="Design"
                  text="We so opinion friends me message as delight. Whole front do of plate heard oh ought." />
        <Feature title="Knowledgebase" 
                 text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
        <Feature title="Education" 
                 text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments " />
      </div>
    </motion.div>
  );
  
  }
export default About
