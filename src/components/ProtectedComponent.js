import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProtectedComponent() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [projectData, setProjectData] = useState(null);

  const handlePasswordSubmit = async () => {
    try {
      const response = await axios.post(
        "https://portfolio-backend-dwzki7o5i-shirvil-sheths-projects.vercel.app/api/verify-password", // Replace with your Vercel API URL
        { password }
      );
      setProjectData(response.data.content);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Incorrect password. Please try again.");
      setProjectData(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handlePasswordSubmit();
    }
  };

  if (projectData) {
    return (
      <div className="mb-10">
        <motion.div
          className="flex flex-col items-center border w-full max-w-5xl border-black bg-primaryColor shadow-2xl p-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col text-center items-center">
            <h2 className="font-ariata pb-2">{projectData.header}</h2>
            <h1 className="font-ariata text-4xl w-full">{projectData.title}</h1>
            <h1 className="font-ariata text-l w-full mt-2">
              {projectData.technologies}
            </h1>{" "}
            <img className="w-11 pt-2" src="intel.png" />
          </div>

          <div className="flex flex-col w-full text-left font-consolas text-sm pt-8">
            {/* Text Section */}
            <h2 className="font-ariata text-xl">{projectData.sections[0]}</h2>
            <hr className="border-white my-2" />
            <h2>{projectData.purpose}</h2>
            <h2 className="font-ariata text-xl mt-2">
              {projectData.sections[1]}
            </h2>
            <hr className="border-white my-2" />
            <h2 className="mb-2">{projectData.ts[0]}</h2>
            <h2>{projectData.ts[1]}</h2>{" "}
            <ul className="list-disc px-10 py-6">
              <li className="my-2">
                {projectData.ts[2]}
                <br></br>
                {projectData.ts[3]}
              </li>
              <li className="my-2">
                {projectData.ts[4]}
                <br></br>
                {projectData.ts[5]}
              </li>
              <li className="my-2">
                {projectData.ts[6]}
                <br></br>
                {projectData.ts[7]}
              </li>
            </ul>
            <h2 className="font-ariata text-xl mt-2">
              {projectData.sections[2]}
            </h2>
            <hr className="border-white my-2" />
            <h2>
              {projectData.adc[0]} <br></br> {projectData.adc[1]}
            </h2>
            <table className="min-w-full border-collapse border border-gray-300 text-sm my-4">
              <thead className="text-base">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[0]}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[1]}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[2]}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[3]}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[4]}
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    {projectData.columns[5]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {projectData.rows.map((row) => (
                  <tr key={row.ID} className="">
                    <td className="border border-gray-300 px-4 py-2">
                      {row.ID}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row["Chipset"]}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row["Connection Type"]}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row["Device Type"]}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row["Manufacturer"]}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {row["User Rating"]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="font-ariata text-xl mt-2">
              {projectData.sections[3]}
            </h2>
            <hr className="border-white my-2" />
            <h2>{projectData.implementation}</h2>
            <h2 className="font-ariata text-base mt-6">
              {projectData.sections[4]}
            </h2>
            <hr className="border-white my-1" />
            <h2>{projectData.win}</h2>
            <div className="py-4">
              <SyntaxHighlighter language="csharp" style={oneDark}>
                {projectData.query}
              </SyntaxHighlighter>
            </div>
            <h2>{projectData.implementations[0]}</h2>
            <h2 className="py-4">{projectData.implementations[1]}</h2>
            <h2 className="py-4">{projectData.implementations[2]}</h2>
            <h2 className="font-ariata text-xl">{projectData.sections[5]}</h2>
            <hr className="border-white my-2" />
            <h2>{projectData.popup[0]}</h2>
            <h2 className="py-4">{projectData.popup[1]}</h2>
            <div className="w-full justify-center flex py-8">
              <img src="intelpopup.png" className="w-2/3"></img>
            </div>
            <h2 className="font-ariata text-xl">{projectData.sections[6]}</h2>
            <hr className="border-white my-2" />
            <h2 className="text-lg">{projectData.discussion[0]}</h2>
            <h2 className="pb-4">{projectData.discussion[1]}</h2>
            <h2 className="text-lg">{projectData.discussion[2]}</h2>
            <ul className="list-disc px-10 py-6">
              <li className="my-2">
                {projectData.discussion[3]} <br></br>
                {projectData.discussion[4]}
              </li>
              <li className="my-2">
                {projectData.discussion[5]} <br></br>
                {projectData.discussion[6]}
              </li>
              <li className="my-2">
                {projectData.discussion[7]}
                <br></br>
                {projectData.discussion[8]}
              </li>
            </ul>
            <h2 className="text-lg">{projectData.discussion[9]}</h2>
            <h2>{projectData.discussion[10]}</h2>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-8 text-black font-ariata h-full">
      <div className="relative flex items-center">
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} // Submit on Enter key
          className="w-full p-2 border rounded pl-4 pr-10" // Space for the icon button
        />
        <button
          onClick={handlePasswordSubmit}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:bg-gray-300 text-black rounded-full p-2 flex items-center justify-center"
        >
          <FaRegArrowAltCircleRight />
        </button>
      </div>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>
  );
}

export default ProtectedComponent;
