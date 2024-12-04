import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPublicImagePath } from "../getImage";

const Navbar = ({ dark }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  // Update active section using Intersection Observer
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/home") return;

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

    const observer = new IntersectionObserver(observerCallback, observerOptions);
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
      navigate(path === "home" ? "/" : `/${path}`);
    }
  };

  // Conditionally apply the background class based on the current route
  const navBackground =
    location.pathname === "/" || location.pathname === "/home"
      ? "bg-transparent"
      : "bg-primaryColor";

  // Define navigation items
  const navItems = [
    { label: "Home", path: "home" },
    { label: "Projects", path: "projects" },
    { label: "Photography", path: "photography" },
    { label: "Resume", path: "resume" },
  ];

  return (
    <nav
      className={`font-consolas text-white text-sm py-2 sticky top-0 z-50 transition-colors duration-300 ${navBackground}`}
    >
      <div className="flex justify-end space-x-4 px-6">
        {navItems.map(({ label, path }) => (
          <button
            key={path}
            onClick={() => handleNavigate(path)}
            className={`p-5 text-center py-2 hover:scale-110 transform transition duration-200 ${
              (path === "home" &&
                (location.pathname === "/" || location.pathname === "/home")) ||
              location.pathname === `/${path}`
                ? "font-bold"
                : "opacity-50"
            }`}
          >
            {path === "resume" ? (
              <a
                href={getPublicImagePath("resume.pdf")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
              </a>
            ) : (
              label
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
