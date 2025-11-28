// import React, { useState } from "react";
// import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { Clock, Calendar, User ,Video} from "lucide-react";
// import img1 from "../../assets/courseData/img/1.svg"
// import img2 from "../../assets/courseData/img/2.svg"
// import img3 from "../../assets/courseData/img/3.svg"
// import BannerSection from "../../components/banner/offer.jsx";
// const CourseDetails = () => {
 
//   const [openSection, setOpenSection] = useState(null);
// // data.js
// const specializationData = [
//   "In today's data-driven world, Python is an essential tool for unlocking insights.",
//   "This Specialization will guide you from a Python beginner to someone who can confidently apply Python to solve complex data problems.",
//   "You'll gain hands-on experience with core Python syntax, data structures, and essential libraries like NumPy and pandas.",
//   "Google experts will guide you through this Specialization by providing hands-on activities that simulate relevant tasks.",
//   "You will learn to frame analysis problems using structured thinking and SMART questions.",
//   "Write efficient Python code in Jupyter Notebooks, mastering variables, functions, and data structures.",
//   "Manipulate and analyze datasets with pandas and NumPy, learning to filter, group, and aggregate data.",
//   "Clean and prepare real-world data, handling missing values and validating data quality.",
//   "Summarize and interpret data using descriptive statistics to support business decisions.",
//   "By the time you're finished, you'll be able to confidently apply Python to solve complex data problems and communicate your findings to stakeholders.",
//   "Apply your Python skills through hands-on projects that simulate real data professional workflows.",
// ];

//   const course = {
//     name: "React Masterclass",
//     subtitle: "Build modern UIs with React, Hooks, and Tailwind CSS",
//     level: "Intermediate",
//     rating: 4.8,
//     ratersCount: "12,340",
//     instructor: "John Doe",
//     image:
//       "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=60",
//     duration: "18 hours",
//     updated: "October 2025",
//     price: "₹1,499",
//     content: [
//       {
//         sectionTitle: "Introduction to React",
//         lessons: [
//           { order: 1, title: "What is React?", videoUrl: "#" },
//           { order: 2, title: "Setting up your Environment", videoUrl: "#" },
//         ],
//       },
//       {
//         sectionTitle: "React Fundamentals",
//         lessons: [
//           { order: 1, title: "JSX and Components", videoUrl: "#" },
//           { order: 2, title: "Props and State", videoUrl: "#" },
//         ],
//       },
//     ],
//   };

//   const [showMore, setShowMore] = useState(false);

//   const visibleData = showMore ? specializationData : specializationData.slice(0, 5);

//   const levelColor = {
//     Beginner: "bg-green-100 text-green-800",
//     Intermediate: "bg-yellow-100 text-yellow-800",
//     Advanced: "bg-red-100 text-red-800",
//   };

//   return (
//     <div className="max-w-6xl mx-auto mt-10 p-6">
// <BannerSection />



//       {/* --- Top Split Section --- */}
//       <div className="mt-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
//   transition-all duration-500 shadow-lg rounded-2xl p-6 mb-6 
//   flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">

//   {/* Left: Image */}
//   <div className="mx-auto bg-white rounded-2xl shadow-md overflow-hidden w-56 sm:w-64 md:w-72 lg:w-80">
//     <img
//       src={course.image}
//       alt={course.name}
//       className="w-full h-auto object-contain p-3 rounded-2xl"
//     />
//   </div>

//   {/* Divider (visible only on desktop) */}
//   <div className="hidden md:flex items-center h-64">
//     <div className="w-px h-full bg-white/40"></div>
//   </div>

//   {/* Right: Course Info */}
//   <div className="flex-1 text-center md:text-left text-white">
//     <h1 className="text-2xl sm:text-3xl font-bold mb-2">{course.name}</h1>
//     <p className="text-base sm:text-lg mb-3">{course.subtitle}</p>

//     <span
//       className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${levelColor[course.level]}`}
//     >
//       {course.level}
//     </span>

//     {/* Course details with icons */}
//     <div className="mt-5 space-y-3">
//       <div className="flex items-center justify-center md:justify-start gap-2">
//         <Clock size={18} className="text-blue-200 shrink-0" />
//         <span className="text-sm sm:text-base">
//           <span className="font-semibold">Duration:</span> {course.duration}
//         </span>
//       </div>

//       <div className="flex items-center justify-center md:justify-start gap-2">
//         <Calendar size={18} className="text-blue-200 shrink-0" />
//         <span className="text-sm sm:text-base">
//           <span className="font-semibold">Updated:</span> {course.updated}
//         </span>
//       </div>

