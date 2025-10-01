"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

const Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(7, "Phone number must be at least 7 digits")
    .max(15, "Phone number too long"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  projectType: z.enum(["Residential", "Commercial", "Industrial"]).optional(),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

type FormData = z.infer<typeof Schema>;

const contactInfo = [
  {
    icon: "📧",
    title: "Email Us",
    details: "hello@buildingx.com",
    description: "We&apos;ll respond within 24 hours", // fixed
  },
  {
    icon: "📞",
    title: "Call Us",
    details: "+91 98765 43210",
    description: "Mon-Fri, 9AM-6PM IST",
  },
  {
    icon: "📍",
    title: "Visit Us",
    details: "Mumbai, Delhi, Bangalore",
    description: "Multiple office locations",
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(Schema) });

  const [ok, setOk] = useState<boolean | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setOk(res.ok);
      if (res.ok) {
        setTimeout(() => setOk(null), 5000);
      }
    } catch {
      setOk(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            {...fadeUp()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Get In Touch
          </motion.div>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Let&apos;s <span className="gradient-text">build</span> together
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Tell us about your project and we&apos;ll revert with a detailed
            timeline, <span className="text-brand-300 font-semibold">budget estimate</span>, and{" "}
            <span className="text-accent-300 font-semibold">implementation plan</span>.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div {...fadeUp(0.3)} className="lg:col-span-1">
            <div className="glass rounded-3xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-8 text-white">
                Get in <span className="gradient-text">touch</span>
              </h3>

              <div className="space-y-8">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.title}
                    {...fadeUp(0.4 + i * 0.1)}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-brand-500 to-accent-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-brand-300 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-white/60 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional info */}
              <motion.div
                {...fadeUp(0.7)}
                className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-brand-500/10 to-accent-500/10 border border-brand-500/20"
              >
                <h4 className="text-lg font-semibold text-white mb-3">
                  Why Choose Us?
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                    Detailed project analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                    Transparent pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    24/7 project support
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          
          {/* Contact Form */}
          <motion.div {...fadeUp(.4)} className="lg:col-span-2">
            <div className="glass rounded-3xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Full Name *</label>
                    <input 
                      {...register("name")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" 
                      placeholder="Enter your full name" 
                    />
                    {errors.name && <p className="text-xs text-red-400 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.name.message}
                    </p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Email Address *</label>
                    <input 
                      {...register("email")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" 
                      placeholder="you@company.com" 
                    />
                    {errors.email && <p className="text-xs text-red-400 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.email.message}
                    </p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Phone Number *</label>
                    <input 
                      {...register("phone")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300" 
                      placeholder="+91 98765 43210" 
                    />
                    {errors.phone && <p className="text-xs text-red-400 flex items-center gap-1">
                      <span>⚠️</span>
                      {errors.phone.message}
                    </p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Project Type</label>
                    <select 
                      {...register("projectType")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                    >
                      <option value="">Select project type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Industrial">Industrial</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Budget Range</label>
                    <select 
                      {...register("budget")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under ₹1 Cr">Under ₹1 Cr</option>
                      <option value="₹1-5 Cr">₹1-5 Cr</option>
                      <option value="₹5-10 Cr">₹5-10 Cr</option>
                      <option value="₹10-25 Cr">₹10-25 Cr</option>
                      <option value="Above ₹25 Cr">Above ₹25 Cr</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/90">Timeline</label>
                    <select 
                      {...register("timeline")} 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP">ASAP</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="3-6 months">3-6 months</option>
                      <option value="6-12 months">6-12 months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/90">Project Details *</label>
                  <textarea 
                    {...register("message")} 
                    rows={5} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 resize-none" 
                    placeholder="Tell us about your project: location, size, specific requirements, challenges, etc."
                  />
                  {errors.message && <p className="text-xs text-red-400 flex items-center gap-1">
                    <span>⚠️</span>
                    {errors.message.message}
                  </p>}
                </div>


                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                  <button
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full font-semibold text-white shadow-glow hover:shadow-glow-purple disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending Enquiry...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <svg
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <div className="text-sm text-white/60">
                    {ok === true && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-emerald-400"
                      >
                        <span>✅</span>
                        <span>Enquiry sent! We&apos;ll be in touch soon.</span>
                      </motion.div>
                    )}
                    {ok === false && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-2 text-red-400"
                      >
                        <span>❌</span>
                        <span>
                          Something went wrong. Please try again.
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
