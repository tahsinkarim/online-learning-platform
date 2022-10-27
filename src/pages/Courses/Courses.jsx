import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Shared/Card";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className='mx-auto sm:flex gap-6 pb-10'>
      <div className='card bg-base-50 mt-1 h-max sm:w-1/4 rounded-sm'>
        <div className='card-body px-3 py-10'>
          <h2 className='card-title'>All courses</h2>
          {courses.map((data) => (
            <Link
              to={`/course/${data.id}`}
              key={data.id}
              className='border bg-base-200 rounded-sm py-3 pl-2 pr-1 text-sm hover:text-violet-500'
            >
              {data.title}
            </Link>
          ))}
        </div>
      </div>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:w-3/4 px-4'>
          {courses.map((data) => (
            <Card data={data} key={data.title}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
