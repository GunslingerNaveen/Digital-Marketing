import React from 'react';
import './Testimonial.css';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const Testimonial = ({ name, company, feedback, rating, imageUrl }) => {

return (
<motion.div
  className="testimonial-card"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <div className="image-section">
    <img src={imageUrl} alt={`${name} from ${company}`} />
  </div>
  <div className="rating">
    {[...Array(rating)].map((star, i) => (
      <i key={i} className="fas fa-star">
        <FaStar />
      </i>
    ))}
  </div>
  <motion.div
    className="feedback"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.25 }}
  >
    {feedback}
  </motion.div>
  <div className="details">
    <span className="name">{name}</span>
    <span className="company">{company}</span>
  </div>
</motion.div>

  );
};

export default Testimonial;
