import React from 'react'
import { Link } from 'react-router-dom'
import possibilityImage from '../../assets/possibility.png'
import './Possibility.css'
const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' >

      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt='possibility'/>
      </div>

      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>The secret to getting ahead is getting started.</h1>
        <p>Get a custom, results-driven website with our design and development services. Partner with us for a stunning online presence.</p>
        <Link to={'/portfolio'}  className="request-access-link">Request Early Access to Get Started</Link>
      </div>
      
    </div>
  )
}

export default Possibility
