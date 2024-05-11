import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function useAuthRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if (token) {
        if (role === 'admin') 
            navigate('/home-admin');
        if (role === 'instructor') 
            navigate('/home-instructor');
        if (role === 'learner') 
            navigate('/home-student');
    }
  }, [navigate]);
}

export default useAuthRedirect;