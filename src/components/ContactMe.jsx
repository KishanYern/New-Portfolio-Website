import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    useEffect(() => {
        emailjs.init({
            publicKey: 'M7xzawvUKQxVHqu4E',
            // Do not allow headless browsers
            blockHeadless: true,
        });
    }, []);

    const sendEmail = async (e) => {
        e.preventDefault();

        setLoading(true);

        const data = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
        };

        try {
            emailjs.send('service_8470cys', 'template_6ao15re', data);

            setSuccess(true);
            setLoading(false);
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
            form.current.reset();
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const sendButton = () => {
        if (loading) {
            return (
                <button
                    type='submit'
                    className='bg-violet-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] 
                    active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-violet-500 duration-300'
                >
                    Loading...
                </button>
            );
        } else if (success) {
            return (
                <button
                    type='submit'
                    className='bg-green-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] 
                    active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-green-500 duration-300'
                >
                    Sent!
                </button>
            );
        } else {
            return (
                <button
                    type='submit'
                    className='bg-red-400 text-white rounded-md p-2 m-2 w-40 h-10 shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]
                         active:shadow-none active:translate-y-1 hover:scale-105 hover:bg-red-500 duration-300'
                >
                    Send
                </button>
            );
        }
    };

    return (
        <section
            className='h-[100vh] bg-gradient-to-b from-red-50 to-white flex justify-center items-center flex-col w-full min-w-max'
            name='contact'
        >
            <div className='text-7xl h-auto text-red-400 flex justify-center items-center font-signature min-w-max pt-52 md:pt-28'>
                Contact Me
            </div>
            <div className='container flex items-center justify-center w-full'>
                <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div className='flex flex-col pt-5 mx-auto justify-center items-center w-full'>
                        <div className=' pt-2 mx-auto flex items-center justify-center'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='border-2 border-red-400 rounded-md p-2 m-2'
                            />
                        </div>
                        <div className='pt-2 mx-auto flex items-center justify-center'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='border-2 border-red-400 rounded-md p-2 m-2 w-80'
                            />
                        </div>
                        <div className='pt-2 mx-auto w-full flex items-center justify-center'>
                            <textarea
                                placeholder='Message'
                                className='border-2 border-red-400 rounded-md p-2 m-2 w-80 h-60 md:w-1/2 md:h-80'
                                id=''
                            />
                        </div>
                        <div className='pt-2 mx-auto'>{sendButton()}</div>
                    </div>
                </form>
            </div>
            <div className='flex items-center justify-center pt-10'>
                {' '}
                KishanYerneni@gmail.com | (+1) 512-680-1441{' '}
            </div>
        </section>
    );
};
export default ContactMe;
