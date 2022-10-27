import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div
        className={`navbar shadow-md ${
          toggle ? "bg-base-100" : "bg-hero-light-black text-white"
        }`}
      >
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex='0' className='btn btn-ghost md:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex='0'
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 ${
                toggle ? "bg-base-100" : "bg-hero-light-black text-white"
              }`}
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/courses'>Courses</Link>
              </li>
              <li>
                <Link to='/faq'>FAQ</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li className='items-center'>
                <button>
                  <input
                    onChange={handleToggle}
                    type='checkbox'
                    className='toggle py-1'
                    checked={!toggle}
                  />
                </button>
              </li>
            </ul>
          </div>
          <Link
            to='/'
            className='btn btn-ghost normal-case text-lg md:text-2xl font-bold'
          >
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 md:w-8 md:h-8'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
            </span>
            Code It
          </Link>
        </div>
        <div className='navbar-center hidden md:flex'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>Courses</Link>
            </li>
            <li>
              <Link to='/faq'>FAQ</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li className='items-center'>
              <button>
                <input
                  onChange={handleToggle}
                  type='checkbox'
                  className='toggle py-1'
                  checked={!toggle}
                />
              </button>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
              <img
                className='w-9 h-9 object-cover rounded-full mx-2'
                src={user.photoURL}
                alt=''
              />
            </div>
          ) : (
            <Link className='btn btn-primary' to='/login'>
              Login
            </Link>
          )}

          {user?.uid && (
            <button className='btn btn-primary' onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
