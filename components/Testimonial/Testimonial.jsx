import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from "../../assets/star.png";
import sun from "../../assets/carsouel/sun.png";
import banner from "../../assets/carsouel/banner.png";
import DotDark from "../../assets/header/BDot.png";
import BlankDot from "../../assets/header/lDot.png";
import carousel from "../../assets/carsouel";
import { useState, useRef } from "react";

//   import '../../App.scss'

function Testimonial() {
  const image = [
    carousel.leftLL,
    carousel.leftLM,
    carousel.center,
    carousel.rightLM,
    carousel.rightLL,
  ];

  const [activeIndex, setActiveIndex] = useState(2);
  const sliderRef = useRef(null);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 5,
    initialSlide: 2,
    speed: 300,
    beforeChange: (current, next) => {
      setActiveIndex(next);
    },
    ref: sliderRef,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  const handleLeftArrowClick = () => {
    if (activeIndex === 0) setActiveIndex(4);
    else setActiveIndex(activeIndex - 1);
    sliderRef.current.slickPrev();
  };
  const handleRightArrowClick = () => {
    if (activeIndex === 4) setActiveIndex(0);
    else setActiveIndex(activeIndex + 1);
    sliderRef.current.slickNext();
  };
  return (
    <div className="testimonial">
      <div className="content">
        <div className="heading">
          <img src={sun} alt="img" className="sun-img" />
          <div className="heading-part">
            <img src={star} alt="icon" />
            <h2 className="heading-secondary">User Testimonial</h2>
            <img src={star} alt="icon" />
          </div>
        </div>
        <div className="card-slider">
          <div className="carousel__main">
            <div className="carousel__slides">
              <Slider {...settings} className="c__slider">
                {image.map((img, i) => (
                  <div
                    key={i + 10}
                    className={`image-container ${
                      activeIndex === i ? "active" : ""
                    }`}
                  >
                    <img src={img} alt="img" className="slide__img" />
                    <div className="play-btn-cont">
                      <img src={carousel.play} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            <div className="carousel__btn">
              <button className="leftC slidBtn" onClick={handleLeftArrowClick}>
                <img src={carousel.leftAr} />
              </button>
              <button
                className="rightC slidBtn"
                onClick={handleRightArrowClick}
              >
                <img src={carousel.rightAr} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="banner-box">
        <img src={banner} alt="banner" className="banner" />

        <div className="dots">
          <img src={DotDark} alt="icon" />
          <img src={BlankDot} alt="icon" />
          <img src={BlankDot} alt="icon" />
          <img src={BlankDot} alt="icon" />
          <img src={BlankDot} alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
