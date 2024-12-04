import React from "react";
import { useNavigate } from "react-router-dom";
import GradientBackground from "./components/FlowField";
import ProjectCard from "./components/ProjectCard";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { getPublicImagePath } from "./getImage";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen min-h-screen">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Main Content */}
      <main className="relative pt-16 text-white">
        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex flex-col items-center px-6"
        >
          <div className="flex flex-col lg:flex-row text-black text-lg lg:text-3xl py-10 px-6 lg:px-12 mt-20 text-white rounded-lg border-black mx-auto">
            {/* Text Section */}
            <div className="w-full px-4">
              <h1 className="font-ariata text-3xl lg:text-8xl pb-4">
                Hello, I'm Shirvil.
              </h1>
              <h1 className="font-ariata text-3xl lg:text-5xl pt-4">
                I'm a Software Engineer.
              </h1>
              <h2 className="text-sm lg:text-base font-consolas pt-6 font-thin pb-4">
                I am a student at the University of Michigan. <br />I am
                studying Computer Science and Business.
              </h2>
              <h2 className="text-sm lg:text-base font-consolas font-thin pb-4">
                I like to build cool stuff and take photographs.
              </h2>
              <h2 className="text-sm lg:text-base font-consolas font-thin">
                This website has some of that.
              </h2>
              <div className="flex mt-4">
                <a
                  href="https://www.linkedin.com/in/shirvilsheth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <PiLinkedinLogo className="w-6 mr-2" />
                  </button>
                </a>
                <a href="mailto:shirvil@umich.edu">
                  <button>
                    <AiOutlineMail className="w-6 mr-2" />
                  </button>
                </a>
                <a
                  href="https://github.com/ssheth75"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <FiGithub className="w-6 mr-2" />
                  </button>
                </a>
                <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button>
                    <CgFileDocument className="w-6 mr-2" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen pt-10 flex flex-col items-center px-6"
        >
          <h2 className="text-center text-black font-ariata text-5xl lg:text-8xl pb-10">
            Projects
          </h2>
          <div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-5xl"
            onClick={() => navigate("/projects", { replace: true })}
          >
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`ChessAI`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("chess.jpg")}
            />
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`BeTuned`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("spotify.png")}
            />
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`E-commerce`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("ecommerce.png")}
            />
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`AstroPOD`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("astropod.jpg")}
            />
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`2048X`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("2048.png")}
            />
            <ProjectCard
              githubLink="https://github.com/your-repo"
              title={`Professional Projects`}
              text="This is a description of my cool project. It does amazing things!"
              image={getPublicImagePath("professional.png")}
            />
          </div>
        </section>

        {/* Photography Section */}
        <section
          id="photography"
          className="min-h-screen mt-20 flex flex-col text-black items-center px-6"
        >
          <h2 className="text-center text-black font-ariata text-5xl lg:text-8xl">
            Photography
          </h2>
          <div className="flex flex-col items-center w-full max-w-5xl border-4 border-black rounded-lg shadow-lg p-8 mt-20">
            {/* Centered Header */}
            <h1 className="font-ariata pl-12 pt-12 text-4xl pb-8 w-full">
              Check out my photos.
            </h1>

            {/* Content Section */}
            <div className="flex flex-col lg:flex-row w-full">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 pr-4 p-12">
                <h2 className="text-sm font-consolas font-thin pb-4">
                  Photography is my favorite form of creative expression.
                </h2>
                <h2 className="text-sm font-consolas font-thin pb-4">
                  Primarily film and landscape photos.
                </h2>
                <h2 className="text-sm font-consolas font-thin">
                  Here are some of my favorites.
                </h2>
              </div>

              {/* Image Section */}
              <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0">
                <img
                  src={getPublicImagePath("photography.jpg")}
                  className="w-3/4 h-auto border-2 border-black"
                  alt="About Me"
                />
              </div>
            </div>

            {/* Centered Black Square */}
            <div className="flex justify-center mt-8">
              <div className="group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.0"
                  stroke="currentColor"
                  className="size-12 transform transition-transform duration-200 group-hover:scale-110"
                  onClick={() => navigate("/photography")}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        {/* <footer className="font-ariata bg-primaryColor text-white h-16 flex justify-center items-center">
          © Shirvil Sheth 2024
        </footer> */}
      </main>
    </div>
  );
}

export default HomePage;
