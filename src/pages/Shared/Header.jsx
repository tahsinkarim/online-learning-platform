import { mdiCodeGreaterThanOrEqual } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className='navbar bg-base-100 shadow-md'>
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
              className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a>Item 1</a>
              </li>
              <li tabIndex='0'>
                <a className='justify-between'>
                  Parent
                  <svg
                    className='fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                  >
                    <path d='M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z' />
                  </svg>
                </a>
                <ul className='p-2'>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to='/' className='btn btn-ghost normal-case text-xl'>
            <Icon path={mdiCodeGreaterThanOrEqual} size={2}></Icon>
            <span></span>
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
          </ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <button className='btn btn-primary' onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link className='btn btn-primary' to='/login'>
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
