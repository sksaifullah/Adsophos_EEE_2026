"use client";

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useMotionTemplate, useAnimationFrame } from "framer-motion";
import { MousePointerClick, Info, Sun, Moon, Settings2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const GridPattern = ({ offsetX, offsetY, size }: { offsetX: any; offsetY: any; size: number }) => (
    <svg className="w-full h-full">
        <defs>
            <motion.pattern id="grid-pattern" width={size} height={size} patternUnits="userSpaceOnUse" x={offsetX} y={offsetY}>
                <path d={`M ${size} 0 L 0 0 0 ${size}`} fill="none" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
            </motion.pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-pattern)" />
    </svg>
);

/**
 * Standalone infinite grid background with mouse flashlight effect.
 * Drop this inside any `relative` container to use as background.
 */
export const InfiniteGridBackground = ({ gridSize = 40 }: { gridSize?: number }) => {
    const mouseX = useMotionValue(-9999);
    const mouseY = useMotionValue(-9999);
    const gridOffsetX = useMotionValue(0);
    const gridOffsetY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
        mouseX.set(-9999);
        mouseY.set(-9999);
    };

    useAnimationFrame(() => {
        gridOffsetX.set((gridOffsetX.get() + 0.3) % gridSize);
        gridOffsetY.set((gridOffsetY.get() + 0.3) % gridSize);
    });

    const maskImage = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

    return (
        <div
            className="absolute inset-0 w-full h-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Base grid — always visible, very subtle */}
            <div className="absolute inset-0 z-0 opacity-[0.07] text-white">
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
            </div>

            {/* Flashlight grid — revealed only under cursor */}
            <motion.div className="absolute inset-0 z-0 opacity-50 text-white" style={{ maskImage, WebkitMaskImage: maskImage }}>
                <GridPattern offsetX={gridOffsetX} offsetY={gridOffsetY} size={gridSize} />
            </motion.div>
        </div>
    );
};

/** Full demo page with theme toggle and controls */
const InfiniteGrid = () => {
    const [count, setCount] = useState(0);
    const [gridSize, setGridSize] = useState(40);

    return (
        <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030303]">
            <InfiniteGridBackground gridSize={gridSize} />
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute right-[-20%] top-[-20%] w-[40%] h-[40%] rounded-full bg-orange-500/20 blur-[120px]" />
                <div className="absolute left-[-10%] bottom-[-20%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[120px]" />
            </div>
            <div className="absolute bottom-10 right-10 z-30">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-xl space-y-3 min-w-[200px]">
                    <div className="flex items-center gap-2 text-sm font-medium text-white">
                        <Settings2 className="w-4 h-4" /> Grid Density
                    </div>
                    <input type="range" min="20" max="100" value={gridSize} onChange={(e) => setGridSize(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400" />
                    <div className="flex justify-between text-[10px] text-white/40 uppercase tracking-widest font-mono">
                        <span>Dense</span><span>Sparse ({gridSize}px)</span>
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">The Infinite Grid</h1>
                <p className="text-lg text-white/50">Move your cursor to reveal the active grid layer.</p>
                <div className="flex gap-4">
                    <motion.button onClick={() => setCount(c => c + 1)} whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md shadow-md">
                        <MousePointerClick className="w-4 h-4" /> Interact ({count})
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.05, y: -4 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-2 px-8 py-3 bg-white/10 text-white font-semibold rounded-md border border-white/10">
                        <Info className="w-4 h-4" /> Learn More
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default InfiniteGrid;
