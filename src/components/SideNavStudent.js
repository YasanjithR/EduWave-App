import React from 'react';

const SideNavigationStudent = () => {
  return (
    <div className="bg-gray-800 text-white w-80 min-h-screen flex flex-col">
      {/* Logo or Heading */}
      <div className="py-4 px-6 bg-indigo-900">
        <h1 className="text-2xl font-bold">Eduwave</h1>
      </div>
      
      {/* Navigation links */}
      <div className="flex-1">
        <ul className="py-4">
          <li className="px-6 py-2 hover:bg-gray-700">My Course</li>
          <li className="px-6 py-2 hover:bg-gray-700">All Course</li>
          <li className="px-6 py-2 hover:bg-gray-700">Progress</li>
        </ul>
      </div>
    </div>
  );
};

export default SideNavigationStudent;
