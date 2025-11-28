import React from 'react'

const EnrolledCourses = () => {
    const courses = [
        { id: 1, title: 'React JS: The Complete Guide', instructor: 'Maximilian', progress: 65, image: 'https://plus.unsplash.com/premium_photo-1682284352941-58dceb6cd601?q=80&w=1170&auto=format&fit=crop' },
        { id: 2, title: 'Tailwind CSS Masterclass', instructor: 'John Doe', progress: 15, image: 'https://plus.unsplash.com/premium_photo-1661909267383-58991abdca51?q=80&w=2070&auto=format&fit=crop' },
    ];

    return (
        <div className="w-full animate-fade-in">
            <div className="flex items-end justify-between mb-10">
                <div>
                    <h2 className="text-3xl font-bold text-white">My Learning</h2>
                    <div className="h-1 w-20 bg-yellow-400 rounded-full mt-2"></div>
                </div>
                <span className="text-zinc-500 text-sm">{courses.length} Courses in progress</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div key={course.id} className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/5">

                        {/* Image Area */}
                        <div className="h-48 overflow-hidden relative">
                            <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors"></div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6">
                            <h3 className="text-lg font-bold text-white mb-1 truncate group-hover:text-yellow-400 transition-colors">{course.title}</h3>
                            <p className="text-xs text-zinc-400 mb-5">By {course.instructor}</p>

                            {/* Progress Bar */}
                            <div className="flex justify-between text-xs text-zinc-400 mb-2">
                                <span>{course.progress}% Completed</span>
                            </div>
                            <div className="w-full bg-zinc-800 h-1.5 rounded-full mb-6 overflow-hidden">
                                <div
                                    className="bg-yellow-400 h-full rounded-full shadow-[0_0_10px_rgba(250,204,21,0.4)]"
                                    style={{ width: `${course.progress}%` }}
                                ></div>
                            </div>

                            {/* Button */}
                            <button className="w-full cursor-pointer py-2.5 rounded-lg border border-yellow-400/30 text-yellow-400 text-sm font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300">
                                Continue Learning
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EnrolledCourses