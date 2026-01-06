import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex justify-center bg-gray-100">
      {/* Fixed width container */}
      <div className="w-full max-w-[1280px] min-h-screen px-4">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
