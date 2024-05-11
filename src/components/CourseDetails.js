import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseDetailComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="container mx-auto p-5 bg-white rounded-xl shadow-md">
      <div className="p-5">
        <h2 className="text-xl font-bold mb-4">Course Title</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
          feugiat magna, at placerat dui. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vivamus nec vehicula ipsum.
        </p>
      </div>
      <div className="border-t border-gray-200 p-5">
        {/* Slider for course lecture videos */}
        <Slider {...settings}>
          <div className="px-4">
            <img src="https://via.placeholder.com/150x100" alt="Video 1" className="w-full rounded-lg" />
          </div>
          <div className="px-4">
            <img src="https://via.placeholder.com/150x100" alt="Video 2" className="w-full rounded-lg" />
          </div>
          <div className="px-4">
            <img src="https://via.placeholder.com/150x100" alt="Video 3" className="w-full rounded-lg" />
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
      <div className="flex justify-center p-5">
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseDetailComponent;
