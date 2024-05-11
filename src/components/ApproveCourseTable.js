import React from "react";

const ApproveCourseTable = () => {
  const courses = [
    { id: 1, title: "Course 1", content: "Content 1" },
    { id: 2, title: "Course 2", content: "Content 2" },
    { id: 3, title: "Course 3", content: "Content 3" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-center">Title</th>
              <th className="p-2 text-center">Instructor</th>
              <th className="p-2 text-center">Statuse</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} className="border-b border-gray-200">
                <td className="p-2 text-center">{course.id}</td>
                <td className="p-2 text-center">{course.title}</td>
                <td className="p-2 text-center">{course.content}</td>
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

export default ApproveCourseTable;
