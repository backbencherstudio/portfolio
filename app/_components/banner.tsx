import React from 'react';
import BottomArrowIcon from '@/public/icons/bottom-arrow-icon';

export default function Banner() {
    return (
        <div className='container px-4 md:px-8 pb-36 md:pb-72 pt-6 md:pt-10'>
            <div className="relative text-white flex flex-col justify-center items-start px-4 sm:px-8 md:px-20">
                {/* Small Intro Text */}
                <p className="text-base sm:text-2xl md:text-3xl lg:text-5xl mb-2 md:mb-4">Hello! I&apos;m Maguire</p>

                {/* Headline */}
                <h1 className="text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[8rem] xl:text-[160px] leading-[120%] font-bold">
                    <div>Designing</div>
                    <div>
                        <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">
                            Digital Product
                        </span>
                    </div>
                    <div>With Emphasis</div>
                    <div>On Visual</div>
                    <div>Design</div>
                </h1>

                {/* Arrow Icon */}
                <div className="mt-6 md:mt-10 absolute -bottom-32 md:-bottom-64 left-1/2 md:left-[550px] transform -translate-x-1/2 md:translate-x-0">
                    <BottomArrowIcon />
                </div>
            </div>
        </div>
    );
}
