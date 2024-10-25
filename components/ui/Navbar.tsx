import React from 'react'
import DevelopedMark from '../common/DevelopedMark'
import ContactButton from '../common/ContactButton'

const Navbar = () => {
  return (
    <header className="flex justify-between items-center fixed px-24 py-3 w-full z-[100]">
      <DevelopedMark/>
      <ContactButton/>
    </header>
  )
}

export default Navbar
