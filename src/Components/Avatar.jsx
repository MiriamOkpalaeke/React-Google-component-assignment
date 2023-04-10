import React from 'react'
import Picture from '../Images/avatar2.jpg';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={Picture} alt="profile picture" width="30px" />
    </div>
  )
}

export default Avatar