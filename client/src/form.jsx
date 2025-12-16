import React, { useState } from "react";

// Mock Data
const branches = [
  "Electronics & Communication Engineering",
  "Computer Science Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "Information Technology",
  "Electronics Engineering",
  "Other",
];

// const semesters = ["1", "2", "3", "4", "5", "6", "7", "8"];
const semesters = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
];

const courseModes = ["offline", "online", "both"];

const internshipDurations = [
  "1 Week",
  "2 Weeks",
  "3 Weeks",
  "4 Weeks",
  "5 Weeks",
  "6 Weeks",
  "7 Weeks",
  "8 Weeks",
  "9 Weeks",
  "10 Weeks",
  "11 Weeks",
  "12 Weeks",
];

// Branch-specific courses mapping
const branchCoursesMap = {
  "Computer Science Engineering": {
    offline: [
      "Full Stack Web Development",
      "Python Development",
      "Java Development",
      "Frontend Web Development",
      "Backend Web Development",
      "Mobile App Development",
      "Android App Development",
      "Data Science & Analytics",
      "AI & Machine Learning",
      "AI Prompt Engineering",
      "Robotics",
      "Robotics & AI",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Cyber Security",
      "Cloud Computing",
      "DevOps",
      "Software Testing",
      "Automation Testing",
      "Blockchain Development",
      "UI / UX Design",
      "Graphic Design",
      "Web Designing",
      "Game Development",
      "Database Management",
      "Big Data",
      "Computer Networking",
      "Ethical Hacking",
      "System Administration",
      "IT Support",
      "Digital Marketing",
      "E-Commerce Technology",
      "AR / VR Development",
      "Open Source Development",
      "Research & Development",
      "Information Technology",
    ],
    online: [
      "Full Stack Web Development",
      "Python Development",
      "Java Development",
      "Frontend Web Development",
      "Backend Web Development",
      "Mobile App Development",
      "Android App Development",
      "Data Science & Analytics",
      "AI & Machine Learning",
      "AI Prompt Engineering",
      "Robotics",
      "Robotics & AI",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Cyber Security",
      "Cloud Computing",
      "DevOps",
      "Software Testing",
      "Automation Testing",
      "Blockchain Development",
      "UI / UX Design",
      "Graphic Design",
      "Web Designing",
      "Game Development",
      "Database Management",
      "Big Data",
      "Computer Networking",
      "Ethical Hacking",
      "System Administration",
      "IT Support",
      "Digital Marketing",
      "E-Commerce Technology",
      "AR / VR Development",
      "Open Source Development",
      "Research & Development",
      "Information Technology",
    ],
  },
  "Electronics & Communication Engineering": {
    offline: [
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Robotics",
      "Robotics & AI",
      "Control Systems",
      "Digital Electronics",
      "Analog Electronics",
      "Power Electronics",
      "Signal Processing",
      "Communication Systems",
      "Wireless Communication",
      "Microcontrollers",
      "Microprocessors",
      "PCB Design",
      "Automation & Control",
      "Instrumentation Engineering",
      "Electrical Machines",
      "Power Systems",
      "Renewable Energy Systems",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Robotics",
      "Signal Processing",
      "Python for Electronics",
    ],
    online: [
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Robotics",
      "Robotics & AI",
      "Control Systems",
      "Digital Electronics",
      "Analog Electronics",
      "Power Electronics",
      "Signal Processing",
      "Communication Systems",
      "Wireless Communication",
      "Microcontrollers",
      "Microprocessors",
      "PCB Design",
      "Automation & Control",
      "Instrumentation Engineering",
      "Electrical Machines",
      "Power Systems",
      "Renewable Energy Systems",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Robotics",
      "Signal Processing",
      "Python for Electronics",
    ],
  },
  "Mechanical Engineering": {
    offline: [
      "AutoCAD Design",
      "SolidWorks Modeling",
      "CATIA Design",
      "CNC Programming",
      "Robotics & Automation",
      "Finite Element Analysis",
      "Industrial Engineering",
      "Python for Engineers",
    ],
    online: [
      "CAD Design Fundamentals",
      "3D Modeling & Simulation",
      "Manufacturing Processes",
      "Mechanical Design",
      "ANSYS Analysis",
      "Automation & Control",
      "Product Design",
    ],
  },
  "Civil Engineering": {
    offline: [
      "AutoCAD Civil 3D",
      "Structural Design",
      "STAAD Pro",
      "Revit Architecture",
      "Construction Management",
      "Quantity Surveying",
      "Project Planning",
      "GIS & Remote Sensing",
      "Structural Engineering",
      "Construction Engineering",
      "Building Planning",
      "Site Engineering",
      "Surveying",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Highway Engineering",
      "Environmental Engineering",
      "Water Resources Engineering",
      "Irrigation Engineering",
      "Urban Planning",
      "Town Planning",
      "Smart City Development",
      "Project Management",
      "Estimation & Costing",
      "AutoCAD Drafting",
      "Building Information Modeling (BIM)",
      "Sustainable Construction",
      "Green Building Technology",
      "Disaster Management",
    ],
    online: [
      "Civil Engineering Drawing",
      "Building Design",
      "Structural Analysis",
      "Construction Estimation",
      "Structural Engineering",
      "Construction Engineering",
      "Construction Management",
      "Building Planning",
      "Site Engineering",
      "Quantity Surveying",
      "Surveying",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Highway Engineering",
      "Environmental Engineering",
      "Water Resources Engineering",
      "Irrigation Engineering",
      "Urban Planning",
      "Town Planning",
      "Smart City Development",
      "Project Management",
      "Estimation & Costing",
      "AutoCAD Drafting",
      "Building Information Modeling (BIM)",
      "Sustainable Construction",
      "Green Building Technology",
      "Disaster Management",
      "Remote Sensing & GIS",
    ],
  },
  "Electrical Engineering": {
    offline: [
      "Power Systems",
      "PLC Programming",
      "SCADA Systems",
      "Electrical Design",
      "MATLAB for Electrical",
      "Power Electronics",
      "Control Systems",
      "Renewable Energy",
    ],
    online: [
      "Electrical Circuit Design",
      "PLC & Automation",
      "Power System Analysis",
      "Electrical CAD",
      "Energy Management",
      "Industrial Automation",
      "Smart Grid Technology",
    ],
  },
  "Information Technology": {
    offline: [
      "Full Stack Web Development",
      "Python Development",
      "Data Science & Analytics",
      "AI & Machine Learning",
      "Mobile App Development",
      "Cloud Computing",
      "Cybersecurity",
      "Database Management",
    ],
    online: [
      "Web Development Bootcamp",
      "Python Programming",
      "Data Science with Python",
      "Machine Learning Fundamentals",
      "Cloud Computing (AWS/Azure)",
      "Cybersecurity Essentials",
      "Network Administration",
      "Software Testing",
    ],
  },
  "Electronics Engineering": {
    offline: [
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Robotics",
      "PCB Design",
      "Microcontroller Programming",
      "Digital Electronics",
    ],
    online: [
      "Embedded C Programming",
      "VLSI Design Tools",
      "IoT Applications",
      "Arduino Programming",
      "Electronic Circuit Design",
      "Power Electronics",
    ],
  },
  //   Other: {
  //     offline: [
  //       "Full Stack Web Development",
  //       "Python Development",
  //       "Data Science & Analytics",
  //       "AI & Machine Learning",
  //       "Digital Marketing",
  //       "Graphic Design",
  //       "Content Writing",
  //       "Business Analytics",
  //     ],
  //     online: [
  //       "Web Development Bootcamp",
  //       "Python Programming",
  //       "Data Science with Python",
  //       "Digital Marketing",
  //       "UI/UX Design",
  //       "Social Media Marketing",
  //       "Business Development",
  //       "Project Management",
  //     ],
  //   },

  Other: {
    offline: [
      "Full Stack Web Development",
      "Python Development",
      "Java Development",
      "Frontend Web Development",
      "Backend Web Development",
      "Mobile App Development",
      "Android App Development",
      "Data Science & Analytics",
      "AI & Machine Learning",
      "AI Prompt Engineering",
      "Robotics",
      "Robotics & AI",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Cyber Security",
      "Cloud Computing",
      "DevOps",
      "Software Testing",
      "Automation Testing",
      "Blockchain Development",
      "UI / UX Design",
      "Graphic Design",
      "Web Designing",
      "Game Development",
      "Database Management",
      "Big Data",
      "Computer Networking",
      "Ethical Hacking",
      "System Administration",
      "IT Support",
      "Digital Marketing",
      "E-Commerce Technology",
      "AR / VR Development",
      "Open Source Development",
      "Research & Development",
      "Information Technology",

      "Control Systems",
      "Digital Electronics",
      "Analog Electronics",
      "Power Electronics",
      "Signal Processing",
      "Communication Systems",
      "Wireless Communication",
      "Microcontrollers",
      "Microprocessors",
      "PCB Design",
      "Automation & Control",
      "Instrumentation Engineering",
      "Electrical Machines",
      "Power Systems",
      "Renewable Energy Systems",
      "Python for Electronics",

      "AutoCAD Design",
      "SolidWorks Modeling",
      "CATIA Design",
      "CNC Programming",
      "Robotics & Automation",
      "Finite Element Analysis",
      "Industrial Engineering",
      "Python for Engineers",

      "AutoCAD Civil 3D",
      "Structural Design",
      "STAAD Pro",
      "Revit Architecture",
      "Construction Management",
      "Quantity Surveying",
      "Project Planning",
      "GIS & Remote Sensing",
      "Structural Engineering",
      "Construction Engineering",
      "Building Planning",
      "Site Engineering",
      "Surveying",
      "Geotechnical Engineering",
      "Transportation Engineering",
      "Highway Engineering",
      "Environmental Engineering",
      "Water Resources Engineering",
      "Irrigation Engineering",
      "Urban Planning",
      "Town Planning",
      "Smart City Development",
      "Project Management",
      "Estimation & Costing",
      "AutoCAD Drafting",
      "Building Information Modeling (BIM)",
      "Sustainable Construction",
      "Green Building Technology",
      "Disaster Management",

      "PLC Programming",
      "SCADA Systems",
      "Electrical Design",
      "MATLAB for Electrical",
      "Renewable Energy",

      "Cybersecurity",
      "Content Writing",
      "Business Analytics",
    ],

    online: [
      "Full Stack Web Development",
      "Python Programming",
      "Java Development",
      "Web Development Bootcamp",
      "Frontend Web Development",
      "Backend Web Development",
      "Mobile App Development",
      "Android App Development",
      "Data Science with Python",
      "AI & Machine Learning",
      "AI Prompt Engineering",
      "Machine Learning Fundamentals",
      "Robotics",
      "Robotics & AI",
      "Embedded Systems",
      "VLSI Design",
      "IoT Development",
      "Cybersecurity Essentials",
      "Cloud Computing (AWS/Azure)",
      "DevOps",
      "Software Testing",
      "Automation Testing",
      "Blockchain Development",
      "UI/UX Design",
      "Graphic Design",
      "Web Designing",
      "Game Development",
      "Database Management",
      "Big Data",
      "Computer Networking",
      "Network Administration",
      "Ethical Hacking",
      "Digital Marketing",
      "Social Media Marketing",
      "Business Development",
      "Project Management",

      "Control Systems",
      "Digital Electronics",
      "Analog Electronics",
      "Power Electronics",
      "Signal Processing",
      "Communication Systems",
      "Wireless Communication",
      "Microcontrollers",
      "Microprocessors",
      "PCB Design",
      "Automation & Control",
      "Instrumentation Engineering",
      "Electrical Machines",
      "Power System Analysis",
      "Smart Grid Technology",

      "CAD Design Fundamentals",
      "3D Modeling & Simulation",
      "Manufacturing Processes",
      "Mechanical Design",
      "ANSYS Analysis",
      "Product Design",

      "Civil Engineering Drawing",
      "Building Design",
      "Structural Analysis",
      "Construction Estimation",
      "Remote Sensing & GIS",

      "Electrical Circuit Design",
      "PLC & Automation",
      "Electrical CAD",
      "Energy Management",
      "Industrial Automation",

      "Arduino Programming",
      "Embedded C Programming",
      "Electronic Circuit Design",

      "Business Analytics",
    ],
  },
};

