import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

export default function MakeAdmin() {
    const { user,
        admin,
        token,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        makeAdmin,
        logout } = useAuth();

    const [loginData, setLoginData] = useState({});

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    const handleAdminChange = e => {
        makeAdmin(loginData.email);
        e.preventDefault();
    };


    return (
        <div>
            <div className="my-8 flex   justify-center">
                <div className="flex    flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg   dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                        Make a user an admin
                    </div>

                    {authError ?
                        <div className="bg-blue-200 border-blue-600 text-blue-600 border-l-4 p-4" role="alert">
                            <p className="font-bold">
                                Error
                            </p>
                            <p>
                                {authError}
                            </p>
                        </div> : null}

                    <div className="mt-2">
                        <form onSubmit={handleAdminChange}>
                            <div className="flex flex-col mb-2">
                                <div className="flex relative ">
                                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                        <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                            </path>
                                        </svg>
                                    </span>
                                    <input type="text"
                                        className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your email"
                                        name="email"
                                        onChange={handleOnChange}
                                    />
                                </div>
                            </div>
                            <div className="flex w-full">
                                <button type="submit" className="py-2 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <div className='flex justify-center'>
                                        {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                        </div> : "Make Admin"}
                                    </div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
