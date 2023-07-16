import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import DatasImages from '../data-image/DatasImages';
import Error from '../pages/Error';
import { ErrorBoundary } from 'react-error-boundary';
import '../sass/pages/_draganddrop.scss';

const DragAndDrop = () => {
    const [ imagesDragAndDrop, setImagesDragAndDrop ] = useState(DatasImages)
    const constraintsRef = useRef(null)

    if(!imagesDragAndDrop) return <Error />

    return (
        <div className='drag-and--drop' >
            <article ref={constraintsRef} >
                <ErrorBoundary FallbackComponent={Error} onReset={() => {}}>
                        { imagesDragAndDrop.map((image, index) => (
                            <motion.img src={image.image} alt={image.alt}
                                key={`${image.id}-${index}`}
                                drag
                                dragConstraints={{
                                    // top: -150,
                                    // right: 150,
                                    // bottom: 150,
                                    // left: -150
                                    constraintsRef
                                }}
                                dragElastic={.7}
                                dragMomentum={false}
                                dragTransition={{ bounceStiffness: 600}}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ cursor: "grabbing", boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
                                title='Move me if you can'
                                className={`${image.class}`}
                                id={`${index}`}
                            />
                        ))}
                    </ErrorBoundary>
            </article>
        </div>
    )
}

export default DragAndDrop