'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import WhatIDoLeftBg from '@/public/images/what-i-do-bg-left.png';

export default function WhatIDo() {
  const skills = [
    'Graphic Design',
    'Branding Design',
    'UI/UX Design',
    'UX Research',
  ];

  const [activeSkill, setActiveSkill] = useState('Graphic Design');

  return (
    <div className="bg-black">
      <div className="relative text-white py-24 sm:py-32 md:py-48 px-4 sm:px-8 md:px-16">
        {/* Background Images */}
        <Image
          src={WhatIDoLeftBg}
          alt="left object"
          className="absolute left-0 bottom-0 w-[60px] sm:w-[150px] md:w-[210px] lg:w-[270px]"
        />

        <div className="container mx-auto px-4 sm:px-8 md:px-20">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
            What I Do<span className="text-[#2E5CFF]">.</span>
          </h2>

          {/* Skills Table */}
          <div className="w-full border-t border-gray-700">
            {skills.map((skill, index) => {
              const isActive = activeSkill === skill;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 lg:p-8 xl:p-14 cursor-pointer transition-all duration-300 ${isActive
                    ? 'bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-black font-semibold'
                    : 'border-b border-gray-700 text-white'
                    }`}
                  onClick={() => setActiveSkill(skill)}
                >
                  <span className="text-2xl lg:text-5xl xl:text-[84px] leading-tight mb-3 lg:mb-0">
                    {skill}
                  </span>
                  <span
                    className={`text-sm lg:text-xl xl:text-2xl ${isActive ? 'text-black/70' : 'text-white/70'
                      }`}
                  >
                    I can anything for this skill
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
