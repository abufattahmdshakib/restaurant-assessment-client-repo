"use client";

import React from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

function Footer() {
    const [email, setEmail] = React.useState("");

    const handleSubmit = () => {
        if (email.trim() !== "") {
            console.log("Submitted Email:", email);
            setEmail("");
        }
    };


    const instagramImages = [
        "/assist/unsplash_in-ga.svg",
        "/assist/unsplash_in-ga (2).svg",
        "/assist/unsplash_in-ga (3).svg",
        "/assist/unsplash_in-ga (4).svg",
        "/assist/unsplash_in-ga (5).svg",
        "/assist/unsplash_in-ga (6).svg",
    ];

    const socialIcons = [
        { src: "/assist/image 75.svg", alt: "Pinterest" },
        { src: "/assist/image 76.svg", alt: "Twitter" },
        { src: "/assist/image 77.svg", alt: "Facebook" },
        { src: "/assist/image 78.svg", alt: "Instagram" },
        { src: "/assist/image 79.svg", alt: "YouTube" },
    ];

    return (
        <footer className="bg-[#880808] text-white pt-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Newsletter */}
                <div className="flex flex-col">
                    <h2 className="font-bold text-[28px] sm:text-[30px] mb-4">RESTAURANT</h2>
                    <p className="text-[16px] mb-4">
                        Subscribe our newsletter and <br /> get discount 25% off
                    </p>
                    <div className="flex mb-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                            placeholder="Enter Your Email"
                            className="w-44 py-2 px-4 rounded-l-md bg-white text-black placeholder:text-gray-500 focus:outline-none focus:ring-0"
                        />
                        <button
                            onClick={handleSubmit}
                            className="bg-[#c60b0b] py-2 px-3 rounded-r-md"
                        >
                            <IoIosSend className="w-5 h-5 text-white text-lg" />
                        </button>
                    </div>
                    <div className="flex space-x-3 mb-6">
                        {socialIcons.map((icon, idx) => (
                            <img
                                key={idx}
                                src={icon.src}
                                alt={icon.alt}
                                className="w-7 h-7 cursor-pointer hover:scale-110 transition-transform duration-200"
                            />
                        ))}
                    </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col">
                    <h2 className="font-bold text-[20px] sm:text-[22px] mb-4">Contact us</h2>
                    <div className="flex items-center mb-2">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-white" />
                        <p className="text-[16px]">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaPhoneAlt className="w-4 h-4 mr-2 text-white" />
                        <p className="text-[16px]">(480) 555-0103</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaEnvelope className="w-4 h-4 mr-2 text-white" />
                        <p className="text-[16px]">M.Alyaqout@4house.Co</p>
                    </div>
                    <div className="flex items-center mb-2">
                        <FaClock className="w-4 h-4 mr-2 text-white" />
                        <p className="text-[16px]">Sun - Sat / 10:00 AM - 8:00 PM</p>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col">
                    <h2 className="font-bold text-[20px] sm:text-[22px] mb-4">Links</h2>
                    <ul className="text-[16px] flex flex-wrap sm:flex-col gap-5">
                        <li><Link href="#">About us</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Our Menu</Link></li>
                        <li><Link href="#">Team</Link></li>
                        <li><Link href="#">FAQ</Link></li>
                    </ul>
                </div>

                {/* Instagram Gallery */}
                <div className="flex flex-col hidden sm:flex -ml-12">
                    <h2 className="font-bold text-[20px] sm:text-[22px] mb-4">Instagram Gallery</h2>
                    <div className="grid grid-cols-3 gap-x-3 gap-y-3 justify-items-start w-[230px] sm:w-[260px] lg:w-[300px]">
                        {instagramImages.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Instagram ${idx + 1}`}
                                className="w-[85px] h-[85px] sm:w-[95px] sm:h-[95px] lg:w-[105px] lg:h-[105px] object-cover"
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#A52A2A] mt-8 py-4 text-sm text-gray-300 px-4">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                    <p className="mb-2 sm:mb-0">
                        Copyright © 2024. All rights reserved.
                    </p>
                    <div className="hidden sm:flex space-x-4">
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Term of Use</Link>
                        <Link href="#">Partner</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
