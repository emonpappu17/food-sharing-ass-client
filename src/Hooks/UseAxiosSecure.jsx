import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: 'https://food-sharing-ass-server.vercel.app',
    withCredentials: true
})

const UseAxiosSecure = () => {

    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user');
                logOut()
                    .then(() => {
                        navigate('/login')
                    })
                    .then()
                    .catch(err => console.log(err))
            }
        })
    }, [navigate, logOut])

    return axiosSecure
};

export default UseAxiosSecure;