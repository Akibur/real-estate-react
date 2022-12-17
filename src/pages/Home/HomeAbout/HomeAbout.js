import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomeAbout() {
    return (
        <div>
            <div className="relative bg-white overflow-hidden">
                <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-20 lg:pb-48">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                                Premium Custom Bikes
                            </h1>
                            <p className="my-8 text-xl text-gray-500">
                                Rangers is noted for a style of customization that gave rise to the chopper motorcycle style. The company traditionally marketed heavyweight, air-cooled cruiser motorcycles with engine displacements greater than 700 cc, but it has broadened its offerings
                            </p>
                        </div>
                        <div>
                            <div className="">
                                {/* Decorative image grid */}
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl  lg:w-full"
                                >
                                    <div className="absolute transform  sm:top-0  sm:w-auto lg:left-1/2   ">
                                        <div className="flex items-center justify-center space-x-6 lg:space-x-8">
                                            <div className="flex-shrink-0 grid grid-cols-1  lg:gap-y-8">
                                                <div className="w-auto h-96 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                                                    <img
                                                        src="https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2021/2021-sportster-s/2021-sportster-s-e85/2021-sportster-s-e85-motorcycle.jpg?impolicy=myresize&rw=500"
                                                        alt=""
                                                        className="w-auto h-full  "
                                                    />
                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                                <NavLink to="allbikes" className="inline-block text-center bg-red-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-red-700">
                                    View Bikes
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
