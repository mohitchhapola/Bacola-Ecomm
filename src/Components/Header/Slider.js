import React from "react";
import Slider from "react-slick";
import crousel1 from '../../Assets/Images/crousel1.avif';
import crousel2 from '../../Assets/Images/crousel2.avif';
import crousel3 from '../../Assets/Images/crousel3.avif';
import crousel4 from '../../Assets/Images/crousel4.avif';
 function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
    <Slider {...settings}>
      <div className="item1">
      <img src={crousel1} alt="logo" className="w-100" />
      </div>
      <div>
      <img src={crousel2} alt="logo" className="w-100" />
      </div>
      <div>
      <img src={crousel3} alt="logo" className="w-100" />
      </div>
      <div>
      <img src={crousel4} alt="logo" className="w-100"  />
      </div>
      
    </Slider>
    </div>
  );
}

export default SimpleSlider