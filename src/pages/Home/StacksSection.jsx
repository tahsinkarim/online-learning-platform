import React from "react";

const StacksSection = () => {
  return (
    <div className='mt-20'>
      <div className='px-4 sm:px-8 lg:px-0 mb-20 max-w-7xl mx-auto'>
        <p className='text-lg text-purple-600 font-semibold mb-2'>
          WE GOT YOUR BACK
        </p>
        <h2 className='text-3xl sm:text-6xl font-bold mb-6'>
          Never learn alone.
        </h2>
        <p
          className='font-medium text-lg sm:text-2xl mb-6 max-w-4xl'
          style={{ lineHeight: "40px" }}
        >
          The best part about learning with friends is learning with friends. We
          tightly integrate our learning platform with our Discord community of
          learners, teachers, and our reward system. <br /> Ask questions 24x7,
          answer questions of others, gain XP, complete the courses and grow
          together.
        </p>
        <a
          className='text-lg md:text-2xl text-purple-600 font-semibold mb-2'
          href='https://discord.com/'
        >
          Join our discord server
        </a>
      </div>
    </div>
  );
};

export default StacksSection;
