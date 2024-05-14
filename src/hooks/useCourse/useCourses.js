import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

const useCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(`${API_BASE_URL}/cms/course/get/approved`);
      setCourses(response.data.courses);
    };

    fetchCourses();
  }, []);

  return courses;
};

export default useCourses;