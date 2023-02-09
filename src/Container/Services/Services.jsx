import React from 'react'
import { useEffect } from 'react';
import { Blog} from '../../Components'
import './Services.css'
import { motion } from "framer-motion";

const Services = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="nk__header">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Blog />
      </motion.div>
    </div>
  );
};
export default Services