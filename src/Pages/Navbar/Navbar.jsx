import { Link, NavLink } from "react-router";
import DarkModeToggleBtn from "../../Components/DarkModeToggleBtn";
import useAuth from "../../Hooks/useAuth";
import { PiUserCircleThin } from "react-icons/pi";
import { FaRegUser, FaUserPlus } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import Swal from "sweetalert2";
import logo from '../../assets/logo.png'
import { RiMenuLine } from "react-icons/ri";
import { useEffect, useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();

    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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

    const handleLogout = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch()
            }
        });
    }

    return (
        <div className={`z-10 fixed w-full ${scrollY > 0 ? 'backdrop-blur-xl backdrop-filter bg-opacity-0 bg-white' : ''}`}>
            <div className="navbar mx-auto container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <RiMenuLine className=" text-3xl  mr-2 hover:text-[#85B935]" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="font-semibold menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow space-y-3">
                            {
                                navLinks
                            }
                        </ul>
                    </div>
                    <img className="w-16" src={logo} alt="" />
                    <h1 className="text-2xl font-bold ml-2">Food<span className="text-[#85B935]">Hive</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-semibold dark:border-white border border-black gap-5 menu-horizontal px-5 py-3 rounded-xl">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="tooltip tooltip-bottom mr-4" data-tip="Mode">
                        <DarkModeToggleBtn></DarkModeToggleBtn>
                    </div>
                    {/* profile */}
                    <div>
                        <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                            <div tabIndex={0} role="button" className="m-1">
                                <div className="avatar">
                                    <div className="w-12 rounded-full bg-base-200 group">
                                        {
                                            user ?
                                                user?.photoURL ? <img src={user?.photoURL} /> : <div className="avatar placeholder">
                                                    <div className="bg-neutral text-neutral-content w-12 rounded-full">
                                                        <span>{user?.displayName?.charAt(0)?.toUpperCase()}</span>
                                                    </div>
                                                </div>
                                                : <PiUserCircleThin className="w-full h-full group-hover:text-[#85B935]" />
                                        }
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content  bg-base-100 rounded-lg z-[50] w-fit p-5 shadow space-y-3">
                                {
                                    user ? <>
                                        <li className="hover:text-[#85B935] flex items-center gap-3"><FaRegUser />
                                            {user?.displayName}
                                        </li>
                                        <li className="hover:text-[#85B935] flex items-center gap-3"><MdOutlineEmail className="text-lg" />
                                            {user?.email}
                                        </li>
                                        <li onClick={handleLogout} className="hover:text-[#85B935] flex items-center gap-3 cursor-pointer"><FiLogOut />
                                            Logout
                                        </li></> : <>
                                        <li >
                                            <Link to="/login" className="hover:text-[#85B935] flex items-center gap-3"><FaRegUser />
                                                Login
                                            </Link>
                                        </li>
                                        <li><Link to="/register" className="hover:text-[#85B935] flex items-center gap-2"><FaUserPlus className="text-xl" />
                                            Register</Link>
                                        </li></>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;