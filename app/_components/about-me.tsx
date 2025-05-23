import React from 'react';
import Image from 'next/image';
import aboutMe from '@/public/images/about-me.png';

export default function AboutMe() {
  return (
    <div className="relative bg-white px-4 sm:px-20 py-40">
      {/* Background Image */}
      <div className="absolute inset-0  bg-no-repeat py-10 mt-52" style={{ backgroundImage: `url(${aboutMe.src})` }} />

      {/* Foreground Text */}
      <div className="relative font-medium z-10 container px-20 mx-auto text-center sm:text-left text-[#151414] text-[40px]  leading-relaxed">
        <p>
          I believe that the best designs are born from a deep understanding of users' needs and a
          commitment to continuous learning. I'm committed to staying at the forefront of design
          trends and emerging technologies, ensuring that my work remains fresh and relevant.
        </p>
      </div>
    </div>
  );
}
