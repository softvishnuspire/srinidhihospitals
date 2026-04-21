"use client";

import { motion } from "framer-motion";
import {
  ServiceCarousel,
  type Service,
} from "@/components/ui/services-card";
import {
  Zap,
  Stethoscope,
  Bone,
  HeartPulse,
  Ear,
  Activity,
  Sparkles,
  Brain,
  Droplets,
  Baby,
  Syringe,
  Dumbbell,
  ShieldPlus,
  ScanLine,
  FlaskConical,
  Pill,
} from "lucide-react";

// All 16 services from the hospital - matching the image exactly
const services: Service[] = [
  {
    number: "001",
    title: "Emergency & Trauma (24×7)",
    description:
      "Round-the-clock emergency care with rapid response teams, advanced life support, and trauma stabilization facilities.",
    icon: Zap,
    gradient: "from-red-100 to-orange-100 dark:from-red-900/50 dark:to-orange-800/50",
  },
  {
    number: "002",
    title: "General Medicine",
    description:
      "Comprehensive diagnostic and treatment services for a wide range of acute and chronic medical conditions.",
    icon: Stethoscope,
    gradient: "from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-800/50",
  },
  {
    number: "003",
    title: "Orthopedics",
    description:
      "Expert care for bone, joint, and musculoskeletal conditions including fractures, sports injuries, and joint replacements.",
    icon: Bone,
    gradient: "from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-800/50",
  },
  {
    number: "004",
    title: "Cardiology",
    description:
      "Advanced cardiac diagnostics, treatment, and rehabilitation for all heart-related conditions.",
    icon: HeartPulse,
    gradient: "from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-800/50",
  },
  {
    number: "005",
    title: "ENT (Ear, Nose & Throat)",
    description:
      "Specialized treatment for ear, nose, throat, and related head & neck disorders with modern endoscopic techniques.",
    icon: Ear,
    gradient: "from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-800/50",
  },
  {
    number: "006",
    title: "Gastroenterology",
    description:
      "Diagnosis and treatment of digestive system disorders including endoscopy, colonoscopy, and liver disease management.",
    icon: Activity,
    gradient: "from-lime-100 to-green-100 dark:from-lime-900/50 dark:to-green-800/50",
  },
  {
    number: "007",
    title: "Dermatology",
    description:
      "Complete skin care solutions from medical dermatology to cosmetic treatments for all skin types and conditions.",
    icon: Sparkles,
    gradient: "from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/50 dark:to-pink-800/50",
  },
  {
    number: "008",
    title: "Neurology",
    description:
      "Expert care for brain and nervous system disorders including stroke, epilepsy, and neurodegenerative diseases.",
    icon: Brain,
    gradient: "from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-800/50",
  },
  {
    number: "009",
    title: "Nephrology",
    description:
      "Specialized kidney care including dialysis services, kidney disease management, and transplant support.",
    icon: Droplets,
    gradient: "from-sky-100 to-blue-100 dark:from-sky-900/50 dark:to-blue-800/50",
  },
  {
    number: "010",
    title: "Obstetrics & Gynecology",
    description:
      "Complete women's health services from prenatal care and delivery to gynecological surgeries and fertility support.",
    icon: Baby,
    gradient: "from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-800/50",
  },
  {
    number: "011",
    title: "Pediatrics",
    description:
      "Dedicated child healthcare with neonatal care, vaccinations, growth monitoring, and pediatric emergency services.",
    icon: Syringe,
    gradient: "from-cyan-100 to-teal-100 dark:from-cyan-900/50 dark:to-teal-800/50",
  },
  {
    number: "012",
    title: "Physiotherapy & Rehabilitation",
    description:
      "Comprehensive rehabilitation programs for post-surgery recovery, sports injuries, and chronic pain management.",
    icon: Dumbbell,
    gradient: "from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-800/50",
  },
  {
    number: "013",
    title: "Anesthesiology & Critical Care",
    description:
      "Expert anesthesia services and intensive care unit management for critically ill patients with 24/7 monitoring.",
    icon: ShieldPlus,
    gradient: "from-slate-100 to-gray-200 dark:from-slate-900/50 dark:to-gray-800/50",
  },
  {
    number: "014",
    title: "Radiology & Imaging",
    description:
      "State-of-the-art diagnostic imaging including X-ray, ultrasound, CT scan, MRI, and interventional radiology.",
    icon: ScanLine,
    gradient: "from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-800/50",
  },
  {
    number: "015",
    title: "Lab / Diagnostics",
    description:
      "NABL-grade pathology and diagnostic laboratory with rapid turnaround for accurate blood work and testing.",
    icon: FlaskConical,
    gradient: "from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-800/50",
  },
  {
    number: "016",
    title: "Pharmacy (In-house)",
    description:
      "24/7 in-house pharmacy stocked with genuine medicines, surgical supplies, and patient-friendly billing.",
    icon: Pill,
    gradient: "from-green-100 to-lime-100 dark:from-green-900/50 dark:to-lime-800/50",
  },
];

export const Specialties = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-8" id="services">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight mb-3">
            Our Services & Specialties
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mx-auto mt-4 mb-4" />
          <p className="text-on-surface-variant max-w-2xl mx-auto font-body text-sm leading-relaxed">
            Comprehensive clinical services delivered by specialized medical
            experts with state-of-the-art diagnostic and treatment capabilities
            across 16 departments.
          </p>
        </motion.div>

        {/* Service Carousel */}
        <ServiceCarousel services={services} />
      </div>
    </section>
  );
};
