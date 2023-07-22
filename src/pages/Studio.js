import React from 'react';
import Header from '../components/Header';
import Studiopage from '../components/main/Studiopage';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';

export const Studio = () => {
  return (
    <React.Fragment>
      <Header />
      <Studiopage/>
      <Footer />
    </React.Fragment>
  )
}
export default Studio;