import React, { useState } from "react";
import { Filter } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { skillsData } from "../../assets/courseData/data";

const Courses = () => {
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState(2000);
  const [showSidebar, setShowSidebar] = useState(false);
  const [search, setSearch] = useState("");

  const instructors = [...new Set(skillsData.map((c) => c.instructor))];
  const levels = ["Beginner", "Intermediate", "Advanced"];
  const categories = [...new Set(skillsData.map((c) => c.category))];

  // SEARCH + FILTER applied together
  const filteredCourses = skillsData.filter((course) => {
    const price = parseInt(course.price);

    const searchLower = search.toLowerCase();
    const matchesSearch =
      course.name.toLowerCase().includes(searchLower) ||
      course.instructor.toLowerCase().includes(searchLower) ||
      course.category.toLowerCase().includes(searchLower);

    return (
      matchesSearch &&
      (!selectedInstructor || course.instructor === selectedInstructor) &&
      (!selectedLevel || course.level === selectedLevel) &&
      (!selectedCategory || course.category === selectedCategory) &&
      price <= priceRange
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 flex gap-5 p-4">
      {/* MOBILE FILTER BUTTON */}
      {!showSidebar && (
        <button
          onClick={() => setShowSidebar(true)}
          className="sm:hidden fixed top-4 left-4 z-[60] flex items-center gap-1 bg-white border top-20 shadow px-3 py-1 rounded-lg"
        >
          <Filter size={18} /> Filters
        </button>
      )}

      {/* FILTER SIDEBAR  */}

      <aside
        className={`
    bg-white rounded p-4 shadow-md space-y-6 
    min-h-[650px]
    w-64
    flex-shrink-0

    /* Desktop (fixed left) */
    sm:sticky sm:top-20 sm:translate-x-0 sm:relative

    /* Mobile drawer */
    fixed top-0 left-0 h-full z-50 
    transform transition-transform duration-300
    ${showSidebar ? "translate-x-0" : "-translate-x-full"}
  `}
      >
        {/* CLOSE BUTTON - MOBILE ONLY */}
        {showSidebar && (
          <button
            onClick={() => setShowSidebar(false)}
            className="sm:hidden absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          >
            ✕
          </button>
        )}

        {/* CLEAR BUTTON */}
        <button
          onClick={() => {
            setSelectedInstructor("");
            setSelectedLevel("");
            setSelectedCategory("");
            setPriceRange(2000);
          }}
          className="w-40  text-black py-2 rounded-lg border font-semibold  transition-colors"
        >
          Clear All Filters
        </button>

        {/* Instructor Filter */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Instructor</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedInstructor === ""}
                onChange={() => setSelectedInstructor("")}
              />
              <span>All</span>
            </label>

            {instructors.map((i) => (
              <label key={i} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedInstructor === i}
                  onChange={() => setSelectedInstructor(i)}
                />
                <span>{i}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Difficulty Filter */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Difficulty</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedLevel === ""}
                onChange={() => setSelectedLevel("")}
              />
              <span>All</span>
            </label>

            {levels.map((l) => (
              <label key={l} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedLevel === l}
                  onChange={() => setSelectedLevel(l)}
                />
                <span>{l}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Category</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedCategory === ""}
                onChange={() => setSelectedCategory("")}
              />
              <span>All</span>
            </label>

            {categories.map((c) => (
              <label key={c} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategory === c}
                  onChange={() => setSelectedCategory(c)}
                />
                <span>{c}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h2 className="font-semibold text-lg mb-2">Price Range</h2>
          <input
            type="range"
            min="0"
            max="2000"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-full"
          />
          <p className="text-sm text-gray-600 mt-1">₹ 0 – {priceRange}</p>
        </div>
      </aside>

      {/* RIGHT SIDE */}
      <section className="flex-1">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search course..."
          className="border w-full sm:w-80 px-3 py-2 rounded-full mb-5"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCourses.map((skill, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl shadow transition transform hover:scale-105 overflow-hidden group"
            >
              {/* NEW badge */}
              {skill.new && (
                <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rotate-29  rounded-lg shadow">
                  NEW
                </span>
              )}

              <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 p-4 mb-4">
                <Link to="/details">
                  <div
                    className="h-[180px] w-full mb-4 overflow-hidden rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url(${skill.image})` }}
                  >
                    <p className="m-3 inline-flex justify-center items-center text-sm text-black bg-amber-200 rounded-2xl h-5 font-semibold px-3">
                      {skill.category}
                    </p>
                  </div>
                </Link>

                <h2 className="text-lg font-semibold text-gray-900">
                  {skill.name}
                </h2>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FaStar />
                    <span className="text-sm font-medium text-black">
                      {skill.rating}
                    </span>
                    <span className="text-xs text-black">
                      ({skill.ratersCount})
                    </span>
                  </div>

                  <p className="inline-flex justify-center items-center text-sm text-black bg-green-200 rounded-2xl h-5 px-3 italic">
                    By {skill.instructor || "Unknown"}
                  </p>
                </div>

                <p className="clamp-2 text-white text-sm mb-4">{skill.desc}</p>
              </div>

              {/* price + enroll */}
              <div className="px-4 pb-4">
                <div className="flex justify-between items-center">
                  <p className="text-yellow-600 font-semibold">
                    ₹{skill.price}
                  </p>
                  <Link
                    to="/details"
                    className="oswald border p-2 hover:scale-110 transition-transform duration-300 inline-block"
                  >
                    Enroll now
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {filteredCourses.length === 0 && (
            <p className="col-span-full text-center">No results</p>
          )}
        </main>
      </section>
    </div>
  );
};

export default Courses;
