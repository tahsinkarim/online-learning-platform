import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const HomeCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://learn-code-server.vercel.app/courses")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
        },
      },
    ],
  };
  return (
    <div className='overflow-x-hidden my-4'>
      <div className='py-10'>
        <Slider {...settings}>
          {cards.map((card) => (
            <div key={card.id} className='pr-4'>
              <Link
                to={`/course/${card.id}`}
                className='card my-8 max-w-xs card-compact bg-base-100 shadow-xl rounded-lg sm:-rotate-3 hover:rotate-0'
              >
                <figure>
                  <img src={card.img} alt='Shoes' />
                </figure>
                <div className='card-body'>
                  <p></p>
                  <h2 className='card-title'>{card.title}</h2>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCards;
