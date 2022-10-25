import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Shared/Card";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className='container mx-auto sm:flex gap-4 px-2'>
      <div className='card bg-base-100 border h-max sm:w-1/4 rounded-sm mt-10'>
        <div className='card-body px-3 py-10 bg-gradient-to-r from-hero-dark-black to-hero-light-black text-white'>
          <h2 className='card-title'>All courses</h2>
          {courses.map((data, key) => (
            <Link
              to={`/course/${data.id}`}
              key={key}
              className='border bg-gray-800 rounded-sm py-3 pl-2 pr-1 text-sm text-white hover:text-violet-500'
            >
              <span>{courses.indexOf(data) + 1}.</span>
              {data.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:w-3/4'>
        {courses.map((data, key) => (
          <Card data={data} key={key}></Card>
        ))}
      </div>
    </div>
  );
};

export default Courses;
