"use client";

import { motion } from "framer-motion";
import { Award, Microscope, ShieldCheck, Heart, Globe } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Experienced Specialists",
    description: "Board-certified specialists with decades of collective experience in complex medical scenarios.",
    accent: "accent",
    span: 2,
  },
  {
    icon: Microscope,
    title: "Advanced Facilities",
    description: "State-of-the-art diagnostic equipment including Digital X-ray and full-scale pathology lab.",
    accent: "secondary",
    highlighted: true,
  },
  {
    icon: ShieldCheck,
    title: "Transparent Processes",
    description: "Clear communication regarding treatment plans and billing with no hidden costs.",
    accent: "secondary",
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    description: "Healing-focused environment designed to minimize stress and maximize recovery speed.",
    accent: "tertiary",
  },
  {
    icon: Globe,
    title: "Community Focus",
    description: "Deeply rooted in Pithapuram, serving our local neighbors with global standards of care.",
    accent: "primary-container",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-surface-container-low" id="why-choose-us">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
            Our Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
            Why Choose Karthikeya
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white p-10 md:p-12 rounded-2xl flex flex-col justify-between group overflow-hidden relative border border-gray-100 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 cursor-pointer"
          >
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent/12 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Award className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-primary mb-3">
                Experienced Specialists
              </h3>
              <p className="text-on-surface-variant max-w-md font-body leading-relaxed text-sm">
                Our team consists of board-certified specialists with decades of collective experience in complex
                medical scenarios, ensuring you&apos;re in the safest hands.
              </p>
            </div>
            <Award className="absolute bottom-[-30px] right-[-15px] text-[180px] text-primary/[0.03] group-hover:text-primary/[0.06] transition-colors" />
          </motion.div>

          {/* Highlighted gradient card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-primary to-primary-container p-8 md:p-10 rounded-2xl text-white flex flex-col justify-between group hover:shadow-xl hover:shadow-primary/20 transition-all cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-white/12 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
              <Microscope className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-headline font-bold mb-3">Advanced Facilities</h3>
              <p className="text-sm text-white/75 leading-relaxed font-body">
                State-of-the-art diagnostic equipment including Digital X-ray and full-scale pathology lab.
              </p>
            </div>
          </motion.div>

          {/* Regular cards */}
          {[
            {
              icon: ShieldCheck,
              title: "Transparent Processes",
              desc: "Clear communication regarding treatment plans and billing with no hidden costs.",
              borderHover: "hover:border-secondary/40",
              iconBg: "bg-secondary/12",
              iconHoverBg: "group-hover:bg-secondary/20",
              iconColor: "text-secondary",
            },
            {
              icon: Heart,
              title: "Patient Comfort",
              desc: "Healing-focused environment designed to minimize stress and maximize recovery speed.",
              borderHover: "hover:border-tertiary/40",
              iconBg: "bg-tertiary/12",
              iconHoverBg: "group-hover:bg-tertiary/20",
              iconColor: "text-tertiary",
            },
            {
              icon: Globe,
              title: "Community Focus",
              desc: "Deeply rooted in Pithapuram, serving our local neighbors with global standards.",
              borderHover: "hover:border-primary-container/40",
              iconBg: "bg-primary-container/12",
              iconHoverBg: "group-hover:bg-primary-container/20",
              iconColor: "text-primary-container",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className={`bg-white p-8 rounded-2xl border border-gray-100 ${card.borderHover} group hover:shadow-lg transition-all cursor-pointer`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-5 ${card.iconHoverBg} transition-colors`}
              >
                <card.icon className={card.iconColor} size={24} />
              </div>
              <h3 className="text-lg font-headline font-bold text-primary mb-2">{card.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed font-body">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
