"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Search } from "lucide-react";
import { useFetchCategoriesAndDishes } from "../hooks/useFetchCategoriesAndDishes";

export default function FoodSearchDropdown() {
  const { dishesData, loading } = useFetchCategoriesAndDishes();
  const [query, setQuery] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState("0px");
  const containerRef = useRef();

  // Filter foods
  useEffect(() => {
    if (!dishesData) return;
    if (query.trim() === "") {
      setFilteredFoods(dishesData);
      return;
    }
    const results = dishesData.filter(dish =>
      dish.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredFoods(results);
  }, [query, dishesData]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth open/close
  useEffect(() => {
    let timeout;
    if (isOpen) {
      setDropdownVisible(true);
      setDropdownHeight("0px");
      requestAnimationFrame(() => {
        setDropdownHeight(`${Math.min(filteredFoods.length * 50, 240)}px`);
      });
    } else {
      setDropdownHeight("0px");
      timeout = setTimeout(() => setDropdownVisible(false), 3000);
    }
    return () => clearTimeout(timeout);
  }, [isOpen, filteredFoods.length]);

  return (
    <div className="relative w-full md:max-w-lg" ref={containerRef}>
      {/* Input */}
      <div
        className="flex items-center w-full bg-white rounded-xl px-4 md:px-5 py-2 md:py-[14px] shadow-xl cursor-pointer"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <Search className="text-gray-800" size={20} />
        <input
          type="text"
          placeholder={loading ? "Loading..." : "Search...."}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          className="flex-1 ml-2 md:ml-3 text-gray-700 bg-transparent outline-none text-sm md:text-sm placeholder:text-gray-800 placeholder:font-[700] placeholder:text-[15px] md:placeholder:text-[17px]"
        />
      </div>

      {/* Dropdown */}
      {dropdownVisible && containerRef.current && createPortal(
        <div
          className="absolute left-0 border-t -mt-2 border-gray-300 bg-white rounded-b-xl shadow-lg transition-[max-height,opacity] duration-700 ease-in-out"
          style={{
            top: containerRef.current.getBoundingClientRect().bottom + window.scrollY,
            left: containerRef.current.getBoundingClientRect().left + window.scrollX,
            width: containerRef.current.getBoundingClientRect().width + "px",
            maxHeight: dropdownHeight,
            opacity: isOpen ? 1 : 0,
            overflowY: "auto", 
            zIndex: 9999999,
          }}
        >
          {loading ? (
            <div className="px-3 py-2 text-gray-500 text-sm text-center">Loading...</div>
          ) : filteredFoods.length > 0 ? (
            filteredFoods.map(dish => (
              <div
                key={dish.id || dish._id}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => {
                  setQuery(dish.name);
                  setIsOpen(false);
                }}
              >
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-10 h-10 object-cover rounded-md"
                />
                <span className="text-gray-800 text-sm md:text-base">{dish.name}</span>
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-gray-500 text-sm text-center">No results found</div>
          )}
        </div>,
        document.body
      )}
    </div>
  );
}
