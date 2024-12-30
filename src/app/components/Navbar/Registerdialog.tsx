import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/20/solid'


const Register = () => {
    const gotoWhatsapp = () => {
        const phoneNumber = "+62895331134337"; // Replace with your WhatsApp number (with country code, no "+" or special characters)
        const message = "Hello, I am interested in your services."; // Replace with your desired default message
        const encodedMessage = encodeURIComponent(message); // Encode the message for a URL

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    }
    return (
        <>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto  sm:pr-0">
                <div className='hidden lg:block'>
                    <button className="text-Blueviolet text-lg font-medium ml-9 py-5 px-16 transition duration-150 ease-in-out rounded-full bg-semiblueviolet hover:text-white hover:bg-Blueviolet" onClick={gotoWhatsapp}>
                        Whatsapp
                    </button>
                </div>
            </div>
        </>
    )
}

export default Register;
