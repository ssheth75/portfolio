import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";


const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../photos", false, /\.(png|jpe?g|svg)$/));


const seedRandom = (seed) => {
  let m = 0x80000000; // 2^31
  let a = 1103515245;
  let c = 12345;
  let state = seed ? seed % m : Math.floor(Math.random() * m);

  return () => {
    state = (a * state + c) % m;
    return state / (m - 1);
  };
};


const shuffleWithSeed = (array, seed) => {
  const random = seedRandom(seed);
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const Gallery = ({ seed = 999 }) => {
  const [isVisible, setIsVisible] = useState(new Array(images.length).fill(false));


  const shuffledImages = shuffleWithSeed(images, seed);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setIsVisible((prevState) => {
          const newState = [...prevState];
          newState[index] = true; 
          return newState;
        });
        observer.unobserve(entry.target); 
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px 0px 50px 0px", // Trigger when image is within 50px from bottom of the viewport
      threshold: 0.1, // Trigger when 10% of the image is visible
    });

    const imagesElements = document.querySelectorAll(".falling-image");
    imagesElements.forEach((image) => observer.observe(image));

    return () => {
      imagesElements.forEach((image) => observer.unobserve(image)); // Clean up observer
    };
  }, []);

  return (
    <div className="pb-8 px-4 bg-primaryColor">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {shuffledImages.map((src, index) => (
          <img
            key={index}
            src={isVisible[index] ? src : ""} // Load image only when it's visible
            alt={`Image ${index + 1}`}
            className={`falling-image mb-4 w-full rounded-lg shadow-md transition-all duration-1000 transform ${
              isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 0.05}s`, 
              visibility: isVisible[index] ? "visible" : "hidden", 
            }}
            loading="lazy" // Lazy loading for images
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
