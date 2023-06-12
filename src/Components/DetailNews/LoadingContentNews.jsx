import React from "react";

export default function LoadingContentNews() {
  return (
    <div className="flex justify-center">
      <div className="justify-center gap-10 items-center flex-wrap px-12">
        <div className="w-[500px] h-10 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="items-center justify-center flex w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="items-center justify-center flex w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="flex items-center justify-center w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
        <div className="flex items-center justify-center w-36 h-3 mt-6 bg-gray-300 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
}
