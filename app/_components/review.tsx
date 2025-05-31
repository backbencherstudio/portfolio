"use client";

import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import reviewBg from "@/public/images/work-bg-2.png";
import avater from "@/public/images/avater.png";
import CotesionIcon from "@/public/icons/cotesion-icon";

const testimonials = [
  {
    quote: "He is seriously the best and he never complains",
    highlight: "never",
    name: "Cameron Williamson",
    role: "Happy Client",
    avatar: avater,
  },
  {
    quote: "Always delivers exceptional work and never misses a deadline",
    highlight: "never",
    name: "Leslie Alexander",
    role: "Brand Owner",
    avatar: avater,
  },
  {
    quote: "Highly creative, easy to work with, and never disappoints",
    highlight: "never",
    name: "Jenny Wilson",
    role: "Project Manager",
    avatar: avater,
  },
];

export default function Review() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);

    // Auto-slide functionality
    const autoSlideInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000); // Slides every 3 seconds

    // Cleanup interval on component unmount
    return () => {
      clearInterval(autoSlideInterval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative bg-black text-white py-20 px-6 sm:px-16 ">
      {/* Background Decoration */}
      <Image
        src={reviewBg}
        alt="Decor"
        className="absolute -top-72 left-0 hidden md:block md:w-[200px] lg:w-[350px]"
      />

      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-5xl font-medium mb-6 text-gray-300">
            What They Said
          </h2>
          <hr className="border-gray-700 mb-8" />

          {/* Embla Slider */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div className="min-w-full pr-4" key={index}>
                  <blockquote className="text-3xl sm:text-[100px] font-semibold leading-[120%]">
                    <CotesionIcon />
                    {testimonial.quote.split(testimonial.highlight)[0]}
                    <span className="bg-gradient-to-r from-[#FDC14C] via-[#EA5CFB] to-[#2E5CFF] text-transparent bg-clip-text">
                      {testimonial.highlight}
                    </span>{" "}
                    {testimonial.quote.split(testimonial.highlight)[1]}
                  </blockquote>

                  {/* Reviewer Info + Arrows */}
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Arrows */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={scrollPrev}
                        className="w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-black cursor-pointer active:scale-95"
                      >
                        ←
                      </button>
                      <button
                        onClick={scrollNext}
                        className="w-10 h-10 rounded-full bg-[#F97316] text-black flex items-center justify-center transition-all duration-300 hover:bg-white hover:border hover:border-[#F97316] active:scale-95 cursor-pointer"
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
