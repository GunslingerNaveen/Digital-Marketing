import React from 'react';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';
import {Link} from 'react-router-dom'

const Newsletter = () => (

  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">
        Subscribe To Our Newsletter
      </h1>
      <p className="p__opensans">
        And never miss latest Updates!
      </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <Link to={'/'}>
        <button type="button" className="custom__button">Subscribe</button>
      </Link>
    </div>
  </div>
);
export default Newsletter;