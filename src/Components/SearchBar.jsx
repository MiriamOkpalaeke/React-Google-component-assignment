import React from 'react'
import SearchIcon from '../Images/download-removebg-preview (2).png';
import SearchVoice from '../Images/pngwing.com.png'
import SearchLens from '../Images/lens.PNG';
import { useState } from 'react';

let search = [];

 
const SearchBar = () => {

     const [search, setSearch] = useState("");
 

     const handleSearch = (event) => {
        setSearch(event.target.value);
     }



   
    
  

  
  return (
    <div className='SearchB'>
     <img className='sIcon' src={SearchIcon} alt="search"  width="15px" height="15px"/>
     <form > 
      <input type="text" value={search} onChange={handleSearch}  />
      </form>
     
      <img  className='SVoice' src={SearchVoice}  alt="voice" width="24px" />
      <img className='SLens' src={SearchLens} alt="lens" width="24px"/>

     
    </div>
  )
}

export default SearchBar;