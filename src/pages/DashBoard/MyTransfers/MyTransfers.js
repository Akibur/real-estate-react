import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../Components/UI/Spinner/Spinner';
import { getUserTransfers, updateTransfer } from '../../../store/transfers-slice';



export default function MyTransfers() {
    const { user } = useAuth();
    const [status, setStatus] = useState("");

    const dispatch = useDispatch();
    const { userTransfers, statusUpdateLoading, loading, transferError, alert } = useSelector((state) => state.transfers);

    useEffect(() => {
        console.log("First UseEffect");

        const userEmail = { email: user.email };
        dispatch(getUserTransfers(userEmail));
    }, [user.email, dispatch]);






    const handleStatusUpdate = (e, id, trasferInfo) => {
        e.preventDefault();
        let updatedStatus = null;
        if (user.email === trasferInfo.seller.email) {
            updatedStatus = { sellerStatus: status };

        } else if (user.email === trasferInfo.buyer.email) {
            updatedStatus = { buyerStatus: status };
        }
        const update = { email: user.email, id: id, status: updatedStatus };
        dispatch(updateTransfer(update));
        console.log("Status updated");

        //Find Userstatus with same ID

    };
    const onStatusChange = (e) => {
        e.preventDefault();
        setStatus(e.target.value);
    };


    return (
        <div>
            <div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden btransfer-b btransfer-gray-200 sm:rounded-lg">
                                {loading ?
                                    <Spinner />
                                    : (<table className=" min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Owner Info
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Buyer Info
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Land Info
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                >
                                                    Change Status
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {userTransfers.length > 0 ? (userTransfers.map((transfer) => (
                                                <tr key={transfer._id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-xs text-gray-900">Name: {transfer?.seller?.name}</div>
                                                        <div className="text-xs text-gray-900">Email: {transfer?.seller?.email}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-xs text-gray-900">Name: {transfer?.buyer?.name}</div>
                                                        <div className="text-xs text-gray-900">Email: {transfer?.buyer?.email}</div>

                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> <div className="text-xs text-gray-900">Address: {transfer?.land?.address}</div>
                                                        <div className="text-xs text-gray-900">Area: {transfer?.land?.area} Sqft</div>



                                                    </td>
                                                    <td className="px-6  py-4 whitespace-nowrap">
                                                        <div>
                                                            <span className='text-xs'> Buyer Status:</span> <span className={"px-2 inline-flex text-xs leading-5 font-semibold rounded-full " + (
                                                                transfer.status.buyerStatus == "pending" ? "bg-blue-100 text-blue-800" :
                                                                    transfer.status.buyerStatus == "approved" ? "bg-green-100 text-green-800" :
                                                                        transfer.status.buyerStatus == "disaproved" ?
                                                                            "bg-red-100 text-red-800" : "bg-red-100 text-red-800"
                                                            )}>
                                                                {transfer.status.buyerStatus}
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <span className='text-xs'> Seller Status:</span> <span className={"px-2 inline-flex text-xs leading-5 font-semibold rounded-full " + (
                                                                transfer.status.sellerStatus == "pending" ? "bg-blue-100 text-blue-800" :
                                                                    transfer.status.sellerStatus == "approved" ? "bg-green-100 text-green-800" :
                                                                        transfer.status.sellerStatus == "disaproved" ?
                                                                            "bg-red-100 text-red-800" : "bg-red-100 text-red-800"
                                                            )}>
                                                                {transfer.status.sellerStatus}
                                                            </span>

                                                        </div>
                                                        <div>
                                                            <span className='text-xs'> Admin Status:</span> <span className={"px-2 inline-flex text-xs leading-5 font-semibold rounded-full " + (
                                                                transfer.status.adminStatus == "pending" ? "bg-blue-100 text-blue-800" :
                                                                    transfer.status.adminStatus == "approved" ? "bg-green-100 text-green-800" :
                                                                        transfer.status.adminStatus == "disaproved" ?
                                                                            "bg-red-100 text-red-800" : "bg-red-100 text-red-800"
                                                            )}>
                                                                {transfer.status.adminStatus}
                                                            </span>

                                                        </div>
                                                    </td>

                                                    <td className="flex flex-col justify-start content-start px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                                        {/* {transfer.isTransferable ? (<form onSubmit={(e) => handleStatusUpdate(e, transfer._id)}>
                                                            <select onChange={(e) => onStatusChange(e, transfer._id)} className=" w-full block w-30 text-gray-700 py-2 px-3 btransfer btransfer-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:btransfer-primary-500" name="status">
                                                                <option value={transfer.status.adminStatus}>
                                                                    Select an option
                                                                </option>
                                                                <option value="pending">
                                                                    Pending
                                                                </option>
                                                                <option value="approved">
                                                                    Approved
                                                                </option>
                                                                <option value="disapproved">
                                                                    Disapproved
                                                                </option>

                                                            </select>
                                                            <button type="submit" className="py-2 mt-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>
                                                                    {statusUpdateLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 btransfer-b-2 btransfer-gray-200"  >
                                                                    </div> : "Update Status"}
                                                                </div>
                                                            </button>
                                                        </form>) : "Transfer Complete. Cant change Status"} */}
                                                        <form onSubmit={(e) => handleStatusUpdate(e, transfer._id, transfer)}>
                                                            <select onChange={(e) => onStatusChange(e)} className=" w-full block w-30 text-gray-700 py-2 px-3 btransfer btransfer-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:btransfer-primary-500" name="status">
                                                                <option value={transfer.status.adminStatus}>
                                                                    Select an option
                                                                </option>
                                                                <option value="pending">
                                                                    Pending
                                                                </option>
                                                                <option value="approved">
                                                                    Approved
                                                                </option>
                                                                <option value="disapproved">
                                                                    Disapproved
                                                                </option>

                                                            </select>
                                                            <button type="submit" className="py-2 mt-2  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-sm  shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                                <div className='flex justify-center'>
                                                                    {statusUpdateLoading ? <div className="text-center animate-spin rounded-full h-5 w-5 btransfer-b-2 btransfer-gray-200"  >
                                                                    </div> : "Update Status"}
                                                                </div>
                                                            </button>
                                                        </form>
                                                    </td>
                                                </tr>
                                            ))) : <p className="w-full text-center">No Transfers Made</p>}
                                        </tbody>
                                    </table>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}
