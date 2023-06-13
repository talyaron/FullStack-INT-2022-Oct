import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Second = () => {
  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Link to='/'>GO to main page</Link>
    </motion.div>
  )
}

export default Second