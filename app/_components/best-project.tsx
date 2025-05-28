'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import worksBg from "@/public/images/works-bg.png";
import projectOne from "@/public/images/project-01.png";
import projectTwo from "@/public/images/project-02.png";
import projectThree from "@/public/images/project-03.png";
import WhatIDoRightBg from '@/public/images/what-i-do-bg-right.png';

export default function BestProject() {
    const [activeTab, setActiveTab] = useState('UI/UX Design');

    const tabs = [
        'Graphic Design',
        'Branding Design',
        'UI/UX Design',
        'UX Research',
    ];

    return (
        <div className="relative bg-white py-28 sm:py-40 md:py-56 px-4 sm:px-8 md:px-16">
            {/* Background Text */}
            <Image
                src={WhatIDoRightBg}
                alt="right object"
                className="absolute right-0 -top-20 sm:-top-28 md:-top-52 lg:-top-80 w-[60px] sm:w-[100px] md:w-[200px] lg:w-[300px] z-0"
            />
            <Image
                src={worksBg}
                alt="works background"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] opacity-5 z-0"
            />

            {/* Content */}
            <div className='w-full'>
                <div className="absolute inset-0 bg-no-repeat py-10 ml-0 sm:ml-[150px] md:ml-[50px] lg:ml-[550px] mt-8 sm:mt-12 md:mt-16 bg-contain sm:bg-auto" style={{ backgroundImage: `url(${worksBg.src})` }} />
                <div className="relative z-10 mx-auto text-center px-4 sm:px-6 md:px-8">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-[120px] pb-10 font-bold mb-4 sm:mb-6 leading-[160%]">
                        <span className="text-black">Best </span>
                        <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">Project.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-[#666666] mx-auto mb-6 sm:mb-8 md:mb-10 text-base sm:text-xl md:text-5xl leading-[160%] md:max-w-[1200px]">
                        Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life
                    </p>

                    {/* Tabs */}
                    <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-14">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-300 text-xs sm:text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-white'
                                    : 'text-gray-800 bg-white hover:bg-gray-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                        {/* First large project */}
                        <div className="md:col-span-2">
                            <Image
                                src={projectOne}
                                alt="Project One"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                        {/* Two smaller projects */}
                        <div>
                            <Image
                                src={projectTwo}
                                alt="Project Two"
                                className="rounded-lg shadow-lg w-full h-[300px] sm:h-[450px] md:h-[620px] object-cover"
                            />
                        </div>
                        <div>
                            <Image
                                src={projectThree}
                                alt="Project Three"
                                className="rounded-lg shadow-lg w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
