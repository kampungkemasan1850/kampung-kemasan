"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "../../i18n";
import { useTranslation } from "react-i18next";
import Logo from "../../../public/assets/images/logo-text.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentLanguage = i18n.language || "en";

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const sidebarVariants = {
    closed: {
      x: "100%" as const,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    open: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const navLinks = [
    { key: "home", path: "/" },
    { key: "gallery", path: "/gallery" },
    { key: "event", path: "/event" },
  ];

  const secondaryLinks = [
    { key: "about", path: "/about" },
    { key: "contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-4 sm:px-8 py-1 md:py-5 sticky top-0 z-9999 bg-[#8B2615] border-b border-white/10">
      {/* Left Navigation - Desktop */}
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        className="hidden lg:flex gap-8"
      >
        {navLinks.map((item) => (
          <motion.div key={item.key} variants={navItemVariants}>
            <Link
              href={item.path}
              className="font-medium text-sm uppercase tracking-widest text-white hover:text-[#C9A051] focus:bg-[#C9A051] transition-colors duration-300 relative group"
            >
              {t(`navbar.${item.key}`)}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A051] focus:bg-[#C9A051] transition-all duration-300 group-hover:w-full" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Center Logo - full text on desktop, compact logo on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="hidden md:flex shrink-0"
      >
        <Link
          href="/"
          className="font-bold font-bebas-neue text-2xl hover:text-[#C9A051] focus:bg-[#C9A051] transition-colors text-white"
        >
          Jelajahi Warisan{" "}
          <span className="font-sloop text-3xl">Kampung Kemasan</span>
        </Link>
      </motion.div>

      {/* Mobile compact logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="md:hidden shrink-0"
      >
        <Link
          href="/"
          className="flex items-center gap-2 hover:text-[#C9A051] transition-colors text-white"
        >
          <Image
            src={Logo}
            alt="Kampung Kemasan"
            width={40}
            height={24}
            className="object-contain"
          />
          <span className="font-sloop text-xl">Kampung Kemasan</span>
        </Link>
      </motion.div>

      {/* Right Navigation - Desktop */}
      <div className="hidden lg:flex gap-8 items-center">
        {secondaryLinks.map((item) => (
          <Link
            key={item.key}
            href={item.path}
            className="font-medium text-sm uppercase tracking-widest text-white hover:text-[#C9A051] focus:bg-[#C9A051] transition-colors relative group"
          >
            {t(`navbar.${item.key}`)}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A051] focus:bg-[#C9A051] transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}

        <select
          value={currentLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border hover:border-[#C9A051] rounded-none px-3 py-1 text-[10px] uppercase tracking-wider bg-[#8B2615] text-white focus:border-[#C9A051] focus:bg-[#C9A051] outline-none transition-colors cursor-pointer"
        >
          <option value="en">EN</option>
          <option value="id">ID</option>
        </select>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white z-10000 p-2"
      >
        <div className="space-y-1.5">
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </div>
      </button>

      {/* Sidebar - Mobile */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 lg:hidden bg-[#8B2615] w-[70vw] h-screen p-10 flex flex-col gap-8 shadow-2xl z-9999"
            >
              <div className="mt-10 flex flex-col gap-6">
                {[...navLinks, ...secondaryLinks].map((item, i) => (
                  <motion.div key={item.key} custom={i} variants={linkVariants}>
                    <Link
                      href={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-bold text-white hover:text-[#C9A051] focus:bg-[#C9A051] transition-colors uppercase tracking-tighter"
                    >
                      {t(`navbar.${item.key}`)}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={linkVariants}
                custom={5}
                className="mt-auto pt-8"
              >
                <p className="text-white/70 text-xs uppercase tracking-[0.3em] mb-4">
                  {t("navbar.language")}
                </p>

                <div className="flex items-center gap-6">
                  <button
                    onClick={() => {
                      handleLanguageChange("en");
                      setMenuOpen(false); 
                    }}
                    className={`pb-1 text-sm font-bold uppercase tracking-widest transition-all ${
                      currentLanguage === "en"
                        ? "border-b-2 border-[#C9A051] text-[#C9A051]"
                        : "border-b-2 border-transparent text-white/50 hover:text-white"
                    }`}
                  >
                    EN
                  </button>
                  <div className="h-4 w-px bg-white/20"></div>{" "}
                  <button
                    onClick={() => {
                      handleLanguageChange("id");
                      setMenuOpen(false); 
                    }}
                    className={`pb-1 text-sm font-bold uppercase tracking-widest transition-all ${
                      currentLanguage === "id"
                        ? "border-b-2 border-[#C9A051] text-[#C9A051]"
                        : "border-b-2 border-transparent text-white/50 hover:text-white"
                    }`}
                  >
                    ID
                  </button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
