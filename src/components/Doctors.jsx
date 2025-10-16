// import React from "react";

// function Doctors() {
//   return (
//     <div className="bg-gray-900 min-h-screen text-white p-8">
//       {/* Page Title */}
//       <h1 className="text-center text-4xl md:text-5xl font-bold mb-10">
//         Our Doctors
//       </h1>

//       {/* Doctors List */}
//       <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
//         {/* Doctor 1 */}
//         <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
//           <img
//             src="https://randomuser.me/api/portraits/women/44.jpg"
//             alt="Dr. Alice Johnson"
//             className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
//           />
//           <h2 className="text-xl md:text-2xl font-bold mb-2">Dr. Alice Johnson</h2>
//           <p className="text-blue-500 font-semibold text-lg">Cardiologist</p>
//         </div>

//         {/* Doctor 2 */}
//         <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt="Dr. Michael Smith"
//             className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
//           />
//           <h2 className="text-xl md:text-2xl font-bold mb-2">Dr. Michael Smith</h2>
//           <p className="text-blue-500 font-semibold text-lg">Pediatrician</p>
//         </div>

//         {/* Doctor 3 */}
//         <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
//           <img
//             src="https://randomuser.me/api/portraits/women/46.jpg"
//             alt="Dr. Emily Davis"
//             className="w-36 h-36 rounded-full object-cover mx-auto mb-4"
//           />
//           <h2 className="text-xl md:text-2xl font-bold mb-2">Dr. Emily Davis</h2>
//           <p className="text-blue-500 font-semibold text-lg">Neurologist</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Doctors;
import React from 'react';

import DoctorCard from "../components/DoctorCard";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Alice Johnson",
      specialty: "Cardiologist",
      imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
      telephone: "(123) 456-78900",
      email: "alicejohnson@gmail.com"
    },
    {
      name: "Dr. Michael Smith",
      specialty: "Pediatrician",
      imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      telephone: "(987) 654-3210",
      email: "micheal@gmail.com"
    },
    {
      name: "Dr. Emily Davis",
      specialty: "Neurologist",
      imageUrl: "https://randomuser.me/api/portraits/women/46.jpg",
      telephone: "(555) 123-4567",
      email: "emilydavi@gmail.com"
    },
    {
      name: "Dr. John Doe here",
      specialty: "Dermatologist",
      imageUrl: "https://randomuser.me/api/portraits/men/46.jpg",
      telephone: "(444) 987-6543",
      email: "johndoe@23gmail.com"
    },

  ];

  return (
    <>
     <h1 className="text-center text-4xl sm:text-2xl md:text-5xl font-bold mb-10">Our Doctors</h1>
      <div className="flex flex-col md:flex-row flex-wrap gap-6 justify-center items-center bg-gray-900 min-h-screen text-white p-4">
       
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          name={doctor.name}
          specialty={doctor.specialty}
          imageUrl={doctor.imageUrl}
          telephone={doctor.telephone}
          email={doctor.email}
        />
      ))}
       </div>
    </>
  );
}

export default Doctors;
