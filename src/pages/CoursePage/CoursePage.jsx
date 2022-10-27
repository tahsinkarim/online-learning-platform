import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

// For printing pdf
const ref = React.createRef();

const CoursePage = () => {
  // Course details
  const data = useLoaderData();
  const {
    img,
    title,
    rating,
    enrolled,
    price,
    total_ratings,
    time,
    goals,
    description,
    author,
    course_id,
  } = data;

  return (
    <div>
      <div className='bg-gradient-to-r from-hero-dark-black via-hero-light-black to-hero-dark-black pt-20 pb-16 px-4 text-white'>
        <div className='container mx-auto lg:max-w-6xl'>
          <div className='flex justify-end'>
            <Pdf targetRef={ref} filename='code-example.pdf'>
              {({ toPdf }) => (
                <button
                  className='bg-green-600 py-1 px-3 rounded'
                  onClick={toPdf}
                >
                  Generate Pdf
                </button>
              )}
            </Pdf>
          </div>
          <h2 className='text-2xl md:text-4xl font-bold my-4'>{title}</h2>
          <div>
            <img src={img} alt='' />
          </div>
          <p className='my-4 text-lg'>Level up your skills with {title}</p>
          <p className='mb-4 italic'>{time}+ hours of total content</p>
          <div className='mb-4 sm:flex items-center'>
            <span className='text-amber-600 mr-4'>{rating}</span>
            <span className='text-yellow-500 mr-4 flex'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clipRule='evenodd'
                />
              </svg>
            </span>
            <span className='mr-4'>{total_ratings} ratings </span>
            <p>{enrolled} students enrolled </p>
          </div>
          <p>
            Course Creator:{" "}
            <span className='font-semibold underline'>{author.name}</span>{" "}
          </p>
          <hr className='my-8' />
          <p className='text-sm mb-4'>
            Get access to this course and all the other features on this website
          </p>
          <p className='text-3xl font-bold mb-4'>${price}</p>
          <Link to={`/checkout/${course_id}`}>
            <button className='w-full py-3 font-semibold rounded-lg bg-gradient-to-r from-clr-violet to-clr-aqua hover:from-clr-aqua hover:to-clr-violet'>
              Get premium access
            </button>
          </Link>
        </div>
      </div>
      <div ref={ref} className='mt-12 container mx-auto lg:max-w-6xl px-4'>
        <div>
          <h1 className='font-bold text-2xl'>Goals</h1>
          <ul className='my-5'>
            {goals.map((goal) => (
              <li key={goal} className='flex items-center'>
                <span className='text-green-700 mr-2'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={3}
                    stroke='currentColor'
                    className='w-5 h-5'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>
                </span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='pb-10'>
          <h1 className='font-bold text-2xl'>Description</h1>
          <p className='max-w-2xl mt-4'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
