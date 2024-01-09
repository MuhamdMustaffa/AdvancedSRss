import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import firstImg from './Photos/Home+Banner-En-min.jpeg';
import secImg from './Photos/Homepage-Banner---1700-x-651---EN-min.png';
import thirdImg from './Photos/Home-Banner_1700-x-651-min+(1).jpg';
import './Carousel.css';

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={10000}>
            <img src={firstImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src={secImg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={thirdImg} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
