import useAuth from "../Hooks/useAuth";
import loader from '.././/assets/loader.json'
import Lottie from "lottie-react";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const location = useLocation();

    const { loading, user } = useAuth()

    if (loading) return <div className="flex items-center justify-center h-20"><Lottie className="w-20" animationData={loader}></Lottie></div>

    if (user) return children

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;