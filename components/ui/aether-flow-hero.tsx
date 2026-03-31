"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const AetherFlowHero = () => {
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const targetDate = new Date("April 9, 2026 00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((distance / 1000 / 60) % 60),
                seconds: Math.floor((distance / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            },
        }),
    };

    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4 md:px-8">

            {/* CONTENT */}
            <div className="text-center max-w-5xl mx-auto">

                {/* TITLE */}
                <motion.h1
                    custom={1}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wide leading-tight"
                    style={{
                        fontFamily: "Playfair Display, serif",
                        background: "linear-gradient(90deg, #c084fc, #22d3ee)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    ADSOPHOS
                </motion.h1>

                {/* YEAR */}
                <motion.h2
                    custom={2}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 tracking-[6px] md:tracking-[10px] text-yellow-400 font-bold"
                >
                    2026
                </motion.h2>

                {/* SUBTITLE */}
                <motion.p
                    custom={3}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-4 text-sm sm:text-base md:text-lg text-cyan-300 px-2"
                >
                    Defying Gravity • Powering the Future ⚡
                </motion.p>

                {/* TIMER */}
                <motion.div
                    custom={4}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8"
                >
                    {[
                        { label: "DAYS", value: timeLeft.days },
                        { label: "HOURS", value: timeLeft.hours },
                        { label: "MINS", value: timeLeft.minutes },
                        { label: "SECS", value: timeLeft.seconds },
                    ].map((item, i) => (
                        <div key={i} className="text-center min-w-[70px]">
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                                {item.value}
                            </h1>
                            <p className="text-gray-400 text-xs sm:text-sm tracking-widest">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </motion.div>

                {/* BUTTON */}
                <motion.a
                    custom={5}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate="visible"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc3DT8XqFV_26vsS-VGJQgLyIBl4TewEDRiJLxCJCyf2hdVew/viewform?usp=header"
                    target="_blank"
                >
                    <button className="mt-8 md:mt-10 px-6 sm:px-8 py-3 sm:py-4 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400/20 transition text-sm sm:text-base">
                        REGISTER NOW →
                    </button>
                </motion.a>
            </div>
        </section>
    );
};

export default AetherFlowHero;