import { useNavigate } from "react-router-dom";
import ProjectsPageCard from "./components/ProjectPageCard";
import React, { useState } from "react";
import { FaSpotify } from "react-icons/fa";

function ProjectsPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("personal"); // Default to 'personal'

  return (
    <div className="relative w-screen bg-primaryColor text-white flex flex-col items-center">
      <h2 className="text-center font-ariata text-xl lg:text-3xl p-16 ">
        Here's some things I've built.
      </h2>

      <div>
        <button
          className={`min-w-32 h-12 ${
            activeSection === "personal"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } border rounded-l-md border-white font-ariata`}
          onClick={() => setActiveSection("personal")}
        >
          Personal
        </button>
        <button
          className={`min-w-32 h-12 ${
            activeSection === "professional"
              ? "bg-white text-black"
              : "bg-transparent text-white"
          } border rounded-r-md border-white font-ariata`}
          onClick={() => setActiveSection("professional")}
        >
          Professional
        </button>
      </div>

      {/* Personal Section */}
      {activeSection === "personal" && (
        <div>
          <ProjectsPageCard
            title="ChessAI"
            text="I developed a chess engine from scratch in C++, incorporating 
            all core game functionalities and rules. I also implemented a Chess AI adversary powered by a traditional minimax 
            algorithm with alpha-beta pruning, allowing it to play competitively against human players. 
            Check out the repository if you are interested."
            image="spotify.png"
            technologies="Mini-Max, Alpha-Beta Pruning, C++, SFML"
          />
          <ProjectsPageCard />
          <ProjectsPageCard />
          <ProjectsPageCard />
        </div>
      )}

      {/* Professional Section */}
      {activeSection === "professional" && (
        <div>
          <ProjectsPageCard />
          <ProjectsPageCard />
          <ProjectsPageCard />
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
