import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';
import Homepage from '../components/main/Homepage';

export const Home = () => {
  return (
    <div className='home-container'>
        <Header />
        <Homepage />
        <Footer/>
    </div>
  )
}
export default Home;