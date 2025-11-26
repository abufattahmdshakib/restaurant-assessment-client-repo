"use client";

import React, { useState } from "react";
import Image from "next/image";

// Dummy testimonial data
const testimonials = [
  {
    details:
      "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    image: "/assist/women-cus.jpg"
  },
  {
    details:
      "Simple but delicious.The crust was perfectly crisp with a smoky edge,the tomatoes tasted fresh,and the mozzarekka was melty and rich.Classic done right.",
    name: "Nafiz Salim",
    role: "Graphic Designer",
    image: "/assist/customer.avif"
  },
  {
    details:
      "Juicy and satisfying.The patties were cooked to perfection,cheese melted like a dream,and the toasted brioche bun held it all together.Great value for a casual bite.",
    name: "Iqbal Tayyab",
    role: "Developer",
    image: "/assist/Customer.webp"
  },
];

const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="flex flex-col-reverse sm:flex-row max-w-6xl mx-auto items-center justify-between gap-8 px-4 mb-14 sm:mb-0 bg-white">
      {/* Left side */}
      <div className="md:w-3/5 flex flex-col justify-center gap-4 text-center sm:text-left">
        <h2 className="text-[32px] sm:text-[44px] font-[700]">
          Customer <span className="text-[#A52A2A]">Feedback</span>
        </h2>
        <p className="text-[#3D3D3D] text-left text-[14px] md:text-[18px]">{current.details}</p>

        {/* Avatar and info */}
        <div className="flex items-center gap-4 mt-8 sm:mt-16">
          <div className="rounded-full overflow-hidden w-12 h-12 bg-gray-200">
            <Image
              src={current.image}
              alt={current.name}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex w-3/4 justify-between">
            <div className="text-left">
              <h3 className="text-[18px] text-[#A52A2A] font-[700]">{current.name}</h3>
              <p className="text-[#000000] text-[18px] font-[500]">{current.role}</p>
            </div>
            {/* Dots for carousel */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-[#A52A2A] border-[#A52A2A]" : "border border-[#A52A2A]"
                    }`}
                ></span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Right side */}
      <div className="md:w-2/5 flex justify-end items-center relative">
        <Image
          src="/assist/image.svg"
          alt="Chef"
          width={400}
          height={500}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Feedback;
