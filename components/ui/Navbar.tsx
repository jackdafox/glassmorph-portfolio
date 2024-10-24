import React from 'react'
import DevelopedMark from '../common/DevelopedMark'
import ContactButton from '../common/ContactButton'

const Navbar = () => {
  return (
    <nav className="flex justify-between fixed px-4 py-3 w-full">
      <DevelopedMark/>
      <ContactButton/>
    </nav>
  )
}

export default Navbar
