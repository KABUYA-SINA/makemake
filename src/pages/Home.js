import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Homepage from '../components/main/Homepage';
import '../sass/base/_base.scss';

export const Home = () => {
  return (
    <React.Fragment>
        <Header />
        <Homepage />
        <Footer/>
    </React.Fragment>
  )
}
export default Home;