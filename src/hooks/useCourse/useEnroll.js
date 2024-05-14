import { useState } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useEnroll() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const headers = useAuthHeader();

  const enroll = async (courseId) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/learner/enroll/enroll/${courseId}`, {}, { headers });
      setLoading(false);
      return response.data;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return { enroll, loading, error };
}

export default useEnroll;