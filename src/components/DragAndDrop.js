import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DatasImages from '../data-image/DatasImages';
import Error from '../pages/Error';
import { ErrorBoundary } from 'react-error-boundary';

const DragAndDrop = () => {
    const [ imagesDragAndDrop, setImagesDragAndDrop ] = useState(DatasImages)
    if(!imagesDragAndDrop) return <Error />

    return (
        <div className='drag-and--drop'>
            <article>
                <ErrorBoundary FallbackComponent={Error} onReset={() => {}}>
                    { imagesDragAndDrop.map((image, index) => (
                        <motion.img src={image.image} alt={image.alt}
                            key={`${image.id}-${index}`} className='image-childs'
                            drag
                            dragConstraints={{left: 10, right: 10, top: 10, bottom: 10}}
                            dragElastic={.7}
                            dragMomentum={false}
                            title='Move me if you can'
                        />
                    ))}
                </ErrorBoundary>
            </article>
        </div>
    )
}

export default DragAndDrop