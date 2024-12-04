import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const ProjectsPageCard = ({
  title,
  text,
  images,
  technologies,
  gitHub,
  width,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images && images.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 1000); 

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [images]);

  return (
    <motion.div
      className="flex flex-col items-center border w-full max-w-5xl border-black bg-primaryColor shadow-2xl p-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-center">
        <h1 className="font-ariataBold text-4xl w-full text-center">{title}</h1>
        <h1 className="font-ariata text-l w-full text-center mt-2">
          {technologies}
        </h1>
        <a
          href={gitHub} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4"
        >
          <FiGithub
            className="text-2xl hover:scale-110 transition-transform duration-300"
            title="View on GitHub"
          />
        </a>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Text Section */}
        <div className="w-full py-6">
          <h2 className="text-sm font-consolas text-left font-thin px-16">
            {text}
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full">
          {images && images.length > 0 && (
            <img
              src={images[currentImageIndex]}
              className={`h-auto ${
                width === "1/2"
                  ? "w-1/2"
                  : width === "3/4"
                  ? "w-3/4"
                  : width === "1/3"
                  ? "w-1/3"
                  : "w-full"
              }`}
              alt={`Project ${currentImageIndex + 1}`}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPageCard;
