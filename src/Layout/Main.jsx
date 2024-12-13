// import { Outlet, useLocation } from "react-router";
// import Navbar from "../Pages/Navbar/Navbar";
// import Footer from "../Pages/Footer/Footer";
// import Breadcrumb from "../Components/Breadcrumb";

// const Main = () => {
//     const location = useLocation();
//     return (
//         <div>
//             <Navbar></Navbar>
//             <Breadcrumb location={location} />
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default Main;


import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import Breadcrumb from "../Components/Breadcrumb";

const Main = () => {

    const location = useLocation();
    // console.log(location);

    const routeBackgrounds = {
        "/availableFood": "url('https://i.ibb.co.com/wBPfNm4/pexels-madelynemery-954677.jpg')",
        "/addFood": "url('https://i.ibb.co.com/b3VydvL/arturrro-Gd-TLa-Wam-FHw-unsplash.jpg')",
        "/manageMyFood": "url('https://i.ibb.co.com/16JjDD3/pexels-marcel-fiedler-400737-1079020.jpg')",
        "/myFoodRequest": "url('https://i.ibb.co.com/h7m0YFH/pexels-minan1398-1482803.jpg')",
        "/viewDetail": "url('https://i.ibb.co.com/16JjDD3/pexels-marcel-fiedler-400737-1079020.jpg')"
    }

    // Get the background for the current route
    const currentBackground = routeBackgrounds[location.pathname];
    // Define pages where breadcrumbs should be excluded
    const noBreadcrumbRoutes = ["/", "/login", "/register"];
    const isNoBreadcrumbPage = noBreadcrumbRoutes.includes(location.pathname);
    // console.log(currentBackground);

    return (
        <div>
            <Navbar />
            {
                !isNoBreadcrumbPage && <div className='relative h-[350px] bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: currentBackground || routeBackgrounds["/viewDetail"] }}>
                    <div className="bg-black bg-opacity-50 p-4 rounded">
                        <Breadcrumb location={location}></Breadcrumb>
                    </div>
                </div>
            }
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
