import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

const useFoods = async () => {
    const res = await api.get('/foods');
    return res.status === 200 ? res.data : []
};

export default useFoods;

export const foodDetail = async (id) => {
    const res = await api.get(`/foods/${id}`);
    return res.status === 200 ? res.data : []
};

export const useAvailableFoods = async () => {
    const res = await api.get('/availableFoods');
    return res.status === 200 ? res.data : []
};

export const usedAvailableFoodsSort = async (sort, search) => {
    const res = await api.get(`/availableFoodsSort/${sort}?search=${search}`);
    return res.status === 200 ? res.data : [];
};

export const addFood = async (food) => {
    const res = await api.post(`/foods`, food, { headers: { 'content-type': 'application/json' }, });
    return res.status === 200 ? res.data : [];
};
