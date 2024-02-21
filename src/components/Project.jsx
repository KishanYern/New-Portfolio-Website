import React from 'react';

const Project = ({ key, title, info, skills, github }) => {
    return (
        <div key={key}>
            <a href={github} target='_blank' rel='noreferrer'>
                <div
                    className='text-xl text-white rounded-xl p-2 h-3/4 w-[500px] cursor-pointer
                    shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:scale-105 
                    hover:shadow-2xl mr-10 mt-10 duration-200 overflow-auto bg-gradient-to-br from-red-100 to-red-50'
                >
                    <div className='text-4xl text-red-500 font-bold flex justify-center items-center mb-10 underline'>
                        {title}
                    </div>
                    <div className='text-black text-2xl'>{info}</div>
                    <div className='flex flex-row gap-4 flex-wrap mt-10 justify-center items-center'>
                        {skills.map((skill) => {
                            return <div className='text-black'>{skill}</div>;
                        })}
                    </div>
                </div>
            </a>
        </div>
    );
};
export default Project;
