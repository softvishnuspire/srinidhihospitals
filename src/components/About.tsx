"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import Image from "next/image";

export const About = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-white" id="about">
      <div className="container mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
            About Srinidhi Hospitals
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/8 h-[480px] group"
          >
            <Image
              alt="Srinidhi Hospital Facade"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeqreSlJEJ4Dj3cSHkacLY9n8b3GYrJ9q1mjdrKIQkRh0TnQNGYQgA90s8HAtrYzuM_Q1fsQwE1f_KF2htiOqvp6q6ey1fWQ12MUbZr1HjjP0PTxC4Syhs9vp9JrLE097fp9kKLtu4F74TRMPSEe_bze4h3b-hTG8KzvJk8PGk8AS3RbuNk9SomaL95YLcRnkUjUI-Ptmo_a9zspZUcWVmtcYMh9fbf3BBC_GY-IPtK7Wye6s-DiivonG0dY3-MEfMbFcreIjmpxf0"
              fill
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent pointer-events-none" />
            {/* Year badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg">
              <span className="text-primary font-headline font-black text-lg">Since 2010</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-on-surface-variant leading-relaxed font-body mb-8">
              Srinidhi Hospitals, Amalapuram is a trusted name in healthcare, committed to delivering high-quality, compassionate, and patient-centered medical services. Established with a vision to provide advanced healthcare facilities, we combine modern medical technology with experienced clinical expertise. At Srinidhi Hospitals, we believe that healthcare is not just about treatment—it is about care, comfort, and trust. Our team works round the clock to ensure the best possible outcomes for every patient.
            </p>

            <div className="space-y-6">
              <div className="bg-primary/[0.04] p-6 md:p-8 rounded-2xl border-l-4 border-accent hover:shadow-md transition-shadow cursor-pointer group">
                <h4 className="font-headline font-bold text-primary mb-2 flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 transition-colors">
                    <Target className="text-accent" size={20} />
                  </div>
                  Our Mission
                </h4>
                <p className="text-on-surface-variant leading-relaxed font-body text-sm pl-[52px]">
                  To provide accessible, affordable, and quality healthcare services with compassion and integrity, ensuring the well-being of every patient we serve.
                </p>
              </div>

              <div className="bg-secondary/[0.04] p-6 md:p-8 rounded-2xl border-l-4 border-secondary hover:shadow-md transition-shadow cursor-pointer group">
                <h4 className="font-headline font-bold text-primary mb-2 flex items-center gap-3 text-lg">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center group-hover:bg-secondary/25 transition-colors">
                    <Eye className="text-secondary" size={20} />
                  </div>
                  Our Vision
                </h4>
                <p className="text-on-surface-variant leading-relaxed font-body text-sm pl-[52px]">
                  To be a leading healthcare institution in the region, recognized for excellence in medical care, patient satisfaction, and continuous innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
