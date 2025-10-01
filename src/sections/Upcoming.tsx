"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

const upcomingProjects = [
  { 
    quarter: "Q4 2025", 
    title: "Riverview Towers", 
    desc: "G+24 residential twin towers, 1.2M sq.ft, LEED Gold pre-cert.",
    type: "Residential",
    budget: "₹180 Cr",
    location: "Mumbai",
    status: "Planning",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    quarter: "Q1 2026", 
    title: "Quantum R&D Campus", 
    desc: "Lab+office hybrid, prefabricated modules, net-zero ready.",
    type: "Commercial",
    budget: "₹320 Cr",
    location: "Bangalore",
    status: "Design Phase",
    color: "from-green-500 to-emerald-500"
  },
  { 
    quarter: "Q3 2026", 
    title: "Aero Logistics Park", 
    desc: "Warehouse cluster with automated cold-chain infrastructure.",
    type: "Industrial",
    budget: "₹450 Cr",
    location: "Delhi NCR",
    status: "Pre-Construction",
    color: "from-purple-500 to-pink-500"
  },
  { 
    quarter: "Q2 2026", 
    title: "Smart City Hub", 
    desc: "Mixed-use development with smart infrastructure and IoT integration.",
    type: "Mixed-Use",
    budget: "₹650 Cr",
    location: "Pune",
    status: "Approval Phase",
    color: "from-orange-500 to-red-500"
  }
];

export default function Upcoming() {
  return (
    <section id="upcoming" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            Pipeline Projects
          </motion.div>
          
          <motion.h2 {...fadeUp(.1)} className="text-4xl md:text-6xl font-black mb-6">
            Upcoming <span className="gradient-text">projects</span>
          </motion.h2>
          
          <motion.p {...fadeUp(.2)} className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our pipeline of innovative projects showcases our commitment to 
            <span className="text-brand-300 font-semibold"> sustainable development</span> and 
            <span className="text-accent-300 font-semibold"> cutting-edge technology</span>.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 via-accent-500 to-emerald-500"></div>
          
          <div className="space-y-16">
            {upcomingProjects.map((project, i) => (
              <motion.div 
                key={project.title} 
                {...fadeUp(i * 0.1)} 
                className="relative flex items-start gap-8 group"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.color} flex items-center justify-center text-white font-bold text-sm shadow-glow group-hover:scale-110 transition-transform duration-300`}>
                    {project.quarter}
                  </div>
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-150`}></div>
                </div>

                {/* Project card */}
                <div className="flex-1 glass rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-card-hover group-hover:bg-gradient-to-r group-hover:from-white/5 group-hover:to-white/5">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                          {project.type}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium glass text-white/70">
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-brand-400 group-hover:to-accent-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/80 mb-6 leading-relaxed">
                        {project.desc}
                      </p>

                      <div className="flex items-center gap-2 text-white/60 mb-6">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="grid grid-cols-2 gap-4 lg:w-80">
                      <div className="glass rounded-xl p-4 text-center">
                        <div className="text-xs text-white/60 mb-1">Budget</div>
                        <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                          {project.budget}
                        </div>
                      </div>
                      <div className="glass rounded-xl p-4 text-center">
                        <div className="text-xs text-white/60 mb-1">Timeline</div>
                        <div className="text-lg font-bold text-white">{project.quarter}</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary stats */}
        <motion.div {...fadeUp(.8)} className="mt-20">
          <div className="glass rounded-3xl p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 text-white">
                Pipeline <span className="gradient-text">Overview</span>
              </h3>
              <p className="text-xl text-white/80">
                Our upcoming projects represent the future of construction in India
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Total Projects", value: upcomingProjects.length, icon: "🚀", color: "from-blue-500 to-cyan-500" },
                { label: "Total Value", value: "₹1,600 Cr", icon: "💰", color: "from-green-500 to-emerald-500" },
                { label: "Cities", value: "4", icon: "🌍", color: "from-purple-500 to-pink-500" },
                { label: "Timeline", value: "2025-2026", icon: "📅", color: "from-orange-500 to-red-500" }
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  {...fadeUp(.9 + i * 0.1)}
                  className="text-center group"
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className={`text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
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
              Want to be part of our <span className="gradient-text">next project</span>?
            </h3>
            <p className="text-xl text-white/80 mb-8">
              Join our growing portfolio of innovative construction projects and experience excellence in every detail.
            </p>
            <a 
              href="#contact" 
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
            >
              Start Your Project
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
