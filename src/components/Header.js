import React from 'react'
import Logo from '../images/header.webp'
import { Link, NavLink } from 'react-router-dom'
import '../sass/layout/_header.scss'

export const Header = () => {

  return (
    <div className='header-container'>
        <div className="header-logo">
            <Link to='/'>
                <img src={Logo} alt="logo agence" />
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink href='../pages/Studio.js' to="/studio" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                        Studio
                    </NavLink>
                </li>
                <li>
                    <NavLink href='../pages/Realisation.js' to="/realisation" className={(nav)  => (nav.isActive ? 'nav-active' : '')}>
                        Realisation
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
    </div>
  )
}
export default Header