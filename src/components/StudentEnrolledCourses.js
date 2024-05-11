import React from "react";

const EnrolledCourses = () => {
  const courses = [
    { id: 1, title: "Software Engineering", status: "In Progress" },
    { id: 2, title: "Data Structures", status: "Completed" },
    { id: 3, title: "Algorithms", status: "In Progress" },
    { id: 4, title: "Database Management", status: "Not Started" },
    { id: 5, title: "Web Development", status: "Completed" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-center">Title</th>
              <th className="p-2 text-center">Status</th>
              <th className="p-2 text-center">See Progress</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} className="border-b border-gray-200">
                <td className="p-2 text-center">{course.title}</td>
                <td className="p-2 text-center">{course.status}</td>
                <td className="p-2 text-center">
                  <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                    View 
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledCourses;