import React from 'react'
import Slider from 'react-slick';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css';

function Carousel() {
  
    const settings = {
        dots: true,
        infinite: true,
        speed:5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 100,
      };
    
      return (
        <div className="home">
          <Slider {...settings}>
            <div className="slide">
            <img src={image1} alt="carousel image" />
              <div className="caption">Caption 1</div>
            </div>
            <div className="slide">
            <img src={image2} alt="carousel image" />
              <div className="caption">Caption 2</div>
            </div>
            <div className="slide">
            <img src={image3} alt="carousel image" />
            <div className="caption">Caption 3</div>
            </div>
          </Slider>
          </div>
  )
}

export default Carousel