"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loading({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-industrial-black"
        >
          {/* Grid background */}
          <div className="absolute inset-0 grid-background opacity-20" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/brand/logoe.png"
                alt="Egyptian Co. for Metal Works"
                width={150}
                height={100}
                className="h-auto w-auto"
                priority
              />
            </motion.div>

            {/* Loading spinner */}
            <div className="flex flex-col items-center gap-4">
              <motion.div
                className="h-12 w-12 rounded-full border-4 border-industrial-gray-700 border-t-industrial-red"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm uppercase tracking-wider text-industrial-gray-400"
              >
                Loading...
              </motion.p>
            </div>

            {/* Progress bar */}
            <div className="w-64 h-1 bg-industrial-gray-800 overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-industrial-red"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
