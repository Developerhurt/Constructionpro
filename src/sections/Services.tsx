"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

const services = [
  { 
    title: "Design & Approvals", 
    desc: "BIM, 3D models, authority permits, cost control.", 
    icon: "🎨",
    color: "from-blue-500 to-cyan-500",
    features: ["3D Modeling", "BIM Integration", "Permit Processing"]
  },
  { 
    title: "Civil & Structural", 
    desc: "Foundations, RCC, steel structures, seismic compliance.", 
    icon: "🏗️",
    color: "from-orange-500 to-red-500",
    features: ["Foundation Work", "RCC Structures", "Seismic Design"]
  },
  { 
    title: "MEP & Smart", 
    desc: "Electrical, HVAC, plumbing, home/office automation.", 
    icon: "⚡",
    color: "from-yellow-500 to-orange-500",
    features: ["Electrical Systems", "HVAC Design", "Smart Automation"]
  },
  { 
    title: "Interiors & Fit-outs", 
    desc: "Turnkey interiors, modular, acoustic, LEED finishes.", 
    icon: "🏠",
    color: "from-green-500 to-emerald-500",
    features: ["Turnkey Interiors", "Modular Design", "LEED Certification"]
  },
  { 
    title: "Retrofit & Renovation", 
    desc: "Reinforcement, façade upgrades, energy retrofits.", 
    icon: "🔄",
    color: "from-purple-500 to-pink-500",
    features: ["Structural Reinforcement", "Façade Upgrades", "Energy Efficiency"]
  },
  { 
    title: "PMC / EPC", 
    desc: "Full-stack project management, tendering, vendor QA.", 
    icon: "📋",
    color: "from-indigo-500 to-purple-500",
    features: ["Project Management", "Vendor Management", "Quality Assurance"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></div>
            Our Services
          </motion.div>
          
          <motion.h2 {...fadeUp(.1)} className="text-4xl md:text-6xl font-black mb-6">
            What <span className="gradient-text">we do</span>
          </motion.h2>
          
          <motion.p {...fadeUp(.2)} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we deliver comprehensive construction solutions 
            that exceed expectations and stand the test of time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={service.title} 
              {...fadeUp(i * 0.1)} 
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full hover:scale-105 transition-all duration-500 hover:shadow-card-hover">
                {/* Icon and gradient background */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.desc}
                </p>

                {/* Features list */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/60">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn more button */}
                <div className="flex items-center gap-2 text-sm font-medium text-brand-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Hover border effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div {...fadeUp(.8)} className="mt-16 text-center">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to start your <span className="gradient-text">next project</span>?
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Let's discuss how we can bring your vision to life with our comprehensive construction services.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
            >
              Get Started Today
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
