import React from 'react'
import SearchIcon from '../Images/download-removebg-preview (2).png';
import SearchVoice from '../Images/pngwing.com.png'
import SearchLens from '../Images/lens.PNG';
import { useState } from 'react';



 
const SearchBar = () => {

     const [search, setSearch] = useState(""); // to
     const [updated, setUpdated] = useState("")
 

     const handleSearch = (event) => 
     {   
        setSearch(event.target.value);
       
       ;
     }
     // to target when the enter key is pressed
   const handleKeyDown = (event) => {
    if(event.key === "Enter") {
    setUpdated(search);
    }
  }

    
  

  
  return (
    <div className='SearchB'>
     <img className='sIcon' src={SearchIcon} alt="search"  width="15px" height="15px"/>
     <form > 
      <input type="text" value={search} onChange={handleSearch} onKeyDown={handleKeyDown} />
      </form>
     
      <img  className='SVoice' src={SearchVoice}  alt="voice" width="24px" />
      <img className='SLens' src={SearchLens} alt="lens" width="24px"/>

     {updated}
    </div>
  )
}

export default SearchBar;