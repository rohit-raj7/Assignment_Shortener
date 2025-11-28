import React from "react";
import { Routes, Route } from "react-router-dom";
import MouseTracker from "./components/common/MouseTracker";
import TouchSpark from "./components/common/TouchSpark";
import ScrollToTop from "./components/common/ScrollToTop";

import Home from "./pages/Home/Home";
import Course from "./pages/course/course";
import CourseDetails from "./pages/course/courseDetails";
import CourseCard from "./pages/course/CourseCard";
import VerifyCertificate from "./pages/Certificates/VerifyCertificate";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/UserDashboard/Dashboard";
import Login from "./pages/auth/Login";

import UserInfo from "./pages/auth/UserInfo.jsx"; 
import Signup from "./pages/auth/Signup";

import NavBar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <MouseTracker />
      <TouchSpark />
      <ScrollToTop />

      {/* Navbar visible on all pages */}
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <CourseCard />
              <Contact />
            </>
          }
        />

        <Route path="/course" element={<Course />} />
        <Route path="/details" element={<CourseDetails />} />
        <Route path="/verify" element={<VerifyCertificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />

        <Route path="/add-details" element={<UserInfo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {/* Footer visible on all pages */}
      <Footer />
    </>
  );
}

export default App;
