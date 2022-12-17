/* This example requires Tailwind CSS v2.0+ */
import { Popover } from '@headlessui/react';
import {
    MenuIcon,
} from '@heroicons/react/outline';
import logo from '../../../assets/logo.png';
import MobileNav from './MobileNav/MobileNav';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

export default function Header() {

    const { user, logout } = useAuth();



    const notSignedIn = (
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <NavLink
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                to="/signin">
                Sign in
            </NavLink>
            <NavLink
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                to="/signup">
                Sign Up
            </NavLink>
        </div>
    );

    const Dashboard = (
        <div className="hidden md:flex items-center   md:flex-1 lg:w-0">
            <h5 className="text-xs font-bold mr-2">
                Welcome {user?.displayName}   |

            </h5>
            <NavLink
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                to="/dashboard">
                Dashboard
            </NavLink>
            <button
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700" to="/home"
                onClick={logout}>
                Logout
            </button>
        </div>
    );


    return (
        <Popover className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-start   items-center border-b-2 border-gray-100 py-6   md:space-x-10">
                    <div className="flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                className="h-8 w-auto sm:h-10"
                                src={logo}
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                            <span className="sr-only">Open menu</span>
                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <Popover.Group as="nav" className="hidden md:flex justify-start  space-x-10">
                        <NavLink
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                            to="/home">
                            Home
                        </NavLink>
                        <NavLink
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                            to="/about">
                            About
                        </NavLink>
                        <NavLink
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                            to="/allLands">
                            All Lands
                        </NavLink>
                        <NavLink
                            className="text-base font-medium text-gray-500 hover:text-gray-900"
                            to="/contact">
                            Contact
                        </NavLink>
                    </Popover.Group>
                    {user?.email ? Dashboard : notSignedIn}


                </div>
            </div>


            {/* Mobile Layout */}
            <MobileNav user={user} ></MobileNav>
        </Popover>
    );
}
