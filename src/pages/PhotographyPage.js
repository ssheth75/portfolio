import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import GradientBackground from "../components/FlowField";
import { getPublicImagePath } from "../getImage";

function PhotographyPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen bg-primaryColor pt-[140px]">
      {/* Add padding to ensure no overlap with the sticky Navbar */}

      <section className="mx-40 min-h-screen text-xl">
        <div className="flex h-1/2 mb-16 items-center justify-center gap-32">
          <h1 className="font-ariata text-lg text-white">
            Photography is my favorite creative outlet. Primarily film and
            landscape photos.
            Here are some of my favorites.
            <br></br>
               <br></br>

            <h1 className="text-sm font-consolas">
              Pentax Espio 80 | Canon Sureshot Telemax
            </h1>
          </h1>
        </div>
        <Gallery />
      </section>

      <div className=""></div>
    </div>
  );
}

export default PhotographyPage;
