"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TeamShowcase from "@/components/ui/team-showcase";
import type { TeamMember } from "@/components/ui/team-showcase";

const doctors: TeamMember[] = [
  {
    id: "1",
    name: "Dr. Mogali Kasi Viswanatham",
    role: "MEDICAL DIRECTOR · MBBS, MS",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLLJakA-GdqJl7abCCNPdbwDt4MEo_7P2axHa1LBsBPZTGzLh48dhalusrws-lw1m4jFWcPhhpmovS8ZQMbWBj1I6TUK6kn0bM0zoZ1GnYhPGOzm8v6gplsu7bC2XVYSf9mdbrse-K51tA2tTO7d0EUO-7Wbw0u9Jfuifun9RnGxYRcVGh2_4ayrYY4pnjjnOMrgiDZsjMtVlruLzrYrf2AMXNCBQG26dWJy4whz1JTn1vJNk_9kvinc1JKnO4gufYQw58ax35feTJ",
    social: { linkedin: "#" },
  },
  {
    id: "2",
    name: "Dr. Karri Divya",
    role: "CONSULTANT GYNECOLOGIST · MBBS, MD",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8SmzPbeGOeEC-QqxGSrlOAkaxF5w9irnterWhHPr21mVSLq7obf5UPQwLOFNQzJVLsLzb1te6HtxSo32i59VrRkgLo0saPl-RSb2vwjutVeeiBT34y5wQHRjd8hNfbHnZH2sXvv6jq0472D37gMWunIaCmHDcY0cqXjH7ZyqNzIzRoDbPmvG-7WOhngFqrqOw_rqfqgVP757iLyMCsqEEQd0uKlI9XuOsIrg1TTGQcfG58pPjThU2tMwOkAVJdDr96qGPvgyZjMJ",
    social: { linkedin: "#" },
  },
  {
    id: "3",
    name: "Dr. Kommuri Govindu Babu",
    role: "HEART SPECIALIST · MBBS, MD (Cardiology)",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS7Synp8GwydMbPCA6ZQyXGwM-rzY4u1A3ONWtl7J2nLLQCFqxSqv8XIZBjf4eyGMOD2Myf3hZQeBQF8iucBX9LuNtKkofg8zj8NJ9RgnunXzpQO8UaeAcCNqoDUINS2E7NSBOigqAebXy1hxTVtxpVnVLgknJgVUF6PFOPI4LXZNtlzEXiNXY0t3sEbJMOt-lFmuMTAS4KHyjnEgv1uUyNCjN6IZxdEm2a8qCLbxkcjedK4bcUtm6xFWEjymLkXk0szBVOg5c1ER8",
    social: { linkedin: "#" },
  },
  {
    id: "4",
    name: "Dr. Srinivas Rao",
    role: "ORTHOPEDIC SURGEON · MBBS, MS (Ortho)",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "5",
    name: "Dr. Lakshmi Prasanna",
    role: "PEDIATRICIAN · MBBS, MD (Peds)",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
  {
    id: "6",
    name: "Dr. Venkata Ramana",
    role: "GENERAL PHYSICIAN · MBBS",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face",
    social: { linkedin: "#" },
  },
];

export const Doctors = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-8" id="doctors">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-6">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold flex items-center gap-2 hover:text-primary-container transition-colors group text-sm cursor-pointer"
          >
            View All Doctors{" "}
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={16}
            />
          </motion.button>
        </div>

        {/* TeamShowcase component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <TeamShowcase members={doctors} />
        </motion.div>
      </div>
    </section>
  );
};
