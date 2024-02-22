import React, { useState } from 'react';

const ContactMe = () => {
    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('sending email');
    };

    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendButton = () => {
        if (loading) {
            return (
                <button
                    type='submit'
                    className='bg-violet-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] 
                    active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-violet-500'
                >
                    Loading
                </button>
            );
        } else if (success) {
            return (
                <button
                    type='submit'
                    className='bg-green-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] 
                    active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-green-500'
                >
                    Sent!
                </button>
            );
        } else {
            return (
                <button
                    type='submit'
                    className='bg-red-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
                         active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-red-500'
                >
                    Send
                </button>
            );
        }
    };

    return (
        <section
            className='h-[100vh] bg-gradient-to-b from-red-50 to-white'
            name='contact'
        >
            <div className='text-7xl h-auto text-red-400 flex justify-center items-center font-signature min-w-max pt-52 md:pt-28'>
                Contact Me
            </div>
            <div className='container'>
                <form onSubmit={sendEmail}>
                    <div className='flex flex-col pt-5 mx-auto'>
                        <div className=' pt-2 mx-auto '>
                            <input
                                type='text'
                                placeholder='Name'
                                className='border-2 border-red-400 rounded-md p-2 m-2'
                            />
                        </div>
                        <div className='pt-2 mx-auto'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='border-2 border-red-400 rounded-md p-2 m-2 w-80'
                            />
                        </div>
                        <div className='pt-2 mx-auto'>
                            <textarea
                                placeholder='Message'
                                className='border-2 border-red-400 rounded-md p-2 m-2'
                                id=''
                                cols='50'
                                rows='15'
                            />
                        </div>
                        <div className='pt-2 mx-auto'>{sendButton()}</div>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default ContactMe;
