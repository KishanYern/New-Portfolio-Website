import React from 'react';
import { GiAirplaneDeparture } from 'react-icons/gi';

const Home = () => {
    return (
        <div
            name='homePage'
            className='h-screen w-full bg-gradient-to-b from-white to-blue-100 overflow-hidden max-w-screen-ms'
        >
            <div>
                <div
                    className='absolute top-24 left-24 w-80 h-80 opacity-70 
            rounded-full bg-yellow-100 mix-blend-multiply 
            filter blur-xl animate-blob z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-40 right-36 w-80 h-80 opacity-70 
            rounded-full bg-red-200 mix-blend-multiply 
            filter blur-xl animate-blob animation-delay-2 z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-52 left-36 w-80 h-80 opacity-70 
            rounded-full bg-blue-200 mix-blend-multiply 
            filter blur-xl animate-blob animation-delay-4 z-0 pointer-events-none'
                />

                <div
                    className='absolute top-80 right-2/4 w-80 h-80 opacity-70 
            rounded-full bg-green-200 mix-blend-multiply 
            filter blur-xl animate-blob animation-delay-6 z-0 pointer-events-none'
                />

                <div
                    className='absolute bottom-2/4 right-1/4 w-80 h-80 opacity-70 
            rounded-full bg-gray-300 mix-blend-multiply 
            filter blur-xl animate-blob z-0 pointer-events-none'
                />

                <div
                    className='absolute top-1/4 right-1/4 w-80 h-80 opacity-70 
            rounded-full bg-orange-200 mix-blend-multiply 
            filter blur-xl animate-blob animation-delay-6 z-0 pointer-events-none'
                />
            </div>

            <div className='z-10 mx-10 flex flex-col items-center justify-center h-full w-full px-4 md:flex-row'>
                <div className='text-9xl pr-56 ml-0 pl-0 font-bold bg-gradient-to-b w-1/2 from-red-700 to-red-400 bg-clip-text text-transparent'>
                    Kishan Yerneni
                </div>
                <div>
                    {' '}
                    <GiAirplaneDeparture className='h-52 w-52 ml-20' />{' '}
                </div>
            </div>
            <div></div>
        </div>
    );
};
export default Home;
