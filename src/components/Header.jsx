import React, { useState } from 'react';
import '../assets/css/Header.css';
import Sidebar from './SideBar';
import Hamburger from 'hamburger-react';
import UserContainer from './UserContainer';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const closeSidebar = () => {
    setOpen(false);
};
const username = useSelector(state => state.user?.user?.username) || "Guest";

  return (
    <header className="headerStyles">
      <div className="hamburgerWrapper" onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <h1 className="headingStyles">ARTNEST</h1>
      <UserContainer />
      { (username !== "Guest" ) && <Sidebar isOpen={isOpen} closeSidebar={closeSidebar}/> }
    </header>
  );
};

export default Header;
