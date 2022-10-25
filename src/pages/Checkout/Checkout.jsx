import { mdiAccountOutline, mdiEmailOutline, mdiLockOutline } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../Shared/Card";

const Checkout = () => {
  const data = useLoaderData();
  const [userInfo, setUserInfo] = useState();
  const { title, img, author, rating, price, previous_price, course_id } = data;
  const newObj = {
    title: title,
    img: img,
    author: author.name,
    rating: rating,
    price: price,
    previous_price: previous_price,
    id: course_id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    setUserInfo({ name: name, email: email });
  };

  console.log(data);
  return (
    <div className='bg-base-300'>
      <div className='container lg:max-w-5xl mx-auto px-2 md:flex py-16'>
        <div className='md:w-1/2'>
          <form
            onSubmit={handleSubmit}
            className='bg-base-100 p-8 rounded-l-md'
          >
            <div className='text-center mb-10'>
              <h1 className='font-bold text-3xl text-gray-900'>CHECKOUT</h1>
              <p>Enter your information to purchase</p>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-5'>
                <label htmlFor='' className='text-xs font-semibold px-1'>
                  Full name
                </label>
                <div className='flex'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                    <Icon
                      path={mdiAccountOutline}
                      size={1}
                      className='text-gray-400'
                    ></Icon>
                  </div>
                  <input
                    type='text'
                    name='name'
                    className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                    placeholder='John'
                  />
                </div>
              </div>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-5'>
                <label htmlFor='' className='text-xs font-semibold px-1'>
                  Email
                </label>
                <div className='flex'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                    <Icon
                      path={mdiEmailOutline}
                      size={1}
                      className='text-gray-400'
                    ></Icon>
                  </div>
                  <input
                    type='email'
                    name='email'
                    className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                    placeholder='johnsmith@example.com'
                  />
                </div>
              </div>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-12'>
                <label htmlFor='' className='text-xs font-semibold px-1'>
                  Password
                </label>
                <div className='flex'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'>
                    <Icon
                      path={mdiLockOutline}
                      size={1}
                      className='text-gray-400'
                    ></Icon>
                  </div>
                  <input
                    type='password'
                    name='password'
                    className='w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500'
                    placeholder='************'
                  />
                </div>
              </div>
            </div>
            <div className='w-full px-3 mb-5'>
              <button
                type='submit'
                className='block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold'
              >
                <label htmlFor='my-modal' className='modal-button'>
                  Confirm Purchase
                </label>
              </button>
            </div>
          </form>
          {/* Modal Start */}
          <input type='checkbox' id='my-modal' className='modal-toggle' />
          <div className='modal'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>
                Congratulations {userInfo?.name}!
              </h3>
              <p className='py-4'>You have successfully purchased {title}!</p>
              <div className='modal-action'>
                <label htmlFor='my-modal' className='btn'>
                  <Link to='/'>Go Back to Home</Link>
                </label>
              </div>
            </div>
          </div>
          {/* Modal End */}
        </div>
        <div className='md:w-1/2 bg-base-100 rounded-r-md'>
          <div className='p-8'>
            <h2 className='text-center text-3xl font-bold mb-8'>YOUR ITEM</h2>
            <Card data={newObj}></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
