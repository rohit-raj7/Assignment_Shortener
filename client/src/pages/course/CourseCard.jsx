// import React, { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import { skillsData } from "../../assets/courseData/data";
// import { Link } from "react-router-dom";
// import { Compass } from "lucide-react";

// export default function SkillsPage() {
//   const [search, setSearch] = useState("");
//   // const [difficulty, setDifficulty] = useState("");

//   const filteredSkills = skillsData.filter((skill) =>
//     skill.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen  px-6 py-10">
//       <h1 className="text-4xl font-bold text-center mb-2">Skills & Courses</h1>
//       <p className="text-center text-gray-600 mb-8">
//         Browse through core tech skills and learn from trusted sources.
//       </p>

//       {/* Search & Filter */}
//       <div className="flex flex-col gap-20 sm:flex-row gap-4 justify-center mb-10">
//         <input
//           type="text"
//           placeholder=" Search skill..."
//           className="px-4 py-2 border rounded-[25px] w-full sm:w-64 focus:outline-none"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />

//         <Link to="/course" className="flex justify-center items-center">
//           <Compass size={32} className="text-black" />
//           Explore courses
//         </Link>
//       </div>

//       {/* Skill Cards */}

//       <div className=" grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {filteredSkills.slice(0, 8).map((skill, idx) => (
//           <div
//             key={idx}
//             className="relative  rounded-2xl  shadow transition transform hover:scale-105 overflow-hidden group"
//           >
//             {/* NEW Badge */}
//             {/* NEW Badge */}
//             {skill.new && (
//               <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg rotate-29 shadow-lg">
//                 NEW
//               </span>
//             )}

//             <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 p-4 rounded-b-4xl mb-4">
//               {/* Image placeholder */}
//               <Link to="/details">
//                 <div
//                   className="h-[180px] w-full mb-4 overflow-hidden rounded-lg bg-cover bg-center"
//                   style={{ backgroundImage: `url(${skill.image})` }}
//                 >
//                   {/* Category at top */}
//                   <p className="m-3 inline-flex justify-center items-center text-sm text-black bg-amber-200 rounded-2xl h-5 font-semibold mb-1 px-3">
//                     {skill.category}
//                   </p>
//                 </div>
//               </Link>

//               {/* Name + Subtitle */}
//               <h2 className="text-lg font-semibold text-gray-900">
//                 {skill.name}
//               </h2>
//               {/* <p className="text-sm text-gray-500 mb-3">{skill.subtitle}</p> */}

//               {/* Rating + Instructor */}
//               <div className="flex items-center justify-between mb-3">
//                 <div className="flex items-center gap-1 text-yellow-500">
//                   <FaStar />
//                   <span className="text-sm font-medium text-black">
//                     {skill.rating}
//                   </span>
//                   <span className="text-xs text-black">
//                     ({skill.ratersCount})
//                   </span>
//                 </div>
//                 <p className="m-3 inline-flex justify-center items-center text-sm text-black bg-green-200 rounded-2xl h-5  mb-1 px-3 italic">
//                   By {skill.instructor || "Unknown Instructor"}
//                 </p>
//               </div>
//               {/* Description */}
//               <p className="clamp-2 text-white text-sm mb-4">{skill.desc}</p>
//             </div>

//             <div className="px-4 pb-4 ">
//               {/* Price and enroll */}
//               <div className="flex justify-between items-center">
//                 <p className="text-yellow-600 font-semibold">₹{skill.price}</p>

//                 <Link
//                   to="/details"
//                   className="oswald border p-2 r hover:scale-110 transition-transform duration-300 inline-block"
//                 >
//                   Enroll now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { skillsData } from "../../assets/courseData/data";
import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function SkillsPage() {
  const [search, setSearch] = useState("");
  // const [difficulty, setDifficulty] = useState("");

  const filteredSkills = skillsData.filter((skill) =>
    skill.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-2">Skills & Courses</h1>
      <p className="text-center text-gray-600 mb-8">
        Browse through core tech skills and learn from trusted sources.
      </p>
      
      {/* Search & Filter */}
      <div className="flex flex-col gap-20 sm:flex-row gap-4 justify-center mb-10">
        <input
          type="text"
          placeholder=" Search skill..."
          className="px-4 py-2 border rounded-[25px] w-full sm:w-64 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link to="/course" className="flex justify-center items-center">
          <Compass size={32} className="text-black" />
          Explore courses
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredSkills.slice(0, 8).map((skill, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl overflow-hidden
                 bg-white/15 backdrop-blur-xl 
                 border border-white/25 shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                 hover:bg-white/25 hover:shadow-[0_8px_35px_rgba(0,0,0,0.25)]
                 transition-all duration-500 hover:scale-[1.04]"
          >
            {/* NEW Badge */}
            {skill.new && (
              <span className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
                NEW
              </span>
            )}

            {/* Banner Section */}
            <div className="p-4">
              <Link to="/details">
                <div
                  className="h-[180px] w-full mb-4 overflow-hidden rounded-2xl bg-cover bg-center 
                       shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]"
                  style={{ backgroundImage: `url(${skill.image})` }}
                >
                  <p className="m-3 inline-flex text-xs font-bold bg-white/80 text-gray-900 rounded-lg px-3 py-[2px]">
                    {skill.category}
                  </p>
                </div>
              </Link>

              {/* Title */}
              <h2 className="text-xl font-bold text-slate-900 drop-shadow-sm">
                {skill.name}
              </h2>

              {/* Rating + Instructor */}
              <div className="flex items-center justify-between mt-2 mb-3">
                <div className="flex items-center gap-1 text-yellow-500">
                  <FaStar />
                  <span className="text-sm font-semibold text-slate-800">
                    {skill.rating}
                  </span>
                  <span className="text-xs text-slate-600">
                    ({skill.ratersCount})
                  </span>
                </div>

                <p className="text-xs bg-white/40 text-slate-900 px-3 py-[3px] rounded-xl backdrop-blur-lg font-medium">
                  By {skill.instructor || "Unknown"}
                </p>
              </div>

              {/* Description */}
              <p className="clamp-2 text-slate-800 text-sm mb-4 leading-snug">
                {skill.desc}
              </p>
            </div>

            {/* Price + Button */}
            <div className="px-4 pb-4 flex justify-between items-center">
              <p className="text-lg font-bold text-indigo-700">
                ₹{skill.price}
              </p>

              <Link
                to="/details"
                className="bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl 
                     shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



 