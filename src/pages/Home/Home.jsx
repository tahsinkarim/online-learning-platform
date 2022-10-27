import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/images/hero2.svg";
import CardsSection from "./CardsSection";
import StacksSection from "./StacksSection";
const Home = () => {
  return (
    <div>
      <div className='bg-gradient-to-r pb-20 from-hero-dark-black via-hero-light-black to-hero-dark-black flex '>
        <div className='container mx-auto max-w-7xl lg:flex items-center gap-16 pt-20'>
          <div className='text-white px-4 w-full lg:w-1/2 py-8 max-w-3xl mx-auto'>
            <h1 className=' text-4xl sm:text-6xl font-bold mb-8 sm:text-center lg:text-left lg:max-w-xl'>
              Learn Programming <br />{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-cyan-300'>
                Interactively
              </span>
            </h1>
            <p className='text-gray-300 sm:text-center lg:text-left sm:text-xl md:mx-auto'>
              Learn programming from scratch by building projects in the most
              interactive way.
            </p>
            <Link to='/courses'>
              <button className='w-full lg:w-2/3 py-4 mt-12 text-lg font-semibold rounded-lg bg-gradient-to-r from-clr-violet to-clr-aqua hover:from-clr-aqua hover:to-clr-violet'>
                Explore All Courses
              </button>
            </Link>
          </div>
          <div className='w-full lg:w-1/2 max-w-xl mx-auto px-4 pr-8 mt-8 lg:mt-0 flex'>
            <img className='mx-auto w-2/3 md:w-full' src={hero} alt='' />
          </div>
        </div>
      </div>
      <CardsSection></CardsSection>
      <StacksSection></StacksSection>
    </div>
  );
};

export default Home;
