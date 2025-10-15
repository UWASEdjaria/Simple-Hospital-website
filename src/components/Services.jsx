import React from "react";

function Services() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-8">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
        Our Services
      </h1>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
        {/* Service 1 */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">General Checkup</h2>
          <p className="text-gray-700 font-medium">
            Comprehensive health evaluation for adults and children.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Emergency Care</h2>
          <p className="text-gray-700 font-medium">
            24/7 emergency medical services with experienced staff.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Surgery</h2>
          <p className="text-gray-700 font-medium">
            State-of-the-art surgical facilities and expert surgeons.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-2">Lab & Diagnostics</h2>
          <p className="text-gray-700 font-medium">
            Advanced lab testing and accurate diagnostic services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
