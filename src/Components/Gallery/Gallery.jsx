import React from 'react';
import {BsInstagram,BsArrowLeftShort,BsArrowRightShort} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { images } from '../../Constants';
import './Gallery.css';

const galleryImages=[images.logo1,images.logo2,images.logo3,images.logo4]

const Gallery = () =>{
  
const scrollRef=React.useRef(null)

const scroll = (direction) =>{
  const {current}=scrollRef;

  if(direction === 'left'){
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
  }
}
return(
  <div className='app__gallery flex__center'>
    <div className='app__gallery-content'>
      <h1>
        Logo Design
      </h1>
      <p style={{color:'black', marginTop:'2rem'}}>
        Unleash the power of your brand with a custom logo design.
        Make a lasting impression with a professional logo designed just for you.
        Elevate your brand with a unique logo that sets you apart.
        Discover the potential of your business with a standout logo.</p>

      <Link to={'/services'}>
        <button type='button' className='custom__buttons'>View More</button>
      </Link>
      
    </div>

    <div className='app__gallery-images'>
      <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className='app__gallery-images_card flex__center' key={index}>
              <img src={image} alt='gallery'/>
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))}
      </div>

      <div className='app__gallery-images_arrows'>
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')}/>     
      </div>
    </div>

  </div>
);
}
export default Gallery;
