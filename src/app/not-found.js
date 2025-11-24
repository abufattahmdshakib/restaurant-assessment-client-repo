// app/not-found.js
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-200 via-pink-200 to-indigo-200 text-center px-4">
            <h1 className="relative text-7xl font-bold text-[#A52A2A] mb-4">
                404
                <span className="absolute p-[3px] bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#A52A2A] via-[#851b678c] to-[#1f021203]"></span>
            </h1>
            <p className="text-2xl font-[600] text-[#A52A2A] mb-6">
                Oops! The page your looking for does not exist.
            </p>
            <Link href="/">
                <button className="relative text-[22px] inline-flex items-center justify-center gap-3 h-14 px-8 rounded-[50px] bg-gradient-to-r from-[#A72793] to-[#8136AE] shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-white font-semibold transition-all duration-300 group hover:bg-gradient-to-l hover:from-[#A72793] hover:to-[#8136AE] hover:shadow-2xl cursor-pointer">
                    <span className="flex items-center gap-3 transform transition-transform duration-700  translate-x-5 group-hover:-translate-x-2">
                        Go To Home
                        <ArrowRight
                            size={26}
                            strokeWidth={3}
                            className="opacity-0 translate-x-[5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700"
                        />
                    </span>
                </button>
            </Link>
        </div>
    );
}
