import React from "react";

export default function LoadingBooks() {
  return (
    <div className="flex justify-center gap-5 mt-5">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="max-w-xs rounded-lg hidden sm:block shadow-lg">
          <img className="w-full h-[200px] mt-6 bg-gray-300 animate-pulse rounded-t-lg" alt="" />
          <div className="px-6 py-4">
            <div className="w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
            <p className="w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></p>
            <p className="w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></p>
          </div>
        </div>
      ))}
    </div>
  );
}
