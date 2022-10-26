import React from "react";

const Faq = () => {
  return (
    <div className='px-5 container mx-auto max-w-5xl'>
      <p className='mb-0 mt-16 max-w-2xl'>
        <small>OCTOBER 27, 2022 / #CODIT</small>
      </p>
      <h1 className='text-3xl sm:text-5xl font-bold  mb-4'>
        About Code It - Frequently Asked Questions
      </h1>
      <div className=''>
        <img
          className='w-full object-cover'
          src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt=''
        />
      </div>
      <div className='sm:mx-16 lg:mx-0'>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>What is Code It ?</h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            Code It is a community of thousands of people around the world who
            are learning to code together. You can learn to code with our
            courses, programming projects, and interview preparation for
            developer jobs.
          </p>
        </div>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            How can you help me learn to code?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            You'll learn to code by completing coding challenges and building
            projects. You'll also earn verified certifications along the way.
          </p>
        </div>
        <div className='mt-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            Can Code It help me get a job as a software developer?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            Yes. Every year, hundreds of people who join the Code It community
            get their first software developer job.
          </p>
        </div>
        <div className='my-16 max-w-2xl'>
          <h2 className='text-3xl font-bold'>
            How long will it take me to finish each of Code It's certifications?
          </h2>
          <p className='mt-4 text-xl sm:text-2xl'>
            Each certification takes around 300 hours of dedicated learning.
            Some people may take longer. These certifications are completely
            self-paced, so take as long as you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
