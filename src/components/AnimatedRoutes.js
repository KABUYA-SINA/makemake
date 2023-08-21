import React, { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Error from '../pages/Error';
import Loading from './LoaderData';

const Home = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1 * 250))
        .then(() => import('../pages/Home'))
})
const Studio = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1 * 250))
        .then(() => import('../pages/Studio'))
})
const Realisation = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1 * 250))
        .then(() => import('../pages/Realisations'))
})
const Expertise = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 1 * 250))
        .then(() => import('../pages/Expertises'))
})
const Single = React.lazy(() => {
    return new Promise(resolve => setTimeout(resolve, 2 * 250))
        .then(() => import('../pages/realisations/Single'))
})


function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Suspense fallback={<div className='routes'><Loading /></div>}>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path='/studio' element={<Studio />} />
                    <Route path='/realisation' element={<Realisation />} />
                    <Route path="/expertises" element={<Expertise />} />
                    <Route path='/single/:id' element={<Single />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </Suspense>
        </AnimatePresence>
    )
}

export default AnimatedRoutes