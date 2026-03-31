"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { 
    ChevronDown, MapPin, Calendar, BookOpen, MonitorPlay, Cpu, Bot, Zap, 
    Gamepad2, Trophy, GraduationCap, Building2, Mail, Phone, Send, 
    ArrowUp, Menu, X as CloseIcon, Coins, Star, ArrowLeft,
    CheckCircle2, Gem
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { AboutSection } from './about-section';
import { FeaturedEvents } from './featured-events';

// --- Sub-Components ---
const FloatingTech = () => {
    const shapes = Array.from({ length: 15 });
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-40">
            {shapes.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ 
                        x: Math.random() * 100 + "%", 
                        y: Math.random() * 100 + "%",
                        rotate: Math.random() * 360,
                        scale: Math.random() * 0.5 + 0.5
                    }}
                    animate={{ 
                        x: [null, Math.random() * 100 + "%"],
                        y: [null, Math.random() * 100 + "%"],
                        rotate: [null, (Math.random() - 0.5) * 720]
                    }}
                    transition={{ 
                        duration: 30 + Math.random() * 40, 
                        repeat: Infinity, 
                        ease: "linear" 
                    }}
                    className={cn(
                        "absolute border-2 border-black/10",
                        ["w-12 h-12 rounded-xl", "w-20 h-20 rounded-full", "w-16 h-16 rounded-[40%]"][i % 3],
                        ["bg-neupurple/10", "bg-neublue/10", "bg-neugreen/10"][i % 3]
                    )}
                />
            ))}
        </div>
    );
};

