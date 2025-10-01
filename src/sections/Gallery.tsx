"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
    title: "Modern Office Complex",
    category: "Commercial",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
    title: "Luxury Residential Tower",
    category: "Residential",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1200&auto=format&fit=crop",
    title: "Industrial Manufacturing Unit",
    category: "Industrial",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1467348733814-f93fc480bec6?q=80&w=1200&auto=format&fit=crop",
    title: "Sustainable Green Building",
    category: "Commercial",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    title: "Smart City Infrastructure",
    category: "Infrastructure",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1464716821980-83c226f3fa8f?q=80&w=1200&auto=format&fit=crop",
    title: "Mixed-Use Development",
    category: "Mixed-Use",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
    title: "Hospitality Complex",
    category: "Hospitality",
    year: "2024"
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    title: "Educational Campus",
    category: "Educational",
    year: "2023"
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200&auto=format&fit=crop",
    title: "Retail Shopping Center",
    category: "Retail",
    year: "2024"
  }
];

const categories = ["All", "Commercial", "Residential", "Industrial", "Infrastructure", "Mixed-Use", "Hospitality", "Educational", "Retail"];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            Project Gallery
          </motion.div>
          
          <motion.h2 {...fadeUp(.1)} className="text-4xl md:text-6xl font-black mb-6">
            Gallery & <span className="gradient-text">Numbers</span>
          </motion.h2>
          
          <motion.p {...fadeUp(.2)} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects that showcase our expertise, 
            innovation, and commitment to excellence across various sectors.
          </motion.p>
        </div>

        {/* Category filters */}
        <motion.div {...fadeUp(.3)} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, i) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                category === "All" 
                  ? 'bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-glow' 
                  : 'glass text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {galleryItems.map((item, i) => (
            <motion.div 
              key={item.src} 
              {...fadeUp(i * 0.1)} 
              className="group relative break-inside-avoid mb-6"
            >
              <div className="relative overflow-hidden rounded-2xl glass hover:scale-105 transition-all duration-500 hover:shadow-card-hover">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white/90 font-medium">
                        {item.category}
                      </span>
                      <span className="text-white/70">{item.year}</span>
                    </div>
                  </div>
                </div>

                {/* Hover gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-brand-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div {...fadeUp(.8)} className="mt-20">
          <div className="glass rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Our <span className="gradient-text">Impact</span> in Numbers
              </h3>
              <p className="text-xl text-white/80">
                Delivering excellence across India with measurable results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "180+", label: "Projects Completed", icon: "🏗️", color: "from-blue-500 to-cyan-500" },
                { number: "₹2,500 Cr", label: "Total Project Value", icon: "💰", color: "from-green-500 to-emerald-500" },
                { number: "24", label: "Cities Served", icon: "🌍", color: "from-purple-500 to-pink-500" },
                { number: "98%", label: "Client Satisfaction", icon: "⭐", color: "from-yellow-500 to-orange-500" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  {...fadeUp(.9 + i * 0.1)}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div {...fadeUp(1)} className="mt-16 text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to see your <span className="gradient-text">vision</span> come to life?
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Join our portfolio of successful projects and experience the BUILDINGX difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#ongoing" 
                className="group inline-flex items-center gap-2 px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                View Live Projects
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
