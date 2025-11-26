"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    details:
      "Fresh, flavorful, and just the right amount of heat. The tuna was buttery, the rice well-seasoned, and the chili mayo added a great kick. A must-try for sushi lovers.",
    name: "Tayyab Sohail",
    role: "UX/UI Designer",
    image: "/assist/women-cus.jpg",
  },
  {
    details:
      "Simple but delicious.The crust was perfectly crisp with a smoky edge,the tomatoes tasted fresh,and the mozzarekka was melty and rich.Classic done right.",
    name: "Nafiz Salim",
    role: "Graphic Designer",
    image: "/assist/customer.avif",
  },
  {
    details:
      "Juicy and satisfying.The patties were cooked to perfection,cheese melted like a dream,and the toasted brioche bun held it all together.Great value for a casual bite.",
    name: "Iqbal Tayyab",
    role: "Developer",
    image: "/assist/Customer.webp",
  },
];

export default function Feedback() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonials[currentIndex];

  return (
    <div className="flex flex-col-reverse sm:flex-row max-w-6xl mx-auto items-center justify-between gap-8 px-4 mb-14 sm:mb-0 bg-white overflow-x-hidden">

      {/* Left side text */}
      <motion.div
        className="md:w-3/5 flex flex-col justify-center gap-4 text-center sm:text-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h2 className="text-[32px] sm:text-[44px] font-[700]">
          Customer <span className="text-[#A52A2A]">Feedback</span>
        </h2>
        <p className="text-[#3D3D3D] text-left text-[14px] md:text-[18px]">{current.details}</p>

        <div className="flex items-center gap-4 mt-8 sm:mb-5 sm:mt-16">
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

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`sm:w-3 w-5 h-5 sm:h-3 rounded-full cursor-pointer ${
                    i === currentIndex ? "bg-[#A52A2A]" : "border border-[#A52A2A]"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Right side image */}
      <motion.div
        className="md:w-2/5 flex justify-end items-center relative"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <Image
          src="/assist/image.svg"
          alt="Chef"
          width={400}
          height={500}
          className="object-contain"
        />
      </motion.div>

    </div>
  );
}
