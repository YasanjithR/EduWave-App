import { useEffect } from 'react';
import axios from 'axios';

function useAuthHeader() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    let role = localStorage.getItem('role');
    if (token) {
      axios.defaults.headers.common['x-access-token'] = token;
    } else {
      delete axios.defaults.headers.common['x-access-token'];
    }
    if (role) {
      role = role.charAt(0).toUpperCase() + role.slice(1);
      axios.defaults.headers.common['x-user-role'] = role;
    } else {
      delete axios.defaults.headers.common['x-user-role'];
    }
  }, []);

  return axios.defaults.headers.common;
}

export default useAuthHeader;