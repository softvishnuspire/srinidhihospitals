"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TeamShowcase from "@/components/ui/team-showcase";
import type { TeamMember } from "@/components/ui/team-showcase";

const doctors: TeamMember[] = [
  {
    id: "1",
    name: "Dr. N.S.V.D.S. Kameswara Sarma",
    role: "MEDICAL DIRECTOR · MD, MBBS",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "2",
    name: "Dr. Neeraja Sarma",
    role: "CHIEF GYNECOLOGIST · MD (Obs/Gyn), MBBS",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "3",
    name: "Dr. N. Srinivas Rao",
    role: "ORTHOPEDIC & JOINT REPLACEMENT SURGEON · MS (Ortho), MBBS",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "4",
    name: "Dr. P. Snehitha",
    role: "COSMETIC SPECIALIST & DERMATOLOGIST · MBBS, DDVL",
    image: "https://images.unsplash.com/photo-1594824813573-c15ff1adcb1b?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Dr. Venkata Vara Prasad",
    role: "CONSULTANT ANESTHESIOLOGIST · MBBS, MD (Anesthesia)",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "6",
    name: "Dr. Anusha P.",
    role: "RADIOLOGIST · MBBS, MD (RD)",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "7",
    name: "Dr. Sreerama Rao K.",
    role: "CONSULTANT PHYSICIAN · MD (Gen Med), MBBS",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "8",
    name: "Dr. B. Rajesh",
    role: "GENERAL SURGEON · MS (Gen Surg), MBBS",
    image: "https://images.unsplash.com/photo-1594824813573-c15ff1adcb1b?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
];

export const Doctors = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-8" id="doctors">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Section Header */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full min-h-[220px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
                Medical Team
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-2">
                Our Expert Team
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mt-3" />
              <p className="text-on-surface-variant font-body text-sm mt-4">
                Meet the specialists dedicated to your wellbeing.
              </p>
            </motion.div>
            
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold flex items-center gap-2 hover:text-primary-container transition-colors group text-sm cursor-pointer mt-8 lg:mt-12 self-start"
            >
              View All Doctors{" "}
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={16}
              />
            </motion.button>
          </div>

          {/* Right Column: Name List */}
          <div className="lg:col-span-8 w-full lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TeamShowcase members={doctors} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
