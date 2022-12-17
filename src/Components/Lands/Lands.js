import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../UI/Spinner/Spinner';
import LandCard from './LandCard/LandCard';
import { getLands } from '../../store/lands-slice';

export default function Lands() {
    const dispatch = useDispatch();
    const { lands, loading, landError } = useSelector((state) => state.lands);
    console.log(landError);

    useEffect(() => {
        dispatch(getLands());
    }, [dispatch]);

    return (
        <div>

            <div className="flex flex-wrap items-center justify-center">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="text-center block w-full rounded-md border-blue-900 mx-20
                border-2 p-3 focus:border-indigo-500 focus:ring-indigo-500 text-lg"
                    placeholder="Search"
                />

                {!loading ?
                    (lands.slice(0, 6).map((land) => {
                        if (land.isForSale) {
                            return (<LandCard
                                key={land._id}
                                land={land}
                            >
                            </LandCard>);
                        }
                    })

                    ) : <Spinner></Spinner>
                }
                {
                    landError?.isError && <h1>No property found something went wrong</h1>
                }
            </div>

        </div>
    );
}
