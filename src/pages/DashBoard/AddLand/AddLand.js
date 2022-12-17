import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { createLand } from '../../../store/lands-slice';
import { useDispatch, useSelector } from 'react-redux';
import TemporaryAlert from "../../../Components/UI/TemporaryAlert/TemporaryAlert";
import useAuth from '../../../hooks/useAuth';




export default function AddLand() {

    // const [lands,
    //     displayLands,
    //     setDisplayLands,
    //     isLoading,
    //     deleteLand,
    //     createLand
    // ] = useLands([]);

    const dispatch = useDispatch();
    const { loading, landError, alert } = useSelector((state) => state.lands);
    const { user } = useAuth();



    useEffect(() => {

    }, [loading]);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.owner = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
        };
        console.log(data);
        dispatch(createLand(data));
    };

    return (
        <div>
            <div className=" flex  justify-center">
                <div className="flex shadow-xl  flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                    <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                        Place Land for Sale
                    </div>
                    {landError.isError ?
                        <TemporaryAlert delay="10000">
                            <p className="text-center self-center font-bold text-blue-600">Failed to Add:{landError.message}</p>
                        </TemporaryAlert> : null
                    }
                    {
                        alert ? <TemporaryAlert delay="10000">
                            <p className="self-center font-bold text-green-400">{alert}</p>
                        </TemporaryAlert> : null
                    }

                    <div className="p-6 ">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input {...register("address", { required: true })} type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="address" placeholder="Address" />
                                    {errors.name && <span className="text-blue-500">* Address is required</span>}

                                </div>
                            </div>

                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input {...register("area", { required: true, min: 1 })} type="number" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        name="area"
                                        placeholder="Area in sqft" />
                                    {errors?.area?.type === "required" && <span className="text-blue-500">* Area is required</span>}
                                    {errors?.area?.type === "min" && <span className="text-blue-500">* Area must be greater than 0</span>}


                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input {...register("image", { required: true })} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        name="image"
                                        placeholder="Image URL" />
                                    {errors.image && <span className="text-blue-500">* Image URL is required</span>}

                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input {...register("description", { required: true })} type="text" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        name="description"
                                        placeholder="Description" />
                                    {errors.description && <span className="text-blue-500">* Description is required</span>}

                                </div>
                            </div>
                            <div className="flex flex-col mb-2">
                                <div className=" relative ">
                                    <input {...register("price", { required: true, min: 1 })} type="number" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                        name="price"
                                        placeholder="Price" />
                                    {errors?.price?.type === "required" && <span className="text-blue-500">* Price is required</span>}
                                    {errors?.price?.type === "min" && <span className="text-blue-500">* Price must be greater than 0</span>}


                                </div>
                            </div>
                            <div className="flex w-full my-4">
                                <button type="submit" className="py-2 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    <div className='flex justify-center'>
                                        {loading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                        </div> : "Add Land For Sale"}
                                    </div>
                                </button>
                            </div>
                        </form>

                    </div>
                </div >
            </div >
        </div>
    );
}