//       <div className="flex items-center justify-center md:justify-start gap-2">
//         <User size={18} className="text-blue-200 shrink-0" />
//         <span className="text-sm sm:text-base">
//           <span className="font-semibold">Instructor:</span> {course.instructor}
//         </span>
//       </div>
//     </div>

//     {/* Price & Button */}
//     <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-3">
//       <p className="text-xl sm:text-2xl font-bold">{course.price}</p>
//       <button
//   className="
//     bg-gradient-to-r
//     from-blue-400
//     via-purple-400
//     to-pink-400
//     text-white
//     px-6 py-2 
//     rounded-md 
//     text-sm sm:text-base 
//     border 
//     shadow-sm
//     transition-all duration-300
//                 hover:scale-110
//   "
// >
//   Enroll Now
// </button>


//     </div>
//   </div>
// </div>


//       {/* --- Rating Section --- */}
//       <div className="bg-gray-50 p-5 rounded-xl shadow mb-6 flex items-center justify-center gap-2 text-center">
//         <FaStar className="text-yellow-500" />
//         <span className="font-semibold text-gray-800 text-lg">
//           {course.rating} ({course.ratersCount} ratings)
//         </span>
//       </div>

//       {/* --- Specialization Description Section --- */}
//       <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//   Specialization - 6 Course Series
// </h2>

// <ul className="list-disc list-inside space-y-2 text-gray-700">
//   {visibleData.map((line, index) => (
//     <li key={index}>{line}</li>
//   ))}
// </ul>

// <button
//   onClick={() => setShowMore(!showMore)}
//   className="mt-3 text-blue-600 font-medium hover:underline"
// >
//   {showMore ? "Read Less" : "Read More"}
// </button>


//       {/* --- Course Content Section --- */}
//       <h1 className="mt-10 font-semibold text-2xl">Curiculam </h1>
//       <div className="bg-white shadow-lg border-1 rounded-xl m-3 p-6">
//         <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
//           <h2 className="text-2xl font-semibold text-gray-900 text-center sm:text-left">
//             Course Lessons
//           </h2>

//           <button
//             onClick={() =>
//               setOpenSection(openSection === "all" ? null : "all")
//             }
//             className=" text-black px-4 py-1 rounded-md text-sm hover:bg-black hover:text-amber-50 transition"
//           >
//             {openSection === "all" ? "Collapse All" : "Expand All"}
//           </button>
//         </div>

//         {course.content.map((section, index) => (
//           <div key={index} className="border-b border-gray-200 mb-3 pb-3">
//             <div
//               onClick={() =>
//                 setOpenSection(openSection === index ? null : index)
//               }
//               className="flex justify-between items-center cursor-pointer hover:text-blue-600"
//             >
//               <h3 className="font-semibold text-lg">{section.sectionTitle}</h3>
//               {openSection === index || openSection === "all" ? (
//                 <FaChevronUp />
//               ) : (
//                 <FaChevronDown />
//               )}
//             </div>

//             {(openSection === index || openSection === "all") && (
//               <ul className="mt-3 space-y-2 text-gray-700">
//                 {section.lessons.map((lesson) => (
//                   <li
//                     key={lesson.order}
//                     className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
//                   >
//                     <span>{lesson.title}</span>
//                     <a
//                       href={lesson.videoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-blue-500 text-sm hover:underline"
//                     >
//                        <Video className="w-6 h-6 text-black" />
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </div>
//       {/* --- block Note Section --- */}
      
//       <div className="mt-10 p-6 bg-gray-100 rounded-2xl">
//   <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8  p-6 md:p-10 rounded-2xl">
    
//     {/* Card 1 */}
//     <div className="w-64 md:w-60 bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
//                 hover:scale-110">
//       <img
//         src={img1}
//         alt="Image 1"
//         className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
//       />
//       <h1 className="text-sm md:text-base text-gray-800 font-medium">
//         You can start NxtWave Academy right after Intermediate/12th
//       </h1>
//     </div>

//     {/* Card 2 */}
//     <div className=" h-71 w-64 md: h-77   bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
//                 hover:scale-110">
//       <img
//         src={img2}
//         alt="Image 2"
//         className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
//       />
//       <h1 className="text-sm md:text-base text-gray-800 font-medium">
//         Learn 6 hours a week alongside college
//       </h1>
//     </div>

