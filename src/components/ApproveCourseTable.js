import React from "react";

const ApproveCourseTable = () => {
  const courses = [
    { id: 1, title: "JavaScript Basics", content: "Learn the basics of JavaScript, the most popular programming language in web development.", instructor: "John Doe" },
    { id: 2, title: "Advanced JavaScript", content: "Take your JavaScript skills to the next level with topics like async programming, closures, and prototypes.", instructor: "Jane Doe" },
    { id: 3, title: "JavaScript Frameworks", content: "Learn about JavaScript frameworks like React, Vue, and Angular, and how they can help you build complex web applications.", instructor: "Jim Doe" },
    { id: 4, title: "Node.js", content: "Learn how to build server-side applications with Node.js, a popular JavaScript runtime.", instructor: "Jack Doe" },
    { id: 5, title: "Express.js", content: "Learn how to build web servers with Express.js, a popular web framework for Node.js.", instructor: "Jill Doe" },
    { id: 6, title: "MongoDB", content: "Learn how to work with MongoDB, a popular NoSQL database, and how to integrate it with Node.js.", instructor: "Jake Doe" },
    { id: 7, title: "Full-Stack Development", content: "Learn how to build full-stack applications with JavaScript, from the front-end to the back-end.", instructor: "Jen Doe" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-center">Title</th>
              <th className="p-2 text-center">Instructor</th>
              <th className="p-2 text-center">Content</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id} className="border-b border-gray-200">
                <td className="p-2 text-center">{course.title}</td>
                <td className="p-2 text-center">{course.instructor}</td>
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