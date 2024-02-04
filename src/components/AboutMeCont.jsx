import React from 'react';
import { GiBookshelf } from 'react-icons/gi';

const AboutMeCont = () => {
    return (
        <div className='bg-gradient-to-b from-red-100 to-green-100 h-screen w-full'>
            <div className='flex flex-col justify-center items-center h-full md:flex-row'>
                <div className='w-1/3 flex justify-center pb-32 opacity-0 md:opacity-100 hover:scale(105)'>
                    <GiBookshelf
                        size={300}
                        className='hover:scale-110 transform h-0 md:h-auto transition duration-500 ease-in-out text-red-400 hover:text-green-400'
                    />
                </div>
                <div className='w-2/3 flex justify-center items-center text-3xl px-10 font-roboto pb-28'>
                    <div>
                        <div>
                            I am currently a{' '}
                            <span className='text-red-400'>
                                Teaching Assistant
                            </span>{' '}
                            for my university's Programming and Data Structures
                            course. In which, I am incharge of hosting and
                            grading extra credit opportunities for the students
                            and hosting lab sessions.
                        </div>
                        <div className='mt-10'>
                            Before I was a Teaching Assistant, I was an{' '}
                            <span className='text-red-400'>
                                Academic Support Assistant
                            </span>{' '}
                            at my university, where I would help students with
                            various math courses such as Linear Algebra,
                            Discrete Math, Calculus, and various fundamental
                            math courses.
                        </div>
                        <div className='mt-10'>
                            I am also a member of my university's computer
                            science club,{' '}
                            <span className='text-red-400'>CougarCS</span>,
                            where I am a{' '}
                            <span className='text-red-400'>Course Lead</span>{' '}
                            for the tutoring program.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AboutMeCont;
