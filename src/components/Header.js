import React, { useState } from 'react'
import Logo from '../images/header.webp'
import {  NavLink } from 'react-router-dom';
import {Link} from 'react-scroll'
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsXLg} from 'react-icons/bs'
import '../sass/layout/_header.scss'

export const Header = () => {
    const [burger, setBurger] = useState(false)
     const [isClass, setClass] = useState(false);

    function handleBurger(){
        setBurger(!burger)
    }

    window.addEventListener('scroll', function(){
        let header = document.querySelector('.header-container')
       header.classList.toggle('sticky', window.scrollY > 0)
    })

    const toggle =() => {
       setClass( prevState => !prevState)
    }

    function refreshPage() {
        window.location.reload(true);
    }


    return (
        <header >
            <div className='header-container'>
                <div className="header-logo" onClick={refreshPage}>
                    <NavLink to='/'>
                        <img src={Logo} alt="logo agence" />
                    </NavLink>
                </div>
                <nav>
                    <ul className={ burger ? 'header-nav__ul active ' : ' header-nav__ul'}>
                        <div className="burger-next" onClick={handleBurger}>
                            {burger ? <BsXLg size={30}/> : '' }
                        </div>
                        <li onClick={refreshPage}>
                            <NavLink href='../pages/Studio.js' to="/studio" className={(nav)  => (nav.isActive ? 'nav-active' : '')} >
                                Studio
                            </NavLink>
                        </li>
                        <li onClick={refreshPage}>
                            <NavLink href='../pages/Realisation.js' to="/realisation" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Réalisations
                            </NavLink>
                        </li>
                        <li onClick={refreshPage}>
                            <NavLink href='../pages/Expertises' to="/expertises" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Expertises
                            </NavLink>
                        </li>
                        <li>
                            <Link to="contact" spy={true} smooth={true} offset={-40} duration={500} className={ isClass ? "nav-active" : ""} onClick={toggle}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger" onClick={handleBurger}>
                    {burger ? '' : <RxHamburgerMenu size={30}/> }
                </div>
            </div>
        </header>
    )
}
export default Header