import React from 'react';
import Header from '../components/Header';
import Studiopage from '../components/main/Studiopage';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';

export const Studio = () => {
  return (
    <div className='studio-container'>
      <Header />
      <Studiopage/>
      <Footer />
    </div>
  )
}
export default Studio;