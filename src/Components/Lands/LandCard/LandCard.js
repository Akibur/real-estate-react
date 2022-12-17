import React from 'react';
import { useHistory } from 'react-router';
export default function LandCard(props) {
    const { _id, owner, address, area, price, description, image } = props.land;

    const history = useHistory();

    const handleTransferRequest = (_id) => {
        history.push(`/transferRequest/${_id}`);
    };

    return (
        <div>
            <div className="w-80 flex  justify-center items-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" >
                <div className="w-full p-4">
                    <div className="card flex flex-col justify-left p-10 bg-white rounded-lg shadow-2xl">
                        <div className="prod-img">
                            <img src={image} alt={owner} />
                        </div>
                        <div className="prod-title">
                            <p className="text-xl text-lef my-3 uppercase text-blue-700 font-bold">
                                Price:  {price} TK
                            </p>

                        </div>
                        <div className="prod-info grid gap-10">
                            <div className="flex flex-col  justify-between items-left text-gray-900">
                                <p className="font-medium text-xl py-0">
                                    Area:   {area} sqft
                                </p>
                                <p className=" text-left mt-4 text-sm text-gray-400">

                                    Location :{address}
                                </p>
                                <button onClick={() => handleTransferRequest(_id)} className="px-6 py-2 mt-3 transition ease-in duration-100 uppercase rounded-full hover:bg-blue-700 hover:text-white border-2 text-blue-700 border-blue-700 focus:outline-none">
                                    Interested to Buy
                                </button>
                                {/* <button onClick={() => handleTransferRequest(_id)} className="px-6 py-2 mt-3 transition ease-in duration-100 uppercase rounded-full hover:bg-blue-700 hover:text-white border-2 text-blue-700 border-blue-700 focus:outline-none">
                                    Details
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
