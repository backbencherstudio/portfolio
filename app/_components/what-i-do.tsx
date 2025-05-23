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
      <div className="relative text-white py-48 px-6 sm:px-16 ">
        {/* Background Images */}
        <Image
          src={WhatIDoLeftBg}
          alt="left object"
          className="absolute left-0 bottom-0 w-[80px] sm:w-[120px]"
        />
        {/* <Image
          src={WhatIDoRightBg}
          alt="right object"
          className="absolute right-0 -bottom-24 w-[100px] sm:w-[150px]"
        /> */}

        <div className="container px-6 sm:px-20">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What I Do<span className="text-[#2E5CFF]">.</span>
          </h2>

          {/* Skills Table */}
          <div className="w-full border-t border-gray-700">
            {skills.map((skill, index) => {
              const isActive = activeSkill === skill;

              return (
                <div
                  key={index}
                  className={`flex items-center justify-between px-4 py-6 cursor-pointer transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-black font-semibold'
                      : 'border-b border-gray-700 text-white'
                  }`}
                  onClick={() => setActiveSkill(skill)}
                >
                  <span className="text-lg sm:text-xl">{skill}</span>
                  <span
                    className={`text-sm sm:text-base ${
                      isActive ? 'text-black/70' : 'text-white/70'
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
