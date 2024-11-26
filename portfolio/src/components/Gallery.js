import React from "react";

// Dynamically load all images from the photos directory
const importAll = (r) => r.keys().map(r);
const images = importAll(require.context("../photos", false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
  return (
    <div className="py-8 px-4 bg-primaryColor">
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="mb-4 w-full rounded-lg shadow-md "
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
