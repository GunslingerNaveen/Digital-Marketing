import React from 'react'
import './blog.css'
import { motion } from 'framer-motion'
import {Article} from '../../Components'
import { useState,useEffect } from 'react'
import { Seo,smm,Em,wb,ad,ld,cm} from './imports'

const Blog = () => {

  const [text, setText] = useState("");
  const fullText = "Transform the way you do business with our innovative and results-driven digital services.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 40);
    return () => clearInterval(typing);
  }, []);
  

  return (
    <div className='gpt3__blog section__padding '>
      <div className='gpt3__blog-heading'>
      <motion.h1
        initial={{ x: -1000 }}
        animate={{ x: 0, transition: { type: "tween", duration: 1 } }}
      >
        {text}
      </motion.h1>
    </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article 
          imgUrl={Seo} 
          title='Search Engine Optimization' 
          date="Feb, 2023" 
          text = "Maximize your online potential with our customized SEO solutions designed to boost your website's rankings, attract high-quality traffic, and generate leads."
            />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={smm} title='Social Media Marketing'  date="Feb, 2023" text="Boost your brand's visibility, engage with your audience, and drive results with our strategic and innovative social media marketing solutions."/>
          <Article imgUrl={Em} title='Ecommerce Marketing' date="Feb, 2023" text="Drive sales, increase conversions, and grow your e-commerce business with our proven and innovative marketing solutions."/>
          <Article imgUrl={wb} title='Web Design' date="Feb, 2023" text="Craft a stunning and effective online presence with our expert web design services, tailored to meet the unique needs of your business."/>
          <Article imgUrl={ad} title='App Design' date="Feb, 2023" text="Maximize user engagement and drive success with our custom app design process, delivering a seamless user experience and modern design."/>
          <Article imgUrl={ld} title='Logo Design' date="Feb, 2023" text="Create a lasting and memorable brand identity with our custom logo design services, crafted to perfectly reflect your company's vision and values."/>
          <Article imgUrl={cm} title='Content Marketing' date="Feb, 2023" text="Engage your audience, build brand awareness, and drive results with our strategic and impactful content marketing solutions."/>
        </div>
      </div>
    </div>
  )
}

export default Blog
