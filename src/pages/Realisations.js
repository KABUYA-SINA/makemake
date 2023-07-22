import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Realisations from '../components/main/Realisation';
import '../sass/base/_base.scss';

export const Realisation = () => {
  return (
    <React.Fragment>
      <Header />
      <Realisations />
      <Footer />
    </React.Fragment>
  )
}
export default Realisation;