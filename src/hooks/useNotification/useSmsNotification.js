import { useCallback } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config/api';

function useSmsNotification() {

    const sendSmsNotification = useCallback(async () => {
        let mobile = localStorage.getItem('mobile');
        if (mobile.startsWith('0')) {
            mobile = '94' + mobile.slice(1);
        }
        await axios.post(`${API_BASE_URL}/notification/sms/sms`, { mobile: mobile });
    }, []);

    return sendSmsNotification;
}

export default useSmsNotification;