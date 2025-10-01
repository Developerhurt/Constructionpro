"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/components/Motion";

type Project = { 
  id: string; 
  name: string; 
  city: string; 
  tag: "Residential" | "Commercial" | "Industrial"; 
  progress: number; 
  img: string;
  budget: string;
  timeline: string;
  status: string;
};

const DATA: Project[] = [
  { 
    id: "1", 
    name: "Skyline Residences", 
    city: "Bengaluru", 
    tag: "Residential", 
    progress: 72, 
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
    budget: "₹45 Cr",
    timeline: "18 months",
    status: "On Track"
  },
  { 
    id: "2", 
    name: "Nova Tech Park", 
    city: "Pune", 
    tag: "Commercial", 
    progress: 54, 
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
    budget: "₹120 Cr",
    timeline: "24 months",
    status: "On Track"
  },
  { 
    id: "3", 
    name: "Delta Logistics Hub", 
    city: "Ahmedabad", 
    tag: "Industrial", 
    progress: 38, 
    img: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1400&auto=format&fit=crop",
    budget: "₹85 Cr",
    timeline: "30 months",
    status: "On Track"
  },
  { 
    id: "4", 
    name: "Harbor One Offices", 
    city: "Mumbai", 
    tag: "Commercial", 
    progress: 81, 
    img: "https://images.unsplash.com/photo-1464716821980-83c226f3fa8f?q=80&w=1400&auto=format&fit=crop",
    budget: "₹200 Cr",
    timeline: "36 months",
    status: "Ahead of Schedule"
  },
];

const filterOptions = [
  { label: "All", value: "All", count: DATA.length },
  { label: "Residential", value: "Residential", count: DATA.filter(p => p.tag === "Residential").length },
  { label: "Commercial", value: "Commercial", count: DATA.filter(p => p.tag === "Commercial").length },
  { label: "Industrial", value: "Industrial", count: DATA.filter(p => p.tag === "Industrial").length },
];

export default function Ongoing() {
  const [filter, setFilter] = useState<"All" | Project["tag"]>("All");
  const filtered = useMemo(
    () => filter === "All" ? DATA : DATA.filter(d => d.tag === filter),
    [filter]
  );

  return (
    <section id="ongoing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              Live Projects
            </motion.div>
            
            <motion.h2 {...fadeUp(.1)} className="text-4xl md:text-6xl font-black mb-4">
              Ongoing <span className="gradient-text">projects</span>
            </motion.h2>
            
            <motion.p {...fadeUp(.2)} className="text-xl text-white/80 max-w-2xl">
              Currently delivering exceptional construction projects across India with 
              <span className="text-brand-300 font-semibold"> precision and excellence</span>.
            </motion.p>
          </div>

          <motion.div {...fadeUp(.3)} className="flex flex-wrap gap-3">
            {filterOptions.map(option => (
              <button 
                key={option.value} 
                onClick={() => setFilter(option.value as any)}
                className={`group relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === option.value 
                    ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow' 
                    : 'glass text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">{option.label}</span>
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  filter === option.value 
                    ? 'bg-white/20' 
                    : 'bg-white/10'
                }`}>
                  {option.count}
                </span>
                {filter === option.value && (
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                )}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.article 
              key={project.id} 
              {...fadeUp(i * 0.1)} 
              className="group relative glass rounded-3xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-card-hover"
            >
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.name} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Project tag */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.tag === 'Residential' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                    project.tag === 'Commercial' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {project.tag}
                  </span>
                </div>

                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    {project.status}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white text-sm mb-2">
                    <span className="font-semibold">Progress</span>
                    <span className="font-bold">{project.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-brand-500 to-accent-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.city}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-white/60 mb-1">Budget</div>
                    <div className="text-lg font-bold text-brand-400">{project.budget}</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-white/60 mb-1">Timeline</div>
                    <div className="text-lg font-bold text-accent-400">{project.timeline}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div className="text-xs text-white/50">
                    Updated 2 days ago
                  </div>
                </div>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-accent-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </motion.article>
          ))}
        </div>

        {/* Summary stats */}
        <motion.div {...fadeUp(.8)} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Projects", value: DATA.length, icon: "🏗️" },
            { label: "Avg Progress", value: `${Math.round(DATA.reduce((acc, p) => acc + p.progress, 0) / DATA.length)}%`, icon: "📊" },
            { label: "Total Budget", value: "₹450 Cr", icon: "💰" },
            { label: "On Schedule", value: "100%", icon: "⏰" }
          ].map((stat, i) => (
            <div key={stat.label} className="glass rounded-2xl p-6 text-center">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
