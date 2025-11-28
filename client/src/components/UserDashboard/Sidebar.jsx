import React from 'react'
import { FiBookOpen, FiHeart, FiUser, FiLogOut } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = ({ selection, setSelection }) => {
    const navigate = useNavigate();

    const getButtonClass = (key) => {
        const base = "flex items-center gap-4 px-6 py-4 text-sm font-medium transition-all duration-300 cursor-pointer group w-full";

        if (selection === key) {
            // Active: Yellow highlight, right border, subtle background
            return `${base} text-yellow-400 bg-yellow-400/10 border-r-4 border-yellow-400`;
        }

        // Inactive: Gray, slides slightly right on hover
        return `${base} text-zinc-400 hover:text-white hover:bg-white/5 hover:pl-7`;
    };

    return (
        <div className="hidden md:flex w-72 h-screen bg-black border-r border-zinc-800 flex-col shrink-0 sticky top-0 z-20">

            {/* Logo */}
            <div className="h-24 flex items-center px-8 border-b border-zinc-800">
                <Link to="/">
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                        Dev<span className="text-yellow-400">Skills</span>
                    </h2>
                </Link>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col py-6">
                <p className="px-8 text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Menu</p>

                <button onClick={() => setSelection('profile')} className={getButtonClass('profile')}>
                    <FiUser size={20} />
                    <span>My Profile</span>
                </button>

                <button onClick={() => setSelection('courses')} className={getButtonClass('courses')}>
                    <FiBookOpen size={20} />
                    <span>Enrolled Courses</span>
                </button>

                <button onClick={() => setSelection('wishlist')} className={getButtonClass('wishlist')}>
                    <FiHeart size={20} />
                    <span>Wishlist</span>
                </button>
            </div>

            {/* Logout */}
            <div className="mt-auto p-8 border-t border-zinc-800">
                <button
                    onClick={() => navigate('/signin')}
                    className="flex items-center gap-3 text-zinc-500 hover:text-red-500 transition-colors font-medium text-sm w-full"
                >
                    <FiLogOut size={18} />
                    <span>Logo Out</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar