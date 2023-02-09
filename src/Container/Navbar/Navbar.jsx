import React from 'react'
import './Navbar.css'
import { HiMenuAlt4,HiX} from 'react-icons/hi'
import {motion} from 'framer-motion'
import { useState } from 'react'
import { Link,Outlet } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <nav className="app__navbar">

  <motion.div className="app__navbar-logo"
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: "easeOut" }}
  whileHover={{ rotate: 360 }}
  whileTap={{ rotate: 360 }}
>
  <motion.h2 
    animate={{
      rotate: [1, 360, 1, 360, 1],
      transition: { duration: 5, loop: Infinity, ease: "linear" }
    }}
    style={{
      fontSize: "3rem",
    }}
  >
   <Link to={'./'}><h2>Nk</h2></Link> 
  </motion.h2>
</motion.div>

<ul className="app__navbar-links">
  <li className="app__flex p-text">
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    />
    <Link to={"/"}>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ color: "red" }}
      >
        Home
      </motion.h3>
    </Link>
  </li>
  {["about", "portfolio", "services", "testimonials", "contact"].map(
    (item) => (
      <li className="app__flex p-text" key={`link-${item}`}>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
        />
        <Link to={`/${item}`}>
          <motion.h3
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ color: "red" }}
          >
            {item}
          </motion.h3>
        </Link>
      </li>
    )
  )}
</ul>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />
              <motion.ul
                initial={{ opacity: 0, x: "-100%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <li>
                  <Link to={"/"} onClick={() => setToggle(false)}>
                    Home
                  </Link>
                </li>
                {["about", "portfolio", "services", "testimonials", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <Link to={`/${item}`} onClick={() => setToggle(false)}>
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </motion.ul>
            </motion.div>
          )}
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};


export default Navbar
