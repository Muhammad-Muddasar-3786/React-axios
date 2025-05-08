import React, { useState } from 'react'
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import one from '../assets/images/one.jpg'
import two from '../assets/images/two.jpg'
import three from '../assets/images/three.jpg'
import four from '../assets/images/four.jpg'
import five from '../assets/images/five.jpg'
import six from '../assets/images/six.jpg'
import seven from '../assets/images/seven.jpg'

function Project() {

    // const [currentIndex, setCurrentIndex] = useState(0)
    // const [cardsToShow, setCardsToShow] = useState(1)

    // const nextProject = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) )
    // }

    // const prevProject = () => {
    //     setCurrentIndex((prevIndex) =>  prevIndex -1)
    // }


  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting spaces, building legacies</p>

      {/* Slider Buttons */}
      <div 
      className='flex justify-end items-center mb-8'>
        <button className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project'>
          <SlArrowLeft />
        </button>
        <button 
         className='p-3 bg-gray-200 rounded' aria-label='Next project'>
          <SlArrowRight />
        </button>
      </div>

      {/* Slider Container */}
      <div className='overflow-x-auto'>
        <div className='flex gap-6 w-max'>
          {[one, two, three, four, five, six, seven].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Project ${i + 1}`}
              className='w-[250px] h-[200px] object-cover rounded-lg shadow-md'
            />
          ))}

          <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
          <h2 className=''>Title</h2>
          <span>Project price</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project
