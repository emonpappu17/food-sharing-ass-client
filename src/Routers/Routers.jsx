import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodsRequest from "../Pages/MyFoodsRequest/MyFoodsRequest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ViewDetail from "../Pages/ViewDetails/ViewDetail";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { foodDetail } from "../Hooks/Foods";
import PrivateRoute from "../Providers/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/availableFood',
                element: <AvailableFood></AvailableFood>
            },
            {
                path: '/addFood',
                element: <PrivateRoute> <AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/manageMyFood',
                element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>
            },
            {
                path: '/myFoodRequest',
                element: <PrivateRoute><MyFoodsRequest></MyFoodsRequest></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/viewDetail/:id',
                loader: async ({ params }) => {
                    return await foodDetail(params.id)
                },
                element: <PrivateRoute><ViewDetail></ViewDetail></PrivateRoute>
            }
        ]
    },
]);

export default router