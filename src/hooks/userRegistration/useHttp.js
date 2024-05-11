import { useState } from 'react';
import { API_BASE_URL } from '../../config/api';

const useHttp = (endpoint, method, initialBody) => {
    const url = `${API_BASE_URL}/${endpoint}`;
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const execute = async (body = initialBody) => {
        setLoading(true);
        try {
        const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: {
            'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        setData(data);
        } catch (error) {
        setError(error);
        } finally {
        setLoading(false);
        }
    };

    return { data, error, loading, execute };
};

export default useHttp;