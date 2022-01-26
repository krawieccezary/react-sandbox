import React from 'react';
import { motion } from 'framer-motion';


const containerVariants = {
  hidden: {
    opacity: 0, 
    y: '10%'
  },
  visible: {
    opacity: 1, 
    y: 0, 
    transition: { duration: 1}
  }
}

const WeatherApp = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h1>Weather App</h1>
    </motion.div>  
  )
}

export default WeatherApp;