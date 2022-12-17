import React from 'react';
import Banner from './Banner/Banner';
import Lands from '../../Components/Lands/Lands';
import Reviews from '../../Components/Reviews/Reviews';
import HomeAbout from './HomeAbout/HomeAbout';

export default function Home() {
    return (
        <>
            <Banner></Banner>
            <h1 className="text-center my-8 text-5xl font-bold">Land For Sale</h1>
            <Lands></Lands>

        </>

    );
}
