// import React from 'react'

// export default function ProjectCards(title,description,image,tech) {
//   return (
//     <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300  cursor-pointer'>
//             <img src={image} alt={title} className='w-full h-60 object-cover'/>
//             <div className='p-6'>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 <div>
//                     {
//                         tech.map((item, index)=>(
//                             <span key={index}>
//                                 {item}
//                             </span>
//                         ))
//                     }
//                 </div>
//             </div>
//     </div>
//   )
// }

import React from "react";

export default function ProjectCards({
  title,
  description,
  image,
  tech,
}) {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 padding-2">{title}</h3>

        <p className="text-gray-400 mt-2 margin-1 padding-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4 margin-1">
          {tech.map((item, index) => (
            <span
              key={index}
              className="bg-gray-700 rounded-full text-sm padding-2"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
