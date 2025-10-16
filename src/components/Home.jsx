import React from 'react'

function Home() {
  return (
     <div className="flex flex-col md:flex-row flex-wrap items-center justify-center w-full h-screen bg-cover bg-center text-white p-8"
         style={{
           backgroundImage: "url('hospital.jpg')",
           backgroundSize: 'cover',
           backgroundPosition: 'center',  
         }}>
      <section>
      <h1 className=" text-white font-bold text-5xl sm:text-2xl md:text-4xl lg:text-5xl mb-5">Welcome to HopeCare Hospital</h1>
      <p className=' text-white text-2xl leading-relaxed m-auto'> We are committed to providing professional 
        and affordable healthcare services<br></br> 
      for you and your family. Experience trusted medical care with modern technology <br></br>
      and compassionate doctors.</p>
      <button className='rounded-lg bg-blue-600 hover:to-blue-900 transition-all duration-300 hover:scale-105 m-5 p-2'>Book an Appointment</button>
      </section>
      
    </div>
  )
}

export default Home
