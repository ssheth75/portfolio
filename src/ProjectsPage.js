import { useNavigate, useLocation } from "react-router-dom";
import ProjectsPageCard from "./components/ProjectPageCard";
import React, { useState, useEffect } from "react";
import ProtectedComponent from "./components/ProtectedComponent";
import { getPublicImagePath } from "./getImage";

function ProjectsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("personal"); // Default to 'personal'

  useEffect(() => {
    // Check if there's state passed from navigation and set the section
    if (location.state?.section) {
      setActiveSection(location.state.section);
    }
  }, [location.state]);

  return (
    <div className="relative w-full min-h-screen bg-primaryColor text-white flex flex-col items-center">
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
        <div className="mb-20">
          <ProjectsPageCard
            title="ChessAI"
            text="I developed a chess engine in C++, incorporating 
            all core game functionalities and rules. I also implemented a Chess AI adversary powered by a traditional minimax 
            algorithm with alpha-beta pruning, allowing it to play competitively against human players. 
            Check out the repository if you are interested."
            images={[
              getPublicImagePath("chess0.png"),
              getPublicImagePath("chess1.png"),
              getPublicImagePath("chess2.png"),
              getPublicImagePath("chess3.png"),
              getPublicImagePath("chess4.png"),
              getPublicImagePath("chess5.png"),
              getPublicImagePath("chess6.png"),
            ]}
            technologies="C++, Mini-Max, Alpha-Beta Pruning, SFML"
            gitHub="https://github.com/ssheth75/ChessAI"
            width="1/2"
          />
          <ProjectsPageCard
            title="BeTuned (Developing)"
            text="I am currenly developing a React Native mobile app inspired by the popular social 
            media platform BeReal. The app prompts users at random times throughout the 
            day to share their most recently played song, creating a unique and spontaneous way to 
            connect over music. It includes features for interaction with friends and followers, such as liking, 
            commenting, and discovering shared musical interests."
            images={[getPublicImagePath("beTuned.png")]}
            technologies="React Native, Tailwind, Spotify API, Node.js, MongoDB"
            gitHub="https://github.com/ssheth75/beTuned"
            width="1/3"
          />{" "}
          <ProjectsPageCard
            title="Ecommerce Web App"
            text="I developed a full-stack e-commerce web application featuring both client 
            and admin interfaces. The platform enables product listing, management, 
            and secure purchases. I utilized React, Next.js, Tailwind CSS, the Stripe API 
            for payment processing, and MongoDB for data management."
            images={[getPublicImagePath("ecommerce2.png")]}
            technologies="React/Next.js, Tailwind, Stripe API, MongoDB"
            gitHub="https://github.com/ssheth75/e-commerce"
            width="3/4"
          />
          <ProjectsPageCard
            title="Astro POD"
            text="I built a Python script to automate the process of sharing NASA's 
            Astronomy Picture of the Day on Instagram. The script uses BeautifulSoup for 
            web scraping to fetch the daily image along with its metadata and credits, 
            formats the captions to include all necessary details, and posts directly to 
            Instagram through Instabot (@astro_p0d)."
            images={[
              getPublicImagePath("astropod0.PNG"),
              getPublicImagePath("astropod1.PNG"),
              getPublicImagePath("astropod2.PNG"),
              getPublicImagePath("astropod3.PNG"),
            ]}
            technologies="Python, BS4, Web-scraping, Cron"
            gitHub="https://github.com/ssheth75/Astro-POD"
            width="1/3"
          />
          <ProjectsPageCard
            title="This Website"
            text="I made this website using React and Tailwind CSS. Animations done with 
            Framer Motion, and professional projects authentication done with Vercel."
            images={[getPublicImagePath("thisWebsite.png")]}
            technologies="React, Tailwind, Vercel, Framer Motion"
            gitHub="https://github.com/ssheth75/portfolio"
            width="3/4"
          />
          <ProjectsPageCard
            title="2048X"
            text="A web-based adaptation of the popular 2048 mobile game, designed to 
            enhance the classic gameplay experience. This version allows users to 
            customize their grid size, choosing from a variety of dimensions to increase 
            difficulty and add variety. "
            images={[getPublicImagePath("2048.png")]}
            technologies="Javascript, HTML/CSS"
            gitHub="https://github.com/ssheth75/2048X"
            width="3/4"
          />
        </div>
      )}

      {/* Professional Section */}
      {activeSection === "professional" && (
        <div>
          <ProtectedComponent />
          {/* <div className="mb-20">
            <Test
              
            />
          </div> */}
        </div>
      )}
    </div>
  );
}

export default ProjectsPage;
