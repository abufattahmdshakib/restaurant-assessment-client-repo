"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { items } from "./sliderData";

export default function MobileSlider() {
    const [active, setActive] = useState(items[0]);
    const [index, setIndex] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [direction, setDirection] = useState(0);

    const mobileText =
        "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.";
    const shortMobileText =
        "Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day.";

    const prevSlide = () => {
        const newIndex = index === 0 ? items.length - 1 : index - 1;
        setActive(items[newIndex]);
        setIndex(newIndex);
        setDirection(-1);
    };

    const nextSlide = () => {
        const newIndex = index === items.length - 1 ? 0 : index + 1;
        setActive(items[newIndex]);
        setIndex(newIndex);
        setDirection(1);
    };

    return (
        <motion.div
            className="relative block md:hidden w-full min-h-[95vh] overflow-hidden px-6 py-8 text-white"
            animate={{ backgroundColor: active.bg }}
            transition={{ duration: 1 }}
        >
            {/* BACK SHAPES */}
            <motion.div
                className="absolute -left-20 -top-20 w-[370px] h-[370px] rounded-full opacity-35 z-10"
                animate={{ backgroundColor: active.leftShape }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute -right-20 -bottom-20 w-[280px] h-[280px] rounded-full opacity-35 z-10"
                animate={{ backgroundColor: active.rightShape }}
                transition={{ duration: 1 }}
            />

            {/* SEARCH */}
            <div className="relative z-40 mb-5 flex items-center bg-white rounded-xl px-4 py-1 md:max-w-md mx-auto">
                <Search size={22} className="text-gray-900" />
                <input
                    className="w-full ml-3 text-gray-800 outline-none bg-transparent placeholder:text-gray-800 placeholder:font-[600]"
                    placeholder="Search..."
                />
            </div>

            {/* Heading */}
            <h2 className="relative text-center z-40 text-[28px] md:text-[34px] font-[400] mb-2">
                BREAKFAST
            </h2>

            {/* Paragraph */}
            <p className="relative z-40 text-white/85 text-[14px] md:text-[15px] leading-relaxed mb-4 max-w-md mx-auto text-left">
                {expanded ? mobileText : shortMobileText}{" "}
                <span
                    onClick={() => setExpanded(!expanded)}
                    className="underline text-sm cursor-pointer"
                >
                    {expanded ? "See Less" : "See More"}
                </span>
            </p>

            {/* MAIN IMAGE + ARROWS */}
            <div className="relative flex justify-center items-center mb-6">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 z-30 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                    <ChevronLeft size={26} className="text-white" />
                </button>

                {/* Large Image */}
                <AnimatePresence initial={false} custom={direction}>
                    <AnimatePresence mode="wait" initial={false} custom={direction}>
                        <motion.div
                            key={active.id}
                            initial={{ x: direction > 0 ? 40 : -40, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: direction > 0 ? -40 : 40, opacity: 0 }}
                            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden relative z-20"
                        >
                            <img
                                src={active.large}
                                className="w-full h-full object-cover rounded-full pointer-events-none select-none"
                            />
                        </motion.div>
                    </AnimatePresence>
                </AnimatePresence>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 z-30 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                >
                    <ChevronRight size={26} className="text-white" />
                </button>
            </div>

            {/* Thumbnail Indicators */}
            <div className="relative z-40 flex gap-4 justify-center flex-wrap md:gap-6">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col items-center cursor-pointer">
                        <img
                            src={item.thumbnail}
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full transition-transform duration-300 hover:scale-105"
                        />
                        <div
                            className={`h-[2px] w-full mt-2 rounded-full transition-all ${index === i ? "bg-white" : "bg-transparent"}`}
                        />
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
