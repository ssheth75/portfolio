import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const ProjectsPageCard = ({
  title,
  text,
  assets, // Array of objects { type: 'image' | 'video', src: string }
  technologies,
  gitHub,
  width,
}) => {
  const [currentAssetIndex, setCurrentAssetIndex] = useState(0);

  useEffect(() => {
    if (assets && assets.length > 0) {
      const interval = setInterval(() => {
        setCurrentAssetIndex((prevIndex) => (prevIndex + 1) % assets.length);
      }, 2000); // Change asset every second

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [assets]);

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

        {/* Media Section */}
        <div className="flex items-center justify-center w-full">
          {assets && assets.length > 0 && (
            <>
              {assets[currentAssetIndex].type === "image" ? (
                <img
                  src={assets[currentAssetIndex].src}
                  className={`h-auto ${
                    width === "1/2"
                      ? "w-1/2"
                      : width === "3/4"
                      ? "w-3/4"
                      : width === "1/3"
                      ? "w-1/3"
                      : "w-full"
                  }`}
                  alt={`Project ${currentAssetIndex + 1}`}
                />
              ) : (
                <video
                  src={assets[currentAssetIndex].src}
                  className="w-3/4 h-auto" // Example: 75% width of the container
                  controls
                  autoPlay
                  loop
                  muted
                />
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPageCard;
