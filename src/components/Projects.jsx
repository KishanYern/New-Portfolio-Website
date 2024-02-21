import React from 'react';
import ProjectElements from './assets/ProjectElements';
import Project from './Project';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Projects = () => {
    const slideLeft = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft -= 1000;
    };

    const slideRight = () => {
        const slider = document.getElementById('slider');
        slider.scrollLeft += 1000;
    };

    return (
        <section
            className=' h-[100vh] bg-gradient-to-b from-orange-100 to-red-50'
            name='projects'
        >
            <div className='text-7xl text-red-400 flex justify-center items-center font-signature min-w-max pt-28'>
                Projects
            </div>
            <div className='h-full relative flex items-center'>
                <MdChevronLeft
                    className='opacity-50 cursor-pointer hover:opacity-100'
                    onClick={slideLeft}
                    size={80}
                />
                <div
                    id='slider'
                    className='flex flex-row h-3/4 pl-10 overflow-x-scroll overflow-y-hidden scroll scroll-smooth no-scrollbar'
                >
                    {ProjectElements.map((object) => {
                        return (
                            <Project
                                key={object.id}
                                title={object.title}
                                info={object.info}
                                skills={object.skills}
                                github={object.github}
                                className='flex justify-center items-center'
                            />
                        );
                    })}
                </div>
                <MdChevronRight
                    className='opacity-50 cursor-pointer hover:opacity-100'
                    onClick={slideRight}
                    size={80}
                />
            </div>
        </section>
    );
};
export default Projects;
