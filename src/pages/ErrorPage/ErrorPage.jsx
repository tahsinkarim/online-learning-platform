import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className='
    flex
    items-center
    justify-center
    w-screen
    h-screen
    bg-gradient-to-r
   from-hero-dark-black
   via-hero-light-black
   to-hero-dark-black
  '
    >
      <div className='px-40 py-20 bg-white rounded-md shadow-xl'>
        <div className='flex flex-col items-center'>
          <h1 className='font-bold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-clr-violet to-clr-aqua'>
            404
          </h1>

          <h6 className='mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl'>
            <span className='text-red-500'>Oops!</span> Page not found
          </h6>

          <p className='mb-8 text-center text-gray-500 md:text-lg'>
            The page you’re looking for doesn’t exist.
          </p>

          <Link
            to='/'
            className='px-10 py-3 rounded text-sm font-semibold text-white bg-gradient-to-r from-clr-violet to-clr-aqua'
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
