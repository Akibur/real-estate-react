/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
    XIcon,
} from '@heroicons/react/outline';
import logo from '../../../../assets/logo.png';
import { NavLink } from 'react-router-dom';


export default function MobileNav({ user }) {


    const Dashboard = (
        <div className="p-2">
            <NavLink
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink
                className="w-full flex items-center justify-center px-4 py-2 my-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                to="/logout">
                Logout
            </NavLink>
        </div>
    );

    const notSignedIn = (
        <div>
            <NavLink
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
                to="/signup">
                Sign Up
            </NavLink>
            <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?{' '}
                <NavLink
                    className="text-blue-600 hover:text-blue-500"
                    to="/signin">
                    Sign In
                </NavLink>
            </p>
        </div>
    );
    return (
        <>
            <Transition
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <Popover.Panel focus className="absolute top-0 z-20 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img
                                        className="h-8 w-auto"
                                        src={logo}
                                        alt="Workflow"
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </Popover.Button>
                                </div>
                            </div>

                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="grid grid-cols-1 gap-y-4 gap-x-8">

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
                                    to="/allbikes">
                                    All Bikes
                                </NavLink>
                                <NavLink
                                    className="text-base font-medium text-gray-500 hover:text-gray-900"
                                    to="/contact">
                                    Contact
                                </NavLink>
                            </div>

                        </div>

                        {user?.email ? Dashboard : notSignedIn}

                    </div>
                </Popover.Panel>

            </Transition>
        </>


    );
}
