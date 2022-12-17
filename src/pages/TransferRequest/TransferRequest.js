import React, { useEffect, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Spinner from '../../Components/UI/Spinner/Spinner';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { createTransfer } from '../../store/transfers-slice';
import TemporaryAlert from "../../Components/UI/TemporaryAlert/TemporaryAlert";

export default function TransferRequest() {
    const { id } = useParams();
    const [land, setLand] = useState({});
    const [error, setError] = useState("");
    const [landLoading, setLandLoading] = useState(false);


    const dispatch = useDispatch();
    const { loading, transferError, alert } = useSelector((state) => state.transfers);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const { user } = useAuth();
    const history = useHistory();


    useEffect(() => {
        setLandLoading(true);

        fetch(`http://localhost:5000/lands/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setLand(data);
                setLandLoading(false);
            }).catch((err) => {
                setLandLoading(false);
                console.log(err);

            });
    }, [id]);

    const onSubmit = data => {

        const transfer = {
            seller: {
                uid: land.owner.uid,
                name: land.owner.name,
                email: land.owner.email,
            },
            buyer: {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
            },
            land: land,
            status: {
                buyerStatus: "approved"
            }
        };
        console.log(transfer);
        dispatch(createTransfer(transfer));
        if (!loading && !transferError.isError) {
            history.replace('/transferConfirmed');
        }

    };

    // const handleTransferRequest = (e) => {
    //     e.preventDefault();
    //     const transfer = {
    //         user: {
    //             uid: user.uid,
    //             name: nameRef.current.value,
    //             email: user.email,
    //             phone: phonedRef.current.value,
    //             card: creditCardRef.current.value,
    //         },
    //         land: land,
    //         status: "Placed"
    //     };

    //     try {
    //         setError('');
    //         setLoading(true);
    //         fetch('https://sheltered-crag-02874.herokuapp.com/transfers', {
    //             method: 'POST',
    //             cache: 'no-cache',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(transfer) // body data type must match "Content-Type" header
    //         }).then((res) => {
    //             setLoading(false);
    //             history.replace('/transferConfirmed');
    //         });

    //     } catch (error) {
    //         setError(error);
    //         setLoading(false);
    //     }
    // };


    return (
        <div className="my-8 flex   justify-center">
            <div className="flex flex-col w-full max-w-md px-8  pb-8 bg-white rounded-lg  dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center text-center  text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                    <h1 className="font-bold md:text-3xl sm:text-2xl">Please Confirm  your interest to buy this piece of Land</h1>
                </div>

                {landLoading ?
                    <Spinner></Spinner> :
                    <div className="w-full p-4">
                        <div className="card flex flex-col justify-left p-10 bg-white rounded-lg shadow-2xl">
                            <div className="prod-img">
                                <img src={land.image} alt={land?.owner?.name} />
                            </div>
                            <div className="prod-title">
                                <p className="text-xl text-lef my-3 uppercase text-blue-700 font-bold">
                                    Price:  {land.price} TK
                                </p>

                            </div>
                            <div className="prod-info grid gap-10">
                                <div className="flex flex-col  justify-between items-left text-gray-900">
                                    <p className="font-medium text-xl py-0">
                                        Area:   {land.area} sqft
                                    </p>
                                    <p className=" text-left mt-4 text-sm text-gray-400">

                                        Location :{land.address}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {error ?
                    <TemporaryAlert>
                        <div className="bg-blue-200 btransfer-blue-600 text-blue-600 btransfer-l-4 p-4" role="alert">
                            <p className="font-bold">
                                Error
                            </p>
                            <p>
                                {error}
                            </p>
                        </div>
                    </TemporaryAlert> : null}

                <div className="">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="flex flex-col mb-2">
                            <div className="flex relative ">

                                <input {...register("name", { required: true })} type="text"
                                    className="rounded-lg flex-1 appearance-none btransfer btransfer-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:btransfer-transparent" placeholder="Name"
                                    name="name"
                                />

                            </div>
                            {errors.name && <span className="text-blue-500">* Name is required</span>}

                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input
                                    {...register("phone", { required: true })}
                                    type="number"
                                    className=" rounded-lg flex-1 appearance-none btransfer btransfer-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:btransfer-transparent" placeholder="Phone"
                                    name="phone"
                                />
                            </div>
                            {errors.phone && <span className="text-blue-500">* Phone is required</span>}


                        </div>
                        <div className="flex flex-col mb-2">
                            <div className="flex relative ">
                                <input
                                    {...register("card", { required: true })}
                                    type="text"
                                    className=" rounded-lg flex-1 appearance-none btransfer btransfer-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:btransfer-transparent" placeholder="Credit Card Number"
                                    name="card"
                                />

                            </div>
                            {errors.card && <span className="text-blue-500">* Card is required</span>}

                        </div> */}
                        <div className="flex w-full">
                            <button type="submit" className="py-2 px-8  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <div className='flex justify-center'>
                                    {loading ? <div className="text-center animate-spin rounded-full h-5 w-5 btransfer-b-2 btransfer-gray-200"  >
                                    </div> : "Place Transfer Request"}
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}
