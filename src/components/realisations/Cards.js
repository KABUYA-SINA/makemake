import React from 'react';
import { motion } from "framer-motion";
import '../../sass/pages/realisation/_cards.scss';

const Cards = ({id, image, alt}) => {
  return (
    <div key={id} className='card'>
      <motion.img
        src={image}
        alt={alt}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: .98 }}
        transition={{
            ease: "easeInOut", duration: .2
        }}
      />
    </div>
  )
}

export default Cards