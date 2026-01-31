"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: t("links.home") },
    { href: "#services", label: t("links.services") },
    { href: "#about", label: t("links.about") },
    { href: "#projects", label: t("links.projects") },
    { href: "#contact", label: t("links.contact") },
  ];

  const services = [
    { label: t("services.manufacturing") },
    { label: t("services.maintenance") },
    { label: t("services.spareparts") },
  ];

  return (
    <footer className="relative bg-industrial-black border-t border-industrial-gray-800">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div
          className="absolute -left-48 top-0 h-96 w-96 rounded-full bg-industrial-red/10 blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/brand/logoe.png"
                alt="Egyptian Co. for Metal Works"
                width={70}
                height={50}
                className="h-auto w-auto max-w-[160px]"
              />
            </Link>
            <p
              className={`mb-6 text-sm leading-relaxed text-industrial-gray-400 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("description")}
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-industrial-gray-700 text-industrial-gray-400 transition-all hover:border-industrial-red hover:text-industrial-red"
                aria-label="Facebook"
              >
                <span>f</span>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-industrial-gray-700 text-industrial-gray-400 transition-all hover:border-industrial-red hover:text-industrial-red"
                aria-label="LinkedIn"
              >
                <span>in</span>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-industrial-gray-700 text-industrial-gray-400 transition-all hover:border-industrial-red hover:text-industrial-red"
                aria-label="Twitter"
              >
                <span>𝕏</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className={`mb-6 text-lg font-bold uppercase text-white ${isRTL ? "font-arabic" : "font-display"}`}
            >
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className={`group flex items-center gap-2 text-sm text-industrial-gray-400 transition-colors hover:text-industrial-red ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
                  >
                    <span className="h-px w-0 bg-industrial-red transition-all group-hover:w-4"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className={`mb-6 text-lg font-bold uppercase text-white ${isRTL ? "font-arabic" : "font-display"}`}
            >
              {t("servicesTitle")}
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span
                    className={`flex items-start gap-2 text-sm text-industrial-gray-400 ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-industrial-red"></span>
                    {service.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              className={`mb-6 text-lg font-bold uppercase text-white ${isRTL ? "font-arabic" : "font-display"}`}
            >
              {t("contactTitle")}
            </h3>
            <ul className="space-y-4">
              <li
                className={`flex items-start gap-3 text-sm text-industrial-gray-400 ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
              >
                <span className="text-industrial-red">📍</span>
                <span>{t("address")}</span>
              </li>
              <li
                className={`flex items-start gap-3 text-sm text-industrial-gray-400 ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
              >
                <span className="text-industrial-red">📞</span>
                <a
                  href="tel:+201234567890"
                  className="hover:text-industrial-red transition-colors"
                >
                  {t("phone")}
                </a>
              </li>
              <li
                className={`flex items-start gap-3 text-sm text-industrial-gray-400 ${isRTL ? "flex-row-reverse font-arabic" : ""}`}
              >
                <span className="text-industrial-red">📧</span>
                <a
                  href="mailto:info@egyptianmetalworks.com"
                  className="hover:text-industrial-red transition-colors"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-industrial-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p
              className={`text-sm text-industrial-gray-500 ${isRTL ? "font-arabic" : ""}`}
            >
              © {currentYear} {t("copyright")}
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className={`text-sm text-industrial-gray-500 hover:text-industrial-red transition-colors ${isRTL ? "font-arabic" : ""}`}
              >
                {t("privacy")}
              </a>
              <a
                href="#"
                className={`text-sm text-industrial-gray-500 hover:text-industrial-red transition-colors ${isRTL ? "font-arabic" : ""}`}
              >
                {t("terms")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
