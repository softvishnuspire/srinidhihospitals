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
    title: "Outpatient Services (OPD)",
    description:
      "Expert consultation across multiple specialties with minimal waiting time and patient-friendly scheduling.",
    icon: Stethoscope,
    gradient: "from-teal-100 to-cyan-100 dark:from-teal-900/50 dark:to-cyan-800/50",
  },
  {
    number: "002",
    title: "Inpatient Services (IPD)",
    description:
      "Well-equipped rooms and wards with continuous monitoring, ensuring comfort, safety, and personalized care.",
    icon: ShieldPlus,
    gradient: "from-slate-100 to-gray-200 dark:from-slate-900/50 dark:to-gray-800/50",
  },
  {
    number: "003",
    title: "24/7 Emergency & Critical Care",
    description:
      "Round-the-clock emergency services with trained staff and advanced equipment for all critical conditions.",
    icon: Zap,
    gradient: "from-red-100 to-orange-100 dark:from-red-900/50 dark:to-orange-800/50",
  },
  {
    number: "004",
    title: "General Medicine",
    description:
      "Diagnosis and treatment of acute and chronic illnesses with a focus on preventive healthcare.",
    icon: Activity,
    gradient: "from-lime-100 to-green-100 dark:from-lime-900/50 dark:to-green-800/50",
  },
  {
    number: "005",
    title: "General Surgery",
    description:
      "Advanced surgical care with modern techniques ensuring safe procedures and faster recovery.",
    icon: HeartPulse,
    gradient: "from-rose-100 to-pink-100 dark:from-rose-900/50 dark:to-pink-800/50",
  },
  {
    number: "006",
    title: "Orthopedic Care",
    description:
      "Treatment for bone, joint, and musculoskeletal conditions including fractures and injuries.",
    icon: Bone,
    gradient: "from-emerald-100 to-green-100 dark:from-emerald-900/50 dark:to-green-800/50",
  },
  {
    number: "007",
    title: "Neurosurgery",
    description:
      "Specialized surgical treatment for disorders of the nervous system, brain, and spine.",
    icon: Brain,
    gradient: "from-violet-100 to-purple-100 dark:from-violet-900/50 dark:to-purple-800/50",
  },
  {
    number: "008",
    title: "Gastroenterology",
    description:
      "Advanced care for digestive system disorders with modern diagnostic and treatment methods.",
    icon: Sparkles,
    gradient: "from-fuchsia-100 to-pink-100 dark:from-fuchsia-900/50 dark:to-pink-800/50",
  },
  {
    number: "009",
    title: "Pulmonology",
    description:
      "Expert diagnosis and treatment for lung-related conditions and respiratory disorders.",
    icon: Activity,
    gradient: "from-orange-100 to-amber-100 dark:from-orange-900/50 dark:to-amber-800/50",
  },
  {
    number: "010",
    title: "Obstetrics & Gynaecology",
    description:
      "Comprehensive care for women’s health, from maternity services to infertility treatments.",
    icon: Baby,
    gradient: "from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-800/50",
  },
  {
    number: "011",
    title: "Paediatrics & Neonatology",
    description:
      "Specialized healthcare for infants, children, and adolescents with dedicated neonatal care.",
    icon: Syringe,
    gradient: "from-cyan-100 to-teal-100 dark:from-cyan-900/50 dark:to-teal-800/50",
  },
  {
    number: "012",
    title: "Dialysis Unit",
    description:
      "State-of-the-art dialysis services for patients with chronic kidney diseases.",
    icon: Droplets,
    gradient: "from-sky-100 to-blue-100 dark:from-sky-900/50 dark:to-blue-800/50",
  },
  {
    number: "013",
    title: "Diagnostic Services",
    description:
      "Advanced Lab, Digital X-Ray, Ultrasound, and CT Scan for accurate and timely diagnosis.",
    icon: ScanLine,
    gradient: "from-indigo-100 to-blue-100 dark:from-indigo-900/50 dark:to-blue-800/50",
  },
  {
    number: "014",
    title: "ENT",
    description:
      "Specialized treatment for ear, nose, and throat conditions with modern equipment.",
    icon: Ear,
    gradient: "from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-800/50",
  },
  {
    number: "015",
    title: "Pharmacy & Ambulance",
    description:
      "24/7 in-house pharmacy and reliable ambulance support for emergency transport.",
    icon: Pill,
    gradient: "from-green-100 to-lime-100 dark:from-green-900/50 dark:to-lime-800/50",
  },
  {
    number: "016",
    title: "Health Check-ups",
    description:
      "Preventive health packages designed for early detection and overall wellness.",
    icon: FlaskConical,
    gradient: "from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-800/50",
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
