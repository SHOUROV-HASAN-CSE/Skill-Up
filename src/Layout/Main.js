import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../component/common/footer/Footer';
import Header from '../component/common/header/Header';



const Main = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Main;