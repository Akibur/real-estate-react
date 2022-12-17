import React from 'react';
import { NavLink } from 'react-router-dom';


export default function Banner() {
    return (
        <div className="bg-gray-800 ">
            <div className="text-center w-full mx-auto py-12 px-2 sm:px-6 lg:py-16 lg:px-2 z-20">
                <h2 className="text-3xl md:text-6xl font-extrabold text-white ">

                    <span className="block text-blue-500">
                        Real Estate
                    </span>
                    <span className="block">
                        Management
                    </span>
                </h2>
                <p className="  text-base mt-4 max-w-5xl mx-auto text-gray-400">
                    WEB3 based real estate regsitry to   I was building a simple React app using Tailwind. I used create-react-app and then installed tailwind. I have done this many times before.

                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <NavLink to="allbikes">
                            <button type="button" className="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                View Land For Sale
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}
