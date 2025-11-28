 
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { FcGoogle } from "react-icons/fc";
// import signupImage from "../../assets/images/contactImage.jpg";

// const Signup = () => {
//   const [accountType, setAccountType] = useState("student");

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const handleOnChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signing up as:", accountType, formData);
//     // will add the logic here
//   };

//   return (
//     <div className="flex min-h-screen w-full font-sans">

//       {/* -------- LEFT SIDE (Image Section) -------- */}
//       <div className="hidden lg:flex w-1/2 relative">
//         <img
//           src={signupImage}
//           alt="Signup Visual"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>

//         <div className="absolute z-10 flex flex-col justify-center h-full px-20 text-white">
//           <h1 className="text-5xl font-bold mb-6">
//             Join the <br />
//             Dev<span className="text-yellow-500">Skills</span> Community
//           </h1>
//           <p className="text-gray-200 text-lg leading-relaxed">
//             Build skills for today, tomorrow, and beyond.
//             Education to future-proof your career.
//           </p>
//         </div>
//       </div>

//       {/* -------- RIGHT SIDE (Form Section) -------- */}
//       <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-16 lg:px-24 py-10">

//         <div className="w-full max-w-[500px]">

//           {/* Header */}
//           <div className="mb-8">
//             <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Free Register</p>
//             <h2 className="text-4xl font-bold text-black">
//               Create an Account
//               <div className="h-1.5 rounded-full bg-yellow-500 w-16 mt-3"></div>
//             </h2>
//           </div>

//           {/* Account Type Tab Switcher */}
//           <div className="flex bg-gray-100 p-1 gap-x-1 my-6 rounded-full max-w-max border border-gray-200 shadow-inner">
//             <button
//               onClick={() => setAccountType("student")}
//               className={`${accountType === "student"
//                 ? "bg-black text-yellow-500 shadow-sm"
//                 : "bg-transparent text-gray-500 hover:text-gray-900"
//                 } py-2 px-6 rounded-full transition-all duration-200 font-medium text-sm`}
//             >
//               Student
//             </button>
//             <button
//               onClick={() => setAccountType("instructor")}
//               className={`${accountType === "instructor"
//                 ? "bg-black text-yellow-500 shadow-sm"
//                 : "bg-transparent text-gray-500 hover:text-gray-900"
//                 } py-2 px-6 rounded-full transition-all duration-200 font-medium text-sm`}
//             >
//               Instructor
//             </button>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleOnSubmit} className="flex flex-col gap-5">

//             {/* Name Row */}
//             <div className="flex flex-col md:flex-row gap-5">
//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-sm font-semibold text-gray-700">First Name</label>
//                 <input
//                   required
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleOnChange}
//                   placeholder="John"
//                   className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
//                 />
//               </div>
//               <div className="flex flex-col gap-2 w-full">
//                 <label className="text-sm font-semibold text-gray-700">Last Name</label>
//                 <input
//                   required
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleOnChange}
//                   placeholder="Doe"
//                   className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex flex-col gap-2">
//               <label className="text-sm font-semibold text-gray-700">Email Address</label>
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleOnChange}
//                 placeholder="Enter your email"
//                 className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
//               />
//             </div>

//             {/* Password Row */}
//             <div className="flex flex-col md:flex-row gap-5">
//               {/* Password Field 1 */}
//               <div className="flex flex-col gap-2 w-full relative">
//                 <label className="text-sm font-semibold text-gray-700">Password</label>
//                 <input
//                   required
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleOnChange}
//                   placeholder="Create password"
//                   className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all pr-10"
//                 />
//                 <span
//                   onClick={() => setShowPassword((prev) => !prev)}
//                   className="absolute right-3 top-10 mt-1 cursor-pointer text-gray-500 hover:text-black text-lg"
//                 >
//                   {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>

//               {/* Password Field 2 */}
//               <div className="flex flex-col gap-2 w-full relative">
//                 <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
//                 <input
//                   required
//                   type={showConfirmPassword ? "text" : "password"}
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleOnChange}
//                   placeholder="Confirm password"
//                   className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg text-black focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all pr-10"
//                 />
//                 <span
//                   onClick={() => setShowConfirmPassword((prev) => !prev)}
//                   className="absolute right-3 top-10 mt-1 cursor-pointer text-gray-500 hover:text-black text-lg"
//                 >
//                   {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//                 </span>
//               </div>
//             </div>

