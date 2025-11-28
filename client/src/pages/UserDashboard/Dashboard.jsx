import React, { useState } from 'react'
import Sidebar from '../../components/UserDashboard/Sidebar'
import EnrolledCourses from './EnrolledCourses'
import Wishlist from './Wishlist'
import MyProfile from './MyProfile'


const Dashboard = () => {
    const [selection, setSelection] = useState('profile')

    return (
        <div className="flex min-h-screen bg-black text-white font-sans selection:bg-yellow-500 selection:text-black">

            <Sidebar selection={selection} setSelection={setSelection} />

            <div className="flex-1 relative overflow-y-auto h-screen bg-black">

                {/* Background Glow - Kept subtle */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10 p-6 md:p-12 max-w-7xl mx-auto">
                    {selection === 'profile' && <MyProfile />}
                    {selection === 'courses' && <EnrolledCourses />}
                    {selection === 'wishlist' && <Wishlist />}
                </div>
            </div>
        </div>
    )
}

export default Dashboard