import React from 'react';
import { Helmet } from "react-helmet";

const NotFound = () => {
    return (
        <div className='mt-24 text-center'>
            <Helmet>
                <title>Not Found</title>
            </Helmet>
            <h2 className='text-2xl font-extrabold'>404 Not Found</h2>
            <p className='font-semibold mt-3'>Oops! The page you are looking for does not exist.</p>
        </div>
    );
};

export default NotFound;