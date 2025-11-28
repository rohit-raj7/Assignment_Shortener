import React from "react";
import contactImage from "../../assets/images/contactImage.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMessage } from "react-icons/md";

const Contact = () => {
    return (
        <div className="w-full overflow-x-hidden font-sans">
            {/* -------- Hero Section -------- */}
            <div className="relative w-full h-80">
                <img
                    src={contactImage}
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Shade Overlay */}
                <div className="absolute inset-0 bg-slate-900/80"></div>

                {/* Hero Text */}
                <div className="absolute z-10 top-1/2 -translate-y-1/2 left-6 md:left-32 flex flex-col gap-2 text-white">
                    <p className="text-yellow-400 font-semibold tracking-wider uppercase ">
                        Get in Touch
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Contact Us
                    </h1>
                </div>
            </div>

            {/* -------- Main Contact Section -------- */}
            <div className="my-20 w-[90%] md:w-[85%] mx-auto flex flex-col lg:flex-row justify-between gap-12 p-2">

                {/* -------- Left Section (Info) -------- */}
                <div className="flex flex-col gap-10 w-full lg:w-5/12 lg:pr-8">
                    <div>
                        <h1 className="text-4xl text-black font-bold mb-4">
                            Keep In Touch With Us
                            {/* Styled Underline */}
                            <div className="h-1 rounded-full bg-yellow-500 w-16 mt-1.5"></div>
                        </h1>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Neque convallis cras semper auctor. Libero id faucibus getnvallis.
                            Id faucibus nisl tincidunt egetnvallis.
                        </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-5 group cursor-default">
                        <div className="bg-black h-14 w-14 shrink-0 flex items-center justify-center text-yellow-400 text-2xl rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-yellow-500/20">
                            <IoLocationOutline />
                        </div>
                        <div className="font-medium text-gray-700">
                            <h3 className="text-black font-bold text-lg mb-1">Our Location</h3>
                            <p>68 Patna</p>
                            <p>800001</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-5 group cursor-default">
                        <div className="bg-black h-14 w-14 shrink-0 flex items-center justify-center text-yellow-400 text-2xl rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-yellow-500/20">
                            <FiPhoneCall />
                        </div>
                        <div className="font-medium text-gray-700">
                            <h3 className="text-black font-bold text-lg mb-1">Phone Number</h3>
                            <p>+91 9288075422</p> 
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-5 group cursor-default">
                        <div className="bg-black h-14 w-14 shrink-0 flex items-center justify-center text-yellow-400 text-2xl rounded-full shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-yellow-500/20">
                            <MdOutlineMessage />
                        </div>
                        <div className="font-medium text-gray-700">
                            <h3 className="text-black font-bold text-lg mb-1">Email Address</h3>
                            <p>info@internmatrix.com</p>
                            <p>support@internmatrix.com</p>
                        </div>
                    </div>
                </div>

                {/* -------- Right Section (Form) -------- */}
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full lg:w-7/12 relative overflow-hidden">


                    <div className="absolute top-0 left-0 w-full h-1.5 bg-yellow-500"></div>

                    <h2 className="text-3xl font-bold mb-8 text-black">
                        Send a Message
                        <div className="h-1 rounded-full bg-yellow-500 w-10 mt-1"></div>
                    </h2>

                    <form className="flex flex-col gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
                        />

                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all duration-300"
                        />

                        <textarea
                            rows="5"
                            placeholder="Your Message"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 resize-none transition-all duration-300"
                        ></textarea>


                        <button
                            type="submit"
                            className="w-full bg-black cursor-pointer text-yellow-400 py-3 rounded-lg font-semibold text-lg tracking-wide shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;