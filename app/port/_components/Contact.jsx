import Link from 'next/link'
import React from 'react'

export default function Contact() { 
    return (
        <>
            <section className="max-w-3xl mx-auto px-6 py-16">
            <div className="flex items-center justify-center my-8 text-center">
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
                <div className="px-5 font-semibold whitespace-nowrap text-md text-neutral-100 bg-neutral-900 rounded-lg px-2 py-1">Contact</div>
                <div className="h-[2px] flex-grow bg-gradient-to-r from-transparent via-[#000000] to-transparent"></div>
            </div>

            <h2 className="lg:text-4xl text-3xl font-bold text-center mb-4">
            Get in Touch

            </h2>
            <p className="lg:text-xl text-md text-center text-neutral-500 max-w-xl mx-auto mb-10">
            Want to chat? Feel free to drop me a DM on <span className='text-blue-400'><Link href="https://x.com/Gautamk104">Twitter</Link></span> — I’ll get back 
            to you as soon as I can. Please note that I won’t respond to any solicitations.
            </p>
            </section>
        </>
    )
}
