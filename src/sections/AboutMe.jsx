import React from 'react';
import Pikachu from '../components/assets/pikachu.jpg';
const AboutMe = () => {
    return (
        <section
            className='h-screen bg-gradient-to-b from-blue-100 to-red-100'
            name='about'
        >
            <div className='flex justify-center items-center relative'>
                <h1 className='text-7xl font-signature text-red-400 h-1/6 pt-40 z-10 opacity-0 md:opacity-100'>
                    About Me
                </h1>
            </div>
            <div className='h-5/6'>
                <div className='flex flex-col justify-center items-center h-full md:flex-row'>
                    <div className='w-2/3 flex justify-center items-center text-xl md:text-3xl sm:text-2xl p-0 md:px-10 font-custom pb-28'>
                        <div className=' font-custom'>
                            Hey, I'm Kishan Yerneni and this is my portfolio
                            website! I am currently a Senior at the University
                            of Houston, majoring in Computer Science with a
                            minor in Mathematics with a GPA of 3.94. <br />
                            <div className='mt-10'>
                                I have always been interested in the problem
                                solving aspect of computer science, which is the
                                main reason I chose to pursue this path.
                            </div>
                            <div className='mt-10'>
                                I started my programming journey in university.
                                However, I have always had an interest in math
                                and would actively seek out challenges to
                                improve myself.
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3 opacity-0 md:opacity-100 flex justify-center md:pb-32 pb-0 z-0'>
                        <img
                            src={Pikachu}
                            alt='Pikachu Meme'
                            className='w-3/4 hover:scale-110 transform transition duration-500 ease-in-out'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AboutMe;
