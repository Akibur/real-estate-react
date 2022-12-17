import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../../utils/AdminRoute/AdminRoute';
import AddLand from './AddLand/AddLand';
import AllTransfers from './AllTransfers/AllTransfers';
import DashBoardHome from './DashBoardHome/DashBoardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageLands from './ManageLands/ManageLands';
import ManageMyLand from './ManageMyLand/ManageMyLand';
import MyTransfers from './MyTransfers/MyTransfers';
import Profile from './Profile/Profile';

export default function Dassboard() {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    console.log("Is Admin", admin);

    const adminNavlinks = (<>
        <NavLink
            to={`${url}/makeAdmin`}
            activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Make Admin
            </span>
        </NavLink>

        <NavLink
            to={`${url}/allTransfers`}
            activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
            <span className="mx-4 text-sm font-normal">
                All Transfers
            </span>
        </NavLink>

        <NavLink
            to={`${url}/addLand`}
            activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Add New Land
            </span>
        </NavLink>
        <NavLink
            to={`${url}/manageLands`}
            activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

            className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
            <span className="mx-4 text-sm font-normal">
                Manage Lands
            </span>
        </NavLink>
    </>
    );

    const userNavLinks = (
        <>
            <NavLink
                to={`${url}/myTransfers`}
                activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

                className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                <span className="mx-4 text-sm font-normal">
                    My Transfers
                </span>
            </NavLink>
            <NavLink
                to={`${url}/addLand`}
                activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

                className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                <span className="mx-4 text-sm font-normal">
                    Add New Land
                </span>
            </NavLink>
            <NavLink
                to={`${url}/manageMyLands`}
                activeClassName="w-full font-thin uppercase text-blue-500 flex items-center p-4   transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"

                className="w-full font-thin uppercase text-gray-500  flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                <span className="mx-4 text-sm font-normal">
                    Manage My Land
                </span>
            </NavLink>
        </>
    );

    return (
        <div>
            <main className="bg-gray-100  overflow-hidden relative">
                <div className="flex items-start  ">
                    <div className="h-screen hidden lg:block    shadow-lg relative w-60">
                        <div className="bg-white h-full   ">
                            <nav className="">
                                <div>
                                    <NavLink
                                        activeClassName="w-full font-thin uppercase text-blue-500 flex items-center     transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-blue-500"
                                        exact to={`${url}`}
                                        className="w-full font-thin uppercase text-gray-500  flex items-center p-4   transition-colors duration-200 justify-start hover:text-blue-500" href="#">
                                        <span className="mx-4 text-sm font-normal">
                                            Profile
                                        </span>
                                    </NavLink>
                                    {admin ? adminNavlinks : userNavLinks}
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="container m-4 p-4">
                        <Switch>
                            <Route exact path={path}>
                                <Profile></Profile>
                            </Route>
                            <Route exact path={`${path}/myTransfers`}>
                                <MyTransfers></MyTransfers>
                            </Route>
                            <Route exact path={`${path}/manageMyLands`}>
                                <ManageMyLand></ManageMyLand>
                            </Route>
                            <Route exact path={`${path}/addLand`}>
                                <AddLand></AddLand>
                            </Route>
                            <AdminRoute exact path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/manageLands`}>
                                <ManageLands></ManageLands>
                            </AdminRoute>
                            <AdminRoute exact path={`${path}/allTransfers`}>
                                <AllTransfers></AllTransfers>
                            </AdminRoute>
                        </Switch>
                    </div>
                </div>
            </main>
        </div>
    );
}
