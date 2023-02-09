import React from 'react';
import './Testimonials.css'
import { motion } from 'framer-motion';
import { useState,useEffect } from 'react';
import {Footer} from '../../Container'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Testimonial } from '../../Components';
import { images } from '../../Constants';

const Testimonials = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [text, setText] = useState("");
  const fullText = "Real Stories of Exceptional Service";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 50);
    return () => clearInterval(typing);
  }, []);

  const testimonials = [
    {
      name: 'Katy Pery',
      company: 'ACME Inc',
      feedback: 'Outstanding service, highly recommend',
      rating: 4,
      imageUrl:images.Test01
    },
    {
      name: 'Ruby Won',
      company: 'XYZ Corp',
      feedback: 'I am very happy with the service!',
      rating: 5,
      imageUrl: images.Test02
    },
    
    {
      name: 'Megan Fox',
      company: 'NKK Ltd',
      feedback: 'The service I received was truly outstanding.',
      rating: 4,
      imageUrl: images.Test03
    },
    {
      name: 'Bob Smith',
      company: 'ABC Ltd',
      feedback: 'Amazing service, impressed greatly.',
      rating: 4,
      imageUrl:images.Test04
    },
    {
      name: 'John Doe',
      company: 'BCC Ltd',
      feedback: 'Exceptionally satisfied, thank you.',
      rating: 4,
      imageUrl:images.Test05
    },
    {
      name: 'John Won',
      company: 'KRP Ltd',
      feedback: 'Outstanding service, highly recommend.',
      rating: 4,
      imageUrl:images.Test06
    }
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1
    }
  };

  return (
    <div className="testimonials">
  <motion.div
    className="heading"
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>{text}</h1>
  </motion.div>
  <motion.div
    className="content"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <Carousel responsive={responsive}>
      {testimonials.map(testimonial => (
        <Testimonial
          key={testimonial.name}
          name={testimonial.name}
          company={testimonial.company}
          feedback={testimonial.feedback}
          rating={testimonial.rating}
          imageUrl={testimonial.imageUrl}
        />
      ))}
    </Carousel>
  </motion.div>
  <Footer />
</div>


  );
};

export default Testimonials;
