import React from 'react';
import Apps from './Apps';
import Avatar from './Avatar';
import MenuItems from './MenuItems';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='HeaderContainer'>
      <MenuItems/>
      <Apps/>
      <Avatar/>
    </div>
  )
}

export default Header;