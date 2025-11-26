"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { items } from "./sliderData";
import FoodSearchDropdown from "./FoodSearchDropdown";

export default function DesktopSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState("up");
  const [animating, setAnimating] = useState(false);

  const handleChange = (i) => {
    if (i === activeIndex || animating) return;

    setDirection(i > activeIndex ? "up" : "down");
    setPrevIndex(activeIndex);
    setActiveIndex(i);
    setAnimating(true);

    setTimeout(() => setAnimating(false), 2000);
  };

  const active = items[activeIndex];
  const prev = items[prevIndex];

  return (
    <div
      className="hidden md:block rounded-b-2xl relative w-full min-h-[70vh] lg:min-h-[60vh] xl:min-h-[50vh] 2xl:min-h-[40vh] text-white px-6 md:px-10 py-6 md:py-10 overflow-hidden"
      style={{
        backgroundColor: active.bg,
        transition: "background-color 2s ease-in-out"
      }}
    >
      {/* SHAPES */}
      <div
        className="absolute -left-32 -top-32 md:-left-40 md:-top-40 w-72 md:w-[700px] h-72 md:h-[700px] rounded-full opacity-35 z-10"
        style={{
          backgroundColor: active.leftShape,
          transition: "background-color 2s ease-in-out"
        }}
      />

      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-12 relative z-40 gap-4 md:gap-0">
        <h1 className="text-2xl md:text-[28px] font-bold">RESTAURANT</h1>
        <div className="w-full md:max-w-lg">
          <FoodSearchDropdown />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row justify-between items-center relative z-40 gap-6 lg:gap-0">
        {/* LEFT TEXT */}
        <div className="w-full lg:w-2/3 -mt-20">
          <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] font-[400]">
            BREAKFAST
          </h2>
          <p className="max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[15px] text-left text-white/85 leading-relaxed mb-6">
            Breakfast, often referred to as the ‘most important meal of the day’, provides essential nutrients to kick start our day. It includes a variety of foods, like fruits, cereals, dairy products, and proteins, that contribute to a balanced diet.
          </p>

          {/* Thumbnails */}
          <div className="flex gap-4 md:gap-6 flex-wrap">
            {items.map((item, i) => (
              <button
                key={i}
                onClick={() => handleChange(i)}
                className="relative cursor-pointer"
              >
                <img
                  src={item.thumbnail}
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-26 md:h-26 rounded-full"
                />
                <div
                  className={`h-[2px] mt-1 w-full rounded-full ${i === activeIndex ? "bg-white" : "bg-transparent"}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center  md:w-[550px] lg:w-[500px] md:h-[450px] lg:h-[460px] overflow-hidden rounded-full">
          {animating && (
            <img
              key={`prev-${prev.id}`}
              src={prev.large}
              className={`absolute z-40 w-full p-12 md:p-18 h-full object-cover rounded-full transition-transform duration-2000 ${direction === "up"
                ? "animate-slide-out-down"
                : "animate-slide-out-right"
                }`}
            />
          )}
          <img
            key={`active-${active.id}`}
            src={active.large}
            className={`absolute w-full z-40 p-12 md:p-18 h-full object-cover rounded-full transition-transform duration-2000 ${animating
              ? direction === "up"
                ? "animate-slide-in-right"
                : "animate-slide-in-bottom"
              : ""
              }`}
          />
        </div>
      </div>

      {/* Right Shape */}
      <div className="absolute -right-32 -bottom-32 md:-right-40 md:-bottom-40 w-72 md:w-[550px] h-72 md:h-[550px]">

        {animating && (
          <div
            key={`prev-shape-${prev.id}`}
            className={`absolute inset-0 rounded-full opacity-35 transition-transform duration-2000 ${direction === "up"
              ? "animate-slide-out-down-Shape z-0 hidden"
              : "animate-slide-out-right-Shape z-30"
              }`}
            style={{
              backgroundColor: prev.rightShape,
              transition: "background-color 2s ease-in-out"
            }}
          />
        )}

        <div
          key={`active-shape-${active.id}`}
          className={`absolute inset-0 rounded-full opacity-35 transition-transform duration-2000 ${animating
            ? direction === "up"
              ? "animate-slide-in-right-Shape z-30"
              : "animate-slide-in-bottom-Shape z-0 hidden"
            : ""
            }`}
          style={{
            backgroundColor: active.rightShape,
            transition: "background-color 2s ease-in-out",
          }}
        />
      </div>
    </div>
  );
}
