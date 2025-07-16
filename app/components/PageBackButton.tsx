"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PageBackButton() {
  const router = useRouter();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: .9 }}
      
      type="button"
      aria-label="Go back to previous page"
      onClick={() => router.back()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-[clamp(1.061rem,3vw,1.326rem)]"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
      Back
    </motion.button>
  );
}
