import React from "react";

const CourseCard = () => {
  const title = "Course Title";//use props
  const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis feugiat magna, at placerat dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.";

  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-wrap p-5">
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
      </div>
    </div>
  );
};

export default CourseCard;
