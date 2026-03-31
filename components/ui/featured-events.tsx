"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Award, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventCardProps {
  title: string;
  category: string;
  tagline: string;
  date: string;
  time: string;
  image?: string;
  regLink?: string;
  index: number;
}

const FeaturedEventCard = ({ title, category, tagline, date, time, image, regLink, index }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -12, x: -12 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative flex flex-col bg-white neo-border neo-shadow-lg overflow-hidden transition-all duration-300 h-full cursor-default"
  >
    {/* Featured Ribbon Badge */}
    <div className="absolute top-0 right-0 z-20">
      <div className="bg-neupurple text-white font-black px-4 py-2 neo-border-b neo-border-l uppercase italic text-xs">
        FEATURED
      </div>
    </div>

    {/* Image Section */}
    <div className="relative h-64 overflow-hidden border-b-4 border-black">
      {image ? (
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-none grayscale-0 md:grayscale md:group-hover:grayscale-0" 
        />
      ) : (
        <div className="w-full h-full bg-neugreen flex items-center justify-center p-10">
            <Trophy className="w-full h-full text-black opacity-20" />
        </div>
      )}
      <div className="absolute bottom-4 left-4">
        <span className="bg-neugreen text-black font-black px-3 py-1 neo-border text-[10px] uppercase italic">
          {category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-grow space-y-4">
      <h3 className="text-2xl sm:text-3xl font-archivo font-black text-black uppercase italic leading-none group-hover:text-neupurple transition-colors">
        {title}
      </h3>
      
      <p className="text-xs sm:text-sm text-black font-archivo font-bold opacity-100 line-clamp-3 leading-relaxed uppercase">
        {tagline}
      </p>

      {/* Info Rows */}
      <div className="flex flex-col gap-2 mt-auto pt-4 border-t-2 border-black/10">
        <div className="flex items-center gap-2 text-black font-bold text-xs uppercase font-archivo">
          <Calendar className="w-4 h-4 text-neupurple" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-2 text-black font-bold text-xs uppercase font-archivo">
          <Clock className="w-4 h-4 text-neupurple" />
          <span>{time}</span>
        </div>
      </div>

      {/* Action Button */}
      <motion.a 
        href={regLink || "#"}
        target={regLink ? "_blank" : undefined}
        rel={regLink ? "noopener noreferrer" : undefined}
        className="w-full mt-4 py-4 bg-neupurple hover:bg-neupurple/90 text-white font-archivo font-black neo-border neo-shadow transition-all hover:neo-shadow-active active:scale-95 flex items-center justify-center gap-2 uppercase italic text-sm tracking-widest no-underline"
      >
        INITIALIZE REGISTRATION
        <ArrowRight className="w-5 h-5" />
      </motion.a>
    </div>
  </motion.div>
);

export const FeaturedEvents = () => {
  const events = [
    {
      title: "TECHNICAL QUIZ",
      category: "QUIZ GALAXY",
      tagline: "Test your technical expertise with a series of challenging questions across various engineering domains. Only for the elite.",
      date: "9th April 2026",
      time: "9:00AM - 2:00PM",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
      regLink: "https://docs.google.com/forms/d/e/1FAIpQLSfE-VhIqG9grZdpiXbEwHjfEBy1avB-PUwPRlZGbsKFXsmJRw/viewform?usp=header"
    },
    {
      title: "POSTER EXPO",
      category: "CREATIVE ARENA",
      tagline: "Showcase your research and innovative concepts through a visually compelling technical poster. Rule the gallery.",
      date: "10th April 2026",
      time: "9:30AM - 1:30PM",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
      regLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5aug7uE7JWCi8jdUrYdOyhFx1ysnM0dwTL1IV7vmKvw5RqA/viewform?usp=header"
    },
    {
      title: "PAPER PRESENTATION",
      category: "SCHOLAR'S QUEST",
      tagline: "Present your research and technical papers with a focus on Content, Relevance, and Uniqueness. Convince the masters.",
      date: "9th April 2026",
      time: "2:00PM onwards",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
      regLink: "https://docs.google.com/forms/d/e/1FAIpQLSdtljS_zj8PsY_bu-PJoUw1uV3eUBvHEjc97JL4tSvDv2DqDw/viewform?usp=header"
    }
  ];

  return (
    <section id="featured-events" className="relative z-10 w-full py-24 px-6 border-b-8 border-black font-['Space_Grotesk',sans-serif] bg-white">
      <div className="absolute inset-0 bg-neo-lines pointer-events-none z-0 opacity-100" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-6 mb-16">
          <div className="p-6 bg-neupurple neo-border -rotate-3 hover:rotate-0 transition-transform shadow-[12px_12px_0px_#000]">
            <h2 className="text-2xl md:text-6xl font-archivo font-[900] text-white uppercase italic tracking-tighter">
              ELITE MISSIONS
            </h2>
          </div>
          <div className="hidden md:block flex-grow h-4 bg-black neo-shadow" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, idx) => (
            <FeaturedEventCard 
              key={idx}
              {...event}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
