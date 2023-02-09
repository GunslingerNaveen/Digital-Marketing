import React from 'react'
import './Portfolio.css'
import { useState,useEffect } from 'react'
import web1 from '../../assets/web1.mp4'
import web2 from '../../assets/web2.mp4'
import mobile from '../../assets/mobile.mp4'
import mobile2 from '../../assets/mobile2.mp4'

const Portfolio = () => {
  const [text, setText] = useState("");
  const fullText = "The only way to do great work is to love what you do.";

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
    <div className='nk__container'>
        <div className="nk__heading">
           <h1 className="nk__text">{text}</h1>
           <div className="nk__paragraphs">
            <p className="nk__paragraph">Showcased Our Accomplishments</p>
           </div>
        </div>
        <div className="nk__video1">
           <div className="nk__video-section1">
               <h3 className="nk__title">
                Remarkable Web Platform
               </h3>
            </div>          
            <div className="nk__video-group1">
                 <video src={web1} muted autoPlay loop  />
                 <video src={web2} muted autoPlay loop  />
            </div>
        </div>
        <div className="nk__video2">
           <div className="nk__video-section2">
            <h3 className="nk__title">
              Exceptional App Design
            </h3>
            </div>
            <div className="nk__video-group2">
              <video src={mobile} muted autoPlay loop  />   
              <video src={mobile2} muted autoPlay loop  />
            </div>  
        </div>   
</div>

  )
}

export default Portfolio
