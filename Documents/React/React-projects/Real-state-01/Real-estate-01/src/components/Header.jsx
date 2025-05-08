import React from 'react'
import Navbar from './Navbar'
import headerImage from '../assets/images/headerImage.jpg'

function Header() {
  return (
    <div 
    className='min-h-screen bg-black bg-opacity-50 mb-4 bg-cover bg-center flex items-center w-full overflow-hidden '
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${headerImage})`
      }}
      
    id='Header'
    > <Navbar/>
     <div className='container text-center mx-auto py-4 px-6 text-white md:px-20 lg:px-32' >
        <h2 className='text-5xl sm:text-6xl md:[82px] inline-block max-w-3xl font-semibold pt-20'
        >Explore homes that fit your dreams</h2>
     
       <div className='space-x-6 mt-16' >
          <a className='border border-white px-8 py-3 rounded' href="#Projects">Projects</a>
          <a className=' bg-blue-500 px-8 py-3 rounded' href="#Contact">Contact Us</a>
       </div>
     </div>
    </div>
  )
}

export default Header