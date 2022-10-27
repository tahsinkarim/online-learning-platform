import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Checkout = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);

  //Check out confirmation
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    toast.success("Successfully Purchased");
  };
  return (
    <div className='bg-base-300 py-20'>
      <div className='container lg:max-w-5xl mx-auto px-2 md:flex py-10 bg-base-100'>
        <div className='md:w-1/2'>
          <form
            onSubmit={handleSubmit}
            className='bg-base-100 p-8 rounded-l-md'
          >
            <div className='text-center mb-10'>
              <h1 className='font-bold text-3xl'>CHECKOUT</h1>
              <p>Enter your information to purchase</p>
            </div>
            <div className='flex -mx-3'>
              <div className='w-full px-3 mb-5'>
                <label htmlFor='' className='text-xs font-semibold px-1'>
                  Full name
                </label>
                <div className='flex'>
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'></div>
                  <input
                    type='text'
                    name='name'
                    defaultValue={user?.displayName && user.displayName}
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
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'></div>
                  <input
                    readOnly
                    defaultValue={user?.email}
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
                  <div className='w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center'></div>
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
              <h3 className='font-bold text-lg'>Congratulations!</h3>
              <p className='py-4'>
                You have successfully purchased the course:
                <span className='font-semibold'>{data.title} </span>
                for
              </p>
              <p className='py-4'>
                Email: <span className='font-semibold'>{user.email}</span>
              </p>
              <div className='modal-action'>
                <label htmlFor='my-modal' className='btn'>
                  <Link to='/'>Go Back to Home</Link>
                </label>
              </div>
            </div>
          </div>
          {/* Modal End */}
        </div>
        <div className='md:w-1/2 rounded-r-md'>
          <div className='p-8'>
            <h2 className='text-center text-3xl font-bold mb-8'>YOUR COURSE</h2>
          </div>
          <div>
            <div className='card mx-8 bg-base-200 rounded'>
              <figure>
                <img className='w-full' src={data.img} alt={data.title} />
              </figure>
              <div className='card-body px-4'>
                <h2 className='card-title'>{data.title}</h2>
                <p className='text-lg font-bold'>Price: ${data.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
