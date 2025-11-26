"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { items } from "./sliderData";

export default function DesktopSlider() {
  const [active, setActive] = useState(items[0]);
  const [index, setIndex] = useState(0);

  const handleChange = (item, i) => {
    setActive(item);
    setIndex(i);
  };

  return (
    <div
      className="hidden sm:block rounded-b-2xl relative w-full min-h-[95vh] text-white px-10 py-10 overflow-hidden"
      style={{ backgroundColor: active.bg }}
    >
      {/* SHAPES */}
      <div
        className="absolute -left-40 -top-40 w-[700px] h-[700px] rounded-full opacity-35 z-10"
        style={{ backgroundColor: active.leftShape }}
      />
      <div
        className="absolute -right-40 -bottom-40 w-[550px] h-[550px] rounded-full opacity-35 z-10"
        style={{ backgroundColor: active.rightShape }}
      />

      {/* HEADER */}
      <div className="flex justify-between -mt-2 mb-12 relative z-40">
        <h1 className="text-[28px] font-bold">RESTAURANT</h1>
        <div className="flex items-center w-full max-w-lg bg-white rounded-xl px-5 py-[6px] shadow-xl">
          <Search className="text-gray-800" size={24} />
          <input
            type="text"
            placeholder="Search...."
            className="flex-1 ml-3 text-gray-700 bg-transparent outline-none text-sm placeholder:text-gray-800 placeholder:font-[700] placeholder:text-[17px]"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex justify-between items-center relative z-40">
        {/* LEFT TEXT */}
        <div className="w-2/3">
          <h2 className="text-[62px] font-[400]">BREAKFAST</h2>
          <p className="max-w-2xl text-[15px] text-left text-white/85 leading-relaxed mb-8">
            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
          </p>

          {/* Thumbnails */}
          <div className="flex gap-6">
            {items.map((item, i) => (
              <button key={i} onClick={() => handleChange(item, i)} className="relative">
                <img src={item.thumbnail} className="w-28 h-28 rounded-full" />
                <div className={`h-[2px] w-full rounded-full ${index === i ? "bg-white" : "bg-transparent"}`} />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          key={active.id}
          initial={{ x: 200, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-[420px] h-[420px] rounded-full mt-6 mr-18 overflow-hidden relative z-20"
        >
          <img src={active.large} className="w-full h-full object-cover rounded-full" />
        </motion.div>
      </div>
    </div>
  );
}
