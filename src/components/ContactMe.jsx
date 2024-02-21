import React from 'react';

const ContactMe = () => {
    const sendEmail = async (e) => {
        e.preventDefault();
        console.log('sending email');
    };

    return (
        <section
            className='h-[100vh] bg-gradient-to-b from-red-50 to-white'
            name='contact'
        >
            <div className='text-7xl h-auto text-red-400 flex justify-center items-center font-signature min-w-max pt-52 md:pt-28'>
                Contact Me
            </div>
            <form onSubmit={sendEmail}></form>
        </section>
    );
};
export default ContactMe;
