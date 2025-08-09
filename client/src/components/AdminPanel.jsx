import { useEffect, useState, forwardRef, useImperativeHandle } from "react";
import axios from "axios";
import SkeletonLoader from './Dummy'


const AdminPanel = forwardRef((props, ref) => {
  const [urls, setUrls] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loadUrls = () => {
    setLoading(true);
    axios
      .get("http://localhost:3001/api/admin/list")
      .then((res) => {
        setUrls(res.data.urls);
        setTotalCount(res.data.total_count);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const deleteUrl = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/api/admin/delete/${id}`);
      setMessage("✅ URL deleted successfully!");
      loadUrls();
    } catch (err) {
      setMessage("❌ Error deleting URL.");
    }
  };

  useEffect(() => {
    loadUrls();
  }, []);

  // Expose refreshData() to parent
  useImperativeHandle(ref, () => ({
    refreshData: () => {
      loadUrls();
    },
  }));

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-center text-gray-800">
        📊 Admin Dashboard
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Total URLs Saved: <span className="font-bold">{totalCount}</span>
      </p>

      {message && (
        <p className="text-center text-green-600 font-medium mb-4">{message}</p>
      )}

      {/* Show Skeleton Loader if Loading */}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto shadow-lg rounded-xl bg-white/50 backdrop-blur-md border border-white/20">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <th className="p-3 border">Original URL</th>
                  <th className="p-3 border">Short URL</th>
                  <th className="p-3 border">Visits</th>
                  <th className="p-3 border">Created At</th>
                  <th className="p-3 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((url) => (
                  <tr key={url._id} className="hover:bg-gray-200 transition">
                    <td className="p-3 border break-words">{url.original_url}</td>
                    <td className="p-3 border">
                      <a
                        href={`http://localhost:3001/api/${url.short_code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {url.short_code}
                      </a>
                    </td>
                    <td className="p-3 border text-center">{url.visit_count}</td>
                    <td className="p-3 border">
                      {new Date(url.createdAt).toLocaleString()}
                    </td>
                    <td className="p-3 border text-center">
                      <button
                        onClick={() => deleteUrl(url._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {urls.length === 0 && (
                  <tr>
                    <td colSpan="5" className="p-4 text-center text-gray-500">
                      No URLs found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {urls.length === 0 && (
              <p className="text-center text-gray-500">No URLs found</p>
            )}
            {urls.map((url) => (
              <div
                key={url._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200"
              >
                <div className="divide-y divide-gray-200">
                  <div className="flex justify-between p-3">
                    <span className="font-bold text-gray-700 w-1/3">Original</span>
                    <span className="w-2/3 break-words text-gray-800">
                      {url.original_url}
                    </span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="font-bold text-gray-700 w-1/3">Short</span>
                    <span className="w-2/3">
                      <a
                        href={`http://localhost:3001/api/${url.short_code}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        {url.short_code}
                      </a>
                    </span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="font-bold text-gray-700 w-1/3">Visits</span>
                    <span className="w-2/3 text-gray-800">{url.visit_count}</span>
                  </div>
                  <div className="flex justify-between p-3">
                    <span className="font-bold text-gray-700 w-1/3">Created</span>
                    <span className="w-2/3 text-gray-800">
                      {new Date(url.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-end p-3 bg-gray-50">
                    <button
                      onClick={() => deleteUrl(url._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
});

export default AdminPanel;
