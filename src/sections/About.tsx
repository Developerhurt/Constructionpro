"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

const stats = [
  { k: "Years", v: "12+", icon: "🏗️", color: "from-brand-500 to-brand-600" },
  { k: "Projects", v: "180+", icon: "🏢", color: "from-accent-500 to-accent-600" },
  { k: "Cities", v: "24", icon: "🌍", color: "from-emerald-500 to-emerald-600" },
  { k: "Satisfaction", v: "98%", icon: "⭐", color: "from-yellow-500 to-yellow-600" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            About BUILDINGX
          </motion.div>
          
          <motion.h2 {...fadeUp(.1)} className="text-4xl md:text-6xl font-black mb-6">
            Who <span className="gradient-text">we are</span>
          </motion.h2>
          
          <motion.p {...fadeUp(.2)} className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            BUILDINGX is a design-build construction company delivering residential, commercial, and industrial projects across India. 
            We combine <span className="text-brand-300 font-semibold">prefabrication</span>, <span className="text-accent-300 font-semibold">BIM</span>, and 
            <span className="text-emerald-300 font-semibold"> lean onsite execution</span> to compress timelines without quality tradeoffs.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.k} 
              {...fadeUp(i * 0.1)} 
              className="group relative"
            >
              <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-card-hover">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.v}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.k}</div>
                
                {/* Hover effect gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info cards */}
        <motion.div {...fadeUp(.4)} className="mt-16 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We leverage cutting-edge technology and sustainable practices to deliver exceptional results.",
              icon: "🚀"
            },
            {
              title: "Quality Assured",
              desc: "Every project undergoes rigorous quality checks and meets international standards.",
              icon: "✅"
            },
            {
              title: "Client Focused",
              desc: "We prioritize client satisfaction and maintain transparent communication throughout.",
              icon: "🤝"
            }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              {...fadeUp(.5 + i * 0.1)}
              className="group glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
              <p className="text-white/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
