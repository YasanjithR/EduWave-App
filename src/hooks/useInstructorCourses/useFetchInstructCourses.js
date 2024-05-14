import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';
import useAuthHeader from '../auth/useAuthHeader';

const useFetchInstructCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useAuthHeader();

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const id = localStorage.getItem('id');
        const response = await axios.get(`${API_BASE_URL}/cms/course/get/instructor/${id}`);
        setCourses(response.data.courses);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
};

export default useFetchInstructCourses;