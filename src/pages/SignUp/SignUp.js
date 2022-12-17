import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { useForm } from "react-hook-form";
import TemporaryAlert from '../../Components/UI/TemporaryAlert/TemporaryAlert';

export default function SignUp() {
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        if (data.password !== data.confirm_password) {
            alert('Your password did not match');
            return;
        }
        registerUser(data.email, data.password, data.name, history);
    };

    return (
        <div className="my-8  flex  justify-center">
            <div className="flex shadow-xl  flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                    Create a new account
                </div>

                {authError ?
                    <TemporaryAlert delay={5000} >
                        <div className="bg-blue-200 border-blue-600 text-blue-600 border-l-4 p-4" role="alert">
                            <p className="font-bold">
                                Error
                            </p>
                            <p>
                                {authError}
                            </p>
                        </div>
                    </TemporaryAlert> : null}

                <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
                    Already have an account ?
                    <NavLink to='/signin' className="text-sm text-blue-500 underline hover:text-blue-700">
                        Sign in
                    </NavLink>
                </span>
                <div className="p-6 mt-8">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input {...register("name", { requiblue: true })} type="text" id="create-account-first-name" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="name" placeholder="Name" />
                            </div>
                            {errors.name && <span className="text-blue-500">* Name is requiblue</span>}


                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input {...register("email", { requiblue: true })} type="text" id="create-account-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="email" placeholder="Email" />
                            </div>
                            {errors.email && <span className="text-blue-500">* Email is requiblue</span>}

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input {...register("password", { requiblue: true })} type="password" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="password" placeholder="password" />
                            </div>
                            {errors.password && <span className="text-blue-500">* Password is requiblue</span>}

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className=" relative ">
                                <input {...register("confirm_password", { requiblue: true })} type="password" id="create-account-pseudo" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-8 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" name="confirm_password" placeholder="Confirm password" />
                            </div>
                            {errors.confirm_password && <span className="text-blue-500">* Confirm password is requiblue</span>}

                        </div>
                        <div className="flex w-full my-4">
                            <button type="submit" className="py-2 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <div className='flex justify-center'>
                                    {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                    </div> : "Sign Up"}
                                </div>


                            </button>
                        </div>
                    </form>

                </div>
            </div >
        </div >

    );
}
