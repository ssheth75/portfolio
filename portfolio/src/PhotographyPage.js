import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

function PhotographyPage() {
  const navigate = useNavigate();

  return (
    
    <div className="relative w-screen h-screen">

      <Gallery />
    </div>
  );
}

export default PhotographyPage;
