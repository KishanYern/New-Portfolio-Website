import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const links = [
        {
            id: 1,
            link: 'home',
        },
        {
            id: 2,
            link: 'about',
        },
        {
            id: 3,
            link: 'projects',
        },
        {
            id: 4,
            link: 'experience',
        },
        {
            id: 5,
            link: 'contact',
        },
    ];

    const [nav, setNav] = useState(false);

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 bg-red fixed z-20 bg-slate-200 bg-opacity-30'>
            <div>
                <h1 className='text-5xl font-signature ml-2'>Kishan Yerneni</h1>
            </div>
            <ul className='hidden md:flex'>
                {links.map(({ id, link }) => {
                    return (
                        <li
                            key={id}
                            className='px-4 cursor-pointer font-medium capitalize text-black-500 
                            hover:scale-105 duration-200 hover:text-red-500 z-10'
                        >
                            {' '}
                            {link}{' '}
                        </li>
                    );
                })}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul
                    className=' flex flex-col justify-center items-center 
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b
             from-red-400 to-white text-gray-500'
                >
                    {links.map(({ id, link }) => {
                        return (
                            <li
                                key={id}
                                className='px-4 z-10 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 hover:text-black-500'
                            >
                                {' '}
                                {link}{' '}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};
export default NavBar;
