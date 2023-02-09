import React from 'react'
import { useEffect } from 'react';
import { Header,Possibility } from '../../Components'
import {Footer} from '../../Container'
import './Home.css'
import { motion } from "framer-motion";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <motion.div
  className="header"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.5 }}
  >
  <Header />
  <Possibility/>
  <Footer/>
  </motion.div>
  );
  };


export default Home
