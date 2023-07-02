import React, { useState } from 'react'
import Logo from '../images/header.webp'
import { Link, NavLink } from 'react-router-dom';
import {RxHamburgerMenu} from 'react-icons/rx'
import {BsXLg} from 'react-icons/bs'
import '../sass/layout/_header.scss'

export const Header = () => {
    const [burger, setBurger] = useState(false)

    function handleBurger(){
        setBurger(!burger)
    }

    window.addEventListener('scroll', function(){
        let header = document.querySelector('.header-container')
       header.classList.toggle('sticky', window.scrollY > 0)
    })

    return (
        <header >
            <div className='header-container'>
                <div className="header-logo">
                    <Link to='/'>
                        <img src={Logo} alt="logo agence" />
                    </Link>
                </div>
                <nav>
                    <ul className={ burger ? 'header-nav__ul active ' : ' header-nav__ul'}>
                        <div className="burger-next" onClick={handleBurger}>
                            {burger ? <BsXLg size={30}/> : '' }
                        </div>
                        <li>
                            <NavLink href='../pages/Studio.js' to="/studio" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Studio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href='../pages/Realisation.js' to="/realisation" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Réalisations
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href='../pages/Expertises' to="/expertises" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Expertises
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href='#' to="/" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                                Contact
                            </NavLink>
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