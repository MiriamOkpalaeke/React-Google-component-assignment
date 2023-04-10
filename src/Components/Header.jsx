import React from 'react';
import Apps from './Apps';
import Avatar from './Avatar';
import MenuItems from './MenuItems';


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