import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-black to-gray-900 rounded-lg px-[calc(20px-15)] md:px-[calc(40px-15px)] lg:px-[calc(80px-15px)]'>

            {/* ------- Left Side ------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-8 md:py-[8vw] md:mb-[-20px]'> {/* Reduced py-10 to py-8 and md:py-[10vw] to md:py-[8vw] */}
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    <span className='text-white'>Find & Work With</span><br />
                    <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>Top Freelancers Worldwide</span>
                </p>
                <p className='text-gray-300 text-sm font-light'>
                    Explore a global network of talented professionals in design, development, marketing, and more.
                </p>
                <div className='flex gap-4 m-auto md:m-0'>
                    <button 
                        onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} 
                        className='bg-[#B260F7] text-white text-sm px-8 py-3 rounded-full hover:scale-105 transition-all duration-300'
                    >
                        Hire Talent
                    </button>
                    <button 
                        onClick={() => { navigate('/join'); window.scrollTo(0, 0); }} 
                        className='border border-white text-white text-sm px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300'
                    >
                        Join as Freelancer
                    </button>
                </div>
            </div>

            {/* ------- Right Side ------- */}
            <div className='md:w-1/2 relative'>
                <img 
                    className='w-full md:absolute bottom-0 h-auto rounded-lg'
                    src={assets.appointment_img} 
                    alt="Freelance professionals"
                />
            </div>
        </div>
    );
};

export default Banner;