import React from "react";
function About() {
    return (
    <div className="bg-gray-900 flex flex-col  justify-center w-full min-h-screen text-white p-8 gap-6">
      {/* About Section */}
      <section className="w-full max-w-2xl text-center m-auto">
        <h1 className="text-gray-300 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-5" >HopeCare Hospital</h1>

        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed  py-3 px-2 text-center">
          Founded in 1995, HopeCare Hospital has been providing high-quality healthcare services to the community for over 25 years.
          Our mission is to deliver compassionate and patient-centered care, combining modern medical technology with
          a human touch. We are guided by our core values: integrity, excellence, and commitment to the well-being of every patient.
        </p>

      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2  className="text-gray-300 text-center font-bold text-lg sm:text-1xl md:text-2xl lg:text-3xl m-5" >Why Choose Us</h2>
        <ul className="flex flex-col md:flex-row  p-4 gap-4 italic justify-between items-center">
          <li className=" flex  border max-w-sm h-auto bg-white text-gray-700 shadow-lg p-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">Experienced and compassionate medical staff.</li>
          <li className=" flex  border max-w-sm h-auto bg-white text-black shadow-lg p-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">State-of-the-art medical technology and facilities.</li>
          <li className=" flex  border max-w-sm h-auto bg-white text-black shadow-lg p-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">Patient-centered care with personalized treatment plans.</li>
          <li className=" flex border max-w-sm  h-auto bg-white text-black shadow-lg p-2 rounded-lg font-bold transition-all duration-300 hover:scale-105">Affordable healthcare services for the whole family.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section>
        <button className="flex justify-center  m-auto border-transparent bg-gray-600 rounded-lg p-2 transition-all duration-300 hover:scale-105 ">Book an Appointment</button>
      </section>
    </div>
    )

} export default About