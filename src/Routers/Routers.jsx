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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <AddFood></AddFood>
            },
            {
                path: '/manageMyFood',
                element: <ManageMyFoods></ManageMyFoods>
            },
            {
                path: '/myFoodRequest',
                element: <MyFoodsRequest></MyFoodsRequest>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router