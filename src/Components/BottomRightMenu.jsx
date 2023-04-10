import React from 'react'
import BottomLinks from './BottomLinks'


const BottomRightMenu = () => {
  return (
    <div className='bottomMenu'>
      <BottomLinks link={"Privacy"}/>
      <BottomLinks link={"Terms"}/>
      <BottomLinks link={"Settings"}/>
    </div>
  )
}

export default BottomRightMenu