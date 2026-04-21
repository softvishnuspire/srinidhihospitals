"use client";

import { LucideIcon, MoveRight, Users, Stethoscope, ShieldCheck, Zap, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "24/7", label: "Emergency Care", icon: Clock },
  { value: "15+", label: "Specialties", icon: Stethoscope },
  { value: "10K+", label: "Happy Patients", icon: Users },
  { value: "14+", label: "Years of Trust", icon: Award },
];

const QuickFact = ({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) => (
  <div className="flex items-start gap-4 group">
    <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
      <Icon className="text-accent" size={20} />
    </div>
    <div>
      <p className="font-bold text-on-surface text-sm">{title}</p>
      <p className="text-xs text-on-surface-variant leading-relaxed">{description}</p>
    </div>
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Refined background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full hero-gradient" />
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
        {/* Geometric accent shapes */}
        <div className="absolute top-32 right-24 w-3 h-3 rounded-full bg-accent/30 hidden lg:block" />
        <div className="absolute top-64 right-48 w-2 h-2 rounded-full bg-secondary/40 hidden lg:block" />
        <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-tertiary/20 hidden lg:block" />
      </div>

      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left column — Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary/8 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-primary font-semibold text-xs tracking-wide uppercase font-body">
              Excellence in Healthcare
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-primary tracking-tight leading-[1.08] mb-6">
            Modern
            <br />
            Multi-Specialty
            <br />
            <span className="bg-gradient-to-r from-primary-container to-secondary bg-clip-text text-transparent">
              Care
            </span>
          </h1>

          <p className="text-base md:text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed font-body">
            Compassionate doctors, advanced facilities, and 24/7 Emergency services under one roof. Dedicated to
            restoring your health with precision.
          </p>

          <div className="flex flex-wrap gap-4 mb-14">
            <button className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-xl font-headline font-bold shadow-lg shadow-primary/20 flex items-center gap-2 group transition-all hover:shadow-xl hover:shadow-primary/30 active:scale-95 cursor-pointer">
              Call for Appointment
              <MoveRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="bg-white border-2 border-primary/15 text-primary px-8 py-4 rounded-xl font-headline font-bold hover:border-primary/30 hover:bg-primary/5 transition-all shadow-sm active:scale-95 cursor-pointer">
              Get Directions
            </button>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="text-center md:text-left"
              >
                <div className="text-2xl md:text-3xl font-headline font-black text-primary">{stat.value}</div>
                <div className="text-xs text-on-surface-variant font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column — Quick Facts card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-primary/8 relative z-10 border border-gray-100/80">
            {/* Decorative top accent */}
            <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-accent via-tertiary to-primary-container" />

            <h3 className="text-xl font-headline font-bold text-primary mb-8 flex items-center gap-3 mt-2">
              <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
                <Zap className="text-accent" size={20} />
              </div>
              Quick Facts
            </h3>

            <div className="space-y-6">
              <QuickFact
                icon={Zap}
                title="24x7 Emergency & Trauma Care"
                description="Immediate medical attention available round the clock."
              />
              <QuickFact
                icon={Users}
                title="Experienced Multi-specialty Team"
                description="Senior consultants from diverse medical backgrounds."
              />
              <QuickFact
                icon={Stethoscope}
                title="In-house Diagnostics & Pharmacy"
                description="Complete medical solutions within our campus."
              />
              <QuickFact
                icon={ShieldCheck}
                title="Patient-first, Transparent Care"
                description="Ethical practices and detailed patient counseling."
              />
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute -top-8 -right-8 w-48 h-48 bg-secondary/6 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-accent/6 rounded-full blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
};
