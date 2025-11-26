"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function TeamMember() {
    const teamData = [
        { id: 1, name: "Mark Henry", role: "Owner", image: "/assist/unsplash_safe.svg" },
        { id: 2, name: "Lucky Helen", role: "Chef", image: "/assist/unsplash_safe.svg" },
        { id: 3, name: "Moon Henry", role: "Founder", image: "/assist/unsplash_safe.svg" },
        { id: 4, name: "Tom Monrow", role: "Specialist", image: "/assist/unsplash_safe.svg" },
    ];

    const cornerVariants = [
        { hidden: { opacity: 0, x: -50, y: -50 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } } },
        { hidden: { opacity: 0, x: 50, y: -50 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } } },
        { hidden: { opacity: 0, x: -50, y: 50 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } } },
        { hidden: { opacity: 0, x: 50, y: 50 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } } },
    ];

    return (
        <div
            className="bg-cover bg-no-repeat bg-center mb-[450px] sm:mb-40 max-h-[200px] sm:max-h-[350px]"
            style={{ backgroundImage: "url('/assist/Bg.svg')" }}
        >
            <div className="max-w-5xl mx-auto h-full flex flex-col justify-center items-center px-2">
                <div className="text-center max-w-2xl mx-auto px-4 sm:mb-12 mt-24">
                    <h1 className="text-[#FFFFFF] text-3xl md:text-4xl font-[600] hidden sm:block">
                        Team Member
                    </h1>
                    <p className="text-[#FFFFFF] text-base md:text-[14px] hidden sm:block">
                        Our team brings together passion, expertise, and <br /> dedication to deliver
                        outstanding results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
                    {teamData.map((member, i) => (
                        <motion.div
                            key={member.id}
                            className="text-center"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            variants={cornerVariants[i]}
                        >
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={250}
                                height={250}
                                className="w-full h-48 sm:h-56 object-contain"
                            />
                            <h3 className="text-[16px] font-[600] text-[#4F4F4F] mt-2">{member.name}</h3>
                            <p className="text-[#828282] text-[14px] font-[400]">{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMember;
