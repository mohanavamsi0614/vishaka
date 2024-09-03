import { useState } from 'react';

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
      {images.map((image, index) => (
        <div 
          key={index} 
          className={`overflow-hidden rounded-lg shadow-md transition-all duration-300 ease-in-out
            ${index % 5 === 0 ? 'col-span-2 row-span-2' : ''}
            ${index % 7 === 0 ? 'col-span-2' : ''}
            ${index % 11 === 0 ? 'row-span-2' : ''}
          `}
        >
          <img 
            src={image.src} 
            alt={image.alt || `Image ${index + 1}`} 
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
          {index % 3 === 0 && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-sm font-bold">{image.title || `Image ${index + 1}`}</h3>
              <p className="text-xs">{image.description || 'Image description'}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
