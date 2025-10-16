import React from 'react';

function DoctorCard({ name, specialty, imageUrl }) {
       
    return(
        
         
         <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
         <div className="bg-white text-black rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{name}</h2>
              <p className="text-blue-500 font-semibold text-lg">{specialty}</p>
              <img src={imageUrl} alt={name}
               className="w-36 h-36 rounded-full object-cover mx-auto mb-4"/>
                 
   </div>
   </div>

    );
}export default DoctorCard;