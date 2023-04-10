import React from 'react'
import FooterImage from '../Images/download.png';
import BottomLinks from './BottomLinks';

const FooterText = () => {
  return (
    <div className='bottomMenuText'>
      <img src={FooterImage} alt="carbon" width="12px"/>
       <BottomLinks link={"Carbon neutral since 2007"}/>
      
    </div>
  )
}

export default FooterText