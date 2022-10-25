import React from "react";
import { useLoaderData } from "react-router-dom";

const CoursePage = () => {
  const data = useLoaderData();
  return (
    <div className='container mx-auto'>
      <h1>{data.description}</h1>
    </div>
  );
};

export default CoursePage;
