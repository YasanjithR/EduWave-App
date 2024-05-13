// hooks/useFetchCourses.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useFetchCourses() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useAuthHeader(); 

  useEffect(() => {
    axios.get(`${API_BASE_URL}/cms/course/get`) 
      .then(response => {
        setData(response.data.courses); 
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

export default useFetchCourses;