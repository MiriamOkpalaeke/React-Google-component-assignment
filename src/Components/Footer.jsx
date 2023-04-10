import React from 'react'
import Location from './Location'
import BottomLeftMenus from './BottomLeftMenus'
import BottomRightMenu from './BottomRightMenu'
import FooterText from './FooterText'

const Footer = () => {
  return (
    <div className='footer'>
      <Location/>
          <div className='lastFooter'>
        <BottomLeftMenus/>
        <FooterText/>
        <BottomRightMenu/>
      </div>
    </div>
  )
}

export default Footer