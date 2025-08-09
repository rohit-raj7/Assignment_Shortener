import React from "react";

const SkeletonLoader = ({ rows = 5, cards = 3 }) => {
  return (
    <div className="w-full p-4">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr>
              {["Original URL", "Short URL", "Visits", "Created At", "Actions"].map((header, idx) => (
                <th
                  key={idx}
                  className="bg-purple-500 text-white py-2 px-4 text-left rounded-t-md"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...Array(rows)].map((_, idx) => (
              <tr key={idx} className="border-b">
                {[...Array(5)].map((_, colIdx) => (
                  <td key={colIdx} className="py-3 px-4">
                    <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        {[...Array(cards)].map((_, idx) => (
          <div
            key={idx}
            className="border rounded-lg p-4 shadow-sm space-y-2 animate-pulse"
          >
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            <div className="h-8 bg-gray-300 rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
