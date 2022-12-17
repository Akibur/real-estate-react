import React from 'react';
import LandCard from '../../Components/Lands/LandCard/LandCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../Components/UI/Spinner/Spinner';
import { getLands } from '../../store/lands-slice';


export default function AllBikes() {

    const dispatch = useDispatch();

    const { lands, loading, landError } = useSelector((state) => state.lands);

    console.log(landError);

    useEffect(() => {
        dispatch(getLands());
    }, [dispatch]);

    return (
        <div>
            <div>
                <h1 className="text-center my-8 text-5xl font-bold">All Land For Sale</h1>

                <div className="flex flex-wrap items-center justify-center">
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
                        landError?.isError && <h1>No bikes found Something went wrong</h1>
                    }
                </div>

            </div>
        </div>
    );
}
