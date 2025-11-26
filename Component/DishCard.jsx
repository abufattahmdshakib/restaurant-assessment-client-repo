import React from "react";

export default function DishCard({ dish }) {
    return (
        <div className="rounded-xl mt-2 sm:mt-8 shadow-lg bg-white flex flex-col items-center transition duration-200 hover:shadow-xl">

            {/* Image Section */}
            <div className="w-full flex justify-center">
                {dish.img && (
                    <img
                        src={dish.img}
                        alt={dish.name}
                        className="w-full sm:w-96 h-30 sm:h-60 object-cover"
                    />
                )}
            </div>

            {/* Content Section */}
            <div className="w-full px-1 sm:px-4 py-2 sm:py-5 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <h2 className="font-[600] text-[18px] sm:text-[22px] text-[#000000]">{dish.name}</h2>
                    <span className="bg-[#F03328] text-white text-[10px] sm:text-[14px] px-1 sm:px-3 py-1 rounded-full">
                        {dish.category}
                    </span>
                </div>

                <div className="flex justify-between items-center">
                    <div className="text-[#FF9E0C] text-[18px] sm:text-[22px]">
                        {"★".repeat(Math.round(dish.rating))}
                    </div>
                    <div className="font-[700] text-[16px] sm:text-[20px] text-[#000000]">${dish.price}</div>
                </div>
            </div>
        </div>
    );
}
