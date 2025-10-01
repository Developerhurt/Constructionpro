"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp } from "@/components/Motion";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-500/5 to-transparent rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <motion.div
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
            Trusted by 180+ Projects
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight"
          >
            Building <span className="gradient-text">future-proof</span> spaces.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Design-Build • EPC • Fit-outs. On-time, on-budget, auditable
            delivery.
            <span className="text-brand-300 font-medium">
              {" "}
              Explore our ongoing and upcoming projects.
            </span>
          </motion.p>

          <motion.div
            {...fadeUp(0.3)}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#ongoing"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-brand-500 to-brand-600 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-accent-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 glass rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Get Quote
              <svg
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 flex flex-wrap gap-8 text-sm"
          >
            {[
              { label: "ISO-9001", icon: "✓" },
              { label: "Green Materials", icon: "🌱" },
              { label: "5-Year Warranty", icon: "🛡️" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/70"
              >
                <span className="text-brand-400">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Image + Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-card-hover ring-1 ring-white/10 group-hover:ring-brand-500/30 transition-all duration-500">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
              alt="Modern construction site with advanced equipment"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>

          {/* Floating stats cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card"
          >
            <div className="text-2xl font-bold text-brand-400">12+</div>
            <div className="text-xs text-white/70">Years Experience</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-card"
          >
            <div className="text-2xl font-bold text-accent-400">98%</div>
            <div className="text-xs text-white/70">Client Satisfaction</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
