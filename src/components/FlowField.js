import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GradientBackground = () => {
  // Define gradients for each section
const gradients = {
    about: "linear-gradient(135deg, #232323, #232323)", // Section 1
    projects: "linear-gradient(135deg, #ffcf61, #ff7777)", // Section
    photography: "linear-gradient(135deg, #ff4242, #ffc3a0)", // Section 3
  };

  const [currentGradient, setCurrentGradient] = useState(gradients.about);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            setCurrentGradient(gradients[sectionId]);
          }
        });
      },
      {
        threshold: 0.5, // Adjust the threshold as needed
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [gradients]);

  return (
    <motion.div
      initial={false}
      animate={{
        background: currentGradient,
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default GradientBackground;
