"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const sectionRef = useRef<HTMLElement | null>(null);

  // Parallax: track scroll progress of this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background moves slower than content + subtle zoom
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  // Content fades and moves up on scroll
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-industrial-black"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute h-full w-full object-cover blur-sm"
        >
          <source src="/videos/Homevideo.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-industrial-black/75" />

        {/* Industrial grid overlay */}
        <div className="absolute inset-0 grid-background opacity-40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex min-h-screen items-center justify-center pt-20 lg:pt-0"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:gap-36">
            {/* Left: Main Content */}
            <div className="w-full max-w-3xl rounded-2xl bg-industrial-black/20 p-6 lg:p-0 lg:bg-transparent">
              {/* Logo */}
              {/* <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 w-fit"
              >
                <Image
                  src="/brand/logoe.png"
                  alt="Egyptian Co. for Metal Works"
                  width={250}
                  height={160}
                  className="h-auto w-auto max-w-[110px] lg:max-w-[110px]"
                  priority
                />
              </motion.div> */}

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-6"
              >
                <h1
                  className={`text-4xl font-black uppercase pt-10 leading-tight tracking-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)] lg:text-7xl xl:text-7xl ${isRTL ? "font-arabic" : "font-display"}`}
                >
                  {t("titleLine1")}
                  <br />
                  <span className="text-industrial-gray-400">
                    {t("titleLine2")}
                  </span>{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-industrial-red">
                      {t("accentWord")}
                    </span>
                    {/* Red glow effect */}
                    <span
                      className="absolute inset-0 blur-xl bg-industrial-red/30"
                      aria-hidden="true"
                    ></span>
                  </span>
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className={`mb-6 max-w-2xl text-lg font-medium text-industrial-gray-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] lg:text-xl ${isRTL ? "font-arabic" : ""}`}
              >
                {t("subtitle")}
              </motion.p>

              {/* Additional Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className={`mb-8 max-w-3xl text-base leading-relaxed text-industrial-gray-400 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] lg:text-lg ${isRTL ? "font-arabic" : ""}`}
              >
                {t("description")}
              </motion.p>

              {/* Trust Line */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-12 flex items-center gap-3 text-sm text-industrial-gray-400"
              >
                <div className="h-px w-12 bg-industrial-red"></div>
                <span className={isRTL ? "font-arabic" : ""}>
                  {t("trustLine")}
                </span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href={`/${locale}#services`}
                  className={`group relative overflow-hidden bg-industrial-red px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all hover:shadow-red-glow ${isRTL ? "font-arabic" : ""}`}
                >
                  <span className="relative z-10">{t("ctaPrimary")}</span>
                  <div className="absolute inset-0 bg-industrial-red-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Link>

                <Link
                  href={`/${locale}#contact`}
                  className={`group border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:border-industrial-red hover:bg-industrial-red/10 ${isRTL ? "font-arabic" : ""}`}
                >
                  {t("ctaSecondary")}
                </Link>
              </motion.div>
            </div>

            {/* Right: Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid w-full grid-cols-3 gap-3 lg:flex lg:w-auto lg:flex-col lg:justify-center lg:gap-6"
            >
              {/* Stat 1 */}
              <div className="rounded-xl border-2 border-industrial-red/30 bg-industrial-black/40 p-3 backdrop-blur-md lg:p-4">
                <div className="text-3xl font-black text-industrial-red drop-shadow-[0_2px_8px_rgba(185,28,28,0.5)] lg:text-5xl">
                  25+
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-industrial-gray-300 lg:text-sm">
                  {t("stats.years")}
                </div>
              </div>

              {/* Stat 2 */}
              <div className="rounded-xl border-2 border-industrial-red/30 bg-industrial-black/40 p-3 backdrop-blur-md lg:p-4">
                <div className="text-3xl font-black text-industrial-red drop-shadow-[0_2px_8px_rgba(185,28,28,0.5)] lg:text-5xl">
                  500+
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-industrial-gray-300 lg:text-sm">
                  {t("stats.projects")}
                </div>
              </div>

              {/* Stat 3 */}
              <div className="rounded-xl border-2 border-industrial-red/30 bg-industrial-black/40 p-3 backdrop-blur-md lg:p-4">
                <div className="text-3xl font-black text-industrial-red drop-shadow-[0_2px_8px_rgba(185,28,28,0.5)] lg:text-5xl">
                  200+
                </div>
                <div className="mt-2 text-xs uppercase tracking-widest text-industrial-gray-300 lg:text-sm">
                  {t("stats.clients")}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-industrial-gray-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-industrial-red to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
