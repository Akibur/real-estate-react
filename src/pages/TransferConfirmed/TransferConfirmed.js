import React from 'react';

export default function TransferConfirmed() {
    return (

        <div className="bg-white dark:bg-gray-800 ">
            <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Your Transfer Request Has been Placed
                    </span>
                    <h3 className="md:text-2xl font-extrabold text-black dark:text-white sm:text-xl" >
                        <span className="block text-blue-700">
                            We will get back to you soon.
                        </span>
                    </h3>

                </h2>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-6 inline-flex rounded-md shadow">
                        <button type="button" className="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Browes More Land
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
