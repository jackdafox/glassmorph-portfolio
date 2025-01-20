import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

const ContactButton = () => {
  return (
    <button className="bg-[#363636] p-3 px-5 md:p-5 md:px-7 rounded-full flex justify-center items-center gap-1 md:gap-2">
      <h1 className="font-medium tracking-tight text-base md:text-xl text-white">Contact Me</h1>
      <GoArrowUpRight size={'20px'} className="md:w-[25px] md:h-[25px] text-white"/>
    </button>
  )
}

export default ContactButton