const HeroNav = ({ onHome, onAbout, onEvents, onContact, onRegister, isVisible, setIsMenuOpen, isMenuOpen }: { onHome: () => void, onAbout: () => void, onEvents: () => void, onContact: () => void, onRegister: () => void, isVisible: boolean, setIsMenuOpen: (v: boolean) => void, isMenuOpen: boolean }) => {
    const handleLinkClick = (action: () => void) => {
        action();
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className={cn(
                "fixed top-0 left-0 right-0 z-[100] px-2 py-4 flex justify-center transition-all duration-500",
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0 pointer-events-none"
            )}>
                <motion.nav 
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="flex md:fixed md:left-1/2 md:-translate-x-1/2 md:top-4 items-center justify-between md:justify-center gap-6 pointer-events-auto w-full md:w-auto px-4 md:px-0 z-[170]"
                >
                    <div className="hidden md:flex items-center gap-6 bg-white border-4 border-black shadow-[4px_4px_0px_#000] px-6 py-3 rounded-full h-20">
                        <div className="flex items-center px-2">
                            <img 
                                src="/Adsophos logo.png" 
                                alt="Adsophos Logo" 
                                className="h-16 w-auto object-contain" 
                            />
                        </div>
                        <div className="flex-grow flex items-center gap-10 font-black text-sm uppercase tracking-widest px-6 border-l-4 border-black/10">
                            <button onClick={onHome} className="hover:text-neupurple transition-colors">Home</button>
                            <button onClick={onAbout} className="hover:text-neupurple transition-colors">About</button>
                            <button onClick={onEvents} className="hover:text-neupurple transition-colors">Events</button>
                            <button onClick={onContact} className="hover:text-neupurple transition-colors">Contact</button>
                        </div>
                        <button 
                            onClick={onRegister}
                            className="bg-neupurple text-white font-archivo font-black px-8 py-3 rounded-2xl neo-border neo-shadow transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none active:scale-95 text-xs uppercase"
                        >
                            REGISTER
                        </button>
                    </div>

                    <div className="md:hidden h-16 px-5 py-2 bg-white neo-border rounded-xl flex items-center justify-center shadow-[4px_4px_0px_#000] shrink-0">
                        <img 
                            src="/mjlogo.png" 
                            alt="MJCET Logo" 
                            className="h-full w-auto object-contain brightness-0" 
                        />
                    </div>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-4 bg-white neo-border rounded-xl shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all active:scale-90 pointer-events-auto"
                    >
                        <Menu className="w-8 h-8 text-black" />
                    </button>
                </motion.nav>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm md:hidden"
                        />

                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-[75vw] max-w-[320px] h-screen z-[9999] bg-white p-6 flex flex-col pointer-events-auto md:hidden border-l-8 border-black shadow-[-20px_0px_50px_rgba(0,0,0,0.5)]"
                        >
                            <div className="flex justify-between items-center mb-8 border-b-4 border-black pb-4">
                                <img 
                                    src="/Adsophos logo.png" 
                                    alt="Adsophos Logo" 
                                    className="h-16 w-auto object-contain" 
                                />
                                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-neublue neo-border neo-shadow-sm rounded-xl active:scale-90 transition-all">
                                    <CloseIcon className="w-6 h-6 text-white" />
                                </button>
                            </div>
                            
                            <div className="flex flex-col gap-3 items-stretch flex-grow overflow-y-auto">
                                {[
                                    { name: 'Home', action: onHome, color: 'bg-neublue' },
                                    { name: 'About', action: onAbout, color: 'bg-neugreen' },
                                    { name: 'Events', action: onEvents, color: 'bg-neupurple' },
                                    { name: 'Contact', action: onContact, color: 'bg-pink-400' }
                                ].map((link, idx) => (
                                    <motion.button 
                                        key={link.name}
                                        initial={{ x: 30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => handleLinkClick(link.action)} 
                                        className={cn("w-full py-5 neo-border neo-shadow text-xl font-black uppercase italic text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-left px-6", link.color)}
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                                
                                <motion.button 
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => handleLinkClick(onRegister)}
                                    className="mt-6 w-full py-6 bg-white text-black text-lg font-archivo font-black neo-border neo-shadow-lg rounded-2xl uppercase tracking-widest hover:bg-neupurple hover:text-white transition-colors"
                                >
                                    Register
                                </motion.button>
                            </div>

                            <div className="mt-auto pt-6 text-center text-[10px] font-black uppercase opacity-40 border-t-2 border-black/10">
                                ADSOPHOS MJCET • 2026
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

const GamingDashboard = ({ activeScreen, navigateTo, isLoading, setSelectedQuest, isPosterFull, setIsPosterFull, scrollToFeatured }: { 
    activeScreen: 'hub' | 'poster' | 'quests' | 'rewards', 
    navigateTo: (s: any) => void,
    isLoading: boolean,
    setSelectedQuest: (q: string | null) => void,
    isPosterFull: boolean,
    setIsPosterFull: (v: boolean) => void,
    scrollToFeatured: () => void
}) => {
    const Hub = () => (
        <div className="space-y-12">
            <div className="text-center space-y-4 mb-20">
                <div className="inline-block bg-neupurple p-6 neo-border shadow-[12px_12px_0px_#000] -rotate-2 mb-4">
                    <h2 className="text-4xl sm:text-7xl font-archivo font-black uppercase italic text-white leading-none">
                        OPERATION CENTER
                    </h2>
                </div>
                <p className="text-xs sm:text-lg font-medium uppercase italic text-neublue">SELECT AN OPERATION TO INITIALIZE</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                { id: 'poster', title: "DECRYPT: POSTER", icon: BookOpen, color: "bg-neublue" },
                { id: 'quests', title: "ACTIVE: MISSIONS", icon: MonitorPlay, color: "bg-neugreen" },
                { id: 'rewards', title: "REWARD: LOOT", icon: Trophy, color: "bg-neupurple" },
            ].map((item) => (
                <motion.div 
                    key={item.id} 
                    whileHover={{ y: -12, x: -12 }}
                    className={cn("p-8 neo-border rounded-3xl cursor-default transition-all duration-300 shadow-[12px_12px_0px_#000]", item.color)}
                >
                    <div className="w-14 h-14 bg-white neo-border rounded-xl flex items-center justify-center mb-6 shadow-[3px_3px_0px_#000]">
                        <item.icon className="w-7 h-7 text-black" />
                    </div>
                    <h3 className="text-3xl font-archivo font-black uppercase italic mb-4 leading-none text-black">{item.title}</h3>
                    <p className="text-xs font-archivo font-bold uppercase mb-8 opacity-100 leading-tight">Unlock achievements and level up your technical skills.</p>
                    <button 
                        onClick={() => navigateTo(item.id as any)}
                        className="w-full py-4 bg-black text-white font-archivo font-black uppercase italic tracking-widest neo-border shadow-[4px_4px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-sm"
                    >
                        COMMENCE
                    </button>
                </motion.div>
            ))}
            </div>
        </div>
    );

    const PosterScreen = ({ setIsPosterFull, scrollToFeatured }: { setIsPosterFull: (v: boolean) => void, scrollToFeatured: () => void }) => (
        <div className="bg-white neo-border neo-shadow-lg p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neublue/20 -translate-y-1/2 translate-x-1/2 blur-2xl" />
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div className="space-y-2">
                        <span className="bg-neupurple text-white px-3 py-1 neo-border text-[10px] font-black uppercase">WORLD PREMIERE</span>
                        <h2 className="text-4xl md:text-7xl font-[900] uppercase italic text-black leading-none drop-shadow-[4px_4px_0px_#0ea5e9]">ADSOPHOS 2026</h2>
                        <p className="text-xl sm:text-2xl font-black uppercase italic text-neupurple">"LET THE GAME BEGIN!"</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-gray-50 neo-border">
                            <p className="text-[10px] font-black uppercase opacity-50">ORGANIZED BY</p>
                            <p className="text-xs font-black leading-none mt-1 uppercase">Dept. of Electrical & Electronics Engineering, MJCET</p>
                        </div>
                        <div className="p-4 bg-gray-50 neo-border">
                            <p className="text-[10px] font-black uppercase opacity-50">LOCATION</p>
                            <p className="text-xs font-black leading-none mt-1 uppercase">Block-1, MJCET Campus, Hyderabad</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="flex items-center gap-2 px-4 py-2 bg-neugreen neo-border font-black text-sm uppercase shadow-[3px_3px_0px_#000]">
                            <Calendar className="w-4 h-4" /> 9-10 APRIL 2026
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-pink-400 neo-border font-black text-sm uppercase shadow-[3px_3px_0px_#000]">
                            <MapPin className="w-4 h-4" /> HYDERABAD
                        </div>
                    </div>

                    <button 
                        onClick={scrollToFeatured}
                        className="w-full md:w-auto px-8 py-4 md:px-12 md:py-6 bg-neupurple text-white text-lg md:text-xl font-black uppercase italic tracking-tighter neo-border shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
                    >
                        REGISTER NOW
                    </button>
                </div>

                <div 
                    onClick={() => setIsPosterFull(true)}
                    className="w-full md:w-80 aspect-[3/4] bg-gray-900 neo-border neo-shadow-lg flex items-center justify-center relative group cursor-zoom-in"
                >
                    <img 
                        src="/yellow poster .png" 
                        alt="Official Poster"
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm pointer-events-none">
                        <span className="text-white font-black uppercase italic border-2 border-white px-4 py-2">EXPAND VIEW</span>
                    </div>
                </div>
            </div>

            <button 
                onClick={() => navigateTo('hub')}
                className="mt-12 px-6 py-3 bg-white neo-border neo-shadow-lg font-black uppercase italic text-xs hover:neo-shadow-active hover:translate-x-1 hover:translate-y-1 active:scale-95 transition-all flex items-center gap-2"
            >
                <ArrowLeft className="w-4 h-4" /> BACK TO MENU
            </button>
        </div>
    );

    const QuestsScreen = () => (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-6xl font-[900] uppercase italic text-black leading-none drop-shadow-[4px_4px_0px_#37eb42]">EVENTS & QUESTS</h2>
                <p className="text-xl font-black uppercase italic text-neugreen">PARTICIPATE IN CHALLENGES & SHOWCASE YOUR SKILLS</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "IDEA MASTER", desc: "Present innovative research ideas", icon: Zap, color: "bg-pink-400" },
                    { title: "VISUAL STRATEGIST", desc: "Design impactful posters", icon: Star, color: "bg-neublue" },
                    { title: "INNOVATION BUILDER", desc: "Build real-world projects", icon: Cpu, color: "bg-neugreen" },
                    { title: "BOT COMMANDER", desc: "Robotics challenges", icon: Bot, color: "bg-neupurple" },
                    { title: "BRAIN BATTLE", desc: "Technical quiz", icon: GraduationCap, color: "bg-pink-400" },
                    { title: "GAME CHAMPION", desc: "Gaming competitions", icon: Gamepad2, color: "bg-white" },
                ].map((quest, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -5, rotate: -1 }}
                        className={cn("p-6 neo-border neo-shadow group cursor-default transition-colors", quest.color)}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-white neo-border flex items-center justify-center shadow-[3px_3px_0px_#000]">
                                <quest.icon className="w-6 h-6 text-black" />
                            </div>
                        </div>
                        <h4 className="text-xl font-black uppercase italic leading-tight mb-2">{quest.title}</h4>
                        <p className="text-xs font-bold uppercase opacity-80 leading-tight mb-6">{quest.desc}</p>
                        <button 
                            onClick={() => setSelectedQuest(quest.title)}
                            className="w-full py-2 bg-white neo-border font-black text-xs uppercase hover:bg-black hover:text-white transition-colors"
                        >
                            START QUEST
                        </button>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={() => navigateTo('hub')}
                    className="px-6 py-3 bg-white neo-border neo-shadow-lg font-black uppercase italic text-xs hover:neo-shadow-active hover:translate-x-1 hover:translate-y-1 active:scale-95 transition-all flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> BACK TO MENU
                </button>
            </div>
        </div>
    );

    const RewardsScreen = () => (
        <div className="space-y-12">
            <div className="text-center space-y-4">
                <h2 className="text-4xl sm:text-6xl font-[900] uppercase italic text-black leading-none drop-shadow-[4px_4px_0px_#f472b6]">REWARDS</h2>
                <p className="text-xs sm:text-xl font-black uppercase italic text-pink-500">UNLOCK ACHIEVEMENTS AND WIN EXCITING PRIZES</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {[
                    { title: "CASH PRIZES", icon: Coins, color: "bg-neublue" },
                    { title: "CERTIFICATES", icon: GraduationCap, color: "bg-neugreen" },
                    { title: "WINNER TITLES", icon: Trophy, color: "bg-neupurple" },
                ].map((reward, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                            "p-8 neo-border neo-shadow flex items-center gap-8", 
                            reward.color,
                            i === 2 && "md:col-span-2 md:max-w-md md:mx-auto w-full"
                        )}
                    >
                        <div className="w-20 h-20 bg-white neo-border flex items-center justify-center shadow-[6px_6px_0px_#000]">
                            <reward.icon className="w-10 h-10 text-black" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-lg sm:text-2xl font-[900] uppercase italic leading-none">{reward.title}</h4>
                            <p className="text-xs font-bold uppercase opacity-70">AWARDED TO TOP PERFORMERS OF THE SYMPOSIUM</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={() => navigateTo('hub')}
                    className="px-6 py-3 bg-white neo-border neo-shadow-lg font-black uppercase italic text-xs hover:neo-shadow-active hover:translate-x-1 hover:translate-y-1 active:scale-95 transition-all flex items-center gap-2"
                >
                    <ArrowLeft className="w-4 h-4" /> BACK TO MENU
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative">
            {activeScreen === 'hub' && <Hub />}
            {activeScreen === 'poster' && <PosterScreen setIsPosterFull={setIsPosterFull} scrollToFeatured={scrollToFeatured} />}
            {activeScreen === 'quests' && <QuestsScreen />}
            {activeScreen === 'rewards' && <RewardsScreen />}
        </div>
    );
};

const QuestArena = ({ missionTitle, onClose }: { missionTitle: string, onClose: () => void }) => {
    const [gameState, setGameState] = useState<'start' | 'playing' | 'end' | 'next-stage'>('start');
    const [score, setScore] = useState<number>(0);
    const [stage, setStage] = useState<number>(1);
    const [message, setMessage] = useState('');
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const nextStage = () => {
        if (stage < 3) {
            setStage(s => s + 1);
            setGameState('playing');
            setScore(0);
            setMessage(`STAGE ${stage + 1} ACTIVE`);
        } else {
            setGameState('end');
            setMessage('ALL STAGES CLEARED! MISSION ACCOMPLISHED.');
        }
    };

    const trivia = [
        { q: "Stage 1: What does 'EEE' stand for?", options: ["Electrical & Electronics Eng.", "Energy Eng.", "Electronic Eng."], correct: 0 },
        { q: "Stage 2: Standard Voltage in India?", options: ["110V", "230V", "440V"], correct: 1 },
        { q: "Stage 3: Who invented the Induction Motor?", options: ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell"], correct: 1 }
    ];

    const [elements, setElements] = useState<{ id: number, x: string, y: string, icon: string }[]>([]);
    const spawnElement = () => {
        const icons = ['🎨', '✨', '📐', '🖼️', '🖌️'];
        const newEl = { 
            id: Date.now(), 
            x: `${Math.random() * 80 + 10}%`, 
            y: `${Math.random() * 80 + 10}%`, 
            icon: icons[Math.floor(Math.random() * icons.length)]
        };
        setElements(prev => [...prev.slice(-4), newEl]);
    };

    const clickElement = (id: number) => {
        setElements(prev => prev.filter(e => e.id !== id));
        setScore(s => s + 1);
        const target = stage === 1 ? 5 : stage === 2 ? 10 : 15;
        if (score + 1 >= target) {
            if (stage < 3) setGameState('next-stage');
            else {
                setGameState('end');
                setMessage('MISSION ACCOMPLISHED! 🎨');
            }
        }
    };

    const [buildPower, setBuildPower] = useState(0);
    useEffect(() => {
        if (missionTitle === "INNOVATION BUILDER" && gameState === 'playing' && buildPower > 0) {
            const drainRate = stage === 1 ? 2 : stage === 2 ? 4 : 8;
            const interval = setInterval(() => {
                setBuildPower(p => Math.max(0, p - drainRate));
            }, 100);
            return () => clearInterval(interval);
        }
    }, [missionTitle, gameState, buildPower, stage]);

    const [coinPos, setCoinPos] = useState({ top: '50%', left: '50%' });
    const moveCoin = () => {
        setCoinPos({ 
            top: `${Math.random() * 80 + 10}%`, 
            left: `${Math.random() * 80 + 10}%` 
        });
        setScore(s => s + 1);
        const target = stage === 1 ? 5 : stage === 2 ? 8 : 12;
        if (score + 1 >= target) {
            if (stage < 3) setGameState('next-stage');
            else {
                setGameState('end');
                setMessage('LEVEL COMPLETE! 💎');
            }
        }
    };

    const [botPos, setBotPos] = useState({ x: 0, y: 0 });
    const targetPos = { x: 4, y: 4 };
    const obstaclesByStage = [
        [{ x: 1, y: 1 }, { x: 2, y: 2 }],
        [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 1, y: 3 }],
        [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 1, y: 3 }, { x: 4, y: 0 }, { x: 0, y: 4 }]
    ];
    
    const moveBot = (dx: number, dy: number) => {
        const next = { x: Math.max(0, Math.min(4, botPos.x + dx)), y: Math.max(0, Math.min(4, botPos.y + dy)) };
        const obstacles = obstaclesByStage[stage - 1];
        if (obstacles.some(o => o.x === next.x && o.y === next.y)) return;
        setBotPos(next);
        if (next.x === targetPos.x && next.y === targetPos.y) {
            if (stage < 3) setGameState('next-stage');
            else {
                setGameState('end');
                setMessage('MISSION ACCOMPLISHED! COMMANDER.');
            }
        }
    };

    const startReflexGame = () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setGameState('playing');
        setMessage('WAIT FOR GREEN...');
        const delay = Math.random() * 3000 + 2000;
        timerRef.current = setTimeout(() => {
            setMessage('CLICK NOW!!!');
        }, delay);
    };

    const handleReflexClick = () => {
        if (message === 'CLICK NOW!!!') {
            if (stage < 3) setGameState('next-stage');
            else {
                setGameState('end');
                setMessage('GODLIKE REACTION TIME! 🔥');
            }
        } else {
            if (timerRef.current) clearTimeout(timerRef.current);
            setMessage('TOO EARLY! RESTARTING...');
            timerRef.current = setTimeout(() => startReflexGame(), 1000);
        }
    };

    useEffect(() => {
        if (missionTitle === "VISUAL STRATEGIST" && gameState === 'playing') {
            const interval = setInterval(spawnElement, 800);
            return () => clearInterval(interval);
        }
    }, [missionTitle, gameState]);

    useEffect(() => {
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, []);

    return (
        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
        >
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white neo-border neo-shadow-lg p-6 md:p-10 max-w-2xl w-full text-center relative overflow-hidden"
            >
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-neo-lines" />
                <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black text-white neo-border hover:bg-red-500 transition-colors z-[100]">
                    <CloseIcon className="w-4 h-4" />
                </button>

                <div className="relative z-10 space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-center gap-2 mb-4">
                            {[1, 2, 3].map((s) => (
                                <div key={s} className={cn(
                                    "w-8 h-8 flex items-center justify-center neo-border font-black text-xs transition-colors",
                                    stage >= s ? "bg-neugreen text-black" : "bg-gray-100 text-black/20"
                                )}>
                                    {s}
                                </div>
                            ))}
                        </div>
                        <h2 className="text-4xl font-black uppercase italic text-black leading-tight">MISSION: {missionTitle}</h2>
                        <p className="text-xs font-black text-white bg-black py-1 inline-block px-4 neo-border uppercase">STAGE {stage} OF 3</p>
                    </div>

                    <div className="min-h-[300px] flex items-center justify-center">
                        {gameState === 'next-stage' ? (
                            <div className="py-12 space-y-8">
                                <Trophy className="w-16 h-16 mx-auto text-neublue animate-bounce" />
                                <h3 className="text-5xl font-black italic uppercase text-neugreen">STAGE CLEAR!</h3>
                                <button onClick={nextStage} className="px-12 py-6 bg-neupurple text-white font-black text-xl neo-border neo-shadow-lg active:scale-95 transition-all">
                                    CONTINUE TO STAGE {stage + 1}
                                </button>
                            </div>
                        ) : gameState === 'end' ? (
                            <div className="py-12 space-y-6 bg-neugreen/10 neo-border p-8 rounded-3xl">
                                <Trophy className="w-24 h-24 mx-auto text-black animate-bounce mb-4" />
                                <h3 className="text-5xl font-[900] uppercase italic text-black leading-none drop-shadow-[4px_4px_0px_#37eb42]">MISSION COMPLETE!</h3>
                                <p className="text-xl font-black uppercase text-neugreen">{message}</p>
                                <button onClick={onClose} className="px-12 py-6 bg-black text-white font-black text-xl neo-border neo-shadow-lg hover:bg-neupurple transition-colors uppercase italic">
                                    COLLECT REWARDS
                                </button>
                            </div>
                        ) : missionTitle === "BRAIN BATTLE" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-black uppercase italic text-xl text-neupurple">{trivia[stage - 1].q}</p>
                                <div className="grid grid-cols-1 gap-4">
                                    {trivia[stage - 1].options.map((opt, i) => (
                                        <button 
                                            key={i}
                                            onClick={() => {
                                                if (i === trivia[stage - 1].correct) {
                                                    if (stage < 3) setGameState('next-stage');
                                                    else { setGameState('end'); setMessage('MASTER ARCHITECT! 🏆'); }
                                                } else { setMessage('INCORRECT! REBOOTING...'); }
                                            }}
                                            className="p-5 bg-white neo-border neo-shadow text-left font-black uppercase italic hover:bg-neublue transition-all text-lg"
                                        >
                                            {i + 1}. {opt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : missionTitle === "IDEA MASTER" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-bold uppercase italic text-xl">CATCH THE INNOVATION COINS! ({score}/{stage * 4})</p>
                                <div className="relative h-64 bg-gray-50 neo-border overflow-hidden cursor-crosshair">
                                    <motion.button
                                        animate={{ top: coinPos.top, left: coinPos.left }}
                                        onClick={moveCoin}
                                        className="absolute w-12 h-12 bg-neublue neo-border rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <Gem className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            </div>
                        ) : missionTitle === "BOT COMMANDER" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-bold uppercase italic tracking-tighter">NAVIGATE TO TARGET 🎯</p>
                                <div className="grid grid-cols-5 gap-1 bg-gray-900 p-2 neo-border mx-auto w-fit">
                                    {Array.from({ length: 25 }).map((_, i) => {
                                        const x = i % 5; const y = Math.floor(i / 5);
                                        const isBot = botPos.x === x && botPos.y === y;
                                        const isTarget = targetPos.x === x && targetPos.y === y;
                                        const isObstacle = obstaclesByStage[stage - 1].some(o => o.x === x && o.y === y);
                                        return (
                                            <div key={i} className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center relative bg-white/5">
                                                {isBot && <motion.div layoutId="bot" className="text-2xl">🤖</motion.div>}
                                                {isTarget && <div className="animate-pulse">🎯</div>}
                                                {isObstacle && <div className="text-xl">🧱</div>}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <button onClick={() => moveBot(0, -1)} className="p-3 bg-white neo-border neo-shadow hover:bg-neublue"><ChevronDown className="w-6 h-6 rotate-180" /></button>
                                    <div className="flex gap-4">
                                        <button onClick={() => moveBot(-1, 0)} className="p-3 bg-white neo-border neo-shadow hover:bg-neublue"><ChevronDown className="w-6 h-6 rotate-90" /></button>
                                        <button onClick={() => moveBot(0, 1)} className="p-3 bg-white neo-border neo-shadow hover:bg-neublue"><ChevronDown className="w-6 h-6" /></button>
                                        <button onClick={() => moveBot(1, 0)} className="p-3 bg-white neo-border neo-shadow hover:bg-neublue"><ChevronDown className="w-6 h-6 -rotate-90" /></button>
                                    </div>
                                </div>
                            </div>
                        ) : missionTitle === "VISUAL STRATEGIST" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-bold uppercase italic">CATCH ELEMENTS! ({score}/{stage * 5})</p>
                                <div className="relative h-64 bg-gray-50 neo-border overflow-hidden">
                                    <AnimatePresence>
                                        {elements.map(el => (
                                            <motion.button key={el.id} initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                                                onClick={() => clickElement(el.id)} style={{ top: el.x, left: el.y }}
                                                className="absolute w-14 h-14 bg-white neo-border flex items-center justify-center text-2xl shadow-[4px_4px_0px_#000] -translate-x-1/2 -translate-y-1/2"
                                            >
                                                {el.icon}
                                            </motion.button>
                                        ))}
                                    </AnimatePresence>
                                </div>
                                {gameState === 'start' && <button onClick={() => setGameState('playing')} className="px-8 py-4 bg-neublue text-white font-black neo-border">START DESIGNING</button>}
                            </div>
                        ) : missionTitle === "INNOVATION BUILDER" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-bold uppercase italic text-center">RAPID MASH: STAGE {stage}!!! 🔨</p>
                                <div className="w-full h-12 bg-gray-100 neo-border overflow-hidden relative">
                                    <motion.div animate={{ width: `${buildPower}%` }} className="h-full bg-neugreen transition-all duration-75" />
                                    <span className="absolute inset-0 flex items-center justify-center font-black">{Math.floor(buildPower)}%</span>
                                </div>
                                <motion.button whileTap={{ scale: 0.8 }} onClick={() => {
                                    if (gameState !== 'playing') setGameState('playing');
                                    const inc = stage === 1 ? 10 : stage === 2 ? 7 : 4;
                                    const newPower = Math.min(100, buildPower + inc);
                                    setBuildPower(newPower);
                                    if (newPower >= 100) {
                                        if (stage < 3) setGameState('next-stage'); else { setGameState('end'); setMessage('ENGINEERING COMPLETE! 🚀'); }
                                    }
                                }} className="w-24 h-24 bg-white neo-border rounded-full flex items-center justify-center text-5xl shadow-[4px_4px_0px_#000] mx-auto">🔨</motion.button>
                            </div>
                        ) : missionTitle === "GAME CHAMPION" ? (
                            <div className="space-y-6 w-full">
                                <p className="font-black uppercase italic text-xl">REFLEX TEST: STAGE {stage}</p>
                                {gameState === 'start' ? (
                                    <button onClick={startReflexGame} className="px-10 py-5 bg-neupurple text-white font-black text-xl neo-border neo-shadow">START STAGE {stage}</button>
                                ) : (
                                    <button onClick={handleReflexClick} className={cn("w-full h-40 neo-border neo-shadow text-4xl font-black uppercase transition-all", message === 'CLICK NOW!!!' ? 'bg-neugreen scale-105' : 'bg-gray-100')}>
                                        {message}
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="p-8 bg-gray-50 neo-border border-dashed space-y-4">
                                <Zap className="w-12 h-12 mx-auto text-neublue" />
                                <p className="font-black uppercase">MISSION BRIEFING UNLOCKED</p>
                                <p className="text-xs font-bold uppercase opacity-60">MISSION DISPATCHED. PREPARE YOUR GEAR. PROJECT REQUIREMENTS GENERATING...</p>
                            </div>
                        )}
                    </div>

                    <div className="pt-4">
                        <button onClick={onClose} className="text-xs font-black uppercase underline hover:text-neupurple">ABORT MISSION</button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Footer = ({ onHome, onAbout, onEvents }: { onHome: () => void, onAbout: () => void, onEvents: () => void }) => {
    return (
        <footer id="contact" className="relative z-10 w-full pt-16 pb-8 px-6 bg-white border-t-8 border-black font-bold overflow-hidden">
            <div className="absolute inset-0 bg-neo-lines pointer-events-none z-0 opacity-100" />
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 relative z-10">
                <div className="md:col-span-2 space-y-6">
                    <div className="inline-block p-4 bg-neupurple neo-border neo-shadow -rotate-2">
                        <span className="text-3xl font-archivo font-black text-white uppercase italic tracking-tighter">
                            ADSOPHOS 2026
                        </span>
                    </div>
                    <p className="text-lg leading-tight max-w-md">
                        MJCET’s flagship technical fest. Collaboratively organized. High energy. Technical excellence. 2-Day Symposium.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { Icon: Mail, href: "mailto:adsophos2026@gmail.com", color: "bg-neublue" },
                            { Icon: Phone, href: "tel:9121995836", color: "bg-neugreen" },
                            { Icon: Send, href: "https://adsophos-eee.netlify.app/", color: "bg-neupurple" }
                        ].map((item, idx) => (
                            <motion.a 
                                key={idx} 
                                href={item.href}
                                whileHover={{ y: -5, x: -5 }}
                                className={cn("p-3 neo-border neo-shadow hover:neo-shadow-active transition-all", item.color)}
                            >
                                <item.Icon className="w-6 h-6 text-black" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xl font-archivo font-black uppercase text-neupurple">Quick Jump</h4>
                    <div className="flex flex-col gap-2 items-start text-black font-archivo">
                        <button onClick={onHome} className="hover:underline">HOME</button>
                        <button onClick={onAbout} className="hover:underline">ABOUT US</button>
                        <button onClick={onEvents} className="hover:underline">ALL EVENTS</button>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xl font-archivo font-black uppercase text-neugreen">Contact Details</h4>
                    <p className="text-sm">EEE Department, MJCET Campus</p>
                    <a 
                        href="mailto:adsophos2026@gmail.com" 
                        className="text-sm break-all font-bold underline hover:text-neupurple transition-colors block"
                    >
                        adsophos2026@gmail.com
                    </a>
                    <div className="pt-2 flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase font-black opacity-50">Event Manager: Saifullah</span>
                            <a 
                                href="tel:9121995836" 
                                className="bg-neugreen font-archivo px-3 py-2 neo-border neo-shadow-sm text-xs font-black flex items-center gap-2 w-fit hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                9121995836
                            </a>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase font-black opacity-50">Student Coordinator: Mahmood</span>
                            <a 
                                href="tel:7013051938" 
                                className="bg-neublue font-archivo px-3 py-2 neo-border neo-shadow-sm text-xs font-black flex items-center gap-2 w-fit hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all"
                            >
                                <Phone className="w-4 h-4" />
                                7013051938
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t-4 border-black gap-4 text-sm">
                <p>© 2026 ADSOPHOS FEST MJCET. ALL RIGHTS RESERVED.</p>
                <div className="px-4 py-2 bg-pink-400 neo-border neo-shadow flex items-center gap-2">
                    MADE WITH ❤️ BY <span className="text-black font-archivo">SAIF & EEE TEAM</span>
                </div>
            </div>
        </footer>
    );
}

const NeoButton = ({ children, onClick, color = "bg-neupurple", className = "" }: { children: React.ReactNode, onClick?: () => void, color?: string, className?: string }) => (
    <button 
        onClick={onClick}
        className={cn(
            "relative px-8 py-4 font-black uppercase italic tracking-widest text-white neo-border neo-shadow-lg transition-all hover:neo-shadow-active hover:translate-x-1 hover:translate-y-1 active:scale-95 disabled:opacity-50",
            color,
            className
        )}
    >
        {children}
    </button>
);

export const WovenLightHero = () => {
    const [selectedQuest, setSelectedQuest] = useState<string | null>(null);
    const [activeScreen, setActiveScreen] = useState<'hub' | 'poster' | 'quests' | 'rewards'>('hub');
    const [isLoading, setIsLoading] = useState(false);
    const [isPreloading, setIsPreloading] = useState(true);
    const [isVisibleNav, setIsVisibleNav] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPosterFull, setIsPosterFull] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsPreloading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight - 100) {
                setIsVisibleNav(false);
            } else {
                setIsVisibleNav(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navigateTo = (screen: 'hub' | 'poster' | 'quests' | 'rewards') => {
        setIsLoading(true);
        setTimeout(() => {
            setActiveScreen(screen);
            setIsLoading(false);
        }, 800);
    };

    const textControls = useAnimation();
    const buttonControls = useAnimation();

    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const targetDate = new Date("April 9, 2026 00:00:00").getTime();
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            if (distance < 0) {
                clearInterval(timer);
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / 1000 / 60) % 60);
            const seconds = Math.floor((distance / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    const scrollToAbout = () => document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
    const scrollToContact = () => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' });
    const scrollToDetails = () => document.getElementById("events")?.scrollIntoView({ behavior: 'smooth' });
    const scrollToFeatured = () => document.getElementById("featured-events")?.scrollIntoView({ behavior: 'smooth' });

    return (
        <div className="relative w-full min-h-screen bg-[#FFE200] overflow-x-hidden text-black font-['Space_Grotesk',sans-serif] selection:bg-neupurple/30 bg-neo-lines pb-32">
            <FloatingTech />
            <AnimatePresence>
                {isPreloading && (
                    <motion.div 
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="fixed inset-0 z-[10000] bg-[#FFE200] flex flex-col items-center justify-center bg-neo-lines"
                    >
                        <div className="absolute inset-0 opacity-10 bg-neo-lines pointer-events-none" />
                        <div className="relative z-10">
                            <motion.div 
                                initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
                                animate={{ scale: [1, 1.1, 1], opacity: 1, rotate: 0 }}
                                transition={{ 
                                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                                    opacity: { duration: 0.5 },
                                    rotate: { duration: 0.5 }
                                }}
                                className="w-32 h-32 md:w-56 md:h-56 bg-white neo-border neo-shadow-lg rounded-[40px] flex items-center justify-center p-6"
                            >
                                <img src="/Adsophos logo.png" alt="Loading Logo" className="w-full h-auto object-contain" />
                            </motion.div>
                            <motion.div 
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-8 border-[6px] border-dotted border-neupurple rounded-full opacity-20"
                            />
                            <motion.div 
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-12 border-[2px] border-dashed border-neugreen rounded-full opacity-30"
                            />
                        </div>
                        <div className="mt-16 text-center z-10">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-3xl md:text-5xl font-[900] uppercase italic tracking-tighter text-black drop-shadow-[4px_4px_0px_#8b5cf6]"
                            >
                                SYSTEM INITIALIZING...
                            </motion.p>
                            <div className="mt-6 w-48 md:w-64 h-3 bg-white neo-border mx-auto overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="h-full bg-neugreen"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={cn(
                "hidden md:block fixed top-6 left-6 z-[160] transition-all duration-700",
                isVisibleNav ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"
            )}>
                <div className="h-20 px-6 py-2 bg-white neo-border rounded-xl flex items-center justify-center shadow-[4px_4px_0px_#000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all cursor-default overflow-hidden group">
                    <img 
                        src="/mjlogo.png" 
                        alt="MJCET Logo" 
                        className="h-full w-auto object-contain brightness-0 group-hover:scale-105 transition-transform" 
                    />
                </div>
            </div>

            <HeroNav 
                onHome={scrollToTop} 
                onAbout={scrollToAbout} 
                onEvents={scrollToFeatured} 
                onContact={scrollToContact}
                onRegister={scrollToFeatured}
                isVisible={isVisibleNav}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-48 pb-24 text-center max-w-5xl mx-auto w-full space-y-12">
                <div className="relative">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                        animate={{ opacity: 1, scale: 1, rotate: -5 }}
                        whileHover={{ scale: 1.15, rotate: 0, y: -10 }}
                        onClick={scrollToDetails}
                        className="absolute -top-12 -left-4 md:-top-16 md:-left-16 w-20 h-20 md:w-40 md:h-40 bg-neugreen neo-border neo-shadow-lg rounded-3xl flex items-center justify-center p-4 z-0 cursor-pointer"
                    >
                        <Gamepad2 className="w-full h-full text-black" />
                    </motion.div>

                    <h1 className="relative z-10 leading-[0.85] tracking-tighter cursor-default">
                        <div className="flex flex-nowrap justify-center overflow-visible">
                            {"ADSOPHOS".split("").map((char, i) => (
                                <motion.span 
                                    key={i}
                                    initial={{ x: -100, opacity: 0 }}
                                    animate={{ 
                                        x: 0, 
                                        opacity: 1, 
                                        y: [0, -8, 0],
                                        transition: { 
                                            x: { delay: i * 0.05 },
                                            opacity: { delay: i * 0.05 },
                                            y: {
                                                repeat: Infinity,
                                                duration: 2.5,
                                                delay: i * 0.1,
                                                ease: "easeInOut"
                                            }
                                        } 
                                    }}
                                    whileHover={{ y: -20, color: "#37eb42", scale: 1.1 }}
                                    className="font-archivo inline-block text-5xl sm:text-8xl md:text-[9rem] font-[900] uppercase italic text-neupurple drop-shadow-[4px_4px_0px_#000] md:drop-shadow-[8px_8px_0px_#000] select-none"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                        <div className="flex flex-nowrap justify-center overflow-visible -mt-2 md:-mt-8">
                            {"2026".split("").map((char, i) => (
                                <motion.span 
                                    key={i}
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ 
                                        x: 0, 
                                        opacity: 1, 
                                        y: [0, -12, 0],
                                        transition: { 
                                            x: { delay: 0.5 + i * 0.05 },
                                            opacity: { delay: 0.5 + i * 0.05 },
                                            y: {
                                                repeat: Infinity,
                                                duration: 3,
                                                delay: 0.5 + i * 0.15,
                                                ease: "easeInOut"
                                            }
                                        } 
                                    }}
                                    whileHover={{ y: -20, color: "#9d33fb", scale: 1.1 }}
                                    className="font-archivo inline-block text-6xl sm:text-[10rem] md:text-[12rem] font-[900] uppercase italic text-neublue drop-shadow-[4px_4px_0px_#000] md:drop-shadow-[12px_12px_0px_#000] select-none"
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </h1>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5, rotate: 20 }}
                        animate={{ opacity: 1, scale: 1, rotate: 12 }}
                        whileHover={{ scale: 1.15, rotate: 0, y: -10 }}
                        onClick={scrollToDetails}
                        className="absolute -bottom-8 -right-2 sm:-right-8 w-20 h-20 md:w-32 md:h-32 bg-pink-400 neo-border neo-shadow-lg rounded-full flex items-center justify-center p-4 z-0 cursor-pointer"
                    >
                        <Trophy className="w-full h-full text-black" />
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl mx-auto px-4">
                    <motion.div 
                        whileHover={{ y: -8, x: -8 }}
                        className="w-full md:flex-1 bg-white neo-border neo-shadow-lg p-6 rotate-1 hover:rotate-0 transition-all cursor-default"
                    >
                        <div className="flex items-center gap-4">
                            <Calendar className="w-8 h-8 text-neupurple" />
                            <div className="text-left font-black">
                                <p className="text-xs uppercase text-gray-500">When?</p>
                                <p className="text-lg uppercase">9th & 10th April</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div 
                        whileHover={{ y: -8, x: -8 }}
                        className="w-full md:flex-1 bg-neugreen neo-border neo-shadow-lg p-6 -rotate-1 hover:rotate-0 transition-all cursor-default"
                    >
                        <div className="flex items-center gap-4">
                            <MapPin className="w-8 h-8 text-black" />
                            <div className="text-left font-black">
                                <p className="text-xs uppercase text-black/50">Where?</p>
                                <p className="text-lg uppercase">Block-1, MJCET Campus</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8 !mt-12">
                    {[
                        { label: "DAYS", value: timeLeft.days, color: "bg-neupurple" },
                        { label: "HRS", value: timeLeft.hours, color: "bg-neugreen" },
                        { label: "MINS", value: timeLeft.minutes, color: "bg-white" },
                        { label: "SECS", value: timeLeft.seconds, color: "bg-pink-400" },
                    ].map((item, i) => (
                        <div key={i} className={cn("p-4 md:p-6 neo-border neo-shadow flex flex-col items-center min-w-[80px] md:min-w-[120px]", item.color)}>
                            <span className="text-4xl md:text-6xl font-black italic tracking-tighter leading-none">
                                {String(item.value).padStart(2, '0')}
                            </span>
                            <span className="text-[10px] md:text-xs font-black uppercase mt-2">{item.label}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center !mt-12 w-full max-w-2xl mx-auto relative z-20">
                    <NeoButton onClick={scrollToFeatured} className="w-full font-archivo text-xl py-6 rounded-3xl" color="bg-neupurple text-white">
                        COMMENCE OPERATION
                    </NeoButton>
                    <NeoButton onClick={scrollToDetails} className="w-full font-archivo text-xl py-6 rounded-3xl" color="bg-neublue text-white">
                        EXPLORE QUESTS
                    </NeoButton>
                </div>
            </section>

            <AboutSection />
            <FeaturedEvents />

            <div id="events" 
                className={cn(
                    "relative z-10 border-y-8 border-black overflow-hidden transition-all duration-500 bg-white",
                    activeScreen === 'hub' ? "py-10 md:py-16" : "py-24"
                )}
            >
                {/* Dedicated Grid Layer for high visibility */}
                <div className="absolute inset-0 bg-neo-lines pointer-events-none z-0 opacity-100" />
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div 
                                    key="loading"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-white"
                                >
                                    <div className="w-64 h-8 bg-gray-100 neo-border relative overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 0.8, ease: "easeInOut" }}
                                            className="absolute inset-0 bg-neupurple"
                                        />
                                    </div>
                                    <motion.p 
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 1 }}
                                        className="mt-4 font-black uppercase italic text-neupurple"
                                    >
                                        {activeScreen === 'hub' ? 'ENTERING HUB...' : 'LOADING MISSION...'}
                                    </motion.p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key={activeScreen}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <GamingDashboard 
                                        activeScreen={activeScreen} 
                                        navigateTo={navigateTo} 
                                        isLoading={isLoading} 
                                        setSelectedQuest={setSelectedQuest}
                                        isPosterFull={isPosterFull}
                                        setIsPosterFull={setIsPosterFull}
                                        scrollToFeatured={scrollToFeatured}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedQuest && (
                    <QuestArena missionTitle={selectedQuest} onClose={() => setSelectedQuest(null)} />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isPosterFull && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsPosterFull(false)}
                        className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
                    >
                        <motion.div 
                            initial={{ scale: 0.8, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 20 }}
                            className="relative max-w-4xl w-full h-fit py-8 md:py-16 neo-border bg-white p-2"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src="/yellow poster .png" alt="Poster Full View" className="w-full h-auto max-h-[85vh] object-contain" />
                            <button 
                                onClick={() => setIsPosterFull(false)}
                                className="absolute -top-4 -right-4 bg-neupurple text-white p-3 neo-border shadow-[4px_4px_0px_#000] hover:scale-110 active:scale-90 transition-all z-[1001]"
                            >
                                <CloseIcon className="w-6 h-6" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer 
                onHome={scrollToTop} 
                onAbout={scrollToAbout} 
                onEvents={scrollToDetails} 
            />

            <button 
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-[100] p-4 bg-neupurple text-white neo-border neo-shadow hover:neo-shadow-active active:scale-90 transition-all group"
            >
                <ArrowUp className="w-6 h-6" />
            </button>
        </div>
    );
};

