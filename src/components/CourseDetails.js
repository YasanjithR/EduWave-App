import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CourseDetailComponent = () => {
  const course = {
    title: "JavaScript Basics",
    description: "This course is designed to introduce you to the basics of JavaScript, the most popular programming language in web development. You'll learn about variables, data types, functions, control structures, and more. By the end of this course, you'll have a solid foundation in JavaScript and be ready to move on to more advanced topics.",
    images: [
      "https://miro.medium.com/max/1838/1*y6C4nSvy2Woe0m7bWEn4BA.png",
      "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"
    ]
  };

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
        <h2 className="text-xl font-bold mb-4">{course.title}</h2>
        <p className="text-gray-700 mb-4">{course.description}</p>
      </div>
      <div className="border-t border-gray-200 p-5">
        {/* Slider for course lecture videos */}
        <Slider {...settings}>
          {course.images.map((image, index) => (
            <div key={index} className="px-4">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full rounded-lg" />
            </div>
          ))}
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