import { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

const useUserLogin = (username, password, role) => {
  const [error, setError] = useState(null);

  const login = async (username, password, role) => {
    try {
      let response;
      if (role === 'learner') {
        response = await axios.post(`${API_BASE_URL}/learner/user/login`, {
          username,
          password,
        });
      } else {
        response = await axios.post(`${API_BASE_URL}/cms/user/login`, {
          username,
          password,
          role,
        });
      }

      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);

        setTimeout(() => {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
        }, 24 * 60 * 60 * 1000);
      }
    } catch (err) {
      setError(err.response);
    }
  };

  return { login, error };
};

export default useUserLogin;