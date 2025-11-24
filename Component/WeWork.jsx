"use client";
import { ArrowRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


function WeWork() {
    const router = useRouter();

    const images = [
        "/assist/image 61.svg",
        "/assist/image 62.svg",
        "/assist/image 63.svg",
        "/assist/image 64.svg",
        "/assist/image 65.svg",
        "/assist/image 66.svg",

    ];

    return (
        <div>
            {/* Button & Title Section */}
            <div className="flex flex-col items-center text-center space-y-4 py-6 md:py-8">
                <p className=" text-[#880808] text-[20px] md:text-[25px] font-[400] md:font-[600] mb-0">
                    Partners & Clients
                </p>
                <p className=" text-black text-[28px] md:text-[36px] font-[600] md:font-[700]">
                    We work with the best pepole
                </p>
            </div>

            {/* Animated Images Section */}
            <div className="overflow-hidden max-w-6xl mx-auto pb-18 relative">
                <motion.div
                    className="flex"
                    style={{ width: "max-content" }}
                    animate={{ x: ["-50%", "0%"] }} // scroll half, because images are duplicated
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 10, // smooth speed
                            ease: "linear",
                        },
                    }}
                >
                    {/* Duplicate images for seamless scroll */}
                    {[...images, ...images].map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`work-${i}`}
                            className="w-[100px] h-[80px] md:w-[110px] md:h-[90px] object-contain mr-8 md:mr-24"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default WeWork;
 