import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
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
        <span>
          <button onClick={handleLogout}>Logout</button>
        </span>
        <span> {user?.uid && user.email}</span>
      </nav>
    </div>
  );
};

export default Header;
