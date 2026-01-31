"use client";

import { useTranslations, useLocale } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const switchLanguage = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#services", label: t("services") },
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-industrial-black/95 shadow-xl shadow-black/50 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-2 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <Image
              src="/brand/logoe.png"
              alt="Egyptian Co. for Metal Works"
              width={isScrolled ? 50 : 55}
              height={isScrolled ? 20 : 30}
              className="transition-all duration-300"
              priority
            />
          </Link>

          {/* Mobile Controls - Right Side */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Language Switcher */}
            <button
              onClick={switchLanguage}
              className="relative z-10 flex items-center gap-1.5 text-industrial-red"
              aria-label="Switch language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span className="text-xs font-semibold uppercase">
                {locale === "en" ? "ع" : "EN"}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={
                  isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-6 bg-industrial-red transition-all"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 w-6 bg-industrial-red transition-all"
              />
              <motion.span
                animate={
                  isMobileMenuOpen
                    ? { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0 }
                }
                className="h-0.5 w-6 bg-industrial-red transition-all"
              />
            </button>
          </div>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm font-semibold uppercase tracking-wider text-industrial-red transition-colors duration-300 hover:text-industrial-red/80"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-industrial-red transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            {/* Language Switcher */}
            <button
              onClick={switchLanguage}
              className="group relative flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-industrial-red transition-colors duration-300 hover:text-industrial-red/80"
              aria-label="Switch language"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
              <span>{locale === "en" ? "العربية" : "English"}</span>
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-industrial-red transition-all duration-300 group-hover:w-full" />
            </button>
            <a
              href="#contact"
              className="rounded-md border-2 border-industrial-red bg-industrial-red px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-industrial-red"
            >
              {t("getQuote")}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-industrial-red/20 bg-industrial-black/98 backdrop-blur-md lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="border-b border-industrial-gray-800 py-4 text-base font-semibold uppercase tracking-wider text-industrial-red transition-colors duration-300 hover:text-industrial-red/80"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 rounded-md border-2 border-industrial-red bg-industrial-red px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-transparent hover:text-industrial-red"
              >
                {t("getQuote")}
              </motion.a>
              {/* Mobile Language Switcher */}
              <motion.button
                onClick={() => {
                  switchLanguage();
                  setIsMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinks.length + 1) * 0.1 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-md border-2 border-industrial-red px-6 py-3 text-center text-sm font-bold uppercase tracking-wider text-industrial-red transition-all duration-300 hover:bg-industrial-red hover:text-white"
                aria-label="Switch language"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                <span>{locale === "en" ? "العربية" : "English"}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
