import React from 'react';

const TextSection = ({ title, content }) => {
  return (
    <div>
      <h2 className="display-4 text-primary">
        <span className="text-white">Our </span>{title}
      </h2>
      <p className="lead text-light">
        {content}
      </p>
    </div>
  );
};

export default TextSection;
