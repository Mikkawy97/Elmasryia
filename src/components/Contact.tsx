"use client";

import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: "📍",
      label: t("info.address.label"),
      value: t("info.address.value"),
    },
    {
      icon: "📞",
      label: t("info.phone.label"),
      value: t("info.phone.value"),
    },
    {
      icon: "📧",
      label: t("info.email.label"),
      value: t("info.email.value"),
    },
    {
      icon: "⏰",
      label: t("info.hours.label"),
      value: t("info.hours.value"),
    },
  ];

  return (
    <section
      id="contact"
      className="relative bg-industrial-steel-900 py-12 md:py-20 lg:py-32"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 grid-background opacity-20"
        aria-hidden="true"
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isRTL ? 50 : -50 }
            }
            transition={{ duration: 0.8 }}
          >
            <div className="mb-3 flex items-center gap-2 md:mb-4 md:gap-3">
              <div className="h-px w-8 bg-industrial-red md:w-12"></div>
              <span
                className={`text-xs uppercase tracking-widest text-industrial-red md:text-sm ${isRTL ? "font-arabic" : ""}`}
              >
                {t("subtitle")}
              </span>
            </div>

            <h2
              className={`mb-4 text-2xl font-black uppercase text-white sm:text-3xl md:text-4xl lg:text-5xl ${isRTL ? "font-arabic" : "font-display"}`}
            >
              {t("title")}
            </h2>

            <p
              className={`mb-6 text-base leading-relaxed text-industrial-gray-300 md:mb-8 md:text-lg lg:mb-12 ${isRTL ? "font-arabic" : ""}`}
            >
              {t("description")}
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 md:space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: isRTL ? 30 : -30 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="group flex items-start gap-3 border-l-2 border-industrial-gray-700 bg-industrial-black/30 p-3 transition-all hover:border-industrial-red md:gap-4 md:p-4"
                >
                  <div className="text-xl md:text-2xl">{item.icon}</div>
                  <div className={isRTL ? "text-right" : ""}>
                    <div
                      className={`mb-1 text-xs uppercase tracking-wide text-industrial-gray-500 md:text-sm ${isRTL ? "font-arabic" : ""}`}
                    >
                      {item.label}
                    </div>
                    <div
                      className={`text-sm font-semibold text-white md:text-base ${isRTL ? "font-arabic" : ""}`}
                    >
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: isRTL ? -50 : 50 }
            }
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-4 md:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wide text-industrial-gray-300 md:text-sm ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("form.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={`w-full border-2 border-industrial-gray-700 bg-industrial-black px-3 py-2 text-sm text-white placeholder-industrial-gray-600 transition-all focus:border-industrial-red focus:outline-none md:px-4 md:py-3 md:text-base ${isRTL ? "font-arabic text-right" : ""}`}
                  placeholder={t("form.namePlaceholder")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wide text-industrial-gray-300 md:text-sm ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("form.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={`w-full border-2 border-industrial-gray-700 bg-industrial-black px-3 py-2 text-sm text-white placeholder-industrial-gray-600 transition-all focus:border-industrial-red focus:outline-none md:px-4 md:py-3 md:text-base ${isRTL ? "font-arabic text-right" : ""}`}
                  placeholder={t("form.emailPlaceholder")}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wide text-industrial-gray-300 md:text-sm ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full border-2 border-industrial-gray-700 bg-industrial-black px-3 py-2 text-sm text-white placeholder-industrial-gray-600 transition-all focus:border-industrial-red focus:outline-none md:px-4 md:py-3 md:text-base ${isRTL ? "font-arabic text-right" : ""}`}
                  placeholder={t("form.phonePlaceholder")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`mb-2 block text-xs font-semibold uppercase tracking-wide text-industrial-gray-300 md:text-sm ${isRTL ? "font-arabic text-right" : ""}`}
                >
                  {t("form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className={`w-full resize-none border-2 border-industrial-gray-700 bg-industrial-black px-3 py-2 text-sm text-white placeholder-industrial-gray-600 transition-all focus:border-industrial-red focus:outline-none md:px-4 md:py-3 md:text-base ${isRTL ? "font-arabic text-right" : ""}`}
                  placeholder={t("form.messagePlaceholder")}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={`group relative w-full overflow-hidden bg-industrial-red px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition-all hover:shadow-red-glow md:px-8 md:py-4 md:text-sm ${isRTL ? "font-arabic" : ""}`}
              >
                <span className="relative z-10">{t("form.submit")}</span>
                <div className="absolute inset-0 bg-industrial-red-dark -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
