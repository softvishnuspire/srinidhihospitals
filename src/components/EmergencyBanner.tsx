"use client";

import { motion } from "framer-motion";
import { Zap, Gauge, FileText, Headphones, PhoneCall } from "lucide-react";

const features = [
  { icon: Gauge, label: "Rapid Triage" },
  { icon: FileText, label: "Immediate Access" },
  { icon: Headphones, label: "24/7 Support" },
];

export const EmergencyBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary-container to-[#0078a8] text-white overflow-hidden relative">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 right-10 w-72 h-72 border border-white/40 rounded-full" />
        <div className="absolute bottom-10 left-10 w-48 h-48 border border-white/30 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-8 flex flex-wrap items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Emergency Department</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-headline font-extrabold mb-4 leading-tight">
            24x7 Critical Care
            <br />
            <span className="text-accent">Support</span>
          </h2>
          <p className="text-white/70 text-sm mb-8 max-w-lg font-body leading-relaxed">
            Our emergency team is always ready with state-of-the-art equipment and experienced specialists to handle any
            critical situation.
          </p>

          <div className="flex flex-wrap gap-6">
            {features.map((item) => (
              <div key={item.label} className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center transition-all group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/30">
                  <item.icon className="text-accent group-hover:text-white transition-colors" size={18} />
                </div>
                <span className="font-semibold text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-white/15 shadow-2xl flex-grow md:flex-grow-0 md:min-w-[320px]"
        >
          <div className="text-accent font-bold mb-1 uppercase text-xs tracking-[0.2em]">Emergency Helpline</div>
          <div className="text-3xl md:text-4xl font-headline font-black mb-2 tracking-tight text-white">
            08856-231166
          </div>
          <p className="text-white/50 text-xs mb-6 font-body">Available round the clock • All days</p>
          <button className="w-full bg-gradient-to-r from-accent to-tertiary text-white py-4 rounded-xl font-bold shadow-lg shadow-accent/30 transition-all hover:shadow-xl hover:shadow-accent/40 active:scale-95 flex items-center justify-center gap-2 group cursor-pointer">
            <PhoneCall size={18} className="group-hover:animate-bounce" />
            Call Ambulance Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};
