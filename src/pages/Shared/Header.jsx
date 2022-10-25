import { mdiCodeGreaterThanOrEqual } from "@mdi/js";
import Icon from "@mdi/react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [toggle, setToggle] = useState(true);

  const userImage = () => {
    if (user.photoURL) {
      return user.photoURL;
    }
    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR-l27mIia8PZNl8CAp-E65971pr0dLEfnwgOeOLIVHErs7yEixuAQ8hEd9gAbArgNAw4&usqp=CAU";
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };
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
      <div
        className={`navbar bg-base-100 shadow-md ${
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
              <li>
                <p
                  onClick={handleToggle}
                  className={`${
                    toggle
                      ? "bg-hero-light-black text-white"
                      : "bg-base-100 text-black"
                  }`}
                >
                  {toggle ? "Dark Theme" : "Light Theme"}
                </p>
              </li>
            </ul>
          </div>
          <Link
            to='/'
            className='btn btn-ghost normal-case text-lg md:text-2xl font-bold'
          >
            <Icon path={mdiCodeGreaterThanOrEqual} size={1}></Icon>
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
            <li>
              <p
                onClick={handleToggle}
                className={`${
                  toggle
                    ? "bg-hero-light-black text-white"
                    : "bg-base-100 text-black"
                }`}
              >
                {toggle ? "Dark Theme" : "Light Theme"}
              </p>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          {user?.uid ? (
            <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
              <img
                className='w-9 h-9 object-cover rounded-full mx-2'
                src={userImage()}
                alt=''
              />
            </div>
          ) : (
            <Link className='btn btn-primary' to='/login'>
              Login{" "}
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
