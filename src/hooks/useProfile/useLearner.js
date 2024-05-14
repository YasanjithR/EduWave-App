import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../config/api";

const useLearner = () => {
    const [learner, setLearner] = useState(null);

    useEffect(() => {
        const id = localStorage.getItem('id');
        fetch(`${API_BASE_URL}/learner/user/get/${id}`)
            .then(response => response.json())
            .then(data => setLearner(data))
            .catch(error => console.error(error));
    }, []);

    return learner;
}

export default useLearner;