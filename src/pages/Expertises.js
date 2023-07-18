import React from 'react';
import Header from '../components/Header';
import Expertise from '../components/main/Expertises';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';

export const Expertises = () => {
  return (
    <div className='expertise-container'>
      <Header />
      <Expertise/>
      <Footer />
    </div>
  )
}
export default Expertises;