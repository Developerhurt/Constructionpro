"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/components/Motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    Company: [
      { name: "About Us", href: "#about" },
      { name: "Our Services", href: "#services" },
      { name: "Projects", href: "#ongoing" },
      { name: "Contact", href: "#contact" }
    ],
    Services: [
      { name: "Design & Approvals", href: "#services" },
      { name: "Civil & Structural", href: "#services" },
      { name: "MEP & Smart", href: "#services" },
      { name: "Interiors & Fit-outs", href: "#services" }
    ],
    Resources: [
      { name: "Project Gallery", href: "#gallery" },
      { name: "Case Studies", href: "#gallery" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "LinkedIn", href: "#", icon: "💼" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <motion.div {...fadeUp()} className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-3xl font-black tracking-tight">
                  BUILDING<span className="gradient-text">X</span>
                </div>
                <div className="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></div>
              </div>
              
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                Building future-proof spaces across India with innovative design, 
                sustainable practices, and uncompromising quality.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-brand-400">📧</span>
                  <span>hello@buildingx.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-brand-400">📞</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <span className="text-brand-400">📍</span>
                  <span>Mumbai • Delhi • Bangalore</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    {...fadeUp(.1 + i * 0.05)}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white hover:bg-brand-500/20 transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div key={category} {...fadeUp(.2 + categoryIndex * 0.1)}>
                <h3 className="text-lg font-semibold text-white mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link, linkIndex) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-white/70 hover:text-brand-300 transition-colors duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <motion.div {...fadeUp(.6)} className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white/60">
                <p>&copy; {currentYear} BUILDINGX. All rights reserved.</p>
                <div className="flex items-center gap-6">
                  <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm text-white/60">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-400 rounded-full"></span>
                  <span>GSTIN: 00ABCDE1234F1Z5</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  <span>Licensed Builder</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
  