//     {/* Card 3 */}
//     <div className="w-64 md:w-60 bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
//                 hover:scale-110">
//       <img
//         src={img3}
//         alt="Image 3"
//         className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
//       />
//       <h1 className="text-sm md:text-base text-gray-800 font-medium">
//         Land a high-paid software job irrespective of your college/branch
//       </h1>
//     </div>
//   </div>
// </div>

        
//       {/* --- Footer Note Section --- */}
//       <div className="mt-30 flex justify-center items-center text-xl mt-10 h-60 p-6 bg-gray-100 rounded-2xl text-center text-gray-800"> 
//       Our top notch teams and AI-powered platforms help you learn programming, not just coding.
//       </div>
//     </div>
//   );
// };

// export default CourseDetails;

 







import React, { useState } from "react";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Clock, Calendar, User ,Video} from "lucide-react";
import img1 from "../../assets/courseData/img/1.svg"
import img2 from "../../assets/courseData/img/2.svg"
import img3 from "../../assets/courseData/img/3.svg"
import BannerSection from "../../components/banner/offer.jsx";
const CourseDetails = () => {
 

  const [openSection, setOpenSection] = useState(null);
// data.js
const specializationData = [
  "In today's data-driven world, Python is an essential tool for unlocking insights.",
  "This Specialization will guide you from a Python beginner to someone who can confidently apply Python to solve complex data problems.",
  "You'll gain hands-on experience with core Python syntax, data structures, and essential libraries like NumPy and pandas.",
  "Google experts will guide you through this Specialization by providing hands-on activities that simulate relevant tasks.",
  "You will learn to frame analysis problems using structured thinking and SMART questions.",
  "Write efficient Python code in Jupyter Notebooks, mastering variables, functions, and data structures.",
  "Manipulate and analyze datasets with pandas and NumPy, learning to filter, group, and aggregate data.",
  "Clean and prepare real-world data, handling missing values and validating data quality.",
  "Summarize and interpret data using descriptive statistics to support business decisions.",
  "By the time you're finished, you'll be able to confidently apply Python to solve complex data problems and communicate your findings to stakeholders.",
  "Apply your Python skills through hands-on projects that simulate real data professional workflows.",
];

  const course = {
    name: "React Masterclass",
    subtitle: "Build modern UIs with React, Hooks, and Tailwind CSS",
    level: "Intermediate",
    rating: 4.8,
    ratersCount: "12,340",
    instructor: "John Doe",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=60",
    duration: "18 hours",
    updated: "October 2025",
    price: "₹1,499",
    content: [
      {
        sectionTitle: "Introduction to React",
        lessons: [
          { order: 1, title: "What is React?", videoUrl: "#" },
          { order: 2, title: "Setting up your Environment", videoUrl: "#" },
        ],
      },
      {
        sectionTitle: "React Fundamentals",
        lessons: [
          { order: 1, title: "JSX and Components", videoUrl: "#" },
          { order: 2, title: "Props and State", videoUrl: "#" },
        ],
      },
    ],
  };

  const [showMore, setShowMore] = useState(false);

  const visibleData = showMore ? specializationData : specializationData.slice(0, 5);

  const levelColor = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-yellow-100 text-yellow-800",
    Advanced: "bg-red-100 text-red-800",
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
<BannerSection />



      {/* --- Top Split Section --- */}
      <div className="mt-0.5 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 
  transition-all duration-500 shadow-lg rounded-2xl p-6 mb-6 
  flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">

  {/* Left: Image */}
  <div className="mx-auto bg-white rounded-2xl shadow-md overflow-hidden w-56 sm:w-64 md:w-72 lg:w-80">
    <img
      src={course.image}
      alt={course.name}
      className="w-full h-auto object-contain p-3 rounded-2xl"
    />
  </div>

  {/* Divider (visible only on desktop) */}
  <div className="hidden md:flex items-center h-64">
    <div className="w-px h-full bg-white/40"></div>
  </div>

  {/* Right: Course Info */}
  <div className="flex-1 text-center md:text-left text-white">
    <h1 className="text-2xl sm:text-3xl font-bold mb-2">{course.name}</h1>
    <p className="text-base sm:text-lg mb-3">{course.subtitle}</p>

    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${levelColor[course.level]}`}
    >
      {course.level}
    </span>

    {/* Course details with icons */}
    <div className="mt-5 space-y-3">
      <div className="flex items-center justify-center md:justify-start gap-2">
        <Clock size={18} className="text-blue-200 shrink-0" />
        <span className="text-sm sm:text-base">
          <span className="font-semibold">Duration:</span> {course.duration}
        </span>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-2">
        <Calendar size={18} className="text-blue-200 shrink-0" />
        <span className="text-sm sm:text-base">
          <span className="font-semibold">Updated:</span> {course.updated}
        </span>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-2">
        <User size={18} className="text-blue-200 shrink-0" />
        <span className="text-sm sm:text-base">
          <span className="font-semibold">Instructor:</span> {course.instructor}
        </span>
      </div>
    </div>

    {/* Price & Button */}
    <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center md:justify-start gap-3">
      <p className="text-xl sm:text-2xl font-bold">{course.price}</p>
      <button
  className="
    bg-gradient-to-r
    from-blue-400
    via-purple-400
    to-pink-400
    text-white
    px-6 py-2 
    rounded-md 
    text-sm sm:text-base 
    border 
    shadow-sm
    transition-all duration-300
                hover:scale-110
  "
>
  Enroll Now
</button>


    </div>
  </div>
</div>


      {/* --- Rating Section --- */}
      <div className="bg-gray-50 p-5 rounded-xl shadow mb-6 flex items-center justify-center gap-2 text-center">
        <FaStar className="text-yellow-500" />
        <span className="font-semibold text-gray-800 text-lg">
          {course.rating} ({course.ratersCount} ratings)
        </span>
      </div>

      {/* --- Specialization Description Section --- */}
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
  Specialization - 6 Course Series
</h2>

<ul className="list-disc list-inside space-y-2 text-gray-700">
  {visibleData.map((line, index) => (
    <li key={index}>{line}</li>
  ))}
</ul>

<button
  onClick={() => setShowMore(!showMore)}
  className="mt-3 text-blue-600 font-medium hover:underline"
>
  {showMore ? "Read Less" : "Read More"}
</button>


      {/* --- Course Content Section --- */}
      <h1 className="mt-10 font-semibold text-2xl">Curiculam </h1>
      <div className="bg-white shadow-lg border-1 rounded-xl m-3 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
          <h2 className="text-2xl font-semibold text-gray-900 text-center sm:text-left">
            Course Lessons
          </h2>

          <button
            onClick={() =>
              setOpenSection(openSection === "all" ? null : "all")
            }
            className=" text-black px-4 py-1 rounded-md text-sm hover:bg-black hover:text-amber-50 transition"
          >
            {openSection === "all" ? "Collapse All" : "Expand All"}
          </button>
        </div>

        {course.content.map((section, index) => (
          <div key={index} className="border-b border-gray-200 mb-3 pb-3">
            <div
              onClick={() =>
                setOpenSection(openSection === index ? null : index)
              }
              className="flex justify-between items-center cursor-pointer hover:text-blue-600"
            >
              <h3 className="font-semibold text-lg">{section.sectionTitle}</h3>
              {openSection === index || openSection === "all" ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </div>

            {(openSection === index || openSection === "all") && (
              <ul className="mt-3 space-y-2 text-gray-700">
                {section.lessons.map((lesson) => (
                  <li
                    key={lesson.order}
                    className="flex items-center justify-between bg-gray-50 p-3 rounded-md"
                  >
                    <span>{lesson.title}</span>
                    <a
                      href={lesson.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 text-sm hover:underline"
                    >
                       <Video className="w-6 h-6 text-black" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* --- block Note Section --- */}
      
      <div className="mt-10 p-6 bg-gray-100 rounded-2xl">
  <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8  p-6 md:p-10 rounded-2xl">
    
    {/* Card 1 */}
    <div className="w-64 md:w-60 bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
                hover:scale-110">
      <img
        src={img1}
        alt="Image 1"
        className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
      />
      <h1 className="text-sm md:text-base text-gray-800 font-medium">
        You can start NxtWave Academy right after Intermediate/12th
      </h1>
    </div>

    {/* Card 2 */}
    <div className=" h-71 w-64 md: h-77   bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
                hover:scale-110">
      <img
        src={img2}
        alt="Image 2"
        className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
      />
      <h1 className="text-sm md:text-base text-gray-800 font-medium">
        Learn 6 hours a week alongside college
      </h1>
    </div>

    {/* Card 3 */}
    <div className="w-64 md:w-60 bg-white border rounded-2xl shadow-md p-4 text-center transition-transform duration-300 
                hover:scale-110">
      <img
        src={img3}
        alt="Image 3"
        className="w-full h-40 md:h-48 object-contain rounded-xl mb-3"
      />
      <h1 className="text-sm md:text-base text-gray-800 font-medium">
        Land a high-paid software job irrespective of your college/branch
      </h1>
    </div>
  </div>
</div>

        
      {/* --- Footer Note Section --- */}
      <div className="mt-30 flex justify-center items-center text-xl mt-10 h-60 p-6 bg-gray-100 rounded-2xl text-center text-gray-800"> 
      Our top notch teams and AI-powered platforms help you learn programming, not just coding.
      </div>
    </div>
  );
};

export default CourseDetails;

 