"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Address",
    lines: ["College Road, Opp: More Market,", "Amalapuram, East Godavari, AP - 533201"],
    color: "accent",
    bg: "bg-accent/10",
    hoverBg: "group-hover:bg-accent",
    iconColor: "text-accent",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+91 83414-38887", "Emergency: 08869-251678"],
    color: "primary-container",
    bg: "bg-primary-container/10",
    hoverBg: "group-hover:bg-primary-container",
    iconColor: "text-primary-container",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["info@srinidhihospitals.com", "emergency@srinidhihospitals.com"],
    color: "tertiary",
    bg: "bg-tertiary/10",
    hoverBg: "group-hover:bg-tertiary",
    iconColor: "text-tertiary",
  },
  {
    icon: Clock,
    title: "OPD Hours",
    lines: ["Mon-Sat: 9 AM - 8 PM", "Sunday: 9 AM - 2 PM", "ER: 24/7 Available"],
    color: "secondary",
    bg: "bg-secondary/10",
    hoverBg: "group-hover:bg-secondary",
    iconColor: "text-secondary",
  },
];

export const Contact = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-8" id="contact">
      <div className="container mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold text-accent tracking-[0.2em] uppercase mb-3">
            Reach Out
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-primary tracking-tight">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent to-tertiary rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Contact info + Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-8">
              {contactInfo.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-low hover:bg-white hover:shadow-md transition-all group cursor-pointer border border-transparent hover:border-gray-100"
                >
                  <div
                    className={`w-11 h-11 ${item.bg} rounded-xl flex items-center justify-center shrink-0 ${item.hoverBg} transition-all`}
                  >
                    <item.icon className={`${item.iconColor} group-hover:text-white transition-colors`} size={18} />
                  </div>
                  <div>
                    <h5 className="font-bold text-on-surface text-sm mb-1">{item.title}</h5>
                    {item.lines.map((line) => (
                      <p key={line} className="text-on-surface-variant font-body text-xs leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-64 shadow-lg border border-gray-100 relative group">
              <iframe
                title="Srinidhi Hospitals Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3824.238128456108!2d82.00051101435422!3d16.573863279879127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDM0JzI1LjkiTiA4MsKwMDAnMTEuMSJF!5e0!3m2!1sen!2sin!4v1713690000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-low p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
          >
            <h3 className="text-2xl font-headline font-bold text-primary mb-2">Send us a Message</h3>
            <p className="text-on-surface-variant text-sm font-body mb-8">
              We&apos;ll get back to you within 24 hours.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-bold text-on-surface-variant ml-1">
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    className="w-full border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary p-3.5 transition-all outline-none text-sm"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-phone" className="block text-xs font-bold text-on-surface-variant ml-1">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    className="w-full border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary p-3.5 transition-all outline-none text-sm"
                    placeholder="+91 00000 00000"
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-subject" className="block text-xs font-bold text-on-surface-variant ml-1">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  className="w-full border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary p-3.5 transition-all outline-none appearance-none text-sm"
                >
                  <option>Appointment Inquiry</option>
                  <option>Feedback</option>
                  <option>General Information</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-bold text-on-surface-variant ml-1">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  className="w-full border border-gray-200 rounded-xl bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary p-3.5 transition-all outline-none resize-none text-sm"
                  placeholder="How can we help you?"
                  rows={4}
                />
              </div>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-xl font-bold shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group cursor-pointer">
                Submit Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
