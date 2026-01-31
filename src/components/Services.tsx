"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useMemo, useState, useEffect } from "react";

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  index,
  isRTL,
}: {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
  isRTL: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-industrial-gray-800/50 bg-gradient-to-br from-industrial-steel-900/30 to-industrial-black/50 p-8 backdrop-blur-sm transition-all duration-500 hover:border-industrial-red/50 hover:shadow-2xl hover:shadow-industrial-red/10"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-industrial-red/0 via-industrial-red/0 to-industrial-red/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

      {/* Top accent line */}
      <motion.div
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-industrial-red via-industrial-red to-transparent"
      ></motion.div>

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl border-2 border-industrial-red/30 bg-industrial-black/80 text-4xl shadow-lg shadow-industrial-red/20 transition-all duration-500 group-hover:border-industrial-red group-hover:shadow-2xl group-hover:shadow-industrial-red/40 group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h3
          className={`mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-industrial-red ${isRTL ? "font-arabic" : "font-display"}`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`mb-6 leading-relaxed text-industrial-gray-400 ${isRTL ? "font-arabic" : ""}`}
        >
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15 + 0.5 + i * 0.1,
              }}
              className={`flex items-start gap-3 text-sm text-industrial-gray-300 ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-industrial-red shadow-sm shadow-industrial-red"></span>
              <span>{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Hover glow effect */}
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-industrial-red/10 blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
    </motion.div>
  );
};

export default function Services() {
  const t = useTranslations("services");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Generate particle positions on client side only to avoid hydration mismatch
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 15,
      })),
    );
  }, []);

  const services = [
    {
      icon: "⚙️",
      title: t("manufacturing.title"),
      description: t("manufacturing.description"),
      features: t.raw("manufacturing.features") as string[],
    },
    {
      icon: "🔧",
      title: t("maintenance.title"),
      description: t("maintenance.description"),
      features: t.raw("maintenance.features") as string[],
    },
    {
      icon: "📦",
      title: t("spareparts.title"),
      description: t("spareparts.description"),
      features: t.raw("spareparts.features") as string[],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden bg-industrial-black py-24 lg:py-32"
    >
      {/* Animated diagonal lines background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(185, 28, 28, 0.03) 60px,
                rgba(185, 28, 28, 0.03) 120px
              )
            `,
          }}
          animate={{
            backgroundPosition: ["0px 0px", "170px 170px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large moving red orb */}
        <motion.div
          className="absolute -left-48 top-0 h-[600px] w-[600px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(185,28,28,0.4) 0%, rgba(185,28,28,0.2) 40%, transparent 70%)",
          }}
          animate={{
            x: [0, 400, 0],
            y: [0, 200, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Medium moving orb */}
        <motion.div
          className="absolute -right-48 top-1/3 h-[500px] w-[500px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(26,26,26,0.8) 0%, rgba(15,15,15,0.4) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, -300, 0],
            y: [0, -150, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small red accent orb */}
        <motion.div
          className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(185,28,28,0.3) 0%, rgba(185,28,28,0.1) 50%, transparent 70%)",
          }}
          animate={{
            x: [0, 200, -100, 0],
            y: [0, -200, -100, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating dots/particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.slice(0, 20).map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-1 w-1 rounded-full bg-industrial-red"
            style={{
              left: `${particle.left}%`,
            }}
            animate={{
              y: ["110vh", "-10vh"],
              opacity: [0, 0.8, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated grid overlay */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(185, 28, 28, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(185, 28, 28, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "80px 80px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-industrial-red to-industrial-red lg:w-20"></div>
            <span
              className={`text-xs font-semibold uppercase tracking-[0.3em] text-industrial-red lg:text-sm ${isRTL ? "font-arabic" : ""}`}
            >
              {t("subtitle")}
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-industrial-red to-industrial-red lg:w-20"></div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mb-6 text-4xl font-black uppercase leading-tight text-white lg:text-6xl ${isRTL ? "font-arabic" : "font-display"}`}
          >
            {t("title")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`mx-auto max-w-3xl text-base leading-relaxed text-industrial-gray-400 lg:text-lg ${isRTL ? "font-arabic" : ""}`}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}
