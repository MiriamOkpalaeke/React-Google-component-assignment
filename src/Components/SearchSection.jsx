import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'
import Button from './Button'
import Language from './Language'

const SearchSection = () => {
  return (
    <div className='SearchS'>
      <Logo/>
      <SearchBar/>
      <Button/>
      <Language/>
    </div>
  )
}

export default SearchSection