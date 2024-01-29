import React from 'react';
import { GiAirplaneDeparture } from 'react-icons/gi';
import { IoCaretDown } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => {
    const resumeClick = () => {
        window.open(
            'https://drive.google.com/file/d/103knfPxQIT3dcNjhzb8HE5GgQ9NZgs2c/view?usp=drive_link' // update this link
        );
    };

    const githubClick = () => {
        window.open('https://github.com/KishanYern');
    };

    const linkedinClick = () => {
        window.open('https://www.linkedin.com/in/kishan-yerneni/');
    };

    return (
        <div
            name='homePage'
            className=' w-full bg-gradient-to-b from-white to-blue-100 overflow-hidden max-w-screen-ms h-screen'
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

            <div className='flex flex-col items-center justify-center h-full'>
                <div className='z-10 mx-10 flex flex-col items-center justify-center h-3/6 w-full px-4 md:flex-row md:items-center md:justify-center'>
                    <div className='text-9xl ml-0 pl-0 font-bold bg-gradient-to-b from-red-700 to-red-400 bg-clip-text text-transparent pt-16'>
                        Kishan Yerneni
                    </div>
                    <div>
                        {' '}
                        <GiAirplaneDeparture className='h-52 w-52 pt-10 opacity-0 md:opacity-100' />{' '}
                    </div>
                </div>
                <div className='flex flex-col justify-between items-center h-1/6 w-full px-4 md:flex-row md:items-center md:justify-center space'>
                    <button
                        onClick={resumeClick}
                        className='text-3xl bg-slate-400 h-20 w-36 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl duration-200 hover:text-white z-10 mr-10 mt-10'
                    >
                        Resume
                    </button>
                    <button
                        onClick={githubClick}
                        className='text-3xl bg-slate-400 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl duration-200 hover:text-white z-10 mr-10 mt-10'
                    >
                        <FaGithub size={45} className='text-3xl' />
                    </button>
                    <button
                        onClick={linkedinClick}
                        className='text-3xl bg-slate-400 h-20 w-28 flex justify-center items-center cursor-pointer rounded-3xl
                    shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                    hover:shadow-2xl duration-200 hover:text-white z-10 mr-10 mt-10'
                    >
                        <FaLinkedin size={45} className='text-3xl' />
                    </button>
                </div>
                <div className='text-3xl text-gray-500 mt-32'>
                    <IoCaretDown
                        size={40}
                        className='animate-bounce opacity-0 md:opacity-100'
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
