import React from "react";
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { IoCode } from "react-icons/io5";

const ProjectsPageCard = ({ title, text, image, technologies, gitHub }) => {
  return (
    <motion.div
      className="flex flex-col items-center w-full max-w-5xl border-black border rounded-lg bg-lack shadow-2xl p-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flexflex-col">
        <h1 className="font-ariataBold text-4xl w-full text-center">{title}</h1>
        <h1 className="font-ariata text-l w-full text-center mt-2">{technologies}</h1>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Text Section */}
        <div className="w-full py-6">
          <h2 className="text-sm font-consolas text-center font-thin px-16">
            {text}
          </h2>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full ">
          <img
            src={image}
            className="w-3/4 h-auto border-2 border-black"
            alt="About Me"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectsPageCard;
