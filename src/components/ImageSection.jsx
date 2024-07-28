import React from 'react';

const ImageSection = ({ imageSrc, altText }) => {
  return (
    <div className="d-flex justify-content-center">
      <img
        loading="lazy"
        src={imageSrc}
        alt={altText}
        className="img-fluid rounded border border-light shadow-sm"
        style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} // Set a maximum height
      />
    </div>
  );
};

export default ImageSection;
