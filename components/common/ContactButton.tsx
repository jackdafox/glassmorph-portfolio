import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const ContactButton = () => {
  return (
    <button className="bg-[#363636] p-5 px-7 rounded-full flex justify-center items-center gap-2">
      <h1 className="font-medium tracking-tight text-xl text-white">Contact Me</h1>
      <GoArrowUpRight size={'25px'} color='white'/>
    </button>
  )
}

export default ContactButton
