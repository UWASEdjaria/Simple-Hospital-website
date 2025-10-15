import React from "react";

function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
        Contact Us
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16">
        {/* Address */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Address</h2>
          <p className="text-gray-700">123 HopeCare Street, Kigali, Rwanda</p>
        </div>

        {/* Phone */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Phone</h2>
          <p className="text-gray-700">+250 788 123 456</p>
        </div>

        {/* Email */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Email</h2>
          <p className="text-gray-700">info@hopecare.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="mt-10 max-w-md mx-auto">
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 rounded-lg border border-gray-300 text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-2 rounded-lg border border-gray-300 text-black"
          />
          <textarea
            placeholder="Your Message"
            className="p-2 rounded-lg border border-gray-300 text-black"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 rounded-lg hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
