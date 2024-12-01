import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ProtectedComponent() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [projectData, setProjectData] = useState(null);

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-71iqtklg7-shirvil-sheths-projects.vercel.app/api/verify-password", // Replace with your Vercel API URL
        { password }
      );
      setProjectData(response.data.content);
      setErrorMessage(""); // Clear any previous error messages
    } catch (error) {
      setErrorMessage("Incorrect password. Please try again.");
      setProjectData(null); // Clear any previous project data
    }
  };

  

  if (projectData) {
    return (
    <motion.div
      className="flex flex-col items-center border w-full max-w-5xl border-black bg-primaryColor shadow-2xl p-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col">
        <h1 className="font-ariataBold text-4xl w-full text-center">{projectData.title}</h1>
        <h1 className="font-ariata text-l w-full text-center mt-2">
          {projectData.technologies}
        </h1>
      </div>

      <div className="flex flex-col items-center w-full">
        {/* Text Section */}
        <div className="w-full py-6">
          <h2 className="text-sm font-consolas text-center font-thin px-16">
            {projectData.text}
          </h2>
        </div>


      </div>
    </motion.div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border border-gray-400 rounded"
      />
      <button
        onClick={handlePasswordSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default ProtectedComponent;