const lecturers = [
  "Dr. A. Kumar",
  "Mr. R. Singh",
  "Ms. P. Sharma",
  "Industry Expert (Guest)",
  "Dr. M. Verma",
  "Prof. S. Gupta",
];

// Validation functions
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validatePhone = (phone) => {
  return /^\d{10}$/.test(phone);
};

const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

const validateUTR = (utr) => {
  return utr && utr.length >= 12;
};

// Reusable Components

// Hero Banner Component
const HeroBanner = () => (
  <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 rounded-b-3xl shadow-2xl mb-8 animate-fadeIn">
    <div className="absolute inset-0 bg-black opacity-10"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20"></div>

    {/* Decorative circles */}
    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

    <div className="relative px-8 py-16 text-center">
      {/* Logo Placeholder */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            IM
          </span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
        Internship Registration Portal
      </h1>
      <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto font-light">
        Launch your career with industry-ready internships and hands-on
        experience
      </p>

      {/* Stats or badges */}
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">500+</div>
          <div className="text-sm text-purple-200">Students Trained</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">50+</div>
          <div className="text-sm text-purple-200">Courses Available</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-white">95%</div>
          <div className="text-sm text-purple-200">Success Rate</div>
        </div>
      </div>
    </div>
  </div>
);

// Section Card Component with Icons
const SectionCard = ({ title, icon, children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-6 border border-gray-100 ${className}`}
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white shadow-md">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="border-l-4 border-purple-500 pl-6">{children}</div>
  </div>
);

// Course Mode Selector Component
const CourseModeSelector = ({ selected, onChange, error }) => {
  const modes = [
    {
      value: "offline",
      label: "Offline",
      icon: "🏢",
      description: "In-person training",
    },
    {
      value: "online",
      label: "Online",
      icon: "💻",
      description: "Remote learning",
    },
    { value: "both", label: "Both", icon: "🌐", description: "Hybrid mode" },
  ];

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-3">
        Select Course Mode <span className="text-red-500">*</span>
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {modes.map((mode) => (
          <button
            key={mode.value}
            type="button"
            onClick={() => onChange(mode.value)}
            className={`relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              selected === mode.value
                ? "border-purple-500 bg-gradient-to-br from-purple-50 to-blue-50 shadow-md"
                : "border-gray-200 bg-white hover:border-purple-300"
            }`}
          >
            {selected === mode.value && (
              <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
            <div className="text-4xl mb-3">{mode.icon}</div>
            <div className="font-semibold text-lg text-gray-800 mb-1">
              {mode.label}
            </div>
            <div className="text-sm text-gray-600">{mode.description}</div>
          </button>
        ))}
      </div>
      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

// Old FormSection kept for backward compatibility
const FormSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
      {title}
    </h2>
    {children}
  </div>
);

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
  ...props
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition ${
        error ? "border-red-500" : "border-gray-300"
      }`}
      {...props}
    />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

const SelectField = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  placeholder = "Select an option",
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>
);

