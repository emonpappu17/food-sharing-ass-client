import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const useFoods = async () => {
    const res = await api.get('/foods');
    return res.status === 200 ? res.data : []
};

export default useFoods;