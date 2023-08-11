import Home from '../pages/Home';
import Studio from '../pages/Studio';
import Realisation from '../pages/Realisations';
import Expertise from '../pages/Expertises';
import Error from '../pages/Error';
import Single from '../pages/realisations/Single';
import { Route, Routes } from 'react-router-dom';


function AnimatedRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/studio' element={<Studio />} />
            <Route path='/realisation' element={<Realisation />} />
            <Route path="/expertises" element={<Expertise/>}/>
            <Route path='/single/:id' element={<Single />} />
            <Route path='*' element={ <Error/>} />
        </Routes>
    )
}

export default AnimatedRoutes