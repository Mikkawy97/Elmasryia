"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

const ProjectCard = ({
  image,
  title,
  category,
  description,
  index,
  isRTL,
}: {
  image: string;
  title: string;
  category: string;
  description: string;
  index: number;
  isRTL: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative aspect-[4/3] overflow-hidden border border-industrial-gray-800 bg-industrial-black"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-industrial-black via-industrial-black/50 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <motion.div
          initial={false}
          animate={{ y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <span
            className={`mb-2 inline-block text-xs uppercase tracking-widest text-industrial-red ${isRTL ? "font-arabic" : ""}`}
          >
            {category}
          </span>

          <h3
            className={`mb-2 text-2xl font-bold text-white ${isRTL ? "font-arabic" : "font-display"}`}
          >
            {title}
          </h3>

          <motion.p
            initial={false}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`overflow-hidden text-sm text-industrial-gray-300 ${isRTL ? "font-arabic" : ""}`}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Red accent line */}
        <motion.div
          initial={false}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 h-1 bg-industrial-red"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = t.raw("items") as Array<{
    image: string;
    title: string;
    category: string;
    description: string;
  }>;

  return (
    <section
      id="projects"
      className="relative bg-industrial-black py-24 lg:py-32"
    >
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/4 h-96 w-96 bg-industrial-red/5 blur-[120px]"
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-industrial-red"></div>
            <span
              className={`text-sm uppercase tracking-widest text-industrial-red ${isRTL ? "font-arabic" : ""}`}
            >
              {t("subtitle")}
            </span>
            <div className="h-px w-16 bg-industrial-red"></div>
          </div>

          <h2
            className={`mb-6 text-4xl font-black uppercase text-white lg:text-6xl ${isRTL ? "font-arabic" : "font-display"}`}
          >
            {t("title")}
          </h2>

          <p
            className={`mx-auto max-w-3xl text-lg text-industrial-gray-400 ${isRTL ? "font-arabic" : ""}`}
          >
            {t("description")}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} isRTL={isRTL} />
          ))}
        </div>
      </div>
    </section>
  );
}
