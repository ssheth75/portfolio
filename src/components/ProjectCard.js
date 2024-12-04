import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ githubLink, title, text, image, onClick }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after animation
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`opacity-0 transform translate-y-10 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } max-w-sm h-80 rounded overflow-hidden shadow-lg border-2 border-black text-black font-consolas transform transition-transform duration-300 hover:scale-105 flex flex-col`}
      onClick={onClick}
    >
      {/* Image */}
      <div className="h-1/2 w-full">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt={`${title} image`}
        />
      </div>

      {/* Card Content */}
      <div className="px-6 py-2 flex-grow">
        {/* Title */}
        <div className="font-bold text-xl mb-1">{title}</div>
        {/* Text */}
        <p className="text-black text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
