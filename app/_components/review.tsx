import React from 'react';
import Image from 'next/image';
import reviewBg from '@/public/images/work-bg-2.png'; // reused decoration
import avater from '@/public/images/avater.png';

export default function Review() {
    return (
        <div className="relative bg-black text-white py-20 px-6 sm:px-16">
            {/* Background Decoration */}
            <Image
                src={reviewBg}
                alt="Decor"
                className="absolute top-0 left-0 w-[80px] sm:w-[120px]"
            />

            <div className="mx-auto">
                {/* Section Title */}
                <h2 className="text-5xl font-medium mb-6 text-gray-300">What They Said</h2>

                {/* Divider */}
                <hr className="border-gray-700 mb-8" />

                {/* Review Content */}
                <blockquote className="text-3xl sm:text-4xl font-semibold leading-snug">
                    <span className="text-[#F97316] text-5xl mr-2">“</span>
                    He is seriously the<br />
                    best and he{' '}
                    <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">
                        never
                    </span>{' '}
                    complains
                </blockquote>

                {/* Reviewer Info + Arrows */}
                <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                            src={avater}
                            alt="Cameron"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <div>
                            <p className="font-semibold">Cameron Williamson</p>
                            <p className="text-gray-400 text-sm">Happy Client</p>
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-3">
                        <button className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white/10">
                            ←
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#F97316] text-black flex items-center justify-center hover:bg-orange-500 transition">
                            →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
