import Home from '../pages/Home'
import Studio from '../pages/Studio'
import Realisation from '../pages/Realisation'
import Expertise from '../pages/Expertises'
import Error from '../pages/Error'
import { Route, Routes } from 'react-router-dom';


function AnimatedRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/studio' element={<Studio />} />
            <Route path='/realisation' element={<Realisation />} />
            <Route path="/expertises" element={<Expertise/>}/>
            <Route path='*' element={ <Error/>} />
        </Routes>
    )
}

export default AnimatedRoutes