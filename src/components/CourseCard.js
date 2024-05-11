import React from "react";

const CourseCard = ({ title, content }) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md overflow-hidden md:max-w-md md:flex md:flex-row md:space-x-4 m-4 w-full sm:w-1/2 lg:w-1/3">
      <div className="p-4 md:p-8 flex flex-col justify-between mx-4">
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-gray-500">{content}</p>
        </div>
        <div className="mt-4">
          <button className="w-full md:w-auto px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  const courses = [
    {
      title: "JavaScript Basics",
      content: "Learn the basics of JavaScript, the most popular programming language in web development."
    },
    {
      title: "Advanced JavaScript",
      content: "Take your JavaScript skills to the next level with topics like async programming, closures, and prototypes."
    },
    {
      title: "JavaScript Frameworks",
      content: "Learn about JavaScript frameworks like React, Vue, and Angular, and how they can help you build complex web applications."
    },
    {
      title: "Node.js",
      content: "Learn how to build server-side applications with Node.js, a popular JavaScript runtime."
    },
    {
      title: "Express.js",
      content: "Learn how to build web servers with Express.js, a popular web framework for Node.js."
    },
    {
      title: "MongoDB",
      content: "Learn how to work with MongoDB, a popular NoSQL database, and how to integrate it with Node.js."
    },
    {
      title: "Full-Stack Development",
      content: "Learn how to build full-stack applications with JavaScript, from the front-end to the back-end."
    }
  ];

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap p-5">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} content={course.content} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;