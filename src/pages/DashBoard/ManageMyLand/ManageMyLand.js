import React, { useEffect, useState } from 'react';
import useLands from '../../../hooks/useLands';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import Modal from './Modal/Modal';



export default function ManageMyLands() {
    const [lands,
        userLands,
        displayLands,
        setDisplayLands,
        isLoading,
        deleteLand,
        createLand,
        updateLand
    ] = useLands([]);





    // for modal
    const [open, setOpen] = useState(false);
    const [landId, setLandId] = useState('');
    const [saleStatus, setSaleStatus] = useState(false);
    const cancelButtonRef = useRef();

    const confirmDelete = (val) => {
        if (val) {
            const id = landId;
            deleteLand(id);
        } else {
            return;
        }
    };

    const handleLandDelete = (e, id) => {
        setLandId(id);
        e.preventDefault();
        setOpen(true);
        // updateOrder(id, status);
    };

    const onStatusChange = (e, _id) => {
        e.preventDefault();
        let s = null;
        if (e.target.value == "yes") {
            s = true;

        } else if (e.target.value == "no") {
            s = false;
        }
        console.log("Status Bool", s);
        setSaleStatus(s);
        setLandId(_id);
    };

    const handleSaleStatusUpdate = (e, id) => {
        e.preventDefault();
        const saleStatusupdate = { isForSale: saleStatus };
        console.log(saleStatusupdate);
        updateLand(id, saleStatusupdate);

    };



    return (
        <>
            {/* // Modal */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
                    <Modal open={open} setOpen={setOpen} confirmDelete={confirmDelete}  ></Modal>
                </Dialog>
            </Transition.Root>
            <div>
                <div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider"
                                                >
                                                    Owner Info
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider"
                                                >
                                                    Land Info
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider"
                                                >
                                                    For Sale ?
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider"
                                                >
                                                    Change sale Status
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-bold text-blue-800 uppercase tracking-wider"
                                                >
                                                    Edit
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {userLands.map((land) => (
                                                <tr key={land._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">Name: {land.owner.name}</div>
                                                        <div className="text-sm text-gray-900">Email: {land.owner.name}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900"><b>Land ID: </b>{land._id}</div>
                                                        <div className="text-sm text-gray-900"><b>Price: </b>{land.price}</div>
                                                        <div className="text-sm text-gray-900"><b>Address: </b>{land.address}</div>
                                                        <div className="text-sm text-gray-900"><b>Area:</b>{land.area}</div>
                                                    </td>
                                                    <td className=" px-6  py-4 whitespace-nowrap">

                                                        <span className={'px-2 inline-flex text-sm leading-5 font-semibold rounded-full' + (land.isForSale ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800")} >
                                                            {land.isForSale ? "Yes" : "No"}

                                                        </span>
                                                    </td>

                                                    <td className=" px-6 py-4 flex-wrap whitespace-nowrap text-sm text-gray-500">


                                                        <form onSubmit={(e) => handleSaleStatusUpdate(e, land._id)}>
                                                            <select onChange={(e) => onStatusChange(e, land._id)} className=" w-full block w-30 text-gray-700 py-2 px-3 btransfer btransfer-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:btransfer-primary-500" name="status">
                                                                <option value={land.isForSale}>
                                                                    For Sale?
                                                                </option>
                                                                <option value="yes">
                                                                    yes
                                                                </option>
                                                                <option value="no">
                                                                    No
                                                                </option>

                                                            </select>
                                                            <button type="submit" className="py-2 mt-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>
                                                                    {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 btransfer-b-2 btransfer-gray-200"  >
                                                                    </div> : "Update Sale Status"}
                                                                </div>
                                                            </button>
                                                        </form>
                                                    </td>


                                                    <td className="flex flex-col justify-start content-start px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <form onSubmit={(e) => handleLandDelete(e, land._id)}>
                                                            <button type="submit" className="py-2 mt-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-xs shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>

                                                                    {/* {console.log("isloading dash ", isLoading)} */}
                                                                    {isLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 border-b-2 border-gray-200"  >
                                                                    </div> : "Delete"}
                                                                </div>
                                                            </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
