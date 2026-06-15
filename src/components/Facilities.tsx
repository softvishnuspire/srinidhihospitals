"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    title: "Modular Operating Theatres",
    subtitle: "Sterile, precision-grade surgical environments",
    image: "/images/modular-operating-theatres.jpeg",
  },
  {
    title: "ICU & Critical Care",
    subtitle: "Round-the-clock intensive monitoring",
    image: "/images/icu-and-critical-care.jpeg",
  },
  {
    title: "CT Scan",
    subtitle: "High-speed, detailed diagnostic scanning",
    image: "/images/ct-scan.png",
  },
  {
    title: "Digital X-ray",
    subtitle: "High-resolution diagnostic imaging",
    image: "/images/digital-xray.jpeg",
  },
  {
    title: "Mammography",
    subtitle: "Early detection digital breast screening",
    image: "/images/mammography.png",
  },
  {
    title: "Pathology Lab",
    subtitle: "Comprehensive in-house testing",
    image: "/images/pathology-lab.jpeg",
  },
];

export const Facilities = () => {
  return (
    <section className="py-24 px-6 md:px-8 bg-white" id="facilities">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
            Infrastructure
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
            World-Class Facilities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, index) => (
            <motion.div
              key={fac.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:shadow-primary/10 transition-all duration-500 relative border border-gray-100">
                <Image
                  src={fac.image}
                  alt={fac.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Title overlay on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-white text-xs font-medium font-body">{fac.subtitle}</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h4 className="font-bold text-primary text-base group-hover:text-primary-container transition-colors">
                  {fac.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
