import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import '../assets/css/UserContainer.css'
import { Logout } from './Redux/UserSlice';
import { persistor } from './Redux/Store';
import { clearProjects } from './Redux/ProjectSlice';

const UserContainer = () => {
  const nav = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const username = localStorage.getItem("UserName") || "Guest";
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('UserName');
    localStorage.removeItem('id');
    dispatch(Logout()); 
    dispatch(clearProjects());
    persistor.purge(); 
    setShowDropdown(false);
    nav('/login-signup');
  };

  const handleLogin = () => {
    
    setShowDropdown(false);
    nav('/login-signup'); 
  };
  const navigateToProfile = () => {
    setShowDropdown(false);
    nav('/profile'); 
  };

  return (
    <div className="userContainerStyles" onClick={() => setShowDropdown(!showDropdown)}>
      <BsFillPersonFill className='icon' />
      {username}
      {showDropdown && (
        <div className="userDropdown">
          {username === "Guest" ? (
            <button onClick={handleLogin}>Login</button>
          ) : (
            <>
            <button onClick={navigateToProfile}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
          )}
        </div>
      )}
    </div>
  );
};

export default UserContainer;
