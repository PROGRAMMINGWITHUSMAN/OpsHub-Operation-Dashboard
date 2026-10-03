import axios from 'axios';

const fetchAPI = async (url) => {
    const response = await axios.get(url);
    return response.data; 
};

export default fetchAPI;