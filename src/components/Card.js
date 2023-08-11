import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import '../sass/pages/_card.scss';
import '../sass/base/_card-typo.scss'


function Card ( {id, image, alt, title } ){

    return (
        <motion.div
            key={id}
            className='card-realisation--boxes'
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: .9 }}
            whileHover={{ scale: 1.01 }}
            transition={{
                ease: "easeInOut", duration: .2
            }}
            >
            <Link to={`/single/${id}`} className='link-card' target="_blank" rel="noopener noreferrer">
                <img src={image} alt={alt} />
                <span className='hover-card'>{title}</span>
            </Link>
        </motion.div>
    )
}

export default Card;