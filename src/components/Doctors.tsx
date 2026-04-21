"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

const doctors = [
  {
    name: "Dr. Mogali Kasi Viswanatham",
    role: "Medical Director",
    specialty: "MBBS, MS - Senior General Surgeon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDLLJakA-GdqJl7abCCNPdbwDt4MEo_7P2axHa1LBsBPZTGzLh48dhalusrws-lw1m4jFWcPhhpmovS8ZQMbWBj1I6TUK6kn0bM0zoZ1GnYhPGOzm8v6gplsu7bC2XVYSf9mdbrse-K51tA2tTO7d0EUO-7Wbw0u9Jfuifun9RnGxYRcVGh2_4ayrYY4pnjjnOMrgiDZsjMtVlruLzrYrf2AMXNCBQG26dWJy4whz1JTn1vJNk_9kvinc1JKnO4gufYQw58ax35feTJ",
    accent: "accent",
  },
  {
    name: "Dr. Karri Divya",
    role: "Gynecology Specialist",
    specialty: "MBBS, MD - Consultant Gynecologist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCI8SmzPbeGOeEC-QqxGSrlOAkaxF5w9irnterWhHPr21mVSLq7obf5UPQwLOFNQzJVLsLzb1te6HtxSo32i59VrRkgLo0saPl-RSb2vwjutVeeiBT34y5wQHRjd8hNfbHnZH2sXvv6jq0472D37gMWunIaCmHDcY0cqXjH7ZyqNzIzRoDbPmvG-7WOhngFqrqOw_rqfqgVP757iLyMCsqEEQd0uKlI9XuOsIrg1TTGQcfG58pPjThU2tMwOkAVJdDr96qGPvgyZjMJ",
    accent: "tertiary",
  },
  {
    name: "Dr. Kommuri Govindu Babu",
    role: "Cardiologist",
    specialty: "MBBS, MD (Cardiology) - Heart Specialist",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS7Synp8GwydMbPCA6ZQyXGwM-rzY4u1A3ONWtl7J2nLLQCFqxSqv8XIZBjf4eyGMOD2Myf3hZQeBQF8iucBX9LuNtKkofg8zj8NJ9RgnunXzpQO8UaeAcCNqoDUINS2E7NSBOigqAebXy1hxTVtxpVnVLgknJgVUF6PFOPI4LXZNtlzEXiNXY0t3sEbJMOt-lFmuMTAS4KHyjnEgv1uUyNCjN6IZxdEm2a8qCLbxkcjedK4bcUtm6xFWEjymLkXk0szBVOg5c1ER8",
    accent: "secondary",
  },
];

export const Doctors = () => {
  return (
    <section className="py-24 bg-surface-container-low px-6 md:px-8" id="doctors">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
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
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group hover:shadow-xl hover:shadow-primary/8 transition-all duration-500 cursor-pointer"
            >
              <div className="h-80 md:h-96 overflow-hidden relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Role badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                  <span className="text-xs font-bold text-primary">{doctor.role}</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-headline font-bold text-primary mb-1">{doctor.name}</h3>
                <p className="text-on-surface-variant text-xs mb-6 font-body">{doctor.specialty}</p>
                <button className="w-full py-3.5 rounded-xl border-2 border-primary/15 text-primary font-bold hover:bg-primary hover:text-white hover:border-primary transition-all active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer text-sm">
                  <Calendar size={16} className="group-hover/btn:rotate-12 transition-transform" />
                  Book Appointment
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
