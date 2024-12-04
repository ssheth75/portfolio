import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./HomePage";
import PhotographyPage from "./PhotographyPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./ProjectsPage";

// Helper function to preload images
const preloadImages = (imagePaths) => {
  imagePaths.forEach((path) => {
    const img = new Image();
    img.src = path;
  });
};

const importAll = (r) => r.keys().map(r);
const photographyImages = importAll(require.context("./photos", false, /\.(png|jpe?g|svg)$/));

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    // Preload photography images on app load
    preloadImages(photographyImages);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
