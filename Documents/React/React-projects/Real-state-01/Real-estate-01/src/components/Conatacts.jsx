import React from 'react'
import { toast } from 'react-toastify';

function Conatacts() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b3b2c62-9937-4087-a8fe-36c1d41d63b7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };
  return (
    <div>
         <div className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
    id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Contact</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto '>With us</p>
    </div>

    <form onSubmit={onSubmit}
     className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className='flex flex-wrap'>

            <div className='w-full md:w-1/2 text-left'>Your name
            <input className='w-full border border-gray-300 rounded mt-2 py-3 px-4 '
            type="text" placeholder='Your name' name='Name' required />
            </div>
        
            <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
            <input className='w-full border border-gray-300 rounded mt-2 py-3 px-4 '
            type="text" placeholder='Your name' name='Email' required />
            </div>
            
        </div>

        <div className='my-6 text-left'> 
            <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-1 h-48 resize-none' 
            name="Message" placeholder='Message' required></textarea>
        </div>
        <button className='bg-blue-600 trxt-white py-2 px-12 mb-10 rounded'>
          {result ? result : "Send Message"}
        </button>
    </form>
    </div>
  )
}

export default Conatacts