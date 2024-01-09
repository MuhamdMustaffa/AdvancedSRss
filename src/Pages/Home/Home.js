import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from '../../Components/siteCarousel/Carousel';
import './Home.css';
import SiteCards from '../../Components/siteCards/siteCards';


const Home = () => {
  return (
    <>
      
    <Carousel /><br />

    <SiteCards />
    </>
  );
}

export default Home;
