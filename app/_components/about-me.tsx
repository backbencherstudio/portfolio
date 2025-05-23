import React from 'react';
import aboutMe from '@/public/images/about-me.png';

export default function AboutMe() {
  return (
    <div className="relative bg-white px-4 sm:px-8 md:px-20 py-20 sm:py-28 md:py-72">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-no-repeat bg-center bg-contain py-10 mt-20 sm:mt-32 md:mt-52" 
        style={{ backgroundImage: `url(${aboutMe.src})` }} 
      />

      {/* Foreground Text */}
      <div className="md:max-w-7xl relative font-medium z-10 container mx-auto text-center sm:text-left text-[#151414] px-4 sm:px-8 md:px-20">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-[40px]">
          I believe that the best designs are born from a deep understanding of users' needs and a
          commitment to continuous learning. I'm committed to staying at the forefront of design
          trends and emerging technologies, ensuring that my work remains fresh and relevant.
        </p>
      </div>
    </div>
  );
}
