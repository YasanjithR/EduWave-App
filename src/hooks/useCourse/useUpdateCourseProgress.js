import { useCallback } from 'react';
import axios from 'axios';
import useAuthHeader from '../auth/useAuthHeader';
import { API_BASE_URL } from '../../config/api';

function useUpdateCourseProgress(courseId, totalVideos) {
  const headers = useAuthHeader();

  const updateCourseProgress = useCallback(async (currentVideoIndex) => {
    const progress = ((currentVideoIndex + 1) / totalVideos) * 100;
    await axios.put(`${API_BASE_URL}/learner/enroll/update/${courseId}`, { progress }, { headers });
  }, [courseId, totalVideos, headers]);

  return updateCourseProgress;
}

export default useUpdateCourseProgress;