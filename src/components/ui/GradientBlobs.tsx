"use client";

import { motion } from "framer-motion";

export function GradientBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(99, 102, 241, 0.5) 0%, rgba(99, 102, 241, 0) 70%)",
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
        animate={{
          x: ["50vw", "30vw", "60vw", "50vw"],
          y: ["-10vh", "20vh", "5vh", "-10vh"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(20, 184, 166, 0.45) 0%, rgba(20, 184, 166, 0) 70%)",
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
        animate={{
          x: ["10vw", "40vw", "20vw", "10vw"],
          y: ["30vh", "50vh", "70vh", "30vh"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(236, 72, 153, 0) 70%)",
          willChange: "transform",
          transformStyle: "preserve-3d",
        }}
        animate={{
          x: ["70vw", "50vw", "30vw", "70vw"],
          y: ["60vh", "20vh", "40vh", "60vh"],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
