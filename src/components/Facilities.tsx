"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facilities = [
  {
    title: "Modular Operating Theatres",
    subtitle: "Sterile, precision-grade surgical environments",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAKrgqNM8umzXvUMIeWyfRgkodSe6z3Wf3efdLc00UskERdzSLzigdzVduVzfoUeMJosSEc8ImKnPbx6f_GiVPVgRRH1h-vJvQ5H9XM9UFufrwvy3GxUhfqdD19xFNj8vGzzuNOvOOvGYTsD6szVycGnlLx8MH8lkwHpB7BkbG08DgJWZd2TfEYro71iNk4qGNS-zAMmw9W67PRNlF-b2f2-zHTtBh8X7gs_PVndi0KMewZTnOrVzysz-FeHXoRvQ1-htTeyr3z078h",
  },
  {
    title: "ICU & Critical Care",
    subtitle: "Round-the-clock intensive monitoring",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAvNiNnpyxAsmjfs87DLWNhxG3em31z8YGSpt0McPqzF5l2KQBHySL9TAYc--Esf6NMcz4micNTQNNGlK54QR3FNuxj_Zrh9p7lo8eanmLg80UesQ55D10r0rbRXkqJ6vxF_pFjJoPNUpNLN17J9u90FYtXSaEUNqsjyfxGtC-s6wRulX_gYn4Ss0r47ybPJeaTdQ0PwyiGj8Ers8rxwfGvRRKmt_PZTSwwY0ktAoDjHBsl0ky2sOIheYLY_miunfMeGVXKT6je2Hrv",
  },
  {
    title: "Digital X-ray",
    subtitle: "High-resolution diagnostic imaging",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDj8VWHDo46TkfBoLlaFTUKan3zJqeY9PjKGyz5P2ti2yjl5XCQ-xLjtQubzjWYFJAErKORkbQK-r-lV6hNtNTz2UoncNzdDiuCIFlY-yNzwlmVxH-dyilMmhFxw2ysuARPXI-ikuyqRrlRc9ChD8i7t_ZUB0Qpa8KfRALhAsUVBQfGuMegpl5-3EJ3Euy5boa_wSWQAyNT1DJ9DqrnR4iuDAA7cHmcYKRf6LBfzHgsaznIjpZ4Ux7GQXTnqEO1UWgkARrxkNw5Wdb4",
  },
  {
    title: "Pathology Lab",
    subtitle: "Comprehensive in-house testing",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ew0rZp-1m0gFtSpoYWcpdZEMwtqF5juvZuFcSmhdq5ruUZm0wI2mo6In76YK2rjhCd92A7UxQtmrfYOOygqQndu_iSFLzLHG-YRXQh4i-2cQEkXO0HMIp_UzJa8YYp9SdZWfAdUo5paIkW3phO6Fi46fP2Cx4cMAMWkxF_AljsE4u7JvL5Bl5gpGMY6rxt9GNWiYZ8g2A7CdGki9FasN1S7oYf-yWsqGsQ-_JT34SVCRYopaa6J3_FwPwtpAuVMFuojcQtS8xCTY",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
