import React from 'react';

export default function Contact() {
    return (
        <div className="my-8 flex   justify-center">

            <div className="flex shadow-xl  flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">            <div className="text-center h-full w-full mx-auto py-4 px-2 sm:px-6 lg:py-16 lg:px-2 z-20">
                <h2 className="text-xl md:text-5xl font-extrabold text-black ">
                    <span className="block text-blue-500">
                        Contact
                    </span>
                </h2>
                <div className="mt-8">
                    <form >
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input type="text"
                                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your Name"
                                    name="name"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">

                                <input type="text"
                                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Your email"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col mb-6">
                            <div className="flex relative ">

                                <input
                                    type="text"
                                    className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Message"
                                    name="message"
                                />
                            </div>
                        </div>
                        <div className="flex w-full">
                            <button type="submit" className="py-2 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <div className='flex justify-center'>
                                    Submit
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
