import React from 'react';
import Image from 'next/image';
import footerBg from '@/public/images/footer-bg.png';

export default function Footer() {
  return (
    <section className='max-w-8xl bg-[#151414] mx-auto relative py-20'>
      {/* Background Image */}
      <Image
        src={footerBg}
        alt="Footer Background"
        className="absolute left-0 bottom-0 w-[300px] opacity-30"
      />

      {/* Main Content */}
      <div className='max-w-[1920px] mx-auto px-4 sm:px-8 md:px-20'>
        {/* Top Section */}
        <div className='flex flex-col md:flex-row items-center gap-20'>
          <div>
            <h2 className='text-[40px] sm:text-[80px] md:text-[120px] lg:text-[200px] font-bold leading-[1.1] text-white'>
              Start Your
              <div>
                <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">
                  Project
                </span>
              </div>
            </h2>
          </div>
          <div>
            <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[212px] lg:h-[212px] rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-105 transition-transform'>
              <div className='text-black text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] rotate-45'>↑</div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className='mt-20 flex justify-between gap-6 md:gap-10 lg:gap-20 border-t border-gray-800 pt-10'>
          <div>
            <div className='opacity-60 hover:opacity-100 transition-opacity cursor-pointer'>
              <h3 className='text-white text-lg'>Mg</h3>
            </div>
          </div>
          <div className='flex items-center gap-20'>
            <div className='opacity-60 hover:opacity-100 transition-opacity cursor-pointer'>
              <h3 className='text-white text-lg'>SERVICES</h3>
            </div>
            <div className='opacity-60 hover:opacity-100 transition-opacity cursor-pointer'>
              <h3 className='text-white text-lg'>ABOUT ME</h3>
            </div>
            <div className='opacity-60 hover:opacity-100 transition-opacity cursor-pointer'>
              <h3 className='text-white text-lg'>PROJECT</h3>
            </div>
            <div className='opacity-60 hover:opacity-100 transition-opacity cursor-pointer'>
              <h3 className='text-white text-lg'>BLOG</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
