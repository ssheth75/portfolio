import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ dark }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");



  // Update active section using Intersection Observer
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Section is active if 60% is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect(); // Cleanup observer
  }, [location.pathname]);

  const handleNavigate = (section) => {
    if (location.pathname !== "/") {
      navigate(`/#${section}`);
      setTimeout(() => {
        const target = document.getElementById(section);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    } else {
      const target = document.getElementById(section);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="font-consolas text-white text-sm py-2 sticky top-0 z-50 ">
      <div className="flex justify-end space-x-4 px-6">
        <button
          onClick={() => handleNavigate("about")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            activeSection === "about"
              ? "bg-primaryColor font-bold text-white"
              : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => handleNavigate("projects")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            activeSection === "projects"
              ? "bg-primaryColor font-bold text-white"
              : ""
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavigate("photography")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            activeSection === "photography"
              ? "bg-primaryColor font-bold text-white"
              : ""
          }`}
        >
          Photography
        </button>
        <button
          
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            activeSection === "resume"
              ? "bg-primaryColor font-bold text-white"
              : ""
          }`}
        >
          <a href="resume.pdf" target="_blank">Resume</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
