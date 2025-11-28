import React from 'react'

const MyProfile = () => {
    return (
        <div className="w-full max-w-5xl animate-fade-in">
            <div className="mb-10">
                <h2 className="text-3xl font-bold text-white">Profile Settings</h2>
                <div className="h-1 w-20 bg-yellow-400 rounded-full mt-2"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Avatar Card */}
                <div className="w-full lg:w-1/3 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full p-1 border-2 border-yellow-400/30 mb-4">
                        <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-3xl font-bold text-yellow-400">
                            JD
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white">John Doe</h3>
                    <p className="text-zinc-500 text-sm mb-6">Full Stack Developer</p>

                    {/* Typo Fixed: 'borde' -> 'border' */}
                    <button className="w-full py-2.5 cursor-pointer border border-zinc-700 hover:border-white/50 text-zinc-300 hover:text-white rounded-xl text-sm font-medium transition-colors">
                        Change Avatar
                    </button>
                </div>

                {/* Form Card */}
                <div className="w-full lg:w-2/3 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-6 uppercase tracking-wide">Personal Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-400 uppercase ml-1">First Name</label>
                            <input
                                type="text"
                                defaultValue="John"
                                className="w-full bg-black/40 border border-zinc-700 rounded-xl p-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all placeholder-zinc-600"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-zinc-400 uppercase ml-1">Last Name</label>
                            <input
                                type="text"
                                defaultValue="Doe"
                                className="w-full bg-black/40 border border-zinc-700 rounded-xl p-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all placeholder-zinc-600"
                            />
                        </div>
                    </div>

                    <div className="space-y-2 mb-8">
                        <label className="text-xs font-medium text-zinc-400 uppercase ml-1">Email Address</label>
                        <input
                            type="email"
                            defaultValue="john.doe@example.com"
                            className="w-full bg-black/40 border border-zinc-700 rounded-xl p-3 text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 focus:outline-none transition-all placeholder-zinc-600"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="px-8 py-3 bg-yellow-400 text-black cursor-pointer font-bold rounded-full hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:scale-[1.02] transition-all duration-300">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile