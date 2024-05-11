import React from "react";

const EnrolledCourses = () => {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-center">Title</th>
       
              <th className="p-2 text-center">Statuse</th>
              <th className="p-2 text-center">See Progress</th>
            </tr>
          </thead>
          <tbody>
         
              <tr  className="border-b border-gray-200">
                <td className="p-2 text-center">Software Engineering</td>
                <td className="p-2 text-center">Status</td>
                <td className="p-2 text-center">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    View 
                  </button>
                </td>
              </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledCourses;
