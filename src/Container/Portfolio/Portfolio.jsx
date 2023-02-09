import React from 'react'
import { useEffect } from 'react';
import { motion } from "framer-motion";
import { Portfolios } from '../../Components'
import {Gallery} from '../../Components'
import './Portfolio.css'

const Portfolio = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
    initial={{ x: "100%" }}
    animate={{ x: 0 }}
    className="nk__contain"
  >
    <div className="nk__background">
      <Portfolios />
    </div>
    <div className="nk__background1">
      <Gallery />
    </div>
  </motion.div>
  );
  
}

export default Portfolio
