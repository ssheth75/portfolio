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

  // Handle navigation when a user clicks on the nav bar links
  const handleNavigate = (path) => {
    if (path === "resume") {
      // Open the resume PDF in a new tab
      window.open("resume.pdf", "_blank");
    } else {
      // Navigate to the respective page
      navigate(`/${path}`);
    }
  };

  // Conditionally apply the background class based on the current route
  const navBackground =
    location.pathname === "/home" ? "bg-transparent" : "bg-primaryColor";

  return (
    <nav className={`font-consolas text-white text-sm py-2 sticky top-0 z-50 ${navBackground}`}>
      <div className="flex justify-end space-x-4 px-6">
        <button
          onClick={() => handleNavigate("home")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            location.pathname === "/home" ? "font-bold" : "opacity-50"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => handleNavigate("projects")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            location.pathname === "/projects" ? "font-bold" : "opacity-50"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => handleNavigate("photography")}
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            location.pathname === "/photography" ? "font-bold" : "opacity-50"
          }`}
        >
          Photography
        </button>
        <button
          className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
            location.pathname === "/resume" ? "font-bold" : "opacity-50"
          }`}
        >
          <a href="resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
