import React from 'react';

export default function Navbar() {
    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4 md:py-8">
                {/* Logo */}
                <div>
                    <h1 className="text-[28px] md:text-[40px] font-bold text-white">Mg<span className="text-blue-500">.</span></h1>
                </div>

                {/* Gradient Shadow Button */}
                <div className="relative inline-block">
                    {/* Skewed Gradient Background */}
                    <div className="absolute inset-0 z-0 transform -rotate-[5deg] rounded-[20px]">
                        <div className="w-full h-full bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] rounded-md" />
                    </div>

                    {/* Top White Button */}
                    <button className="relative z-10 bg-white text-[#151414] text-base md:text-lg lg:text-xl font-medium px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-md transition hover:bg-gray-100">
                        Let&apos;s Talk
                    </button>
                </div>
            </div>
        </div>
    );
}
