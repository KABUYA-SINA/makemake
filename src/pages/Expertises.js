import React from 'react';
import Header from '../components/Header';
import Expertise from '../components/main/Expertises';
import Footer from '../components/Footer';
import '../sass/base/_base.scss';

export const Expertises = () => {
  return (
    <React.Fragment>
      <Header />
      <Expertise/>
      <Footer />
    </React.Fragment>
  )
}
export default Expertises;