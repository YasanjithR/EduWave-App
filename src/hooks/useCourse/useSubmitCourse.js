import { useState } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useSubmitCourse() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const authHeader = useAuthHeader();

  const submitCourse = async (course) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_BASE_URL}/cms/course/add`, course, {
        headers: authHeader,
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { submitCourse, loading, error };
}

export default useSubmitCourse;