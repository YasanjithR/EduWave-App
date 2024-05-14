import { useState, useEffect } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useCourseProgress(courseId) {
  const [progress, setProgress] = useState(0);
  const headers = useAuthHeader();

  useEffect(() => {
    const fetchCourseProgress = async () => {
      const response = await axios.get(`${API_BASE_URL}/learner/enroll/progress/${courseId}`, { headers });
      setProgress(response.data.progress);
    };
  
    fetchCourseProgress();
  }, [courseId, headers]);

  return progress;
}

export default useCourseProgress;