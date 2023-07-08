import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { BsInstagram } from 'react-icons/bs'
import '../sass/pages/_iconApplication.scss'

const IconsApplication = () => {
  return (
    <div className='icon-container'>
        <Link to={process.env.REACT_APP_API_URL_FIRST}>
            <BsFacebook />
        </Link>
        <Link to={process.env.REACT_APP_API_URL_SECOND}>
            <ImLinkedin />
        </Link>
        <Link to={process.env.REACT_APP_API_URL_THIRD}>
            <BsInstagram />
        </Link>
    </div>
  )
}

export default IconsApplication