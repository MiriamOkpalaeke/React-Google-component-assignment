import React from 'react'
import Picture from '../Images/avatar.jpg';

const Avatar = () => {
  return (
    <div>
      <img src={Picture} alt="profile picture" width="30px" />
    </div>
  )
}

export default Avatar