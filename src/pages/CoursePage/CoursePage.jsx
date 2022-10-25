import { mdiCheck, mdiStar, mdiStarHalfFull } from "@mdi/js";
import Icon from "@mdi/react";

import React from "react";
import { useLoaderData } from "react-router-dom";

const CoursePage = () => {
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
  } = data;
  return (
    <div>
      <div className='bg-gradient-to-r from-hero-dark-black via-hero-light-black to-hero-dark-black pt-20 pb-16 px-4 text-white'>
        <div className='container mx-auto lg:max-w-6xl'>
          <div>
            <img src={img} alt='' />
          </div>
          <h2 className='text-2xl md:text-4xl font-bold mt-2'>{title}</h2>
          <p className='my-4 text-lg'>Level up your skills with {title}</p>
          <p className='mb-4 italic'>{time}+ hours of total content</p>
          <div className='mb-4 flex items-center'>
            <span className='text-amber-600 mr-4'>{rating}</span>
            <span className='text-yellow-500 mr-4 flex'>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStar}></Icon>
              <Icon size={0.7} path={mdiStarHalfFull}></Icon>
            </span>
            <span className='mr-4'>{total_ratings} ratings </span>
            <span>{enrolled} students enrolled </span>
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
          <button className='w-full py-3 font-semibold rounded-lg bg-black bg-gradient-to-r from-clr-violet to-clr-aqua hover:from-clr-aqua hover:to-clr-violet'>
            Buy this course
          </button>
        </div>
      </div>
      <div className='mt-12 container mx-auto'>
        <div>
          <h1 className='font-bold text-2xl text-black'>Goals</h1>
          <ul className='my-5'>
            {goals.map((goal) => (
              <li className='flex items-center'>
                <Icon
                  size={1}
                  className='text-green-700 mr-4'
                  path={mdiCheck}
                ></Icon>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-2xl text-black'>Description</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
