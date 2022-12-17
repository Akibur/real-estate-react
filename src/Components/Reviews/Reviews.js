import React from 'react';
import ReviewCard from './ReviewCard/ReviewCard';
export default function Reviews() {
    return (
        <div className="grid gap-4   m-5 md:grid-cols-3 sm:md:grid-cols-1 justify-center items-center	">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
        </div>
    );
}
