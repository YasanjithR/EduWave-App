import { useState } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

const useUpdateCourse = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headers = useAuthHeader();

  const updateCourse = async (id, courseData) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/cms/course/update/${id}`, courseData, { headers });
      setLoading(false);
      return response.data;
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return { updateCourse, loading, error };
};

export default useUpdateCourse;