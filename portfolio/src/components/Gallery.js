import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

// Dynamically load all images from the photos directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../photos", false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(new Array(images.length).fill(false));

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setIsVisible((prevState) => {
          const newState = [...prevState];
          newState[index] = true; // Mark the image as visible
          return newState;
        });
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,  // Observe relative to the viewport
      rootMargin: "0px 0px 50px 0px",  // Trigger when image is within 50px from bottom of the viewport
      threshold: 0.1,  // Trigger when 10% of the image is visible
    });

    const imagesElements = document.querySelectorAll(".falling-image");
    imagesElements.forEach((image) => observer.observe(image));

    return () => {
      imagesElements.forEach((image) => observer.unobserve(image)); // Clean up observer
    };
  }, []);

  return (
    <div className="pb-8 px-4 bg-primaryColor">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={isVisible[index] ? src : ''}  // Load image only when it's visible
            alt={`Image ${index + 1}`}
            className={`falling-image mb-4 w-full rounded-lg shadow-md transition-all duration-1000 transform ${
              isVisible[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{
              transitionDelay: `${index * 0.1}s`,  // Staggered delay for animation
              visibility: isVisible[index] ? "visible" : "hidden",  // Ensure invisible images don't affect layout
            }}
            loading="lazy"  // Lazy loading for images
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
