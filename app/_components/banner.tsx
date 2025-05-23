import React from 'react';
import BottomArrowIcon from '@/public/icons/bottom-arrow-icon';

export default function Banner() {
    return (
        <div className='container pb-72 pt-10'>
            <div className="relative text-white flex flex-col justify-center items-start px-8 sm:px-20">
                {/* Small Intro Text */}
                <p className="text-base sm:text-xl mb-4">Hello! I'm Maguire</p>

                {/* Headline */}
                <h1 className="text-[2.5rem] sm:text-[100px] leading-[120%] font-bold">
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
                <div className="mt-10 absolute -bottom-64 left-[350px]">
                    <BottomArrowIcon />
                </div>
            </div>
        </div>
    );
}
