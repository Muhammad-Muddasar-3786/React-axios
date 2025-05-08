import React, { useEffect, useState } from 'react'
import logo from '../assets/images/logo1.jpg'
import { FiAlignRight } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center px-4 py-6 md:px-20 lg:px-32 bg-transparent'>
        <img className='h-[46px] w-[46px] rounded-full' src={logo} alt="Header" />

        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='hover:text-gray-400'>Home</a>
          <a href="#About" className='hover:text-gray-400'>About</a>
          <a href="#Projects" className='hover:text-gray-400'>Projects</a>
          <a href="#Testimonials" className='hover:text-gray-400'>Testimonials</a>
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

        {/* Hamburger Icon */}
        <div className='text-white md:hidden text-4xl cursor-pointer' onClick={() => setShowMobileMenu(true)}>
          <FiAlignRight />
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className='md:hidden fixed inset-0 bg-white z-50 transition-all duration-300'>
          {/* Close Icon */}
          <div className='text-4xl cursor-pointer absolute top-5 right-5' onClick={() => setShowMobileMenu(false)}>
            <AiOutlineClose />
          </div>

          <ul className='flex flex-col items-center gap-4 mt-20 text-lg font-medium text-black'>
            <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2' href="#Header">Home</a>
            <a onClick={() => setShowMobileMenu(false)} className='px-4 py-2' href="#About">About</a>
            <a onClick={() => setShowMobileMenu(false)}  className='px-4 py-2' href="#Projects">Projects</a>
            <a onClick={() => setShowMobileMenu(false)}  className='px-4 py-2' href="#Testimonials">Testimonials</a>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
