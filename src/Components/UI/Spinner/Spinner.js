import React from 'react';

export default function Spinner() {
    return (
        <div>
            <div className="flex justify-center items-center">
                <div
                    className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"
                ></div>
            </div>
        </div>
    );
}
