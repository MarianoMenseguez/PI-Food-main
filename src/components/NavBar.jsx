import React from 'react'
import SearchBar from './SearchBar'
import './NavBar.css'

export default function NavBar({onSearch}) {
  return (
    <div className='nav' >
      <SearchBar onSearch={onSearch} />
    </div>
  )
}

