"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Mic, Trophy, Lightbulb, GraduationCap, MapPin, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  label: string;
  value: string;
  index: number;
  color: string;
}

const StatCard = ({ label, value, index, color }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10, x: -10 }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className={cn("neo-border shadow-[8px_8px_0px_#000] p-6 flex flex-col items-center justify-center text-center group cursor-default h-full", color)}
  >
    <span className="text-3xl md:text-5xl font-archivo font-black text-black">
      {value}
    </span>
    <span className="text-[10px] uppercase tracking-tighter text-black mt-2 font-medium italic">
      {label}
    </span>
  </motion.div>
);

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, index, color }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    whileHover={{ y: -10, x: -10 }}
    className={cn("neo-border shadow-[12px_12px_0px_#000] p-6 flex gap-6 items-start group relative overflow-hidden cursor-default", color)}
  >
    <div className="p-4 bg-white neo-border shadow-[4px_4px_0px_#000]">
      <Icon className="w-8 h-8 text-black" />
    </div>
    
    <div className="flex flex-col">
      <h3 className="text-2xl font-archivo font-black text-black uppercase italic leading-none mb-2">
        {title}
      </h3>
      <p className="text-sm text-black font-archivo font-bold opacity-100 leading-relaxed uppercase">
        {description}
      </p>
    </div>
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section id="about" className="relative z-10 w-full py-24 px-6 overflow-hidden border-y-8 border-black font-archivo bg-white">
      <div className="absolute inset-0 bg-neo-lines pointer-events-none z-0 opacity-100" />
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center lg:items-start mb-24 text-center lg:text-left"
        >
          <div className="bg-neupurple p-6 neo-border shadow-[12px_12px_0px_#000] -rotate-2 mb-16">
            <h2 className="text-3xl sm:text-7xl font-archivo font-black text-white uppercase italic">
              WHAT IS ADSOPHOS?
            </h2>
          </div>
          <p className="text-lg sm:text-2xl font-[900] uppercase text-black max-w-2xl leading-[3rem]">
            MJCET's flagship technical symposium. <span className="inline-block bg-neugreen px-3 py-1 neo-border mx-1 -rotate-1">20+ years of legacy.</span> 30+ events. High energy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12 text-black text-base sm:text-xl font-[900] leading-relaxed uppercase"
            >
              <p>
                ADSOPHOS is MJCET’s premier technical symposium, led by the <span className="text-neupurple underline decoration-4">Department of EEE</span>, Muffakham Jah College of Engineering & Technology.
              </p>
              <p className="bg-neublue neo-border p-6 sm:p-10 shadow-[12px_12px_0px_#000] rotate-1 font-archivo font-black text-white leading-relaxed uppercase">
                This two-day event brings students from ALL DISCIPLINES to participate in competitions, workshops, and exhibitions.
              </p>
              <p className="text-black">
                Demonstrate skills, collaborate with peers, and explore emerging technologies. The arena is OPEN.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-6">
              <StatCard label="Quests" value="30+" index={0} color="bg-neublue" />
              <StatCard label="Players" value="500+" index={1} color="bg-neugreen" />
              <StatCard label="Bosses" value="20+" index={2} color="bg-neupurple" />
              <StatCard label="Loot" value="₹50K+" index={3} color="bg-[#FFE200]" />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <FeatureCard 
              icon={Calendar} 
              title="2 DAYS OF GRIND" 
              description="A packed schedule featuring various technical events and hackathons." 
              index={0}
              color="bg-neublue"
            />
            <FeatureCard 
              icon={Lightbulb} 
              title="MULTI-DOMAIN" 
              description="Covering VLSI, Embedded Systems, AI/ML, and Power Systems Engineering." 
              index={1}
              color="bg-neugreen"
            />
            <FeatureCard 
              icon={MapPin} 
              title="MJCET ARENA" 
              description="Held at the Department of Electrical & Electronics Engineering, MJCET." 
              index={2}
              color="bg-neupurple"
            />
            <FeatureCard 
              icon={Trophy} 
              title="CASH PRIZES" 
              description="Win exciting cash loot and recognition for your technical performance." 
              index={3}
              color="bg-[#FFE200]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
