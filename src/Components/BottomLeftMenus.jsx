import React from 'react'
import BottomLinks from './BottomLinks'

const BottomLeftMenus = () => {
  return (
    <div className='bottomMenu'>
      <BottomLinks link={"About"}/>
      <BottomLinks link={"Advertising"}/>
      <BottomLinks link={"Business"}/>
      <BottomLinks link={"How Search works"}/>
    </div>
  )
}

export default BottomLeftMenus;