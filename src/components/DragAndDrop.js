import React from 'react';
import { motion } from 'framer-motion';
import ErrorData from '../pages/ErrorData';
import { ErrorBoundary } from 'react-error-boundary';
import { useFetch } from '../services/useFetch';
import Loader from './LoaderData';
import '../sass/pages/_draganddrop.scss';

const DragAndDrop = () => {

    const { data, isLoading, error } = useFetch(process.env.REACT_APP_API_STUDIO)
    const imagesDragAndDrop = Object.values(data)

    if(error)return <ErrorData />;

    return (
        <div className='drag-and--drop' >
            <article>
                <ErrorBoundary FallbackComponent={ErrorData} onReset={() => {}}>
                    { isLoading ?
                        (<Loader data-testid="loader"/>)
                        :
                        (
                            <>
                                { imagesDragAndDrop.map((image, index) => (
                                        <motion.img src={image.image} alt={image.alt}
                                            key={`${image.id}-${index}`}
                                            drag
                                            dragConstraints={{
                                                top: 0,
                                                bottom: 80,
                                                left: -300,
                                                right: 500
                                            }}
                                            dragElastic={.1}
                                            dragMomentum={false}
                                            dragTransition={{ bounceStiffness: 600}}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ cursor: "grabbing", boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                                            title='Move me if you can'
                                            className={`${image.class}`}
                                            id={`${index}`}
                                        />
                                ))}
                            </>
                        )
                    }
                </ErrorBoundary>
            </article>
        </div>
    )
}

export default DragAndDrop