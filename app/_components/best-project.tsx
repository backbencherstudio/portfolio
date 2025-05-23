'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import worksBg from "@/public/images/works-bg.png";
import worksBgTwo from "@/public/images/work-bg-2.png";
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
        <div className="relative bg-white py-56 px-6 sm:px-16">
            {/* Background Text */}
            <Image
                src={WhatIDoRightBg}
                alt="right object"
                className="absolute right-0 -top-40 w-[100px] sm:w-[150px]"
            />
            <Image
                src={worksBg}
                alt="works background"
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[90%] opacity-5 z-0"
            />

            {/* Content */}
            <div className='w-full'>
                <div className="absolute inset-0  bg-no-repeat py-10 ml-[550px] mt-16" style={{ backgroundImage: `url(${worksBg.src})` }} />
                <div className="relative z-10  mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6">
                        <span className="text-black">Best </span>
                        <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">Project.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mx-auto mb-10">
                        Here are some select projects that showcase my passion for creating memorable web experiences, products, and brands to life
                    </p>

                    {/* Tabs */}
                    <div className="flex justify-center flex-wrap gap-4 mb-14">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-full border border-gray-300 text-sm font-medium transition-all ${activeTab === tab
                                    ? 'bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-white'
                                    : 'text-gray-800 bg-white hover:bg-gray-100'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                className="rounded-lg shadow-lg w-full h-[620px]"
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

            {/* Corner Decorations */}
            {/* <Image
                src={worksBgTwo}
                alt="decor"
                className="absolute bottom-0 left-0 w-[70px] md:w-[100px] z-0"
            /> */}
        </div>
    );
}
