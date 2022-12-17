import React from 'react';

export default function Footer() {
    return (
        <div>

            <footer className="bg-white dark:bg-gray-800 w-full py-2">
                <div className="max-w-screen-xl mx-auto px-4">
                    <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                        <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3  justify-center">
                            <div className=" relative ">
                                <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Email" />
                            </div>
                            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <div className="text-center text-gray-500 dark:text-gray-200 pt-2 sm:pt-8 font-light flex items-center justify-center">
                        Created by Akibur Rahman
                    </div>
                </div>
            </footer>

        </div>
    );
}
