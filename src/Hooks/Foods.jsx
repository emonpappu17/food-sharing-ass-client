import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router";
// import { useEffect } from "react";
// import UseAxiosSecure from "./UseAxiosSecure";

export const api = axios.create({
    baseURL: 'https://food-sharing-ass-server.vercel.app',
    withCredentials: true
})


// // Add an interceptor to the `api` instance 
//  export const useApiInterceptor = () => {
//     const { logOut } = useAuth();
//     const navigate = useNavigate();
//     // Set up the interceptor
//     api.interceptors.response.use(res => {
//         return res;
//     },
//         error => {
//             if (error.response.status === 401 || error.response.status === 403) {
//                 logOut()
//                     .then()
//                     .then(() => {
//                         navigate('/login')
//                     })
//                     .catch(err => console.log(err))
//             }
//         }
//     )
// }
// useApiInterceptor()


// useEffect(() => {
//     const { logOut } = useAuth();
// const navigate = useNavigate();
//     axiosSecure.interceptors.response.use(res => {
//         return res;
//     }, error => {
//         console.log('error tracked in the interceptor', error.response)
//         if (error.response.status === 401 || error.response.status === 403) {
//             console.log('logout the user');
//             logOut()
//                 .then()
//                 .then(() => {
//                     navigate('/login')
//                 })
//                 .catch(err => console.log(err))
//         }
//     })
// }, [navigate, logOut])


// // // Add an interceptor to the `api` instance
// // const useApiInterceptor = () => {
// //     const { logOut } = useAuth();
// //     const navigate = useNavigate();

// //     // Set up the interceptor
// //     api.interceptors.response.use(
// //         response => response, // Pass through successful responses
// //         async error => {
// //             console.error("Error tracked in interceptor:", error.response);
// //             if (error.response?.status === 401 || error.response?.status === 403) {
// //                 console.log("Logging out user due to unauthorized access.");
// //                 try {
// //                     await logOut();
// //                     navigate("/login"); // Redirect to login page
// //                 } catch (err) {
// //                     console.error("Error during logout:", err);
// //                 }
// //             }
// //             return Promise.reject(error); // Propagate the error
// //         }
// //     );
// // };

// // // Call the interceptor function
// // useApiInterceptor();


// export const api = UseAxiosSecure();


// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosSecure = axios.create({
//     baseURL: 'https://food-sharing-ass-server.vercel.app',
//     withCredentials: true
// })

// const useAxiosSecure = () => {

//     const { logOut } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         axiosSecure.interceptors.response.use(res => {
//             return res;
//         }, error => {
//             console.log('error tracked in the interceptor', error.response)
//             if (error.response.status === 401 || error.response.status === 403) {
//                 console.log('logout the user');
//                 logOut()
//                     .then()
//                     .then(() => {
//                         navigate('/login')
//                     })
//                     .catch(err => console.log(err))
//             }
//         })
//     }, [navigate, logOut])

//     return axiosSecure
// };


// export const api = useAxiosSecure;



// // Create the axios instance
// export const api = axios.create({
//     baseURL: 'https://food-sharing-ass-server.vercel.app',
//     withCredentials: true,
// });

// // Add an interceptor to handle responses and errors
// api.interceptors.response.use(
//     (response) => {
//         // Pass through successful responses
//         return response;
//     },
//     (error) => {
//         console.error("Error tracked in interceptor:", error.response.status);
//         const { logOut } = useAuth();
//         if (error?.response?.status === 401 ) {
//             console.log("User is unauthorized. Redirecting to login...");
//             // You can implement a logout or redirect function here
//             // For example:
//             // const navigate = useNavigate();
//             // logOut();  // Call your logOut function if available
//             // navigate("/login");  // Redirect to login page
//             // logOut()
//             //     .then(() => {
//             //         navigate('/login')
//             //     })
//             //     .catch(err => console.log(err))
//             logOut()
//                 .then(() => {
//                     Swal.fire({
//                         title: "Logout!",
//                         text: "Your account logout successfully.",
//                         icon: "success"
//                     });
//                 })
//                 .catch()
//         }
//         return Promise.reject(error); // Propagate the error
//     }
// );

const useFoods = async () => {
    const res = await api.get('/foods');
    return res.status === 200 ? res.data : []
};

export default useFoods;

export const foodDetail = async (id) => {
    const res = await api.get(`/foods/${id}`);
    return res.status === 200 ? res.data : []
};

export const emailFoods = async (email) => {
    const res = await api.get(`/emailFoods?email=${email}`);
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

// export const requestedFood = async (status) => {
//     const res = await api.get(`/food/${status}`);
//     return res.status === 200 ? res.data : [];
// };

export const requestedFood = async () => {
    const res = await api.get('/requestedFoods');
    return res.status === 200 ? res.data : []
};

export const addFood = async (food) => {
    const res = await api.post(`/foods`, food, { headers: { 'content-type': 'application/json' }, });
    return res.status === 200 ? res.data : [];
};

export const requestFood = async (food) => {
    const { _id, ...foodData } = food
    const res = await api.put(`/foods/${_id}`, foodData, { headers: { 'content-type': 'application/json' }, });
    return res.status === 200 ? res.data : [];
};

export const updateFood = async (food) => {
    const { id, ...foodData } = food
    const res = await api.put(`/food/${id}`, foodData, { headers: { 'content-type': 'application/json' }, });
    return res.status === 200 ? res.data : [];
};

export const deleteFood = async (id) => {
    const res = await api.delete(`/food/${id}`);
    return res.status === 200 ? res.data : [];
};

export const cancelFood = async (id) => {
    const res = await api.put(`/requestedFoods/${id}`);
    return res.status === 200 ? res.data : [];
};