// Searchable Course Dropdown Component
const SearchableCourseField = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  placeholder = "Search and select a course",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option) => {
    onChange({
      target: { name, value: option },
    });
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        {/* Search Input */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder={placeholder}
            value={isOpen ? searchTerm : value}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition bg-white ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-3 bg-purple-50 border border-gray-300 rounded-lg hover:bg-purple-100 transition-colors"
            title="Toggle dropdown"
          >
            <svg
              className={`w-5 h-5 text-purple-600 transition-transform ${
                isOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors ${
                    value === option
                      ? "bg-purple-100 text-purple-700 font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {value === option && <span className="mr-2">✓</span>}
                  {option}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500">
                No courses found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}

        {/* Click outside to close */}
        {isOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
    </div>
  );
};

const FileUpload = ({
  label,
  name,
  onChange,
  error,
  required = false,
  fileName,
}) => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div
      className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-300 ${
        error
          ? "border-red-500 bg-red-50"
          : "border-gray-300 hover:border-purple-400 bg-gray-50"
      }`}
    >
      <input
        type="file"
        name={name}
        accept=".jpg,.jpeg,.png,.pdf"
        onChange={onChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {fileName ? (
          <p className="mt-2 text-sm font-medium text-purple-600">
            ✓ {fileName}
          </p>
        ) : (
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-semibold text-purple-600">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
        )}
        <p className="mt-1 text-xs text-gray-500">JPG, PNG, PDF (Max 10MB)</p>
      </div>
    </div>
    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
  </div>
);

// Payment Card Component
const PaymentCard = ({ upiId = "Internmatrix@ibl", amount = "700" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 mb-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white shadow-lg">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">
            Payment Information
          </h3>
          <p className="text-sm text-gray-600">
            Complete your payment to secure your spot
          </p>
        </div>
      </div>

      {/* Amount Display */}
      <div className="bg-white rounded-xl p-4 mb-6 border border-purple-200 text-center">
        <p className="text-sm text-gray-600 mb-1">Registration Fee</p>
        <p className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          ₹{amount}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* UPI Section */}
        <div className="bg-white rounded-xl p-6 border border-purple-200">
          <p className="text-sm font-medium text-gray-700 mb-3">Pay via UPI</p>
          <div className="flex items-center gap-2">
            <div className="flex-1 bg-purple-50 px-4 py-3 rounded-lg border border-purple-200">
              <p className="font-mono font-semibold text-purple-700 text-sm md:text-base break-all">
                {upiId}
              </p>
            </div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 flex-shrink-0"
              title="Copy UPI ID"
            >
              {copied ? (
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-white rounded-xl p-6 border border-purple-200 text-center">
          <p className="text-sm font-medium text-gray-700 mb-3">Scan QR Code</p>
          <div className="inline-block bg-gradient-to-br from-purple-100 to-blue-100 p-4 rounded-xl border-2 border-purple-300">
            <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
              <span className="text-xs text-gray-500 text-center">
                QR Code
                <br />
                Placeholder
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Security Info */}
      <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <svg
          className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <div className="text-sm text-blue-800">
          <p className="font-semibold mb-1">Secure Payment</p>
          <p>
            Your payment information is processed securely. After payment, enter
            your UTR number and upload the screenshot below.
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Component
const InternshipForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    whatsappNumber: "",
    email: "",
    collegeName: "",
    branch: "",
    otherBranch: "",
    semester: "",
    registrationNumber: "",
    rollNumber: "",
    courseType: "",
    offlineCourse: "",
    offlineDuration: "",
    onlineCourse: "",
    onlineDuration: "",
    lecturer: "",
    joiningDate: "",
    endDate: "",
    paymentUTR: "",
    paymentScreenshot: null,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear otherBranch when branch changes away from "Other"
    if (name === "branch" && value !== "Other") {
      setFormData((prev) => ({
        ...prev,
        otherBranch: "",
      }));
    }

    // Reset course selections when branch changes
    if (name === "branch") {
      setFormData((prev) => ({
        ...prev,
        offlineCourse: "",
        offlineDuration: "",
        onlineCourse: "",
        onlineDuration: "",
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Get filtered courses based on selected branch
  const getAvailableCourses = (type) => {
    if (!formData.branch) return [];
    const branchCourses = branchCoursesMap[formData.branch];
    return branchCourses ? branchCourses[type] || [] : [];
  };

  // Handle course mode change
  const handleCourseModeChange = (mode) => {
    setFormData((prev) => ({
      ...prev,
      courseType: mode,
      // Reset course selections when mode changes
      offlineCourse: "",
      offlineDuration: "",
      onlineCourse: "",
      onlineDuration: "",
    }));

    if (errors.courseType) {
      setErrors((prev) => ({
        ...prev,
        courseType: "",
      }));
    }
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          paymentScreenshot: "File size must be less than 10MB",
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        paymentScreenshot: file,
      }));

      setErrors((prev) => ({
        ...prev,
        paymentScreenshot: "",
      }));
    }
  };

  // Handle blur to mark field as touched
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, formData[name]);
  };

  // Validate individual field
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "fullName":
        if (!validateRequired(value)) {
          error = "Full name is required";
        } else if (value.trim().length < 2) {
          error = "Full name must be at least 2 characters";
        }
        break;
      case "phoneNumber":
        if (!validateRequired(value)) {
          error = "Phone number is required";
        } else if (!validatePhone(value)) {
          error = "Phone number must be 10 digits";
        }
        break;
      case "whatsappNumber":
        if (!validateRequired(value)) {
          error = "WhatsApp number is required";
        } else if (!validatePhone(value)) {
          error = "WhatsApp number must be 10 digits";
        }
        break;
      case "email":
        if (!validateRequired(value)) {
          error = "Email is required";
        } else if (!validateEmail(value)) {
          error = "Invalid email address";
        }
        break;
      case "collegeName":
        if (!validateRequired(value)) {
          error = "College name is required";
        }
        break;
      case "branch":
      case "semester":
      case "courseType":
      case "lecturer":
        if (!validateRequired(value)) {
          error = "This field is required";
        }
        break;
      case "otherBranch":
        if (formData.branch === "Other" && !validateRequired(value)) {
          error = "Please specify your branch name";
        }
        break;
      case "offlineCourse":
        if (
          formData.courseType === "offline" ||
          formData.courseType === "both"
        ) {
          if (!validateRequired(value)) {
            error = "Please select an offline course";
          }
        }
        break;
      case "offlineDuration":
        if (
          formData.courseType === "offline" ||
          formData.courseType === "both"
        ) {
          if (!validateRequired(value)) {
            error = "Please select offline internship duration";
          }
        }
        break;
      case "onlineCourse":
        if (
          formData.courseType === "online" ||
          formData.courseType === "both"
        ) {
          if (!validateRequired(value)) {
            error = "Please select an online course";
          }
        }
        break;
      case "onlineDuration":
        if (
          formData.courseType === "online" ||
          formData.courseType === "both"
        ) {
          if (!validateRequired(value)) {
            error = "Please select online internship duration";
          }
        }
        break;
      case "registrationNumber":
        if (!validateRequired(value)) {
          error = "Registration number is required";
        }
        break;
      case "rollNumber":
        if (!validateRequired(value)) {
          error = "Roll number is required";
        }
        break;
      case "joiningDate":
        if (!validateRequired(value)) {
          error = "Joining date is required";
        }
        break;
      case "endDate":
        if (!validateRequired(value)) {
          error = "End date is required";
        } else if (
          formData.joiningDate &&
          new Date(value) <= new Date(formData.joiningDate)
        ) {
          error = "End date must be after joining date";
        }
        break;
      case "paymentUTR":
        if (!validateRequired(value)) {
          error = "UTR number is required";
        } else if (!validateUTR(value)) {
          error = "UTR number must be at least 12 characters";
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));

    return error === "";
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach((key) => {
      if (key !== "paymentScreenshot") {
        const error = validateField(key, formData[key]);
        if (!error) {
          // Get the error from the field validation
          if (errors[key]) {
            newErrors[key] = errors[key];
          }
        }
      }
    });

    // Validate file upload
    if (!formData.paymentScreenshot) {
      newErrors.paymentScreenshot = "Payment screenshot is required";
    }

    // Additional date validation
    if (formData.joiningDate && formData.endDate) {
      if (new Date(formData.endDate) <= new Date(formData.joiningDate)) {
        newErrors.endDate = "End date must be after joining date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Check if form is valid
  const isFormValid = () => {
    const baseValid =
      formData.fullName.trim().length >= 2 &&
      validatePhone(formData.phoneNumber) &&
      validatePhone(formData.whatsappNumber) &&
      validateEmail(formData.email) &&
      formData.collegeName.trim() &&
      formData.branch &&
      (formData.branch !== "Other" || formData.otherBranch.trim()) &&
      formData.semester &&
      formData.registrationNumber.trim() &&
      formData.rollNumber.trim() &&
      formData.courseType &&
      formData.lecturer &&
      formData.joiningDate &&
      formData.endDate &&
      new Date(formData.endDate) > new Date(formData.joiningDate) &&
      validateUTR(formData.paymentUTR) &&
      formData.paymentScreenshot;

    // Additional validation based on course type
    if (formData.courseType === "offline") {
      return baseValid && formData.offlineCourse && formData.offlineDuration;
    } else if (formData.courseType === "online") {
      return baseValid && formData.onlineCourse && formData.onlineDuration;
    } else if (formData.courseType === "both") {
      return (
        baseValid &&
        formData.offlineCourse &&
        formData.offlineDuration &&
        formData.onlineCourse &&
        formData.onlineDuration
      );
    }

    return baseValid;
  };

  // Handle form submission
  const handleSubmit = () => {
    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    // Create FormData for file upload
    const apiFormData = new FormData();

    // Append all form fields
    Object.keys(formData).forEach((key) => {
      if (key === "paymentScreenshot" && formData[key]) {
        apiFormData.append(key, formData[key]);
      } else if (key !== "paymentScreenshot") {
        apiFormData.append(key, formData[key]);
      }
    });

    // Log form data to console
    console.log("Form Data:", formData);
    console.log("FormData for API:", apiFormData);

    // Prepare JSON payload (excluding file for display)
    const jsonPayload = {
      ...formData,
      paymentScreenshot: formData.paymentScreenshot?.name || "file attached",
    };
    console.log("JSON Payload:", JSON.stringify(jsonPayload, null, 2));

    // Show success message
    setShowSuccess(true);

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);

    // In production, you would send formData to your backend API:
    // fetch('/api/internship-registration', {
    //   method: 'POST',
    //   body: apiFormData
    // }).then(response => response.json())
    //   .then(data => console.log('Success:', data))
    //   .catch(error => console.error('Error:', error));
  };

  // Handle form clear
  const handleClear = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      collegeName: "",
      branch: "",
      otherBranch: "",
      semester: "",
      registrationNumber: "",
      rollNumber: "",
      courseType: "",
      offlineCourse: "",
      offlineDuration: "",
      onlineCourse: "",
      onlineDuration: "",
      lecturer: "",
      joiningDate: "",
      endDate: "",
      paymentUTR: "",
      paymentScreenshot: null,
    });
    setErrors({});
    setTouched({});
    setShowSuccess(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Banner */}
        <HeroBanner />

        {/* Success Message */}
        {showSuccess && (
          <div className="bg-green-50 border-l-4 border-green-500 rounded-xl p-6 mb-6 shadow-lg animate-pulse">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  🎉 Registration submitted successfully! Check console for
                  details.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Information Section */}
        <SectionCard
          title="Personal Information"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        >
          <InputField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName && errors.fullName}
            required
            placeholder="Enter your full name"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phoneNumber && errors.phoneNumber}
              required
              placeholder="10-digit mobile number"
            />

            <InputField
              label="WhatsApp Number"
              name="whatsappNumber"
              type="tel"
              value={formData.whatsappNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.whatsappNumber && errors.whatsappNumber}
              required
              placeholder="10-digit WhatsApp number"
            />
          </div>

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && errors.email}
            required
            placeholder="your.email@example.com"
          />
        </SectionCard>

        {/* Academic Information Section */}
        <SectionCard
          title="Academic Information"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          }
        >
          <InputField
            label="College Name"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.collegeName && errors.collegeName}
            required
            placeholder="Enter your college name"
          />

          <div className="grid md:grid-cols-2 gap-6">
            <SelectField
              label="Branch"
              name="branch"
              options={branches}
              value={formData.branch}
              onChange={handleChange}
              error={touched.branch && errors.branch}
              required
            />

            <SelectField
              label="Semester"
              name="semester"
              options={semesters}
              value={formData.semester}
              onChange={handleChange}
              error={touched.semester && errors.semester}
              required
            />
          </div>

          {/* Other Branch Input - Shows when "Other" is selected */}
          {formData.branch === "Other" && (
            <div className="animate-fadeIn">
              <InputField
                label="Specify Your Branch"
                name="otherBranch"
                value={formData.otherBranch}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.otherBranch && errors.otherBranch}
                required
                placeholder="Enter your branch name"
              />
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Registration Number"
              name="registrationNumber"
              value={formData.registrationNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.registrationNumber && errors.registrationNumber}
              required
              placeholder="University registration number"
            />

            <InputField
              label="Roll Number"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.rollNumber && errors.rollNumber}
              required
              placeholder="College roll number"
            />
          </div>
        </SectionCard>

        {/* Internship Details Section */}
        <SectionCard
          title="Internship Details"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          }
        >
          <CourseModeSelector
            selected={formData.courseType}
            onChange={handleCourseModeChange}
            error={touched.courseType && errors.courseType}
          />

          {/* Offline Course Selection */}
          {(formData.courseType === "offline" ||
            formData.courseType === "both") && (
            <div className="animate-fadeIn">
              {formData.branch ? (
                <>
                  <SearchableCourseField
                    label="Offline Course"
                    name="offlineCourse"
                    options={
                      formData.branch === "Other"
                        ? Array.from(
                            new Set(
                              Object.values(branchCoursesMap).flatMap(
                                (b) => b.offline
                              )
                            )
                          ).sort()
                        : getAvailableCourses("offline")
                    }
                    value={formData.offlineCourse}
                    onChange={handleChange}
                    error={touched.offlineCourse && errors.offlineCourse}
                    required
                    placeholder="🔍 Search offline courses..."
                  />
                  <p className="text-xs text-gray-500 -mt-4 mb-6">
                    🏢 In-person training with hands-on projects
                  </p>

                  <SelectField
                    label="Offline Internship Duration"
                    name="offlineDuration"
                    options={internshipDurations}
                    value={formData.offlineDuration}
                    onChange={handleChange}
                    error={touched.offlineDuration && errors.offlineDuration}
                    required
                    placeholder="Select duration for offline internship"
                  />
                </>
              ) : (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Please select your branch first to view available offline
                    courses
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Online Course Selection */}
          {(formData.courseType === "online" ||
            formData.courseType === "both") && (
            <div className="animate-fadeIn">
              {formData.branch ? (
                <>
                  <SearchableCourseField
                    label="Online Course"
                    name="onlineCourse"
                    options={
                      formData.branch === "Other"
                        ? Array.from(
                            new Set(
                              Object.values(branchCoursesMap).flatMap(
                                (b) => b.online
                              )
                            )
                          ).sort()
                        : getAvailableCourses("online")
                    }
                    value={formData.onlineCourse}
                    onChange={handleChange}
                    error={touched.onlineCourse && errors.onlineCourse}
                    required
                    placeholder="🔍 Search online courses..."
                  />
                  <p className="text-xs text-gray-500 -mt-4 mb-6">
                    💻 Flexible remote learning with live sessions
                  </p>

                  <SelectField
                    label="Online Internship Duration"
                    name="onlineDuration"
                    options={internshipDurations}
                    value={formData.onlineDuration}
                    onChange={handleChange}
                    error={touched.onlineDuration && errors.onlineDuration}
                    required
                    placeholder="Select duration for online internship"
                  />
                </>
              ) : (
                <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ⚠️ Please select your branch first to view available online
                    courses
                  </p>
                </div>
              )}
            </div>
          )}

          <SelectField
            label="Lecturer / Trainer"
            name="lecturer"
            options={lecturers}
            value={formData.lecturer}
            onChange={handleChange}
            error={touched.lecturer && errors.lecturer}
            required
            placeholder="Select lecturer/trainer"
          />
        </SectionCard>

        {/* Internship Duration Section */}
        <SectionCard
          title="Internship Duration"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          }
        >
          <div className="grid md:grid-cols-2 gap-6">
            <InputField
              label="Preferred Joining Date"
              name="joiningDate"
              type="date"
              value={formData.joiningDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.joiningDate && errors.joiningDate}
              required
            />

            <InputField
              label="Preferred End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.endDate && errors.endDate}
              required
            />
          </div>
        </SectionCard>

        {/* Payment Section */}
        <SectionCard
          title="Payment Details"
          icon={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          }
        >
          <PaymentCard />

          <InputField
            label="Payment UTR Number"
            name="paymentUTR"
            value={formData.paymentUTR}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.paymentUTR && errors.paymentUTR}
            required
            placeholder="Enter 12-digit UTR number"
          />

          <FileUpload
            label="Payment Screenshot"
            name="paymentScreenshot"
            onChange={handleFileChange}
            error={touched.paymentScreenshot && errors.paymentScreenshot}
            required
            fileName={formData.paymentScreenshot?.name}
          />
        </SectionCard>

        {/* Submit Buttons */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleSubmit}
              disabled={!isFormValid()}
              className={`flex-1 py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                isFormValid()
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl"
                  : "bg-gray-300 cursor-not-allowed opacity-60"
              }`}
            >
              {isFormValid()
                ? "✓ Submit Registration"
                : "⚠ Complete All Fields"}
            </button>

            <button
              onClick={handleClear}
              className="flex-1 py-4 px-8 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 border-2 border-gray-200 hover:border-gray-300"
            >
              Clear Form
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 space-y-2">
          <div className="flex justify-center gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <a href="#" className="hover:text-purple-600 transition-colors">
              Contact Support
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 Internship Matrix. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternshipForm;

