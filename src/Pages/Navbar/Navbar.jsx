import { Link, NavLink } from "react-router";
import DarkModeToggleBtn from "../../Components/DarkModeToggleBtn";

const Navbar = () => {
    const navLinks = <>
        <li> <NavLink to='/' className={({ isActive }) =>
            isActive ? "text-[#85B935]" : ""
        }>Home</NavLink></li>
        <li> <NavLink to='/availableFood' className={({ isActive }) =>
            isActive ? "text-[#85B935]" : ""
        }>Available</NavLink></li>
        <li> <NavLink to='/addFood' className={({ isActive }) =>
            isActive ? "text-[#85B935]" : ""
        }>Add</NavLink></li>
        <li> <NavLink to='/manageMyFood' className={({ isActive }) =>
            isActive ? "text-[#85B935]" : ""
        }>Manage</NavLink></li>
        <li> <NavLink to='/myFoodRequest' className={({ isActive }) =>
            isActive ? "text-[#85B935]" : ""
        }>Request</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100 container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold border gap-5 menu-horizontal px-5 py-3 rounded-xl">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                    <DarkModeToggleBtn></DarkModeToggleBtn>
                    <Link to='/login' className="btn">Login</Link>
                    <Link to='/register' className="btn">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;