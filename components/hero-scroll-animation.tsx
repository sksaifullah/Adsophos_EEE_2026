"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import AetherFlowHero from "./ui/aether-flow-hero";

export default function HeroScrollAnimation() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    return (
        <main ref={container} className="relative h-[200vh] bg-black">

            {/* 🔥 YOUR EXISTING HERO (UNCHANGED) */}
            <motion.div
                style={{ scale, opacity }}
                className="sticky top-0 h-screen flex items-center justify-center"
            >
                <AetherFlowHero />
            </motion.div>

            {/* 🔥 NEXT SECTION (appears on scroll) */}
            <motion.section
                className="h-screen flex items-center justify-center text-white text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-4xl md:text-6xl font-bold">
                    Explore Events ↓
                </h1>
            </motion.section>

        </main>
    );
}