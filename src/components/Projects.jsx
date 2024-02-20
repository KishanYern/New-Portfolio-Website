import React from 'react';
import ProjectElements from './assets/ProjectElements';
import Project from './Project';

const Projects = () => {
    return (
        <div className=' h-[100vh] bg-gradient-to-b from-orange-100 to-red-50'>
            <div className='text-7xl text-red-400 flex justify-center items-center font-signature min-w-max'>
                Projects
            </div>
            <div className='flex flex-row h-3/4 w-full overflow-y-auto pl-10 no-scrollbar mt-24'>
                {ProjectElements.map((object) => {
                    return (
                        <Project
                            key={object.id}
                            title={object.title}
                            info={object.info}
                            skills={object.skills}
                            github={object.github}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Projects;
