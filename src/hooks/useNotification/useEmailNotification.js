import { useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

function useEmailNotification() {

    const sendEmailNotification = useCallback(async () => {
        const email = localStorage.getItem('email');
        await axios.post(`${API_BASE_URL}/notification/email/notify`, { email });
    }, []);

    return sendEmailNotification;
}

export default useEmailNotification;