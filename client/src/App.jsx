// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import MouseTracker from "./components/common/MouseTracker";
// import TouchSpark from "./components/common/TouchSpark";
// import ScrollToTop from "./components/common/ScrollToTop";

// import Home from "./pages/Home/Home";
// import Course from "./pages/course/course";
// import CourseDetails from "./pages/course/courseDetails";
// import CourseCard from "./pages/course/CourseCard";
// import VerifyCertificate from "./pages/Certificates/VerifyCertificate";
// import Contact from "./pages/Contact/Contact";
// import Dashboard from "./pages/UserDashboard/Dashboard";
// import Login from "./pages/auth/Login";

// import UserInfo from "./pages/auth/UserInfo.jsx"; 
// import Signup from "./pages/auth/Signup";

// import NavBar from "./components/Navbar";
// import Footer from "./components/footer/Footer";
// import About from "./pages/About/About";

// function App() {
//   return (
//     <>
//       <MouseTracker />
//       <TouchSpark />
//       <ScrollToTop />

//       {/* Navbar visible on all pages */}
//       <NavBar />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <CourseCard />
//               <Contact />
//             </>
//           }
//         />

//         <Route path="/course" element={<Course />} />
//         <Route path="/details" element={<CourseDetails />} />
//         <Route path="/verify" element={<VerifyCertificate />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />

//         <Route path="/add-details" element={<UserInfo />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//       {/* Footer visible on all pages */}
//       <Footer />
//     </>
//   );
// }

// export default App;


import React, { useState, useRef } from "react";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const fileInputRef = useRef(null);

  const uploadImage = async () => {
    if (!file) {
      setError("Please select an image");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "intern matrix");

      const cloudName = "deegn1hwt";

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok || data.error) {
        const errorMsg = data.error?.message || "Upload failed. Please try again.";
        console.error("Cloudinary Error:", errorMsg);
        throw new Error(errorMsg);
      }

      if (data.secure_url) {
        setUrl(data.secure_url);
        setError("");
      } else {
        setError("Upload failed. Please try again.");
      }
    } catch (err) {
      setError(err.message || "Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1B1919FF 0%, #1D1E1FFF 100%)",
        padding: "40px 20px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "8px", color: "#1a1a1a" }}>
          Upload Image
        </h1>
        <p style={{ color: "#666", marginBottom: "32px", fontSize: "14px" }}>
          Upload your image to Cloudinary
        </p>

        {/* Upload Area */}
        <div
          onClick={() => fileInputRef.current.click()}
          style={{
            border: "2px dashed #ddd",
            borderRadius: "8px",
            padding: "40px 20px",
            textAlign: "center",
            cursor: "pointer",
            background: file ? "#f9f9f9" : "#fafbfc",
            transition: "all 0.3s ease",
            marginBottom: "20px",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#0066ff";
            e.currentTarget.style.background = "#f0f5ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#ddd";
            e.currentTarget.style.background = file ? "#f9f9f9" : "#fafbfc";
          }}
        >
          {file ? (
            <div>
              <div style={{ color: "#0066ff", fontWeight: "600", marginBottom: "8px" }}>
                ✓ {file.name}
              </div>
              <div style={{ color: "#999", fontSize: "12px" }}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </div>
            </div>
          ) : (
            <div>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>📸</div>
              <div style={{ color: "#1a1a1a", fontWeight: "500", marginBottom: "4px" }}>
                Click to upload image
              </div>
              <div style={{ color: "#999", fontSize: "13px" }}>
                or drag and drop
              </div>
            </div>
          )}
        </div>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: "none" }}
        />

        {/* Error Message */}
        {error && (
          <div
            style={{
              background: "#fee",
              border: "1px solid #fcc",
              color: "#c00",
              padding: "12px",
              borderRadius: "6px",
              fontSize: "13px",
              marginBottom: "20px",
            }}
          >
            {error}
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={uploadImage}
          disabled={!file || loading}
          style={{
            width: "100%",
            padding: "12px 20px",
            borderRadius: "6px",
            background: !file || loading ? "#ddd" : "#0066ff",
            border: "none",
            color: !file || loading ? "#999" : "white",
            fontSize: "15px",
            fontWeight: "600",
            cursor: !file || loading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (!(!file || loading)) {
              e.currentTarget.style.background = "#0052cc";
            }
          }}
          onMouseLeave={(e) => {
            if (!(!file || loading)) {
              e.currentTarget.style.background = "#0066ff";
            }
          }}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>

        {/* URL Display + Copy */}
        {url && (
          <div style={{ marginTop: "28px", paddingTop: "28px", borderTop: "1px solid #eee" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#666", marginBottom: "8px" }}>
              Image URL
            </label>

            <div
              style={{
                background: "#f5f5f5",
                padding: "12px",
                borderRadius: "6px",
                border: "1px solid #e0e0e0",
                wordBreak: "break-all",
                color: "#0066ff",
                fontSize: "12px",
                fontFamily: "Monaco, monospace",
                marginBottom: "12px",
              }}
            >
              {url}
            </div>

            <button
              onClick={copyToClipboard}
              style={{
                width: "100%",
                padding: "10px 20px",
                borderRadius: "6px",
                background: copied ? "#10b981" : "#f5f5f5",
                color: copied ? "white" : "#0066ff",
                border: "1px solid " + (copied ? "#10b981" : "#ddd"),
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {copied ? "✓ Copied!" : "Copy URL"}
            </button>
          </div>
        )}

        {/* Image Preview */}
        {url && (
          <div style={{ marginTop: "28px", paddingTop: "28px", borderTop: "1px solid #eee" }}>
            <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#666", marginBottom: "12px" }}>
              Preview
            </label>

            <img
              src={url}
              alt="Uploaded"
              style={{
                width: "100%",
                borderRadius: "8px",
                border: "1px solid #eee",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;

