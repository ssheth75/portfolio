import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";

function PhotographyPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-primaryColor">
      {/* Add padding to ensure no overlap with the sticky Navbar */}
      <main className="pt-16">
        <Gallery />
      </main>
    </div>
  );
}

export default PhotographyPage;
