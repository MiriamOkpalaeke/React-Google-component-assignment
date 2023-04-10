import React from 'react'
import SearchIcon from '../Images/download-removebg-preview (2).png';
import SearchVoice from '../Images/pngwing.com.png'
import SearchLens from '../Images/lens.PNG';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';
 
const SearchBar = () => {
  const [enter, setEnter] = useState("0");
  
  const handleEnter = () => {
     setEnter( "")

  }
  return (
    <div className='SearchB'>
     <img className='sIcon' src={SearchIcon} alt="search"  width="15px" height="15px"/>
      <input type="text" onChange={handleEnter}/>
      <img  className='SVoice' src={SearchVoice} alt="voice" width="24px" />
      <img className='SLens' src={SearchLens} alt="lens" width="24px"/>
    </div>
  )
}

export default SearchBar