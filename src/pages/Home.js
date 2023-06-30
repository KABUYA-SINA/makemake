import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '../components/main/Homepage';
import '../sass/base/_base.scss';

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