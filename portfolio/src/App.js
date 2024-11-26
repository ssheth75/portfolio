import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import PhotographyPage from "./PhotographyPage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./ProjectsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/PhotographyPage" element={<PhotographyPage />} />
        <Route path="/ProjectsPage" element={<ProjectsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
