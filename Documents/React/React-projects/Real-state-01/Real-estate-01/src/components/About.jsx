import React from 'react'
import brand from '../assets/images/brandImage.jpg'
function About() {
  return (
    <div
    id='About'
    className=' flex flex-col justify-center items-center container mx-auto p-4 md:20 lg:32 w-full overflow-hidden '>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4  decoration-1 font-light '>Our brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate about properties, Dedicated to our vision</p>

        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
  <img src={brand} alt="Brand" className='w-full md:w-1/2 max-w-lg' />

  <div className='flex flex-col items-center md:items-start mt-10 md:mt-0 text-gray-600 md:w-1/2'>
    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-24'>
      <div>
        <p className='text-4xl font-medium text-gray-800'>10+</p>
        <p>Years of excellence</p>
      </div>

      <div>
        <p className='text-4xl font-medium text-gray-800'>20+</p>
        <p>Projects completed</p>
      </div>

      <div>
        <p className='text-4xl font-medium text-gray-800'>25+</p>
        <p>Delivered</p>
      </div>

      <div>
        <p className='text-4xl font-medium text-gray-800'>32+</p>
        <p>Ongoing projects</p>
      </div>
    </div>

    <p className='my-10 max-w-lg text-center md:text-left'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quas itaque incidunt commodi perferendis veniam harum laudantium, enim atque mollitia sint, dolorum iste, ullam natus. Recusandae praesentium ut ab quis!
    </p>
    <button className='bg-blue-600 text-white px-8 py-2 rounded'>
        Learn more
    </button>
  </div>
</div>


    </div>
  )
}

export default About