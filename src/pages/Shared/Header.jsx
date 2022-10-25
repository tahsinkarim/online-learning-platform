import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className='text-center'>
        <span>Header </span>
        <span>
          <Link to='/register'> Register </Link>
        </span>
        <span>
          <Link to='/login'> Login </Link>
        </span>
      </nav>
    </div>
  );
};

export default Header;