//             {/* Signup Button */}
//             <button
//               type="submit"
//               className="mt-4 w-full bg-black text-yellow-400 py-2.5 rounded-lg font-bold text-lg tracking-wide shadow-md transition-all duration-300 cursor-pointer hover:bg-black hover:shadow-xl hover:-translate-y-1"
//             >
//               CREATE ACCOUNT
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="flex items-center gap-4 my-6">
//             <div className="h-0.5 bg-gray-200 w-full"></div>
//             <p className="text-gray-400 text-sm font-medium">OR</p>
//             <div className="h-0.5 bg-gray-200 w-full"></div>
//           </div>

//           {/* Google Login */}
//           <button
//             type="button"
//             className="w-full flex items-center cursor-pointer justify-center gap-3 border border-gray-200 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
//           >
//             <FcGoogle className="text-2xl" />
//             <span className="font-medium text-gray-700">Sign up with Google</span>
//           </button>

//           {/* Login Link */}
//           <p className="mt-6 text-center text-gray-600">
//             Already have an account?{" "}
//             <Link to="/login" className="font-bold text-black hover:text-yellow-600 underline underline-offset-4 transition-all">
//               Log In
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import signupImage from "../../assets/images/contactImage.jpg";
import { supabase } from "../../services/supabaseClient"; 

const Signup = () => {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("student");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            accountType: accountType,
          },
        },
      });

      if (error) throw error;

      alert("Signup successful! Check your email to verify your account.");
      navigate("/login");

    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/dashboard`, // change if needed
        },
      });
      if (error) throw error;
    } catch (err) {
      console.error(err);
      alert("Google sign-in failed");
    }
  };

  return (
    <div className="flex min-h-screen w-full font-sans">

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 relative">
        <img
          src={signupImage}
          alt="Signup Visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="absolute z-10 flex flex-col justify-center h-full px-20 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Join the <br />
            Dev<span className="text-yellow-500">Skills</span> Community
          </h1>
          <p className="text-gray-200 text-lg leading-relaxed">
            Build skills for today, tomorrow, and beyond.
            Education to future-proof your career.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center bg-white px-6 md:px-16 lg:px-24 py-10">

        <div className="w-full max-w-[500px]">

          {/* Header */}
          <div className="mb-8">
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-2">Free Register</p>
            <h2 className="text-4xl font-bold text-black">
              Create an Account
              <div className="h-1.5 rounded-full bg-yellow-500 w-16 mt-3"></div>
            </h2>
          </div>

          {/* Account Type Switcher */}
          <div className="flex bg-gray-100 p-1 gap-x-1 my-6 rounded-full max-w-max border border-gray-200 shadow-inner">
          
            
          </div>

          {/* FORM */}
          <form onSubmit={handleOnSubmit} className="flex flex-col gap-5">

            {/* Name Row */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleOnChange}
                  placeholder="John"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleOnChange}
                  placeholder="Doe"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleOnChange}
                placeholder="Enter your email"
                className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg"
              />
            </div>

            {/* Password Row */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex flex-col gap-2 w-full relative">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <input
                  required
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleOnChange}
                  placeholder="Create password"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg pr-10"
                />
                <span
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-10 mt-1 cursor-pointer text-gray-500 text-lg"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>

              <div className="flex flex-col gap-2 w-full relative">
                <label className="text-sm font-semibold text-gray-700">Confirm Password</label>
                <input
                  required
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleOnChange}
                  placeholder="Confirm password"
                  className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg pr-10"
                />
                <span
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute right-3 top-10 mt-1 cursor-pointer text-gray-500 text-lg"
                >
                  {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-4 w-full bg-black text-yellow-400 py-2.5 rounded-lg font-bold text-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              {loading ? "Creating Account..." : "CREATE ACCOUNT"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="h-0.5 bg-gray-200 w-full"></div>
            <p className="text-gray-400 text-sm font-medium">OR</p>
            <div className="h-0.5 bg-gray-200 w-full"></div>
          </div>

          {/* GOOGLE LOGIN BUTTON */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 py-3 rounded-lg hover:bg-gray-50"
          >
            <FcGoogle className="text-2xl" />
            <span className="font-medium text-gray-700">Sign up with Google</span>
          </button>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-black hover:text-yellow-600 underline underline-offset-4">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
