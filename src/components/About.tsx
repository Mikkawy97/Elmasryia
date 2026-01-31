"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t("stats.years.value"), label: t("stats.years.label") },
    { value: t("stats.projects.value"), label: t("stats.projects.label") },
    { value: t("stats.clients.value"), label: t("stats.clients.label") },
    { value: t("stats.team.value"), label: t("stats.team.label") },
  ];

  return (
    <section
      id="about"
      className="relative bg-industrial-steel-900 py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isRTL ? 50 : -50 }
            }
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-industrial-gray-800 shadow-industrial-lg">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1.1 } : { scale: 0.8 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="relative h-full w-full"
              >
                <Image
                  src="/images/c2.png"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </motion.div>
              {/* Red accent corner */}
              <div className="absolute right-0 top-0 h-24 w-24 border-r-4 border-t-4 border-industrial-red"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isRTL ? -50 : 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-industrial-red"></div>
              <span
                className={`text-sm uppercase tracking-widest text-industrial-red ${isRTL ? "font-arabic" : ""}`}
              >
                {t("subtitle")}
              </span>
            </div>

            <h2
              className={`mb-6 text-4xl font-black uppercase text-white lg:text-5xl ${isRTL ? "font-arabic" : "font-display"}`}
            >
              {t("title")}
            </h2>

            <div className="space-y-4">
              <p
                className={`text-lg leading-relaxed text-industrial-gray-300 ${isRTL ? "font-arabic" : ""}`}
              >
                {t("paragraph1")}
              </p>

              <p
                className={`leading-relaxed text-industrial-gray-400 ${isRTL ? "font-arabic" : ""}`}
              >
                {t("paragraph2")}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="border-l-4 border-industrial-red bg-industrial-black/30 p-4"
                >
                  <div
                    className={`text-3xl font-black text-industrial-red lg:text-4xl ${isRTL ? "font-arabic" : "font-display"}`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`mt-1 text-sm uppercase tracking-wide text-industrial-gray-400 ${isRTL ? "font-arabic" : ""}`}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
