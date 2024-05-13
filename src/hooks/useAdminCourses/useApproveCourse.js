import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

const useApproveCourse = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const approveCourse = async (id) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.put(`${API_BASE_URL}/cms/course/approve/${id}`);
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { approveCourse, loading, error };
};

export default useApproveCourse;