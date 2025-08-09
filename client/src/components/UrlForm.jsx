import { useState } from "react"; 
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UrlForm({ onUrlGenerated }) {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [shortCode, setShortCode] = useState("");  // store short_code here
  const [visitCount, setVisitCount] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setShortUrl("");
    setShortCode(""); // clear previous shortCode

    try {
      const res = await axios.post("https://raj25.vercel.app/api/shorten", {
        original_url: url,
      });
      
      setShortUrl(res.data.short_url);
      setShortCode(res.data.short_code); // save short_code from response
      setVisitCount(res.data.visit_count || 0);
      setUrl("");

      toast.success("Short URL generated!", { position: "top-right" });

      if (onUrlGenerated) {
        onUrlGenerated();
      }
    } catch (err) {
      toast.error("Unable to shorten URL.", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    toast.info("📋 Copied to clipboard!", { position: "top-right" });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md border border-white/20 relative">
      <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
        🔗 URL Shortener
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2 items-center">
        <input
          type="url"
          placeholder="Enter a long URL"
          className="border p-3 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-60"
          disabled={loading}
        >
          {loading ? "Generating..." : "Shorten"}
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
          <div className="flex items-center gap-3">
            <span className="text-gray-700 font-medium">Short URL:</span>
            <a
              href={`https://raj25.vercel.app/${shortCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}














// import { useState } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function UrlForm({ onUrlGenerated }) {
//   const [url, setUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [visitCount, setVisitCount] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setShortUrl("");

//     try {
//       const res = await axios.post("https://raj25.vercel.app/api/shorten", {
//         original_url: url,
//       });
//       setShortUrl(res.data.short_url);
//       setVisitCount(0);
//       setUrl("");

//       toast.success("Short URL generated!", { position: "top-right" });

//       if (onUrlGenerated) {
//         onUrlGenerated();
//       }
//     } catch (err) {
//       toast.error("Unable to shorten URL.", { position: "top-right" });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(shortUrl);
//     toast.info("📋 Copied to clipboard!", { position: "top-right" });
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-6 rounded-2xl shadow-xl bg-white/30 backdrop-blur-md border border-white/20 relative">
//       <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
//         🔗 URL Shortener
//       </h1>

//       <form onSubmit={handleSubmit} className="flex gap-2 items-center">
//         <input
//           type="url"
//           placeholder="Enter a long URL"
//           className="border p-3 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           required
//         />
//         <button
//           className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg hover:opacity-90 disabled:opacity-60"
//           disabled={loading}
//         >
//           {loading ? "Generating..." : "Shorten"}
//         </button>
//       </form>

//       {shortUrl && (
//         <div className="mt-6 bg-white p-4 rounded-lg shadow-inner">
//           <div className="flex items-center gap-3">
//             <span className="text-gray-700 font-medium">Short URL:</span>
//             <a
// {/*               href={shortUrl} */}
//              href={`https://raj25.vercel.app/api/${url.short_code}`}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {shortUrl}
//             </a>
//             <button
//               onClick={copyToClipboard}
//               className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//             >
//               Copy
//             </button>
//           </div> 
//         </div>
//       )}

//       {/* Toast Container */}
//       <ToastContainer autoClose={3000} hideProgressBar={false} newestOnTop />
//     </div>
//   );
// }
