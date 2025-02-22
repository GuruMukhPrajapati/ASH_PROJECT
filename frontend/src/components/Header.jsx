// Header.jsx
import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-black to-gray-900 rounded-lg px-6 md:px-10 lg:px-20'>
            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
                <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight'>
                    <span className='text-white'>Find & Hire</span><br />
                    <span className='bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text'>Expert Freelancers</span>
                </p>
                <div className='flex flex-col md:flex-row items-center gap-3 text-gray-300 text-sm font-light'>
                    <img className='w-28' src={assets.group_profiles} alt="" />
                    <p>Connect with talented professionals and bring<br className='hidden sm:block' /> your projects to life.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
                    Explore Talent <img className='w-3' src={assets.arrow_icon} alt="" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative'>
                <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
            </div>
        </div>
    )
}

export default Header   