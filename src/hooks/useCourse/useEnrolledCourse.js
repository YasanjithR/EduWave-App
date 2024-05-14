import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useEnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const headers = useAuthHeader();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const response = await axios.get(`${API_BASE_URL}/learner/enroll/progress`, { headers });
      setEnrolledCourses(response.data.courses.map(item => item.course));
    };
  
    fetchEnrolledCourses();
  }, [headers]);

  return enrolledCourses;
}

export default useEnrolledCourses;