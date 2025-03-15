import axios from 'axios';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
        return response.data.users; // 유저 데이터만 반환
    } catch (error) {
        console.error('API 호출 실패:', error);
        throw error;
    }
};