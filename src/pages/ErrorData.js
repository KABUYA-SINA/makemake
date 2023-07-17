import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../sass/pages/_error.scss';

function ErrorData  () {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
   }
    return (
         <motion.div
            className='top-parent'
            initial={{width: 0}}
            animate={{width: '100%'}}
            exit={{x: window.innerWidth, transition:{ duration: 0.3}}}
            >
            <div className='content'>
                <main>
                    <div className='main-error'>
                        <div className='main-error__pages'>
                            <h1>500</h1>
                            <p>
                                Something went wrong with the server.
                            </p>
                            <Link to='/' onClick={handleClick}>
                                <span className='btn-error'> Please return to Home page</span>
                            </Link>
                    </div>
                    </div>
                </main>
            </div>
        </motion.div>
    );
};

export default ErrorData;