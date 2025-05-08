import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Projects'
import Testimonials from './components/testimonials'
import Conatacts from './components/Conatacts'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'


function App() {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Project/>
      <Testimonials />
      <Conatacts/>
      <Footer />
    </div>
  )
}

export default App