import React from 'react'
import logo from '../assets/images/logo1.jpg'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-10 lg:px-32 bg-gray-900 w-full overflow-hidden'
    id='Footer'>
        <div className='conatiner mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='h-8 w-8 rounded-full' src={logo } alt="Logo" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, voluptates.</p>
            </div>
            <div className='w-full mb-8 md:w-1/5 md:mb-0'>
              <h3 className='company mb-4 text-lg font-bold '></h3>
              <ul className='flex flex-col text-gray-400 gap-2 to-gray-400'>
              <a className='hover:text-white' href="#Header">Home</a>
                <a className='hover:text-white' href="#About">About us</a>
                <a className='hover:text-white' href="#Contact">Contact us</a> 
                <a className='hover:text-white' href="#">Privacy policy</a>
              </ul>
            </div>
            <div></div>
        </div>
        <div className='w-full md:w-1/2 '>
          <h3 className='text-white text-lg font-bold mb-4'>  Subscribe to our newsletter</h3>
          <p className='text-g mb-4 max-w-80'>The latest news, articles and resources</p>
          <div className='flex gap-2'>
            <input type="Email" placeholder='Enter your email' 
            className='p-2 rounded bg-gray-800 text-gray-400 focus:outline-none w-full md:w-auto border border-gray-400' />
            <button className='px-2 py-4  rounded bg-blue-500 text-white'>
              Subscribe
            </button>
          </div>
        </div>
    </div>
  )
}

export default Footer