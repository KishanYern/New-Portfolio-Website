import React, { useState } from 'react';
import ExperienceElements from './assets/ExperienceElements';

const Experiences = () => {
    const [experiences, setExperiences] = useState(0);
    return (
        <section
            className='bg-gradient-to-b from-green-100 to-orange-100 h-[100vh]'
            name='experience'
        >
            <div className='text-7xl text-red-400 flex justify-center items-center font-signature min-w-max pt-20'>
                Experiences
            </div>
            <div className='flex flex-row h-[90vh]'>
                <div className='w-1/3 flex justify-center items-center'>
                    <div className='flex flex-col gap-10'>
                        {ExperienceElements.map(({ id, company }) => {
                            return (
                                <button
                                    key={id}
                                    onClick={() => setExperiences(id - 1)}
                                    className={`text-xl text-white hover:bg-purple-500 rounded-full p-2 w-40 h-12 cursor-pointer shadow-lg 
                                    shadow-blue-500/40 hover:shadow-indigo-500/40 hover:scale-105 
                                    hover:shadow-2xl mr-10 mt-10 duration-200 active:bg-purple-800 ${
                                        experiences === id - 1
                                            ? 'bg-purple-500 scale-110'
                                            : 'bg-red-500'
                                    }`}
                                >
                                    {company}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='w-2/3 flex justify-center items-center flex-col'>
                    {ExperienceElements[experiences].icon && (
                        <img
                            src={ExperienceElements[experiences].icon}
                            className=' w-4/12'
                            alt='company-logo'
                        />
                    )}
                    <div className='flex flex-col gap-10 mr-20 mt-10 overflow-auto'>
                        {ExperienceElements[experiences].content.map(
                            ({ id, title, info, timestamp }) => {
                                return (
                                    <div
                                        key={id}
                                        className='flex flex-col mb-10'
                                    >
                                        <div className='md:text-3xl text-lg font-bold text-red-500'>
                                            {title}
                                        </div>
                                        <div className='md:text-lg text-sm text-red-500 mb-4'>
                                            {timestamp}
                                        </div>
                                        <div className='md:text-xl text-sm text-red-600'>
                                            {info}
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
